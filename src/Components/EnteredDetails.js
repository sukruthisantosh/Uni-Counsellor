import { useNavigate } from 'react-router-dom';

export default function EnteredDetails(props) {
  const navigate = useNavigate();

  const submit = () => {
    console.log(props.data); // Log basicData
    console.log(props.questionData); // Log questionData
    navigate('/thanks');
  };

  return (
    <div className="container-fluid qform">
      <div className="col-md-5 m-auto">
        <div className="mt-3">
          <div className="card text-left h-100">
            <div className="card-body my-3">
              <h4>Entered Details</h4>

              <p><b>Name:</b> {props.data.name}</p>
              <p><b>Email:</b> {props.data.email}</p>
              <p><b>Contact No.:</b> {props.data.contact}</p>
              <p><b>Subject & Predicted Grade:</b> {props.data.subjectGrade}</p>
              <p><b>Course:</b> {props.data.course}</p>

              <h4>Responses</h4>
              <p><b>Profession:</b> {props.questionData.profession}</p>
              <p><b>Interests:</b> {props.questionData.interest}</p>
              <p><b>Reference:</b> {props.questionData.reference}</p>

              <button type="submit" onClick={submit} className="btn btn-success">Submit</button>

              <center>
                <span className="badge rounded-pill disabled">1</span>
                <span className="badge rounded-pill disabled">2</span>
                <span className="badge badge-pill bg-success"><b>3</b></span>
              </center>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
