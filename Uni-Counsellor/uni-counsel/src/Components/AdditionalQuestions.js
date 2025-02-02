import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [contact, setContact] = useState('');
  const [subjectGrade, setSubjectGrade] = useState('');
  const [course, setCourse] = useState('');
  const [country, setCountry] = useState('');
  const [tuitionFee, setTuitionFee] = useState('');
  const [accommodationProvided, setAccommodationProvided] = useState('');
  const [priceOfAccommodation, setPriceOfAccommodation] = useState('');
  const [studentRatio, setStudentRatio] = useState('');
  const [qsRankings, setQsRankings] = useState('');
  const [languageOfInstruction, setLanguageOfInstruction] = useState('');
  const [entryRequirements, setEntryRequirements] = useState('');
  const [location, setLocation] = useState('');
  const [scholarshipOpportunities, setScholarshipOpportunities] = useState('');
  const [campusFacilities, setCampusFacilities] = useState('');
  
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !contact || !subjectGrade || !course || !country || !tuitionFee || !accommodationProvided || !priceOfAccommodation || !studentRatio || !qsRankings || !languageOfInstruction || !entryRequirements || !location || !scholarshipOpportunities || !campusFacilities) {
      alert("All fields are necessary!");
    } else {
      alert('Sign up successful!');
      navigate('/login');
    }
  };

  return (
    <div className="container mt-5">
      <div className="col-md-8 m-auto">
        <div className="card shadow-sm border-0 rounded-3">
          <div className="card-body">
            <h4 className="card-title text-center mb-4">Create an Account</h4>
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
              <div className="form-group mb-3">
                <label><b>Price of Accommodation (£)</b></label>
                <input type="number" className="form-control" value={priceOfAccommodation} onChange={(e) => setPriceOfAccommodation(e.target.value)} required />
              </div>
              <div className="form-group mb-3">
                <label><b>Percentage of International Students</b></label>
                <input type="text" className="form-control" value={studentRatio} onChange={(e) => setStudentRatio(e.target.value)} required />
              </div>
              <div className="form-group mb-3">
                <label><b>QS University Ranking</b></label>
                <input type="number" className="form-control" value={qsRankings} onChange={(e) => setQsRankings(e.target.value)} required />
              </div>
              <div className="form-group mb-3">
                <label><b>Language of Instruction</b></label>
                <select className="form-select" value={languageOfInstruction} onChange={(e) => setLanguageOfInstruction(e.target.value)} required>
                  <option value="">Select Language</option>
                  <option value="english">English</option>
                  <option value="french">French</option>
                  <option value="german">German</option>
                  <option value="spanish">Spanish</option>
                  <option value="other">Other</option>
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
