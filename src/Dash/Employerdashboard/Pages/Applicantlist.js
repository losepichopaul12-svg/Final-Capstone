import { useState,useEffect } from "react";
import axios from "axios";
function Applicantlist(){
  //   const applicants = [
  //   {
  //     id: 1,
  //     name: "Losepicho Paul",
  //     job: "Frontend Developer",
  //     status: "Shortlisted"
  //   },
  //   {
  //     id: 2,
  //     name: "Sarah Wanjiru",
  //     job: "UI/UX Designer",
  //     status: "Pending"
  //   }


    
  // ];
  const[Applications,setApplications]=useState([]);
   const newapplicants = async () => {
    console.log("fetching jobs applicants list from the database")
    try {
      const response = await axios.get("https://capstonebackend-bh74.onrender.com/Api/getapplicant");
      console.log("Response from backend:", response.data);
      setApplications(response.data.data); 
    } catch (error) {
      console.error("Error fetching new applicants:", error);
    }
  };

 useEffect(() =>{
  newapplicants()
 },[]);
    return(
         <div className="container mt-3">
      <div className="card p-3 shadow-sm">
        <h4 className="mb-3">Applicants</h4>

        <table className="table table-striped text-center">
          <thead>
            <tr>
              <th>Applicant Full Names</th>
              <th>Job Title</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {Applications.map((Application,index) => (
              <tr key={Application.index}>
                <td>{Application.applicantname}</td>
                <td>{Application.applicantemail}</td>
               <td>{Application.Jobtitle}</td>
                <td>
                  <button className="btn btn-sm btn-outline-success">
                    {Application.status}
                  </button>
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