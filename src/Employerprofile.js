import { useState } from "react";
import { useEffect } from "react";
import axios from "axios"
import "./Employerprofile.css"
function Employerprofile(){
  const [isEditing, setIsEditing] = useState(false);
  const[companyname,setcompanyname]=useState("");
  const[companyemail,setcompanyemail]=useState("");
  const[companyphone,setcompanyphone]=useState("");
  const[companylocation,setcompanylocation]=useState("");
  const[companyindustry,setcompanyindustry]=useState("");
  const[companydescription,setcompanydescription]=useState("");
  
  const handlesubmit=async(e)=>{
    e.preventDefault();
    alert("Company profile updated successfully");

    const response=await axios.post("http://localhost:8082/employerdetail",
      {
      companyname:companyname,
      companyemail:companyemail,
      companyphone:companyphone,
      companylocation:companylocation,
      companyindustry:companyindustry,
      companydescription:companydescription
    })
    console.log("the response from server is: ", response.data);
  alert(response.data.message)
  }
  const fetchEmployerProfile = async () => {
  try {
    const response = await axios.get(
      "http://localhost:8082/fetch-employerprofile"
    );

    const data = response.data.data;

    setcompanyname(data.companyname);
    setcompanyemail(data.companyemail);
    setcompanyphone(data.companyphone);
    setcompanylocation(data.companylocation);
    setcompanyindustry(data.companyindustry);
    setcompanydescription(data.companydescription);

  } catch (error) {
    console.error("Error fetching profile:", error);
  }
};
useEffect(() =>{
  fetchEmployerProfile()
 },[]);
    return(
<div className="container mt-3">
<div className="card p-4 shadow-sm">
 <h4 className="mb-3 profileheading">Company Profile</h4>
 <form onSubmit={handlesubmit}>
<div className="row g-3">
  <div className="col">
  <label className="form-check-label mb-2">Company Name</label>
   <input 
   type="text" 
   value={companyname}
   name="companyname"
   onChange={(e)=>setcompanyname(e.target.value)}
   disabled={!isEditing}
   className="form-control p-2" placeholder="Company name" />
  </div>
  <div className="col">
  <label className="form-check-label mb-2">Email</label>
  <input type="email"
  value={companyemail}
   name="companyemail"
   disabled={!isEditing}
   onChange={(e)=>setcompanyemail(e.target.value)} className="form-control p-2" placeholder="organasition.org.ke" />
  </div>
</div>
<div className="row g-3">
  <div className="col">
  <label className="form-check-label mb-2">Phone Number</label>
   <input type="text" 
   value={companyphone}
   name="companyphone"
   disabled={!isEditing}
   onChange={(e)=>setcompanyphone(e.target.value)}
   className="form-control p-2" placeholder="+254-798-310-541"/>
  </div>
  <div className="col">
  <label className="form-check-label mb-2 ">Location</label>
  <input type="text" 
  value={companylocation}
   name="companylocation"
   disabled={!isEditing}
   onChange={(e)=>setcompanylocation(e.target.value)}
  className="form-control p-2" placeholder="Kakuma" />
  </div>
</div>
<div className="row g-3">
  <div className="col">
  <label className="form-check-label mb-2">Company Industry</label>
   <input type="text" 
   value={companyindustry}
   name="companyindustry"
   disabled={!isEditing}
   onChange={(e)=>setcompanyindustry(e.target.value)}
    className="form-control p-2" placeholder="Industry" />
  </div>
  <div className="col">
  <label className="form-check-label mb-2">Company Description</label>
  <textarea type="textarea" 
  value={companydescription}
   name="companydescription"
   disabled={!isEditing}
   onChange={(e)=>setcompanydescription(e.target.value)}
  className="form-control p-2" rows="5" placeholder="A digital transformation agency empowering African youth through technology." />
  </div>
</div>

<div className="row">
<div className="col">
<button className="btn btn-success mt-3" type="submit"
onClick={() => {
    setIsEditing(false);

    const updatedProfile = {
      companyname,
      companyemail,
      companyphone,
      companylocation,
      companyindustry,
      companydescription
    };

    console.log("Updated profile:", updatedProfile);
  
  }}
>Update Profile</button>
</div>
<div className="col">
<button className="btn btn-primary my-2 g-2 " type="button" onClick={() => setIsEditing(true)}>Edit Profile</button>
</div>
</div>
</form>

        
      </div>
    </div>
    );
}

export default Employerprofile;