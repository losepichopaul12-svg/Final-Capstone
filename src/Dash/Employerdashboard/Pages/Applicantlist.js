import { useState,useEffect } from "react";
import axios from "axios";

function Applicantlist(){ 
  
  const[Applications,setApplications]=useState([]);
  const remoteUrl = "https://capstonebackend-bh74.onrender.com";
const localUrl = "http://localhost:8082";

   const newapplicants = async () => {
    console.log("fetching jobs applicants list from the database")
    try {
      const response = await axios.get(`${remoteUrl}/Api/getapplicant`,
         {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("usertoken")}`
      }
    }
      );
      console.log("Response from backend:", response.data);
      setApplications(response.data.data); 
    } catch (error) {
      console.error("Error fetching new applicants:", error);
    }
  };

 useEffect(() =>{
  newapplicants()
 },[]);
//  updating applicant status
const updateStatus = async (id, status) => {

await axios.put(
`https://capstonebackend-bh74.onrender.com/status/update-status/${id}`,{ status });

newapplicants();

};
    return(
         <div className="container mt-3">
      <div className="card p-3 shadow-sm">
        <h4 className="mb-3 heading text-center">Applicants List</h4>

        <table className="table table-striped text-center">
          <thead>
            <tr>
              <th>Applicant Full Names</th>
              <th>Applicant Email Adress</th>
              <th>Job Title</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {Applications.map((Application) => (
              <tr key={Application._id}>
                <td>{Application.applicantname}</td>
                <td>{Application.applicantemail}</td>
               <td>{Application.Jobtitle}</td>
                <td>
                  <button className="btn btn-success m-2" onClick={() => updateStatus(Application._id,"Shortlisted")}>Shortlist</button>
                  <button className="btn btn-danger" onClick={() => updateStatus(Application._id,"Rejected")}>Reject</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    );
}

export default Applicantlist;