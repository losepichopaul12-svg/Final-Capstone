import { useEffect, useState } from "react";
import axios from "axios";

function Application(){

const [Applications,setApplications] = useState([]);
const remoteUrl = "https://capstonebackend-bh74.onrender.com";
const localUrl = "http://localhost:8082";


const fetchMyApplications = async () => {
  try {
    const response = await axios.get(`${remoteUrl}/jobseeker/myapplications`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("usertoken")}`
      }
    });

    console.log("My applications:", response.data);
    setApplications(response.data.data);

  } catch (error) {
    console.error(error.response?.data || error.message);
  }
};

useEffect(() => {
  fetchMyApplications();
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

{Applications && Applications.length > 0 ? (

Applications.map((Application,index)=>(
<tr key={index}>
<td>{Application.jobId?.Jobtitle}</td>
<td>{Application.jobId?.Employer}</td>
<td>{Application.status}</td>
</tr>
))

) : (

<tr>
<td colSpan="3">No Applications Found</td>
</tr>

)}

</tbody>

</table>

</div>

);

}

export default Application;