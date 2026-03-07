import { useState } from "react";
import axios from "axios"
import "./Adminprofile.css"

function AdminProfile(){
const[adminname,setadminname]=useState("");
const[adminemail,setadminemail]=useState("");
const[adminphone,setadminphone]=useState("");
const[adminposition,setadminposition]=useState("");


const handlesubmit=async(e)=>{
    e.preventDefault();
     alert("Amin profile updated successfully");
    if(!adminname || !adminemail || !adminphone || !adminposition){
       alert("Please fill all fields required")
        return;
    }
     const response=await axios.post("https://capstonebackend-bh74.onrender.com/Api2/sendadmindetails",
      {
      adminname:adminname,
      adminemail:adminemail,
      adminphone:adminphone,
      adminposition:adminposition,
     
    })
    console.log("the response from server is: ", response.data);
  alert(response.data.message)
}
return(
       <div className="container mt-3">
<div className="card p-4 shadow-sm">
 <h4 className="mb-3 profileheading">Admin Profile</h4>
 <form onSubmit={handlesubmit}>
<div className="row g-3">
  <div className="col">
  <label className="form-check-label mb-2">Admin Name</label>
   <input 
   type="text" 
   value={adminname}
   name="adminname"
   onChange={(e)=>setadminname(e.target.value)}
   className="form-control p-2" placeholder="john doe" required />
  </div>
  <div className="col">
  <label className="form-check-label mb-2">Email</label>
  <input type="email"
  value={adminemail}
   name="adminemail"
   onChange={(e)=>setadminemail(e.target.value)} className="form-control p-2" placeholder="John.hr.trust.org" required />
  </div>
</div>
<div className="row g-3">
  <div className="col">
  <label className="form-check-label mb-2">Phone Number</label>
   <input type="text" 
   value={adminphone}
   name="adminphone"
   onChange={(e)=>setadminphone(e.target.value)}
   className="form-control p-2" placeholder="+254-798-310-541" required/>
  </div>
  <div className="col">
  <label className="form-check-label mb-2 ">Position</label>
  <input type="text" 
  value={adminposition}
   name="adminposition"
   onChange={(e)=>setadminposition(e.target.value)}
  className="form-control p-2" placeholder="Human resource Manager" required />
  </div>
</div>
<button className="btn btn-primary my-2 g-2 " type="button" onClick={handlesubmit}>Edit Profile</button>
</form>
</div>
 </div>
    );
}


export default AdminProfile;