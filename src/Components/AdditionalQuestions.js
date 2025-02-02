import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';  // ✅ Import Axios
import 'bootstrap/dist/css/bootstrap.min.css';

const SignUp = () => {
  const [name, setName] = useState('Nandita');
  const [email, setEmail] = useState('nsb@gmail.com');
  const [contact, setContact] = useState('+441234567');
  const [subjectGrade, setSubjectGrade] = useState('Computer Science A');
  const [course, setCourse] = useState('Computing');
  const [country, setCountry] = useState('UK');
  const [tuitionFee, setTuitionFee] = useState('e');
  const [accommodationProvided, setAccommodationProvided] = useState('7');
  const [priceOfAccommodation, setPriceOfAccommodation] = useState('8');
  const [studentRatio, setStudentRatio] = useState('9');
  const [qsRankings, setQsRankings] = useState('0');
  const [languageOfInstruction, setLanguageOfInstruction] = useState('0');
  const [entryRequirements, setEntryRequirements] = useState('0');
  const [location, setLocation] = useState('0');
  const [scholarshipOpportunities, setScholarshipOpportunities] = useState('0');
  const [campusFacilities, setCampusFacilities] = useState('0');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // if (
    //   !name || !email || !contact || !subjectGrade || !course || !country ||
    //   !tuitionFee || !accommodationProvided || !priceOfAccommodation || !studentRatio ||
    //   !qsRankings || !languageOfInstruction || !entryRequirements || !location ||
    //   !scholarshipOpportunities || !campusFacilities
    // ) {
    //   alert("All fields are necessary!");
    //   return;
    // }

    const dataToSend = {
      name, email, contact, subjectGrade, course, country, tuitionFee, accommodationProvided,
      priceOfAccommodation, studentRatio, qsRankings, languageOfInstruction, entryRequirements,
      location, scholarshipOpportunities, campusFacilities
    };

    try {
      // ✅ Convert to query parameters
      const queryParams = new URLSearchParams(dataToSend).toString();

      // ✅ Send API request
      // let response = await axios.get(`http://127.0.0.1:9999/`, JSON.stringify(dataToSend, null, 2));

      let response = await axios.post('http://127.0.0.1:9999/get_colleges', dataToSend, {
        headers: { 'Content-Type': 'application/json' }
      })
      response = response.data;
      // ✅ Show response in alert

      // ✅ Navigate to Intermediate page with response data
      navigate("/intermediate", { state: { responseData: response } });

    } catch (err) {
      console.error("Error:", err);

      // ✅ Use fallback response for testing
      const fallbackResponse = "{\n  \"universities\": [\n    {\n      \"name\": \"University of Cambridge\",\n      \"description\": \"World-renowned for physics research with state-of-the-art facilities. Strong collegiate system provides excellent accommodation and vibrant social life. Home to many Nobel laureates in Physics.\"\n    },\n    {\n      \"name\": \"University of Oxford\",\n      \"description\": \"Outstanding physics department with cutting-edge research opportunities. Historic college system offers guaranteed accommodation and active social scene. Strong emphasis on theoretical and experimental physics.\"\n    },\n    {\n      \"name\": \"Imperial College London\",\n      \"description\": \"Located in central London with exceptional physics research facilities. Strong industry connections and modern accommodation options. Dynamic student life with numerous societies and activities.\"\n    },\n    {\n      \"name\": \"University of Manchester\",\n      \"description\": \"Home to the National Graphene Institute and excellent physics research. Guaranteed accommodation for first-years and vibrant city life. Strong emphasis on both theoretical and applied physics.\"\n    },\n    {\n      \"name\": \"University College London\",\n      \"description\": \"Prestigious physics department in the heart of London. Modern accommodation options and diverse student community. Strong research focus with excellent laboratory facilities.\"\n    },\n    {\n      \"name\": \"University of Edinburgh\",\n      \"description\": \"Historic university with modern physics facilities. Guaranteed accommodation for first-years and fantastic student life in a beautiful city. Strong research output in theoretical physics and astronomy.\"\n    },\n    {\n      \"name\": \"University of Bristol\",\n      \"description\": \"Known for excellent physics research and teaching. Multiple accommodation options in a vibrant student city. Strong focus on quantum physics and nanoscience.\"\n    },\n    {\n      \"name\": \"Durham University\",\n      \"description\": \"College system with guaranteed accommodation and strong community feel. Excellent physics department with high research output. Beautiful historic city with active student social scene.\"\n    },\n    {\n      \"name\": \"University of Warwick\",\n      \"description\": \"Modern campus with excellent physics facilities and research opportunities. Guaranteed accommodation and active student union. Strong emphasis on theoretical physics and mathematical modeling.\"\n    },\n    {\n      \"name\": \"University of Birmingham\",\n      \"description\": \"Large physics department with strong research profile. Guaranteed first-year accommodation on beautiful campus. Vibrant student life with numerous societies and sports clubs.\"\n    }\n  ]\n}";

      // alert(JSON.stringify(fallbackResponse, null, 2));
      navigate("/myunis", { state: { responseData: fallbackResponse } });
    }
  };

  return (
    <div className="container mt-5">
      <div className="col-md-8 m-auto">
        <div className="card shadow-sm border-0 rounded-3">
          <div className="card-body">
            <h4 className="card-title text-center mb-4">Questions</h4>
            <form onSubmit={handleSubmit}>
              <div className="form-group mb-3">
                <label><b>Name</b></label>
                <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} required />
              </div>
              <div className="form-group mb-3">
                <label><b>Email</b></label>
                <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} required />
              </div>
              <div className="form-group mb-3">
                <label><b>Contact No.</b></label>
                <input type="tel" className="form-control" value={contact} onChange={(e) => setContact(e.target.value)} required />
              </div>
              <div className="form-group mb-3">
                <label><b>Subject & Predicted Grade</b></label>
                <input type="text" className="form-control" value={subjectGrade} onChange={(e) => setSubjectGrade(e.target.value)} required />
              </div>
              <div className="form-group mb-3">
                <label><b>Course</b></label>
                <input type="text" className="form-control" value={course} onChange={(e) => setCourse(e.target.value)} required />
              </div>
              <div className="form-group mb-3">
                <label><b>Country</b></label>
                <input type="text" className="form-control" value={country} onChange={(e) => setCountry(e.target.value)} required />
              </div>
              <div className="form-group mb-3">
                <label><b>Max Tuition Fees Per Year (£)</b></label>
                <input type="number" className="form-control" value={tuitionFee} onChange={(e) => setTuitionFee(e.target.value)} required />
              </div>
              <div className="form-group mb-3">
                <label><b>Accommodation Provided</b></label>
                <select className="form-select" value={accommodationProvided} onChange={(e) => setAccommodationProvided(e.target.value)} required>
                  <option value="">Select an option</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </div>
              <button type="submit" className="btn btn-primary btn-lg w-100 mt-3">Sign Up</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;