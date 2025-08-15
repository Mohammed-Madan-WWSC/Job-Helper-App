import React, { useState, useEffect } from 'react';
import { ChevronLeft, Loader2, FileText } from 'lucide-react';
import TP from './TopHeader';
import logo from '../logo.png';
import { jsPDF } from 'jspdf';
import logoDocument from '../logodocument.png';

const ChatGPTRecommendations = ({ selectedJobs, onBack, subjectInfo, assessmentData }) => {
  const [loading, setLoading] = useState(false);
  const [recommendations, setRecommendations] = useState('');
  const [error, setError] = useState('');
  const [generatingPDF, setGeneratingPDF] = useState(false);
  const [selectedRecommendations, setSelectedRecommendations] = useState([]);

  const getLocationText = (locationValue) => {
    if (locationValue <= 25) return "City-Center";
    if (locationValue <= 50) return "Semi-Urban";
    if (locationValue <= 75) return "Somewhat-Rural";
    if (locationValue <= 100) return "Very-Rural-Village";
    return "City-Center";
  };

  const toggleRecommendation = (jobTitle) => {
    setSelectedRecommendations(prev => {
      if (prev.includes(jobTitle)) {
        return prev.filter(job => job !== jobTitle);
      } else {
        return [...prev, jobTitle];
      }
    });
  };

  const fetchRecommendations = async () => {
    setLoading(true);
    setError('');
    
    try {
      const response = await fetch('/api/chatgpt', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          childInfo: subjectInfo,
          assessmentData: assessmentData,
          selectedJobs: selectedJobs,
          location: getLocationText(assessmentData.location)
        }),
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Server error: ${response.status} - ${errorText}`);
      }

      const responseText = await response.text();
      if (!responseText) {
        throw new Error('Empty response from server');
      }

      let data;
      try {
        data = JSON.parse(responseText);
      } catch (parseError) {
        throw new Error(`Invalid response format: ${responseText.substring(0, 100)}`);
      }

      setRecommendations(data.suggestions);
    } catch (err) {
      console.error('Error fetching recommendations:', err);
      setError(err.message || 'Failed to get recommendations. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const generatePDF = async () => {
    setGeneratingPDF(true);
    
    try {
      const doc = new jsPDF();
      const w = doc.internal.pageSize.width;
      const h = doc.internal.pageSize.height;
      const m = 15;
      let y = 15;

      const titleY = y + 5;
      
      // Title
      doc.setFontSize(22);
      doc.setFont(undefined, 'bold');
      doc.setTextColor(41, 128, 185);
      doc.text('Career Ideas', w / 2, titleY, { align: 'center' });

      // Logo
      try {
        const img = new Image();
        img.crossOrigin = 'anonymous';
        
        await new Promise((resolve, reject) => {
          img.onload = () => {
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');
            canvas.width = img.width;
            canvas.height = img.height;
            
            ctx.globalAlpha = 0.8;
            ctx.drawImage(img, 0, 0);
            
            try {
              const dataURL = canvas.toDataURL('image/png');
              const logoW = 20;
              const logoH = 20;
              doc.addImage(dataURL, 'PNG', w - m - logoW, titleY - 8, logoW, logoH);
              resolve();
            } catch (error) {
              console.warn('Could not add logo to PDF:', error);
              resolve();
            }
          };
          img.onerror = () => {
            console.warn('Could not load logo for PDF');
            resolve();
          };
          img.src = logoDocument;
        });
      } catch (error) {
        console.warn('Logo loading failed:', error);
      }

      y += 12;

      // Date
      const today = new Date();
      const dateStr = today.toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
      });
      doc.setFontSize(12);
      doc.setFont(undefined, 'normal');
      doc.setTextColor(0, 0, 0);
      doc.text(`Date: ${dateStr}`, w / 2, y, { align: 'center' });
      y += 10;

      // Child Information Box
      const boxH = 35;
      doc.setFillColor(255, 245, 200);
      doc.roundedRect(m, y, w - (m * 2), boxH, 3, 3, 'F');
      doc.setDrawColor(255, 193, 7);
      doc.setLineWidth(1);
      doc.roundedRect(m, y, w - (m * 2), boxH, 3, 3);
      
      doc.setFontSize(11);
      doc.setTextColor(51, 51, 51);
      
      doc.setFont(undefined, 'bold');
      doc.text(`Child Name: ${subjectInfo.name}`, m + 5, y + 7);
      
      doc.setFont(undefined, 'normal');
      doc.text(`Age: ${subjectInfo.age}`, m + 5, y + 13);
      doc.text(`Gender: ${subjectInfo.gender.charAt(0).toUpperCase() + subjectInfo.gender.slice(1)}`, m + 5, y + 19);
      doc.text(`Caseworker: ${subjectInfo.caseworkerName}`, m + 5, y + 25);
      doc.text(`Location: ${getLocationText(assessmentData.location)}`, m + 5, y + 31);
      
      y += boxH + 8;

      // Selected Jobs Section
      if (selectedJobs && selectedJobs.length > 0) {
        const jobsH = 8 + (selectedJobs.length * 6) + 6;
        doc.setFillColor(255, 220, 200);
        doc.roundedRect(m, y, w - (m * 2), jobsH, 3, 3, 'F');
        doc.setDrawColor(255, 87, 34);
        doc.roundedRect(m, y, w - (m * 2), jobsH, 3, 3);
        
        doc.setFontSize(11);
        doc.setFont(undefined, 'bold');
        doc.setTextColor(51, 51, 51);
        doc.text('Top 3 Selected Jobs:', m + 5, y + 8);
        
        doc.setFont(undefined, 'normal');
        let jobsY = y + 16;
        selectedJobs.forEach((job, idx) => {
          doc.text(`${idx + 1}. ${job.job.job}`, m + 7, jobsY);
          jobsY += 6;
        });
        
        y += jobsH + 8;
      }

      // Selected Additional Recommendations Section
      if (selectedRecommendations && selectedRecommendations.length > 0) {
        // Check if we need a new page for the recommendations section
        if (y + 30 > h - 20) {
          doc.addPage();
          y = 20;
        }
        
        const recommendationsH = 8 + (selectedRecommendations.length * 6) + 6;
        doc.setFillColor(200, 230, 255);
        doc.roundedRect(m, y, w - (m * 2), recommendationsH, 3, 3, 'F');
        doc.setDrawColor(70, 130, 180);
        doc.setLineWidth(1);
        doc.roundedRect(m, y, w - (m * 2), recommendationsH, 3, 3);
        
        doc.setFontSize(11);
        doc.setFont(undefined, 'bold');
        doc.setTextColor(51, 51, 51);
        doc.text('Additional Selected Job Ideas:', m + 5, y + 8);
        
        doc.setFont(undefined, 'normal');
        let recommendationsY = y + 16;
        selectedRecommendations.forEach((job, idx) => {
          doc.text(`${idx + 1}. ${job}`, m + 7, recommendationsY);
          recommendationsY += 6;
        });
        
        y += recommendationsH + 8;
      }

      // Footer
      doc.setFontSize(11);
      doc.setFont(undefined, 'normal');
      doc.setTextColor(255, 165, 0);
      doc.text('Working-With-Street-Children Global Learning Community', w / 2, h - 8, { align: 'center' });

      // Save the PDF (auto-download)
      doc.save(`${subjectInfo.name}-career-ideas.pdf`);
      
    } catch (err) {
      console.error('Error generating PDF:', err);
      alert('Failed to generate PDF. Please try again.');
    } finally {
      setGeneratingPDF(false);
    }
  };

  useEffect(() => {
    fetchRecommendations();
  }, []);

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-50 via-orange-50 to-red-100">
      <TP 
        logo={logo}
        title="More Job Ideas"
      />
      
      <main className="max-w-4xl mx-auto px-4 py-8 pb-24">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-orange-600 mb-4">More Job Ideas</h1>
          </div>

          {/* Display selected jobs */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-orange-600 mb-4">Your Top 3 Selected Jobs:</h2>
            <div className="grid gap-3">
              {selectedJobs.map((sj, idx) => (
                <div 
                  key={idx} 
                  className="border rounded-lg p-3 bg-orange-100 border-orange-300"
                >
                  <span className="text-gray-800 font-medium">{idx + 1}. {sj.job.job}</span>
                </div>
              ))}
            </div>
          </div>

          {/* AI Recommendations Section */}
          <div className="border-t pt-8">
            
            {loading && (
              <div className="flex items-center justify-center py-12">
                <Loader2 className="animate-spin h-8 w-8 text-blue-600 mr-3" />
                <span className="text-lg text-gray-600">Getting personalized recommendations...</span>
              </div>
            )}

            {error && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-6">
                <div className="flex items-center mb-2">
                  <span className="text-red-600 font-semibold">Error:</span>
                </div>
                <p className="text-red-700">{error}</p>
                <button
                  onClick={fetchRecommendations}
                  className="mt-4 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors"
                >
                  Try Again
                </button>
              </div>
            )}

            {recommendations && !loading && (
              <div>
                <h2 className="text-xl font-semibold text-orange-600 mb-4">
                  Here are a few more tailored job suggestions -- feel free to select whatever you like, and we will add it to your Ideas List.
                </h2>
                <div className="grid gap-3">
                  {recommendations.split('\n').filter(line => line.trim()).map((job, idx) => {
                    const cleanJob = job.replace(/^\d+\.\s*/, '').trim();
                    const isSelected = selectedRecommendations.includes(cleanJob);
                    return cleanJob ? (
                      <div 
                        key={idx} 
                        className={`border rounded-lg p-3 cursor-pointer transition-colors flex items-center gap-3 ${
                          isSelected 
                            ? 'bg-orange-200 border-orange-400' 
                            : 'bg-orange-100 border-orange-300 hover:bg-orange-200'
                        }`}
                        onClick={() => toggleRecommendation(cleanJob)}
                      >
                        <input
                          type="checkbox"
                          checked={isSelected}
                          onChange={() => toggleRecommendation(cleanJob)}
                          className="w-4 h-4 text-orange-600 bg-gray-100 border-gray-300 rounded focus:ring-orange-500 focus:ring-2"
                        />
                        <span className="text-gray-800 font-medium flex-1">{cleanJob}</span>
                      </div>
                    ) : null;
                  })}
                </div>
              </div>
            )}
          </div>
        </div>
      </main>

      <footer className="fixed bottom-0 left-0 right-0 bg-white/80 backdrop-blur-lg border-t border-gray-200 shadow-xl">
        <div className="max-w-4xl mx-auto px-3 sm:px-6 py-3 sm:py-4 flex justify-between items-center">
          <button
            onClick={onBack}
            className="flex items-center gap-1 sm:gap-2 bg-gray-100 text-gray-700 px-3 sm:px-6 py-2.5 sm:py-3 rounded-xl hover:bg-gray-200 transition-all duration-200 text-sm sm:text-base font-medium min-w-[80px] sm:min-w-[100px] justify-center"
          >
            <ChevronLeft size={16} className="sm:w-[18px] sm:h-[18px]" />
            Back
          </button>

          <button
            onClick={generatePDF}
            disabled={generatingPDF || loading || !recommendations}
            className="flex items-center gap-1 sm:gap-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-3 sm:px-6 py-2.5 sm:py-3 rounded-xl hover:from-orange-600 hover:to-orange-700 transition-all duration-200 text-sm sm:text-base font-medium shadow-lg hover:shadow-xl transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
          >
            {generatingPDF ? (
              <Loader2 className="animate-spin w-4 h-4" />
            ) : (
              <FileText size={16} className="sm:w-[18px] sm:h-[18px]" />
            )}
            {generatingPDF ? 'Generating...' : 'Get Report...'}
          </button>
        </div>
      </footer>
    </div>
  );
};

export default ChatGPTRecommendations;