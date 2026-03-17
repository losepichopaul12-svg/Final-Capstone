import { useEffect,useState } from "react";
import axios from "axios";
function Approvedjobs(){
const remoteUrl = "https://capstonebackend-bh74.onrender.com";
  const localUrl = "http://localhost:8082";
  const[Jobs,setJobs]=useState([]);
  const newJobs = async () => {
    try {
      const response = await axios.get(`${remoteUrl}/fetch-alljobs`);
      console.log("Response from backend:", response.data);
      setJobs(response.data.data); 
    } catch (error) {
      console.error("Error fetching jobs:", error);
    }
  };

 useEffect(() =>{
  newJobs()
 },[]);

 const deleteJob = async(id) => {
  try{
    const response = await axios.delete(
      `https://capstonebackend-bh74.onrender.com/delete-job/${id}`
    );

    alert(response.data.message);
// remove job immediately
 setJobs(Jobs.filter(Job => Job._id !== id));
  }catch(error){
    console.log(error);
  }
};

    return(
        <div className="container mt-2">
       <h2 className="mb-4 text-center ft-italic  fw-bold heading">Available  Jobs posted </h2>
  

  <div className="row ">

    {Jobs.map((Job, index) => (
      <div className="col-md-4 mb-2" key={index}>
        <div className="card h-100 shadow-sm">
          
          <div className="card-body d-flex flex-column">
            <h6>Job title:  {Job.Jobtitle}</h6>
            <hr></hr>
            <h6>Employer  :{Job.Employer}</h6>
            <p className="small mb-1"><strong>Location :</strong>{Job.Location}</p>
            <p className="small mb-1"><strong>Job type:</strong>{Job.Jobtype}</p>
            <p className="small mb-1"><strong>Deadline Date :</strong>{Job.Date}</p>
            <p className="fw-bold"><strong>Ksh :</strong>{Job.Salary}</p>
            <p className="small text-muted lh-sm mb-2">{Job.Description}</p>
           <div className="d-flex gap-5">
          <button className="btn btn-success btn-sm">Approve</button>
         <button className="btn btn-danger btn-sm" onClick={()=>deleteJob(Job._id)}>Delete</button>
         </div>
          </div>
        </div>
      </div>
    ))}

  </div>
    </div>
    );
}
export default Approvedjobs;