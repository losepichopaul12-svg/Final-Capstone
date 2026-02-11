import axios from "axios";
import { useEffect,useState } from "react";
import "./Jobseekerprofile.css";

function Jobseekerprofile(){
    const [isEditing, setIsEditing] = useState(false);
    const[fullnames,setfullnames]=useState("");
    const[email,setemail]=useState("");
    const[phone,setphone]=useState("");
    const[location,setlocation]=useState("")
    const[biodata,setbiodata]=useState("");
    const[skills,setskills]=useState("");
    const[portfolio,setportfolio]=useState("");
    const[cvurl,setcvurl]=useState("");
    const handlesubmit=async(e)=>{
        e.preventDefault();
        alert("Job seeker details created successfully")
    const response=await axios.post("http://localhost:8082/jobseekerprofile",{
      fullnames:fullnames,
      email:email,
      location:location,
      phone:phone,
      biodata:biodata,
      skills:skills,
      portfolio:portfolio,
      cvurl:cvurl
    })
      console.log("the response from server is: ", response.data);
  alert(response.data.message)
    }

    // fetching filed data to the input of the form
    const fetchjobseekerProfile = async () => {
  try {
    const response = await axios.get(
      "http://localhost:8082/fetch-jobseekerprofile"
    );

    const data = response.data.data;

    setfullnames(data.fullnames);
    setemail(data.email);
    setphone(data.phone);
    setlocation(data.location);
    setbiodata(data.biodata);
    setskills(data.skills)
    setportfolio(data.portfolio);
    setcvurl(data.cvurl);

  } catch (error) {
    console.error("Error fetching profile:", error);
  }
};
useEffect(() =>{
  fetchjobseekerProfile()
 },[]);
    return(
        <div className="container mt-3">
        <div className="card p-4 shadow-sm">
        <h4>Jobseeker Profile Details</h4>
        <form onSubmit={handlesubmit}>
       <div className="row g-3">
       <div className="col">
  <label className="form-check-label mb-2">Full Names</label>
   <input 
   type="text" 
   value={fullnames}
   name="fullnames"
   onChange={(e)=>setfullnames(e.target.value)}
   disabled={!isEditing}
   className="form-control p-2" placeholder="john joe" />
  </div>
  <div className="col">
  <label className="form-check-label mb-2">Email Address</label>
  <input type="email"
  value={email}
   name="email"
   disabled={!isEditing}
   onChange={(e)=>setemail(e.target.value)} className="form-control p-2" placeholder="johnjoe@gmail.com" />
  </div>
       </div>
       <div className="row g-3">
       <div className="col">
  <label className="form-check-label mb-2">Phone Number</label>
   <input 
   type="tel" 
   value={phone}
   name="phone"
   onChange={(e)=>setphone(e.target.value)}
   disabled={!isEditing}
   className="form-control p-2" placeholder="0741034846" />
  </div>
  <div className="col">
  <label className="form-check-label mb-2">Physical Location</label>
  <input type="text"
  value={location}
   name="location"
   disabled={!isEditing}
   onChange={(e)=>setlocation(e.target.value)} className="form-control p-2" placeholder="Lodwar" />
  </div>
       </div>
       <div className="row g-3">
       <div className="col">
  <label className="form-check-label mb-2">Bio Data</label>
   <textarea type="textarea" 
  value={biodata}
   name="biodata"
   disabled={!isEditing}
   onChange={(e)=>setbiodata(e.target.value)}
  className="form-control p-2" rows="5"  />
  </div>
  <div className="col">
  <label className="form-check-label mb-2">Skills</label>
  <textarea type="textarea" 
  value={skills}
   name="skills"
   disabled={!isEditing}
   onChange={(e)=>setskills(e.target.value)}
  className="form-control p-2" rows="5" placeholder="node.js,express.js|javascrirpt" />
  </div>
       </div>
       <div className="row g-3">
       <div className="col">
  <label className="form-check-label mb-2">Portfolio-Link</label>
   <input 
   type="text" 
   value={portfolio}
   name="portfolio"
   onChange={(e)=>setportfolio(e.target.value)}
   disabled={!isEditing}
   className="form-control p-2" placeholder="https://portfolo.com" />
  </div>
  <div className="col">
  <label className="form-check-label mb-2">CV -URL</label>
  <input type="text"
  value={cvurl}
   name="cvurl"
   disabled={!isEditing}
   onChange={(e)=>setcvurl(e.target.value)} className="form-control p-2" placeholder="johnjoe@gmail.com" />
  </div>
   </div>
   <div className="row">
<div className="col">
<button className="btn btn-success mt-3" type="submit"
onClick={() => {
    setIsEditing(false);

    const updatedProfile = {
      fullnames,
      email,
      location,
      phone,
      biodata,
      skills,
      portfolio,
      cvurl
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

export default Jobseekerprofile;