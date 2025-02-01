import './App.css';
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import BasicInfo from './Components/BasicInfo';
import AdditionalQuestions from './Components/AdditionalQuestions';
import EnteredDetails from './Components/EnteredDetails';
import ThankYouPage from './Components/ThankYouPage';
import About from './Components/About';
// import Login from './authentication/login';
// import Logout from './authentication/logout';

function App() {
//   const initBasicData = JSON.parse(localStorage.getItem('data')) || {};
//   const initQuestionsData = JSON.parse(localStorage.getItem('questiondata')) || {};

//   const [basicData, setBasicData] = useState(initBasicData);
//   const [questionData, setQuestionData] = useState(initQuestionsData);

const [basicData, setBasicData] = useState("");
  const [questionData, setQuestionData] = useState("");

//   useEffect(() => {
//     localStorage.setItem('data', JSON.stringify(basicData));
//   }, [basicData]);

//   useEffect(() => {
//     localStorage.setItem('questiondata', JSON.stringify(questionData));
//   }, [questionData]);

  const addBasicData = (name, email, contact) => {
    const myBasicData = { name, email, contact };
    setBasicData(myBasicData);
    // localStorage.setItem("data", JSON.stringify(myBasicData));
  };

  const addQuestionData = (profession, interest, reference) => {
    const myQuestionData = { profession, interest, reference };
    setQuestionData(myQuestionData);
    // localStorage.setItem("questiondata", JSON.stringify(myQuestionData));
  };

  return (
    <Router>
      <Routes>
        <Route path='/' element={<BasicInfo addBasicData={addBasicData} />} />
        <Route path='/login' element={<ThankYouPage />} />
        <Route path='/logout' element={<ThankYouPage />} />
        <Route path='/questions' element={<AdditionalQuestions addQuestionData={addQuestionData} />} />
        {/* Fix the typo: questiondData -> questionData */}
        <Route path='/details' element={<EnteredDetails data={basicData} questionData={questionData} />} />
        <Route path='/thanks' element={<ThankYouPage />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;