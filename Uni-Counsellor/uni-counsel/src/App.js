import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import axios from 'axios';

import AdditionalQuestions from './Components/AdditionalQuestions';
import EnteredDetails from './Components/EnteredDetails';
import ThankYouPage from './Components/ThankYouPage';
import About from './Components/About';
import Login from './authentication/login';
import Logout from './authentication/logout';
import Intermediate from './Components/Intermediate';
import MyUnis from './Components/MyUnis';
import UniWishList from './Components/UniWishList';

function App() {
  const [basicData, setBasicData] = useState({});
  const [questionData, setQuestionData] = useState({});

  const [responseData, setResponseData] = useState(null);
  const [error, setError] = useState(null);

  const addBasicData = (name, email, contact, subjectGrade, course) => {
    const myBasicData = { name, email, contact, subjectGrade, course };

    const sendData = async () => {
      const dataToSend = { name, email, contact, subjectGrade, course };

      // Convert the data object to query parameters
      const queryParams = new URLSearchParams(dataToSend).toString();

      try {
        let response = await axios.get(`127.0.0.1.9999/?${queryParams}`);
        response = response.data
        response = "{\n \"universities\": [\n {\n \"name\": \"University of Tokyo\",\n \"description\": \"Japan's top research university with renowned biology programs and state-of-the-art facilities. Known for groundbreaking research in molecular biology and biotechnology, offering programs in both Japanese and English.\"\n },\n {\n \"name\": \"Kyoto University\",\n \"description\": \"Prestigious institution famous for its life sciences research and biology department. Features extensive laboratory facilities and collaborations with international research centers, particularly strong in cellular biology.\"\n },\n {\n \"name\": \"Osaka University\",\n \"description\": \"Leading university in biological sciences with cutting-edge research facilities. Offers specialized programs in biomedical sciences and molecular biology, with strong industry connections and research opportunities.\"\n },\n {\n \"name\": \"Tohoku University\",\n \"description\": \"Renowned for its biological research and modern laboratory facilities. Specializes in environmental biology and biotechnology, offering numerous international research collaborations and exchange programs.\"\n },\n {\n \"name\": \"Nagoya University\",\n \"description\": \"Distinguished for its biology department and research in life sciences. Features excellent facilities for biological research and offers various specialized programs in molecular and cellular biology with international focus.\"\n }\n ]\n}"
        alert(JSON.stringify(JSON.parse(response), null, 2)); 
        setResponseData(JSON.parse(response));
        navigate("/intermediate", { state: { responseData: responseData } });
      } catch (err) {
        const response = "{\n \"universities\": [\n {\n \"name\": \"University of Tokyo\",\n \"description\": \"Japan's top research university with renowned biology programs and state-of-the-art facilities. Known for groundbreaking research in molecular biology and biotechnology, offering programs in both Japanese and English.\"\n },\n {\n \"name\": \"Kyoto University\",\n \"description\": \"Prestigious institution famous for its life sciences research and biology department. Features extensive laboratory facilities and collaborations with international research centers, particularly strong in cellular biology.\"\n },\n {\n \"name\": \"Osaka University\",\n \"description\": \"Leading university in biological sciences with cutting-edge research facilities. Offers specialized programs in biomedical sciences and molecular biology, with strong industry connections and research opportunities.\"\n },\n {\n \"name\": \"Tohoku University\",\n \"description\": \"Renowned for its biological research and modern laboratory facilities. Specializes in environmental biology and biotechnology, offering numerous international research collaborations and exchange programs.\"\n },\n {\n \"name\": \"Nagoya University\",\n \"description\": \"Distinguished for its biology department and research in life sciences. Features excellent facilities for biological research and offers various specialized programs in molecular and cellular biology with international focus.\"\n }\n ]\n}"
        
        alert(JSON.stringify(JSON.parse(response), null, 2)); 
        setError('Error sending data');
        console.error('Error:', err);
        navigate("/intermediate", { state: { responseData: responseData } });
      }
  };

    setBasicData(myBasicData);
    sendData();
    console.log(responseData)
  };

  const addQuestionData = (profession, interest, reference) => {
    const myQuestionData = { profession, interest, reference };
    setQuestionData(myQuestionData);
  };

  return ( 
    <Router>
      <Routes>
        <Route path="/" element={<Login addBasicData={addBasicData} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/questions" element={<AdditionalQuestions addQuestionData={addQuestionData} />} />
        <Route path="/details" element={<EnteredDetails data={basicData} questionData={questionData} />} />
        <Route path="/thanks" element={<ThankYouPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/intermediate" element={<Intermediate />} /> 
        <Route path="/myunis" element={<MyUnis />} />
        <Route path="/uniWishList" element={<UniWishList />} />
      </Routes>
    </Router>
  );
}

export default App;