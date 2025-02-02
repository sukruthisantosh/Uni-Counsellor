// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';  // ✅ Import Axios
// import 'bootstrap/dist/css/bootstrap.min.css';

// const SignUp = () => {
//   const [name, setName] = useState('wh');
//   const [email, setEmail] = useState('wha@gmail.com');
//   const [contact, setContact] = useState('q');
//   const [subjectGrade, setSubjectGrade] = useState('d');
//   const [course, setCourse] = useState('w');
//   const [country, setCountry] = useState('a');
//   const [tuitionFee, setTuitionFee] = useState('e');
//   const [accommodationProvided, setAccommodationProvided] = useState('7');
//   const [priceOfAccommodation, setPriceOfAccommodation] = useState('8');
//   const [studentRatio, setStudentRatio] = useState('9');
//   const [qsRankings, setQsRankings] = useState('0');
//   const [languageOfInstruction, setLanguageOfInstruction] = useState('0');
//   const [entryRequirements, setEntryRequirements] = useState('0');
//   const [location, setLocation] = useState('0');
//   const [scholarshipOpportunities, setScholarshipOpportunities] = useState('0');
//   const [campusFacilities, setCampusFacilities] = useState('0');
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (
//       !name || !email || !contact || !subjectGrade || !course || !country ||
//       !tuitionFee || !accommodationProvided || !priceOfAccommodation || !studentRatio ||
//       !qsRankings || !languageOfInstruction || !entryRequirements || !location ||
//       !scholarshipOpportunities || !campusFacilities
//     ) {
//       alert("All fields are necessary!");
//       return;
//     }

//     const dataToSend = {
//       name, email, contact, subjectGrade, course, country, tuitionFee, accommodationProvided,
//       priceOfAccommodation, studentRatio, qsRankings, languageOfInstruction, entryRequirements,
//       location, scholarshipOpportunities, campusFacilities
//     };

//     try {
//       // ✅ Convert to query parameters
//       const queryParams = new URLSearchParams(dataToSend).toString();

//       // ✅ Send API request
//       let response = await axios.get(`http://127.0.0.1:9999/?${queryParams}`);
//       response = response.data;

//       // ✅ Show response in alert
//       alert(JSON.stringify(response, null, 2));

//       // ✅ Navigate to Intermediate page with response data
//       navigate("/intermediate", { state: { responseData: response } });

//     } catch (err) {
//       console.error("Error:", err);

//       // ✅ Use fallback response for testing
//       const fallbackResponse = "{\n\"universities\": [\n {\n \"name\": \"University of Tokyo\",\n \"description\": \"Japan's top research university with renowned biology programs and state-of-the-art facilities. Known for groundbreaking research in molecular biology and biotechnology, offering programs in both Japanese and English.\"\n },\n {\n \"name\": \"Kyoto University\",\n \"description\": \"Prestigious institution famous for its life sciences research and biology department. Features extensive laboratory facilities and collaborations with international research centers, particularly strong in cellular biology.\"\n },\n {\n \"name\": \"Osaka University\",\n \"description\": \"Leading university in biological sciences with cutting-edge research facilities. Offers specialized programs in biomedical sciences and molecular biology, with strong industry connections and research opportunities.\"\n },\n {\n \"name\": \"Tohoku University\",\n \"description\": \"Renowned for its biological research and modern laboratory facilities. Specializes in environmental biology and biotechnology, offering numerous international research collaborations and exchange programs.\"\n },\n {\n \"name\": \"Nagoya University\",\n \"description\": \"Distinguished for its biology department and research in life sciences. Features excellent facilities for biological research and offers various specialized programs in molecular and cellular biology with international focus.\"\n }\n]\n}"

//       alert(JSON.stringify(fallbackResponse, null, 2));
//       navigate("/intermediate", { state: { responseData: fallbackResponse } });
//     }
//   };

//   return (
//     <div className="container mt-5">
//       <div className="col-md-8 m-auto">
//         <div className="card shadow-sm border-0 rounded-3">
//           <div className="card-body">
//             <h4 className="card-title text-center mb-4">Create an Account</h4>
//             <form onSubmit={handleSubmit}>
//               <div className="form-group mb-3">
//                 <label><b>Name</b></label>
//                 <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} required />
//               </div>
//               <div className="form-group mb-3">
//                 <label><b>Email</b></label>
//                 <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} required />
//               </div>
//               <div className="form-group mb-3">
//                 <label><b>Contact No.</b></label>
//                 <input type="tel" className="form-control" value={contact} onChange={(e) => setContact(e.target.value)} required />
//               </div>
//               <div className="form-group mb-3">
//                 <label><b>Subject & Predicted Grade</b></label>
//                 <input type="text" className="form-control" value={subjectGrade} onChange={(e) => setSubjectGrade(e.target.value)} required />
//               </div>
//               <div className="form-group mb-3">
//                 <label><b>Course</b></label>
//                 <input type="text" className="form-control" value={course} onChange={(e) => setCourse(e.target.value)} required />
//               </div>
//               <div className="form-group mb-3">
//                 <label><b>Country</b></label>
//                 <input type="text" className="form-control" value={country} onChange={(e) => setCountry(e.target.value)} required />
//               </div>
//               <div className="form-group mb-3">
//                 <label><b>Max Tuition Fees Per Year (£)</b></label>
//                 <input type="number" className="form-control" value={tuitionFee} onChange={(e) => setTuitionFee(e.target.value)} required />
//               </div>
//               <div className="form-group mb-3">
//                 <label><b>Accommodation Provided</b></label>
//                 <select className="form-select" value={accommodationProvided} onChange={(e) => setAccommodationProvided(e.target.value)} required>
//                   <option value="">Select an option</option>
//                   <option value="yes">Yes</option>
//                   <option value="no">No</option>
//                 </select>
//               </div>
//               <button type="submit" className="btn btn-primary btn-lg w-100 mt-3">Sign Up</button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SignUp;