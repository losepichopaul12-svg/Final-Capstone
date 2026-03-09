import { useEffect, useState } from "react";
import axios from "axios";

function Application(){

const [Applications,setApplications] = useState([]);

useEffect(() => {

const fetchApplications = async () => {

try{

const token = localStorage.getItem("token");
const email = localStorage.getItem("email");

const response = await axios.get(
`https://capstonebackend-bh74.onrender.com/application/myapplications/${email}`,
{
headers:{ Authorization:`Bearer ${token}` }
}
);

setApplications(response.data);

}catch(err){
console.error("Failed to fetch applications",err);
}

};

fetchApplications();

},[]);

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