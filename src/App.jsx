import React, { useState, useEffect } from 'react';
import W from './components/Welcome';
import S from './components/Survey';
import R from './components/Results';
import E from './components/Export';
import G from './components/Graph';
import ChatGPTRecommendations from './components/ChatGPTRecommendations';
import { calcRes } from './utils/c';
import { INITIAL_DATA, SCREEN_CONFIG } from './utils/d';

const App = () => {
const [sr, setSr] = useState(false);
  const [sfr, setSfr] = useState(false);
const [sdv, setSdv] = useState(false);
  const [scgpt, setScgpt] = useState(false);
  const [ad, setAd] = useState(INITIAL_DATA);
const [cr, setCr] = useState(null);
  const [sj, setSj] = useState([]);
  const [prevAd, setPrevAd] = useState(null);
const [cs, setCs] = useState(0);
  const [si, setSi] = useState(null);

  useEffect(() => {
    if (prevAd !== null && JSON.stringify(prevAd) !== JSON.stringify(ad)) {
      setSj([]);
    }
    setPrevAd(ad);
  }, [ad]);

const hdlStart = (info) => {
    setSi(info);
};

  const hdlSR = (data) => {
const results = calcRes(data);
    setCr(results);
setSr(true);
  };

const hdlSFR = (jobs) => {
    setSj(jobs);
setSfr(true);
    setSr(false);
};

  const hdlBTR = () => {
setSfr(false);
    setSr(true);
setSdv(false);
    setScgpt(false);
  };

const hdlBTA = () => {
    // Calculate total criteria across all screens, plus 1 for the done page
    const totalCriteria = SCREEN_CONFIG.reduce((total, screen) => total + screen.criteria.length, 0);
    setCs(totalCriteria || 0); // Set to the done page (which is totalCriteria index)
setSr(false);
    setSfr(false);
setSdv(false);
    setScgpt(false);
  };

  const hdlSDV = () => {
setSdv(true);
  };

const hdlBTRFC = () => {
    setSdv(false);
    setScgpt(false);
};

  const hdlChatGPT = () => {
    setScgpt(true);
    setSfr(false);
  };

  const hdlBackFromChatGPT = () => {
    setScgpt(false);
    setSfr(true);
  };

if (!si) {
    return <W onStart={hdlStart} />;
}

  if (scgpt) {
    return (
      <ChatGPTRecommendations
        selectedJobs={sj}
        onBack={hdlBackFromChatGPT}
        subjectInfo={si}
        assessmentData={ad}
      />
    );
  }

  if (sdv) {
return (
      <G 
        assessmentData={ad}
onBack={hdlBTRFC}
      />
);
  }

if (sfr) {
    return (
<E
        selectedJobs={sj}
onBack={hdlBTR}
        onChatGPT={hdlChatGPT}
/>
    );
}

  if (sr) {
return (
      <R 
calculationResults={cr}
        onBack={hdlBTA}
onShowData={hdlSDV}
        onContinue={hdlSFR}
subjectInfo={si}
        assessmentData={ad}
        selectedJobs={sj}
        setSelectedJobs={setSj}
/>
    );
}

  return (
<S 
      assessmentData={ad}
setAssessmentData={setAd}
      onShowResults={hdlSR}
currentScreen={cs}
      setCurrentScreen={setCs}
subjectInfo={si}
    />
);
};

export default App;