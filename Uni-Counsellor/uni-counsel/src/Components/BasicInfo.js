import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function BasicInfo({ addBasicData }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [subjectGrade, setSubjectGrade] = useState(""); // New field
  const [course, setCourse] = useState(""); // New field

  const navigate = useNavigate();

  const submit = (e) => {
    e.preventDefault();
    if (!name || !email || !contact || !subjectGrade || !course) {
      alert("All fields are necessary!");
    } else {
      addBasicData(name, email, contact, subjectGrade, course);
      navigate('/login');
    }
  };

  return (
    <div className="container-fluid qform">
      <div className="col-md-5 m-auto">
        <div className="mt-3">
          <div className="card text-left h-100">
            <div className="card-body my-3">
              <form onSubmit={submit}>
                <h4>Basic Details</h4>

                <div className="form-group my-3">
                  <label><b>1.</b> Name</label>
                  <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="form-control my-2" placeholder="Enter your Name" />
                </div>

                <div className="form-group my-3">
                  <label><b>2.</b> Email</label>
                  <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control my-2" placeholder="Enter your Email" />
                </div>

                <div className="form-group my-3">
                  <label><b>3.</b> Contact No.</label>
                  <input type="tel" value={contact} onChange={(e) => setContact(e.target.value)} className="form-control my-2" placeholder="Enter your Contact No." />
                </div>

                <div className="form-group my-3">
                  <label><b>4.</b> Subject & Predicted Grade</label>
                  <input type="text" value={subjectGrade} onChange={(e) => setSubjectGrade(e.target.value)} className="form-control my-2" placeholder="Enter Subject & Predicted Grade" />
                </div>

                <div className="form-group my-3">
                  <label><b>5.</b> Course</label>
                  <input type="text" value={course} onChange={(e) => setCourse(e.target.value)} className="form-control my-2" placeholder="Enter Course" />
                </div>

                <button type="submit" className="btn btn-success mx-3">Next</button>
              </form>

              <center>
                <span className="badge badge-pill bg-success"><b>1</b></span>
                <span className="badge rounded-pill disabled">2</span>
                <span className="badge rounded-pill disabled">3</span>
              </center>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
