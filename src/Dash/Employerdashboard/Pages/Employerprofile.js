import { useEffect,useState } from "react";
import axios from "axios"
import "./Employerprofile.css"


function Employerprofile(){
  
  const[companyname,setcompanyname]=useState("");
  const[companyemail,setcompanyemail]=useState("");
  const[companyphone,setcompanyphone]=useState("");
  const[companylocation,setcompanylocation]=useState("");
  const[companyindustry,setcompanyindustry]=useState("");
  const[companydescription,setcompanydescription]=useState("");
  
   const [profile, setProfile] = useState(null);
   const userid = localStorage.getItem("userid");


  const handlesubmit=async(e)=>{
    e.preventDefault();
    console.log("USER ID:", localStorage.getItem("userid"));
    if (
  !companyname ||
  !companyemail ||
  !companyphone ||
  !companylocation ||
  !companyindustry ||
  !companydescription
) {
  alert("Please fill all fields");
  return;
}
try{
const response=await axios.post("https://capstonebackend-bh74.onrender.com/employer/employerprofile",
      {
      userid: userid,
      companyname:companyname,
      companyemail:companyemail,
      companyphone:companyphone,
      companylocation:companylocation,
      companyindustry:companyindustry,
      companydescription:companydescription
    })
    console.log("the response from server is: ", response.data);
  alert(response.data.message);
  
  updatedprofile();
}catch(error){
  console.error(error.response?.data || error.message);
    alert("Failed to save profile");
}
    
  }
 // fetching filed data to the input of the form
const updatedprofile = async () => {
  try {
    const response = await axios.post(
      "https://capstonebackend-bh74.onrender.com/employer/fetch-employerprofile",
      {
        userid: localStorage.getItem("userid")
      }
    );

    setProfile(response.data.data);

  } catch (error) {
    console.error(error);
  }
};
useEffect(() => {
  updatedprofile();
}, []);
    return(
<div className="container mt-3">
<div className="row">
{!profile && (
  <p className="text-center text-muted">
    No profile created yet. Please fill the form below.
  </p>
)}
{profile &&(
<div className="col-md-4 mb-2">
<div className="card h-100 shadow-sm">
<div className="card-body d-flex flex-column">
          <h5>Employer  Profile</h5>
          <hr></hr>
           <div className="row">
          <div className="col">
            <h6>Full Names {profile.companyname}</h6>
          </div>
          <div className="col">
          <h6>Email Address:{profile.companyemail}</h6>
          </div>
          </div>
          <div className="row">
          <div className="col">
             <p className="small mb-1"><strong>phone Number</strong>{profile.companyphone}</p>
          </div>
          <div className="col">
         <p className="small mb-1"><strong>Physical Location </strong>{profile.companylocation}</p>
          </div>
          </div>
          <div className="row">
          <div className="col">
            <p className="small mb-1"><strong>Company Industry</strong>{profile.companyindustry}</p>
          </div>
          <div className="col">
        <p className="small mb-1"><strong>Company Description</strong>{profile.companydescription}</p>
          </div>
          </div>
          <div className="col">
<button
className="btn btn-primary"
onClick={()=>{
setcompanyname(profile.companyname);
setcompanyemail(profile.companyemail);
setcompanyphone(profile.companyphone);
setcompanyindustry(profile.companyindustry);
setcompanylocation(profile.companylocation);
setcompanydescription(profile.companydescription);
}}
>
Edit Profile
</button>
</div>
</div>
</div>
</div>
)}
</div>
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
   className="form-control p-2" placeholder="Company name" />
  </div>
  <div className="col">
  <label className="form-check-label mb-2">Email</label>
  <input type="email"
  value={companyemail}
   name="companyemail"
   onChange={(e)=>setcompanyemail(e.target.value)} className="form-control p-2" placeholder="organasition.org.ke" />
  </div>
</div>
<div className="row g-3">
  <div className="col">
  <label className="form-check-label mb-2">Phone Number</label>
   <input type="text" 
   value={companyphone}
   name="companyphone"
   onChange={(e)=>setcompanyphone(e.target.value)}
   className="form-control p-2" placeholder="+254-798-310-541"/>
  </div>
  <div className="col">
  <label className="form-check-label mb-2 ">Location</label>
  <input type="text" 
  value={companylocation}
   name="companylocation"
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
   onChange={(e)=>setcompanyindustry(e.target.value)}
    className="form-control p-2" placeholder="Industry" />
  </div>
  <div className="col">
  <label className="form-check-label mb-2">Company Description</label>
  <textarea type="textarea" 
  value={companydescription}
   name="companydescription"
   onChange={(e)=>setcompanydescription(e.target.value)}
  className="form-control p-2" rows="5" placeholder="A digital transformation agency empowering African youth through technology." />
  </div>
</div>
<div className="col">
<button className="btn btn-primary my-2 g-2 " type="submit" >Send Profile</button>
</div>
</form>

        
      </div>
    </div>
    );
}

export default Employerprofile;