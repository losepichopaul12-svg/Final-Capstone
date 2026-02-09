import { useState,useEffect } from "react";
import axios from "axios"
// import "./Jobs.css";

function Jobs (){
const[Jobs,setJobs]=useState([])
   const newJobs = async () => {
    try {
      const response = await axios.get("http://localhost:8082/fetch-jobs");
      console.log("Response from backend:", response.data);
      setJobs(response.data.data); 
    } catch (error) {
      console.error("Error fetching jobs:", error);
    }
  };

 useEffect(() =>{
  newJobs()
 },[]);

    return(
         <div className="container mt-2">
       <h2 className="mb-4 text-center ft-italic text-uppercase fw-bold">My Jobs</h2>
  

  <div className="row ">

    {Jobs.map((Job, index) => (
      <div className="col-md-4 mb-2" key={index}>
        <div className="card h-100 shadow-sm">
          
          <div className="card-body d-flex flex-column">
            <h6>Job title:  {Job.Jobtitle}</h6>
            <hr></hr>
            <h6>Employer  :{Job.Employer}</h6>
            <p className="small mb-1"><strong>Location :</strong>{Job.Location}</p>
            <p className="small mb-1"><strong>Job type:</strong>{Job.Selected}</p>
            <p className="small mb-1"><strong>Deadline Date :</strong>{Job.Date}</p>
            <p className="fw-bold"><strong>Ksh :</strong>{Job.Salary}</p>
            <p className="small text-muted lh-sm mb-2">{Job.Description}</p>
            <button className="btn btn-primary w-100 mt-auto"> Apply Now</button>
          </div>
        </div>
      </div>
    ))}

  </div>
    </div>
    )
}

export default Jobs;