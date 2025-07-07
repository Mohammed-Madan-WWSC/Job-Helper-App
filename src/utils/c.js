import { THRESHOLDS, JOB_COLLECTION } from './d';

const getPctFromT = (iv, t) => {
return ((iv - t) / t) * 100;
};

const getVFromT = (iv, t) => {
  return iv - t;
};

const catScore = (iv, t) => {
const pctOff = getPctFromT(iv, t);
  if (pctOff >= 10) return 'GOOD';
if (pctOff > -20) return 'OK';
  return 'NEEDS_WORK';
};

export const getCat = (iv, t) => {
return catScore(iv, t);
};

export const getCatColor = (iv, t) => {
const pctOff = getPctFromT(iv, t);
  if (pctOff >= 10) {
    return 'bg-green-100 text-green-800';
}
  if (pctOff > -20) {
return 'bg-yellow-100 text-yellow-800';
  }
  return 'bg-red-100 text-red-800';
};

export const calcRes = (ad) => {
const res = {};
const nwScores = [];
  const okScores = [];
  const goodScores = [];
  
let totScore = 0;
  let maxPosScore = 0;
  
  Object.keys(ad).forEach(k => {
const iv = ad[k];
    const t = THRESHOLDS[k];
const cat = catScore(iv, t);
    const pctFromT = getPctFromT(iv, t);
const vFromT = getVFromT(iv, t);
    
    totScore += iv;
maxPosScore += 100;
    
    const result = {
      key: k,
input: iv,
      threshold: t,
category: cat,
      percentageFromThreshold: pctFromT,
      valueFromThreshold: vFromT
};
    
    res[k] = iv;
    
if (cat === 'NEEDS_WORK') {
      nwScores.push(result);
} else if (cat === 'OK') {
      okScores.push(result);
    } else {
goodScores.push(result);
    }
  });
  
nwScores.sort((a, b) => a.valueFromThreshold - b.valueFromThreshold);
  okScores.sort((a, b) => a.valueFromThreshold - b.valueFromThreshold);
goodScores.sort((a, b) => a.valueFromThreshold - b.valueFromThreshold);
  
  const ovPct = (totScore / maxPosScore) * 100;
  
let outCat;
  let areasWork = [];
  
  if (ovPct >= 80) {
outCat = 'EXCELLENT';
    areasWork = [...okScores, ...nwScores].slice(0, 2);
} else if (ovPct >= 60) {
    outCat = 'GOOD';
areasWork = [...nwScores, ...okScores].slice(0, 3);
  } else if (ovPct >= 40) {
    outCat = 'FAIR';
areasWork = nwScores.slice(0, 4);
  } else {
    outCat = 'NEEDS_IMPROVEMENT';
areasWork = nwScores;
  }
  
  return {
results: ad,
    needsWorkScores: nwScores,
okScores,
    goodScores,
outcomeCategory: outCat,
    areasToWorkOn: areasWork,
totalScore: totScore,
    maxPossibleScore: maxPosScore,
percentageScore: Math.round(ovPct),
    overallPercentage: ovPct
  };
};

const cvSliderToScale = (sv) => {
if (sv >= 0 && sv <= 19) return 1;
  if (sv >= 20 && sv <= 39) return 2;
if (sv >= 40 && sv <= 59) return 3;
  if (sv >= 60 && sv <= 79) return 4;
if (sv >= 80 && sv <= 100) return 5;
  return 1;
};

const calcGenderSlider = (gp) => {
return cvSliderToScale(gp);
};

const filterJobsByLocAndGend = (up) => {
const gSlider = calcGenderSlider(up.genderPreference);
  const selLoc = getSelLoc(up.location);
  
let filtJobs = JOB_COLLECTION.filter(job => {
    const jobAreas = job.area.split(', ').map(area => area.trim());
return jobAreas.includes(selLoc);
  });
  
filtJobs = filtJobs.filter(job => {
    const jobGender = job.boygirl;
    
if (gSlider === 1) {
      return [1, 2, 3].includes(jobGender);
} else if (gSlider === 2) {
      return [1, 2, 3, 4].includes(jobGender);
} else if (gSlider === 3) {
      return [1, 2, 3, 4, 5].includes(jobGender);
} else if (gSlider === 4) {
      return [2, 3, 4, 5, 6].includes(jobGender);
} else if (gSlider === 5) {
      return [3, 4, 5, 6].includes(jobGender);
}
    return false;
  });
  
return filtJobs;
};

const getSelLoc = (lv) => {
switch(true) {
    case lv <= 25:
return "City-Center";
    case lv <= 50:
      return "Semi-Urban";
case lv <= 75:
      return "Somewhat-Rural";
case lv <= 100:
      return "Very-Rural-Village";
default:
      return "City-Center";
  }
};

const calcWeightFactor = (diff) => {
if (diff === 0) return 1;
  if (diff === 1) return 1;
if (diff === 2) return 1.5;
  if (diff === 3) return 2;
if (diff === 4) return 2.5;
  return 0;
};

const calcPowerAppsScore = (up, job) => {
const c1a = cvSliderToScale(up.indoorOutdoor);
  const c2a = cvSliderToScale(up.creativePractical);
const c3a = cvSliderToScale(up.workAlone);
  const c4a = cvSliderToScale(up.technology);
const c5a = cvSliderToScale(up.animals);
  
const c1Weight = calcWeightFactor(Math.abs(job.c1 - c1a));
  const c2Weight = calcWeightFactor(Math.abs(job.c2 - c2a));
const c3Weight = calcWeightFactor(Math.abs(job.c3 - c3a));
  const c4Weight = calcWeightFactor(Math.abs(job.c4 - c4a));
const c5Weight = calcWeightFactor(Math.abs(job.c5 - c5a));
  
const totScore = 
    Math.abs(job.c1 - c1a) * c1Weight +
Math.abs(job.c2 - c2a) * c2Weight +
    Math.abs(job.c3 - c3a) * c3Weight +
Math.abs(job.c4 - c4a) * c4Weight +
    Math.abs(job.c5 - c5a) * c5Weight;
  
return totScore;
};

export const findMatchJobs = (up, limit = 7) => {
const filtJobs = filterJobsByLocAndGend(up);
  
const jobsWithScores = filtJobs.map(job => ({
    ...job,
compatScore: calcPowerAppsScore(up, job)
  }));
  
jobsWithScores.sort((a, b) => a.compatScore - b.compatScore);
  
return jobsWithScores.slice(0, limit);
};

const calcMatches = (up, job) => {
const totPosMatches = 5;
  let matches = 0;
  
const c1Match = Math.abs(job.c1 - cvSliderToScale(up.indoorOutdoor)) <= 1;
  const c2Match = Math.abs(job.c2 - cvSliderToScale(up.creativePractical)) <= 1;
const c3Match = Math.abs(job.c3 - cvSliderToScale(up.workAlone)) <= 1;
  const c4Match = Math.abs(job.c4 - cvSliderToScale(up.technology)) <= 1;
const c5Match = Math.abs(job.c5 - cvSliderToScale(up.animals)) <= 1;
  
if (c1Match) matches++;
  if (c2Match) matches++;
if (c3Match) matches++;
  if (c4Match) matches++;
if (c5Match) matches++;
  
return Math.round((matches / totPosMatches) * 100);
};

export const getJobRecAnalysis = (up) => {
const topRecs = findMatchJobs(up, 10);
  
const recsWithPct = topRecs.map(job => ({
    ...job,
compatibilityPercentage: calcMatches(up, job)
  }));
  
return {
    topRecommendations: recsWithPct,
totalFound: topRecs.length
  };
}; 