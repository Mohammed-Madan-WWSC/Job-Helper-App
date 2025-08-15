export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { 
      childInfo, 
      assessmentData, 
      selectedJobs, 
      location 
    } = req.body;

    if (!childInfo || !assessmentData || !selectedJobs) {
      return res.status(400).json({ error: 'Missing required data' });
    }

    const prompt = createPrompt(childInfo, assessmentData, selectedJobs, location);

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages: [
          {
            role: 'system',
            content: 'You are a career counselor specializing in helping street children and disadvantaged youth find suitable employment opportunities.'
          },
          {
            role: 'user',
            content: prompt
          }
        ],
        max_tokens: 1000,
        temperature: 0.7,
      }),
    });

    if (!response.ok) {
      throw new Error(`OpenAI API error: ${response.status}`);
    }

    const data = await response.json();
    const suggestions = data.choices[0].message.content;

    return res.status(200).json({ 
      success: true, 
      suggestions: suggestions,
      prompt: prompt
    });

  } catch (error) {
    console.error('ChatGPT API Error:', error);
    return res.status(500).json({ 
      error: 'Failed to get job suggestions',
      details: error.message 
    });
  }
}

function createPrompt(childInfo, assessmentData, selectedJobs, location) {
  const genderPreference = getGenderPreferenceText(assessmentData.genderPreference);
  const locationText = getLocationText(location || assessmentData.location);
  const preferences = formatAssessmentData(assessmentData);
  const selectedJobsList = selectedJobs.map(job => job.job.job).join(', ');
  
  // List of all jobs from our assessment system that should be excluded
  const existingJobs = [
    "Hairdresser / Barber", "Sell Vegetables/Fruits", "Drawing, Painting, Arts & Designs (incl Signboards)",
    "Construction Work / Building / Plastering / Painting / Masonry etc", "Solar power installation and maintenance",
    "Carpentry", "Machine Motor Rewinding / Electric Motor Repair", "Mobile Phone Repair", "Professional Cleaner",
    "High-Value Livestock Keeping / Animal Husbandry (for example, pigs)", "Welding & Gas Welding", "Embroidery",
    "Shoe-Shining PRO", "Horticulture (Plants, Trees, Gardens)", "Wedding & Event DECORATION",
    "High-quality Baking/Cakes Business", "Car Body Repair", "Motorcycle or Bajaji mechanics / maintenance",
    "TV, Radio, and other Appliances - BASIC REPAIRS", "Batik Making / Textile Printing",
    "Graphic Design (& Digital Marketing)", "Tailoring", "Chicken Keeping/Rearing", "Catering/Cooking - Food & Beverage",
    "Aluminum door, windows and cabins making", "Driving Bajaji (and bodaboda?)", "(Mini) Bus Driver",
    "Leather goods production", "Refrigeration and Air condition", "Professional Photography / Videography",
    "Hotel, Restaurants, Guesthouse & Hospitality Business (incl. Tourism)", "Vegetable/Food/Fruit Farming (Agriculture)",
    "Floor Tiles fixing", "Plumbing", "Lorry Driver", "Video editing and production", "Childcare & Baby care",
    "Shop / Local Market helper", "Bicycle (and Motorcycle) repair", "Helping with Livestock keeping (cows, goats, etc)",
    "Make and sell handmade crafts: woven baskets, jewellery", "Make and sell home-made snacks / food items",
    "Brick-making", "Small-scale construction projects / repair / painting projects", "Security Guard", "Make (and sell) pottery"
  ];

  return `
I am working with a ${childInfo.age}-year-old ${childInfo.gender} street child named ${childInfo.name}. Based on their career assessment, here is the information:
Child Information:
•    Name: ${childInfo.name}
•    Age: ${childInfo.age}
•    Gender: ${childInfo.gender}
•    Location: ${locationText}
Career Preferences:
${preferences}
Gender Job Preference:
${genderPreference}
Top 3 Jobs from Assessment:
${selectedJobsList}
Do NOT Recommend These Jobs:
${existingJobs.join(', ')}

This child lives on the street. Keep in mind:
•    Little or no formal education
•    Needs to earn quickly
•    Can learn by apprenticeship
•    Must match local job demand
•    Jobs should fit their gender and culture
Instructions:
Give 5 new job ideas that:
1.    Match the child's age, gender, location
2.    Fit their preferences
3.    Are real, common jobs
4.    Are not listed above
5.    Use practical skills and help earn money fast
6.    Use simple, clear job titles
Format:
List only job titles, numbered 1–5. No other text.
`;
}

function getGenderPreferenceText(value) {
  if (value <= 19) return "I like VERY BOY-ish (masculine) jobs";
  if (value <= 39) return "I prefer jobs that are somewhat BOY-ish";
  if (value <= 59) return "I am fine with any job -- boy-ish and girl-ish";
  if (value <= 79) return "I prefer jobs that are somewhat GIRL-ish";
  if (value <= 100) return "I like VERY GIRL-ish (feminine) jobs";
  return "No preference specified";
}

function getLocationText(locationValue) {
  if (locationValue <= 25) return "City-Center";
  if (locationValue <= 50) return "Semi-Urban";
  if (locationValue <= 75) return "Somewhat-Rural";
  if (locationValue <= 100) return "Very-Rural-Village";
  return "City-Center";
}

function formatAssessmentData(data) {
  const preferences = [];
  
  // Indoor/Outdoor preference
  if (data.indoorOutdoor <= 19) preferences.push("- Strongly prefers working indoors");
  else if (data.indoorOutdoor <= 39) preferences.push("- Somewhat prefers working indoors");
  else if (data.indoorOutdoor <= 59) preferences.push("- Comfortable with both indoor and outdoor work");
  else if (data.indoorOutdoor <= 79) preferences.push("- Somewhat prefers working outdoors");
  else preferences.push("- Strongly prefers working outdoors");

  // Creative/Practical preference
  if (data.creativePractical <= 19) preferences.push("- Strongly prefers creative work");
  else if (data.creativePractical <= 39) preferences.push("- Somewhat prefers creative work");
  else if (data.creativePractical <= 59) preferences.push("- Likes a mix of creative and practical work");
  else if (data.creativePractical <= 79) preferences.push("- Somewhat prefers practical work");
  else preferences.push("- Strongly prefers practical hands-on work");

  // Work alone preference
  if (data.workAlone <= 19) preferences.push("- Prefers working alone");
  else if (data.workAlone <= 39) preferences.push("- Prefers working with 1-3 colleagues");
  else if (data.workAlone <= 59) preferences.push("- Comfortable working with several people (4-7)");
  else if (data.workAlone <= 79) preferences.push("- Enjoys working with many different people (8-14)");
  else preferences.push("- Thrives working with lots of different people daily (15+)");

  // Technology preference
  if (data.technology <= 19) preferences.push("- Really doesn't like working with technology");
  else if (data.technology <= 39) preferences.push("- Prefers not to work with technology much");
  else if (data.technology <= 59) preferences.push("- Okay with a little bit of technology");
  else if (data.technology <= 79) preferences.push("- Likes working with technology, machines, or computers");
  else preferences.push("- LOVES working with technology, machines, or computers");

  // Animals/Nature preference
  if (data.animals <= 19) preferences.push("- Prefers NO animals/plants in work");
  else if (data.animals <= 39) preferences.push("- Would prefer not to work with animals/plants");
  else if (data.animals <= 59) preferences.push("- Fine with or without animals/plants");
  else if (data.animals <= 79) preferences.push("- Likes working with animals/plants");
  else preferences.push("- Would LOVE working with animals/plants!");

  return preferences.join('\n');
}