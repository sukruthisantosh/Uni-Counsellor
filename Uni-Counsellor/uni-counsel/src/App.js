import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// import { ChakraProvider } from "@chakra-ui/react";
// import { Provider } from "@/components/ui/provider"

import BasicInfo from './Components/BasicInfo';
import AdditionalQuestions from './Components/AdditionalQuestions';
import EnteredDetails from './Components/EnteredDetails';
import ThankYouPage from './Components/ThankYouPage';
import About from './Components/About';
import Login from './authentication/login';
import Logout from './authentication/logout';
import Intermediate from './Components/Intermediate';
import MyUnis from './Components/MyUnis';
// import 
// import Example from './Components/CTAWithVideo';

function App() {
  const [basicData, setBasicData] = useState({});
  const [questionData, setQuestionData] = useState({});

  const addBasicData = (name, email, contact, subjectGrade, course) => {
    const myBasicData = { name, email, contact, subjectGrade, course };
    setBasicData(myBasicData);
  };

  const addQuestionData = (profession, interest, reference) => {
    const myQuestionData = { profession, interest, reference };
    setQuestionData(myQuestionData);
  };

  return ( 
    <Router>
      <Routes>
        <Route path="/" element={<BasicInfo addBasicData={addBasicData} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/questions" element={<AdditionalQuestions addQuestionData={addQuestionData} />} />
        <Route path="/details" element={<EnteredDetails data={basicData} questionData={questionData} />} />
        <Route path="/thanks" element={<ThankYouPage />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/something" element={<Example />} /> */}
        <Route path="/intermediate" element={<Intermediate />} /> 
        <Route path="/myunis" element={<MyUnis />} />
      </Routes>
    </Router>
  );
}

export default App;
