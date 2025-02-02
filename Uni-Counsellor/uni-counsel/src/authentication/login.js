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
  
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !contact || !subjectGrade || !course || !country) {
      alert("All fields are necessary!");
    } else {
      // Handle form submission here
      alert('Sign up successful!');
      navigate('/intermediate');
    }
  };

  return (
    <div className="container mt-5">
      <div className="col-md-6 m-auto">
        <div className="card shadow-sm border-0 rounded-3">
          <div className="card-body">
            <h4 className="card-title text-center mb-4">Create an Account</h4>
            <form onSubmit={handleSubmit}>
              <div className="form-group mb-3">
                <label htmlFor="name" className="form-label"><b>Name</b></label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="form-control"
                  placeholder="Enter your full name"
                  required
                />
              </div>

              <div className="form-group mb-3">
                <label htmlFor="email" className="form-label"><b>Email</b></label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="form-control"
                  placeholder="Enter your email address"
                  required
                />
              </div>

              <div className="form-group mb-3">
                <label htmlFor="contact" className="form-label"><b>Contact No.</b></label>
                <input
                  type="tel"
                  id="contact"
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                  className="form-control"
                  placeholder="Enter your contact number"
                  required
                />
              </div>

              <div className="form-group mb-3">
                <label htmlFor="subjectGrade" className="form-label"><b>Subject & Predicted Grade</b></label>
                <input
                  type="text"
                  id="subjectGrade"
                  value={subjectGrade}
                  onChange={(e) => setSubjectGrade(e.target.value)}
                  className="form-control"
                  placeholder="Enter your subject & predicted grade"
                  required
                />
              </div>

              <div className="form-group mb-3">
                <label htmlFor="course" className="form-label"><b>Course</b></label>
                <input
                  type="text"
                  id="course"
                  value={course}
                  onChange={(e) => setCourse(e.target.value)}
                  className="form-control"
                  placeholder="Enter your desired course"
                  required
                />
              </div>

              <div className="form-group mb-3">
                <label htmlFor="country" className="form-label"><b>Country</b></label>
                <input
                  type="text"
                  id="country"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  className="form-control"
                  placeholder="Enter your country"
                  required
                />
              </div>

              <button type="submit" className="btn btn-primary btn-lg w-100 mt-3">
                Next
              </button>
            </form>

            <div className="mt-3 text-center">
              <span>Already have an account? </span>
              <button
                className="btn btn-link"
                onClick={() => navigate("/login")}
                style={{ textDecoration: 'none' }}
              >
                Login here
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
