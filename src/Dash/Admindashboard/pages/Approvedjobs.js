import { useEffect,useState } from "react";
import axios from "axios";
function Approvedjobs(){

  const[Jobs,setJobs]=useState([]);
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

//     const jobs=[
//     {title:"Community Mobilizer", employer:"save the children",location:"Lokichogio",status:"Approved"},
//     {title:"IT Support Assistant", employer:"Turkana University",location:"Lodwar",status:"Pending"},
//     {title:"Field Enumerator", employer:"UNHCR", location:"Kakuma",status:"Pending"},
   
// ]

// const jobs1=[
//      {title:"Operation Manager", employer:"INKO MOKO",location:"Kalobeyei",status:"Pending"},
//     {title:"Full Stack Developer", employer:"Kenya Revenue Authority",location:"Nairobi",status:"Pending"},
//     {title:"Sales Agents", employer:"Kenya Breweries",location:"Nakuru",status:"Approved"}
// ]
    
// const jobs2 = [
//   { title: "Project Officer", employer: "World Vision", location: "Kitale",status:"Approved" },
//   { title: "Data Analyst", employer: "Safaricom", location: "Nairobi",status:"Pending" },
//   { title: "HR Assistant", employer: "Red Cross", location: "Eldoret",status:"Approved" },
// ];
// const jobs3 = [
//   {title: "Project Officer", employer: "World Vision",location: "Marsabit",status:"Pending"},
//   {title: "Data Analyst",employer: "Amref Health Africa", location: "Nairobi",status:"Approved"},
//   { title: "Logistics Assistant",employer: "International Rescue Committee",location: "Kakuma",status:"Approved" }
// ];

    return(
        <div className="container mt-2">
       <h2 className="mb-4 text-center ft-italic text-uppercase fw-bold">Available  Jobs posted </h2>
  

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
          </div>
        </div>
      </div>
    ))}

  </div>
    </div>
    );
}
export default Approvedjobs;