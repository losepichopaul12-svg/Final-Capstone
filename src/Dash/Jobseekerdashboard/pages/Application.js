import { useEffect, useState } from "react";
import axios from "axios";

function Application(){
// const Applications=[
//     {id: 1,jobtitle: "Community Mobilizer",employer: "World Vision",location:"Lokichogio",date:"2026/01/12",status: "Pending"},
//     {id:2,jobtitle: "Data Analyst", employer: "Safaricom", location: "Nairobi",date:"2026/02/02",status:"shortlisted" },
//     {id:3,jobtitle: "HR Assistant", employer: "Red Cross", location: "Eldoret" ,date:"2026/01/22",status:"shortlisted"},
//     {id:4,jobtitle: "IT Support Assistant",employer: "Turkana University",location:"Lodwar",date:"2026/01/28", status: "Shortlisted"}

// ]
  const[Applications,setApplications]=useState([]);

  useEffect(() => {
    const fetchApplications = async () => {
      try {
        const token = localStorage.getItem("token"); // auth token
        const response = await axios.get(
          "https://capstonebackend-bh74.onrender.com/application/myapplications/:email",
          {
            headers: { Authorization: `Bearer ${token}` }
          }
        );
        setApplications(response.data.data);
      } catch (err) {
        console.error("Failed to fetch applications", err);
      }
    };

    fetchApplications();
  }, []);
    return(
         <div className="container mt-3">
      <h3>My Applications</h3>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Job Title</th>
            <th>Employer</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {Applications.map(Application => (
            <tr key={Application._id}>
              <td>{Application.jobId?.Jobtitle}</td>
              <td>{Application.jobId?.Employer}</td>
              <td>{Application.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    )
}


export default Application;