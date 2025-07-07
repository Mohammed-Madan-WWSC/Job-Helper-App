import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import C from './CriterionCard';
import D from './Done';
import B from './Banner';
import TP from './TopHeader';
import N from './Nav';
import { SCREEN_CONFIG, THRESHOLDS, INITIAL_DATA } from '../utils/d';
import logo from '../logo.png';

const S = ({ 
  assessmentData, 
  setAssessmentData, 
  onShowResults, 
  currentScreen, 
  setCurrentScreen,
  subjectInfo
}) => {
  const [scc, setScc] = useState(false);
  const [isa, setIsa] = useState(false);
  const [ic, setIc] = useState(new Set());

  // Create a flattened list of all criteria
  const getAllCriteria = () => {
    const allCriteria = [];
    SCREEN_CONFIG.forEach((screen) => {
      screen.criteria.forEach((criterion) => {
        allCriteria.push({
          ...criterion,
          screenTitle: screen.title
        });
      });
    });
    return allCriteria;
  };

  const allCriteria = getAllCriteria();
  const totalCriteria = allCriteria.length;
  const totalPages = totalCriteria + 1; // Add one extra page for the Done component
  const currentCriterion = allCriteria[currentScreen];
  const isLastCriterion = currentScreen === totalCriteria - 1;
  const isDonePage = currentScreen === totalCriteria; // The page after all criteria

  const hcbi = (k) => {
    return ic.has(k);
  };

  const icc = (k, val) => {
    if (k === 'location') {
      return val > 0;
    } else {
      return val !== 50;
    }
  };

  const canContinue = () => {
    if (isDonePage) return true; // Always can continue from done page
    if (!currentCriterion) return false;
    const key = currentCriterion.key;
    return hcbi(key) || icc(key, assessmentData[key]);
  };

  const hdlSliderChg = (k, val) => {
    setAssessmentData((prev) => ({ ...prev, [k]: val }));
    setIc(prev => new Set(prev.add(k)));
  };

  const hdlSliderMD = () => {
    if (isLastCriterion) {
      setIsa(true);
    }
  };

  const hdlSliderMU = () => {
    if (isLastCriterion) {
      setScc(true);
    }
    setIsa(false);
  };

  useEffect(() => {
    if (isLastCriterion) {
      setScc(true);
    }
    setIsa(false);
  }, [currentScreen, assessmentData, isLastCriterion]);

  const cc = isDonePage 
    ? true // Always can continue from done page (to show results)
    : isLastCriterion 
      ? (canContinue() && scc)
      : canContinue();

  const hdlNext = () => {
    if (currentScreen < totalPages - 1) {
      setCurrentScreen(currentScreen + 1);
    } else {
      onShowResults(assessmentData);
    }
  };

  const hdlBack = () => {
    if (currentScreen > 0) {
      setCurrentScreen(currentScreen - 1);
    }
  };

  // Handle the Done page separately
  if (isDonePage) {
    return (
      <div className="min-h-screen w-full bg-gradient-to-br from-slate-50 via-orange-50 to-red-100 overflow-x-hidden">
        <TP 
          logo={logo}
          title="Youth Job Options Helper"
        />

        <main className="pb-20 px-4 pt-6">
          <B title="Assessment Complete!" />

          <div className="max-w-2xl mx-auto">
            <D 
              index={0} 
              shouldShow={true}
            />
          </div>
        </main>

        <N
          currentScreen={currentScreen}
          totalScreens={totalPages}
          canContinue={cc}
          isLastScreen={true}
          onBack={hdlBack}
          onNext={hdlNext}
          backDisabled={false}
        />
      </div>
    );
  }

  if (!currentCriterion) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-50 via-orange-50 to-red-100 overflow-x-hidden">
      <style jsx>{`
        input[type="range"] {
          -webkit-appearance: none !important;
          appearance: none !important;
          outline: none !important;
          border: none !important;
          box-shadow: none !important;
          background: transparent !important;
        }
        input[type="range"]:focus {
          outline: none !important;
          box-shadow: none !important;
          border: none !important;
        }
        input[type="range"]:focus-visible {
          outline: none !important;
          box-shadow: none !important;
        }
        input[type="range"]::-webkit-slider-thumb {
          -webkit-appearance: none !important;
          width: 18px !important;
          height: 18px !important;
          background: #6b7280 !important;
          border: 2px solid white !important;
          border-radius: 50% !important;
          box-shadow: 0 0 3px rgba(0, 0, 0, 0.3) !important;
          margin-top: -7px !important;
          cursor: pointer !important;
          transition: background-color 0.3s ease !important;
          outline: none !important;
        }
        input[type="range"]::-webkit-slider-thumb:focus {
          outline: none !important;
          box-shadow: 0 0 3px rgba(0, 0, 0, 0.3) !important;
          border: 2px solid white !important;
          background: #6b7280 !important;
        }
        input[type="range"]::-webkit-slider-thumb:focus-visible {
          outline: none !important;
          box-shadow: 0 0 3px rgba(0, 0, 0, 0.3) !important;
          background: #6b7280 !important;
        }
        input[type="range"]::-webkit-slider-thumb:hover {
          background-color: #4b5563 !important;
        }
        input[type="range"]::-webkit-slider-runnable-track {
          height: 6px !important;
          border-radius: 9999px !important;
          background: #d1d5db !important;
        }
        input[type="range"]::-moz-range-thumb {
          width: 18px !important;
          height: 18px !important;
          background: #6b7280 !important;
          border: 2px solid white !important;
          border-radius: 50% !important;
          box-shadow: 0 0 3px rgba(0, 0, 0, 0.3) !important;
          cursor: pointer !important;
          transition: background-color 0.3s ease !important;
          outline: none !important;
        }
        input[type="range"]::-moz-range-thumb:focus {
          outline: none !important;
          box-shadow: 0 0 3px rgba(0, 0, 0, 0.3) !important;
          border: 2px solid white !important;
          background: #6b7280 !important;
        }
        input[type="range"]::-moz-range-thumb:hover {
          background-color: #4b5563 !important;
        }
        input[type="range"]::-moz-range-track {
          height: 6px !important;
          border-radius: 9999px !important;
          background: #d1d5db !important;
        }
      `}</style>

      <TP 
        logo={logo}
        title="Youth Job Options Helper"
      />

      <main className="pb-20 px-4 pt-6">
        <B title={currentCriterion.cardTitle || currentCriterion.screenTitle} />

        <div className="max-w-2xl mx-auto">
          <div className="w-full">
            <C
              criterion={currentCriterion}
              value={assessmentData[currentCriterion.key]}
              threshold={THRESHOLDS[currentCriterion.key]}
              onChange={(val) => hdlSliderChg(currentCriterion.key, val)}
              index={0}
              globalIndex={currentScreen}
              onSliderMouseDown={hdlSliderMD}
              onSliderMouseUp={hdlSliderMU}
            />
          </div>
        </div>
      </main>

      <N
        currentScreen={currentScreen}
        totalScreens={totalPages}
        canContinue={cc}
        isLastScreen={false}
        onBack={hdlBack}
        onNext={hdlNext}
        backDisabled={currentScreen === 0}
      />
    </div>
  );
};

export default S; 