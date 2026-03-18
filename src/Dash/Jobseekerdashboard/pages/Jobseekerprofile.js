import axios from "axios";
import { useEffect,useState } from "react";
import "./Jobseekerprofile.css";

function Jobseekerprofile(){
    const[fullnames,setfullnames]=useState("");
    const[email,setemail]=useState("");
    const[phone,setphone]=useState("");
    const[location,setlocation]=useState("")
    const[biodata,setbiodata]=useState("");
    const[skills,setskills]=useState("");
    const[portfolio,setportfolio]=useState("");
    const[cvurl,setcvurl]=useState("");
   

    const [profile, setProfile] = useState(null);
    const handlesubmit=async(e)=>{
        e.preventDefault();
        alert("Job seeker details created successfully")
    const response=await axios.post("https://capstonebackend-bh74.onrender.com/jobseeker/jobseekerprofile",
      {
      userid: localStorage.getItem("userid"),
      fullnames:fullnames,
      email:email,
      location:location,
      phone:phone,
      biodata:biodata,
      skills:skills,
      portfolio:portfolio?.name,
      cvurl:cvurl?.name
    })
      console.log("the response from server is: ", response.data);
  alert(response.data.message);
 updatedprofile();
    }

    // fetching filed data to the input of the form
const updatedprofile = async () => {
  try {
    const response = await axios.post(
      "https://capstonebackend-bh74.onrender.com/jobseeker/fetch-jobseekerprofile",
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
      <div className="col-md-4 mb-2" >
        <div className="card h-100 shadow-sm">
          
          <div className="card-body d-flex flex-column">
          <h5>Jobseeker Profile</h5>
          <hr></hr>
          <div className="row">
          <div className="col">
            <h6>Full Names {profile.fullnames}</h6>
          </div>
          <div className="col">
          <h6>Email Address{profile.email}</h6>
          </div>
          </div>
          <div className="row">
          <div className="col">
             <p className="small mb-1"><strong>phone Number</strong>{profile.phone}</p>
          </div>
          <div className="col">
         <p className="small mb-1"><strong>Physical Location </strong>{profile.location}</p>
          </div>
          </div>
          <div className="row">
          <div className="col">
            <p className="small mb-1"><strong>Bio Data</strong>{profile.biodata}</p>
          </div>
          <div className="col">
       <p className="small mb-1"><strong>Proficient Skills</strong>{profile.skills}</p>
          </div>
          </div>
           <div className="row">
          <div className="col">
            <p className="fw-bold"><strong>Portfolio</strong>{profile.portfolio}</p>
          </div>
          <div className="col">
       <p className="small text-muted lh-sm mb-2"> Curriculum vitae {profile.cvurl}</p>
          </div>
          </div>
           <div className="col">
<button
className="btn btn-primary"
onClick={()=>{
setfullnames(profile.fullnames);
setemail(profile.email);
setphone(profile.phone);
setlocation(profile.location);
setbiodata(profile.biodata);
setskills(profile.skills);
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
   className="form-control p-2" placeholder="john joe" />
  </div>
  <div className="col">
  <label className="form-check-label mb-2">Email Address</label>
  <input type="email"
  value={email}
   name="email"
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
   className="form-control p-2" placeholder="0741034846" />
  </div>
  <div className="col">
  <label className="form-check-label mb-2">Physical Location</label>
  <input type="text"
  value={location}
   name="location"
   onChange={(e)=>setlocation(e.target.value)} className="form-control p-2" placeholder="Lodwar" />
  </div>
       </div>
       <div className="row g-3">
       <div className="col">
  <label className="form-check-label mb-2">Bio Data</label>
   <textarea type="textarea" 
  value={biodata}
   name="biodata"
   onChange={(e)=>setbiodata(e.target.value)}
  className="form-control p-2" rows="5"  />
  </div>
  <div className="col">
  <label className="form-check-label mb-2">Skills</label>
  <textarea type="textarea" 
  value={skills}
   name="skills"
   onChange={(e)=>setskills(e.target.value)}
  className="form-control p-2" rows="5" placeholder="node.js,express.js|javascrirpt" />
  </div>
       </div>
       <div className="row g-3">
       <div className="col">
  <label className="form-check-label mb-2">Portfolio</label>
   <input 
   type="file" 
  //  value={portfolio}
   name="portfolio"
   onChange={(e)=>setportfolio(e.target.files[0])}
   className="form-control p-2" placeholder="portfolio.jpg" />
  </div>
  <div className="col">
  <label className="form-check-label mb-2">CV File</label>
  <input type="file"
  // value={cvurl}
   name="cvurl"
   onChange={(e)=>setcvurl(e.target.files[0])} className="form-control p-2" placeholder="Aroncv.pdf" />
  </div>
   </div>
   <div className="row">
<div className="col">
<button className="btn btn-success mt-3" type="submit">Send Profile</button>
</div>


</div>

        </form>
            </div>
        </div>
    );
}

export default Jobseekerprofile;