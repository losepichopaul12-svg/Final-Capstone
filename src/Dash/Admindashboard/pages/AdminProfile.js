import { useState } from "react";
import axios from "axios"
import "./Adminprofile.css"

function AdminProfile(){
const[name,setname]=useState("");
const[email,setemail]=useState("");
const[phone,setphone]=useState("");
const[position,setposition]=useState("");


const handlesubmit = async (e) => {
  e.preventDefault();

  try {
    console.log("Sending user data to register API");

    const response = await axios.post(
      "https://capstonebackend-bh74.onrender.com/admindetails",
      {
        name,
        email,
        phone,
        position
      }
    );

    console.log("Server response:", response.data);
    alert(response.data.message);

  } catch (error) {
    console.error("Error:", error);
    alert("Failed to save admin profile");
  }
};
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
   value={name}
   name="name"
   onChange={(e)=>setname(e.target.value)}
   required
   className="form-control p-2" placeholder="john doe"  />
  </div>
  <div className="col">
  <label className="form-check-label mb-2">Email</label>
  <input type="email"
  value={email}
   name="email"
   onChange={(e)=>setemail(e.target.value)} 
   required
   className="form-control p-2" placeholder="John.hr.trust.org"  />
  </div>
</div>
<div className="row g-3">
  <div className="col">
  <label className="form-check-label mb-2">Phone Number</label>
   <input type="text" 
   value={phone}
   name="phone"
   onChange={(e)=>setphone(e.target.value)}
   required
   className="form-control p-2" placeholder="+254-798-310-541" />
  </div>
  <div className="col">
  <label className="form-check-label mb-2 ">Position</label>
  <input type="text" 
  value={position}
   name="position"
   onChange={(e)=>setposition(e.target.value)}
   required 
  className="form-control p-2" placeholder="Human resource Manager" />
  </div>
</div>
<button className="btn btn-primary my-2 g-2" type="submit">Update Profile</button>
</form>
</div>
 </div>
    );
}


export default AdminProfile;