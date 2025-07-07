import React, { useState } from 'react';
import W from './components/Welcome';
import S from './components/Survey';
import R from './components/Results';
import E from './components/Export';
import G from './components/Graph';
import { calcRes } from './utils/c';
import { INITIAL_DATA, SCREEN_CONFIG } from './utils/d';

const App = () => {
const [sr, setSr] = useState(false);
  const [sfr, setSfr] = useState(false);
const [sdv, setSdv] = useState(false);
  const [ad, setAd] = useState(INITIAL_DATA);
const [cr, setCr] = useState(null);
  const [sj, setSj] = useState([]);
const [cs, setCs] = useState(0);
  const [si, setSi] = useState(null);

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
  };

const hdlBTA = () => {
    // Calculate total criteria across all screens, plus 1 for the done page
    const totalCriteria = SCREEN_CONFIG.reduce((total, screen) => total + screen.criteria.length, 0);
    setCs(totalCriteria || 0); // Set to the done page (which is totalCriteria index)
setSr(false);
    setSfr(false);
setSdv(false);
  };

  const hdlSDV = () => {
setSdv(true);
  };

const hdlBTRFC = () => {
    setSdv(false);
};

  const hdlChatGPT = () => {
console.log('ChatGPT functionality - selected jobs:', sj);
  };

if (!si) {
    return <W onStart={hdlStart} />;
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