import { useState,useEffect } from "react";
import axios from "axios"
import "./Modal.css";
import { Link } from "react-router-dom";

function Jobs (){
const[Jobs,setJobs]=useState([]);
const[open, setOpen] = useState(false);
const[applicantname,setapplicantname]=useState("");
const[applicantemail,setapplicantemail]=useState("");
const[selectedJob, setSelectedJob] = useState(null);


   const newJobs = async () => {
    try {
      const response = await axios.get("https://capstonebackend-bh74.onrender.com/fetch-jobs");
      console.log("Response from backend:", response.data);
      setJobs(response.data.data); 
    } catch (error) {
      console.error("Error fetching jobs:", error);
    }
  };

 useEffect(() =>{
  newJobs()
 },[]);


 const senddetails=async(e)=>{
  e.preventDefault();
   console.log("Form submitted");
  setOpen(false);
   if(!applicantname || !applicantemail ){
        alert("Please fill all fields required")
        return;

    }
    console.log("Sending application  data to database API ")
  const response=await axios.post("https://capstonebackend-bh74.onrender.com/api/sendapplication",
    {
  jobId: selectedJob._id,
  Jobtitle:selectedJob.Jobtitle,
  applicantname:applicantname,
  applicantemail:applicantemail
    }
  )
  console.log("the response from server is: ", response.data);
  alert(response.data.message)

 }

    return(
      
         <div className="container mt-2">
       <h2 className="mb-4 text-center ft-italic  fw-bold heading">Available Jobs</h2>
  

  <div className="row ">

    {Jobs.map((Job, index) => (
      <div className="col-md-4 mb-2" key={index}>
        <div className="card h-100 shadow-sm job-card">
          
          <div className="card-body d-flex flex-column">
            <h6>Job title:  {Job.Jobtitle}</h6>
            <hr></hr>
            <h6>Employer  :{Job.Employer}</h6>
            <p className="small mb-1"><strong>Location :</strong>{Job.Location}</p>
            <p className="small mb-1"><strong>Job type:</strong>{Job.Selected}</p>
            <p className="small mb-1"><strong>Deadline Date :</strong>{Job.Date}</p>
            <p className="fw-bold"><strong>Ksh :</strong>{Job.Salary}</p>
            <p className="small text-muted lh-sm mb-2">{Job.Description}</p>
            <div>
            <button className="btn btn-primary w-100 mt-auto"  onClick={() => { console.log("Button clicked"); setSelectedJob(Job); setOpen(true)}} > Apply Now </button>
             

            </div>
          </div>
        </div>
      </div>
    ))}

  </div>
  {open &&  (
    
 <div  className="modal custom-modal ">
 <div className="">
 <div className="modal-content ">
 <Link to="/Register" className="link">Create Account </Link>
 <div className="header">
<h2 className="modal-title">Application Form</h2>
<p>Fill the following form correct details to be considered during shortlisting.</p>
</div>
<div className="modal-body">
 <form onSubmit={senddetails}>
   <div className="mb-3">
   <p> Applying for: <strong>{selectedJob?.Jobtitle}</strong> </p>
              <label className="form-label">Applicant Names</label>
              <input
                className="form-control"
                type="text"
                value={applicantname}
                placeholder="Enter your full names"
                onChange={(e) => setapplicantname(e.target.value)}
                required
              />
            </div>
             <div className="mb-3">
              <label className="form-label">Applicant Email</label>
              <input
                className="form-control"
                type="email"
                value={applicantemail}
                placeholder="Enter your email"
                onChange={(e) => setapplicantemail(e.target.value)}
                required
              />
            </div>
             <button type="submit"   className="btn btn-success w-100">Send Application 
             <span className="spinner-border spinner-border-sm mx-2" aria-hidden="true"></span>
             <span className="visually-hidden m-2" role="status">Loading...</span>
             </button>
 </form>
 </div>
</div>
</div>
</div>

 )

 }
    </div>
    )
}

export default Jobs;