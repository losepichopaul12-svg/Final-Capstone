import { useState } from "react";
import axios from "axios";
function Postnew(){
  const[Jobtitle,setJobtitle]=useState("")
  const[Employer,setEmployer]=useState("");
  const[Location,setLocation]=useState("");
  const[Date,setDate]=useState("")
  const[Salary,setSalary]=useState("")
  const[Description,setDescription]=useState("")
  const[Jobtype,setJobtype]=useState("")


const submitpost= async(e)=>{
  e.preventDefault();
  if(!Jobtitle ||!Employer||!Location||!Jobtype||!Date){
    alert("Input proper job details and proceed to post")
    return;
  }else
    alert("job post submitted successfully")

    const response= await axios.post("http://localhost:8082/newpost",{
      Jobtitle:Jobtitle,Employer:Employer,Location:Location,Selected:Jobtype,Date:Date,Salary:Salary,Description:Description
    })
    console.log("the response from the server is ",response)
}

    return(
       <div className="container my-3">
      <div className="card p-4 shadow-sm">
        <h4 className="mb-3">Post New Job</h4>

        <form onSubmit={submitpost}>
        <label>Job Title</label>
          <input type="text"
           value={Jobtitle} 
           name="Jobtitle"  
           className="form-control mb-2" 
           placeholder="Enter Job Title"
           onChange={(e)=>setJobtitle(e.target.value)} required/>
          <label>Employer Name</label>
          <input type="text" 
           value={Employer} 
           name="Employer"  
           className="form-control mb-2" 
           placeholder="UNHCR"
           onChange={(e)=>setEmployer(e.target.value)}
            required

            />
          <label>Location</label>
          <input className="form-control mb-2"
          value={Location}
          name="Location"
          placeholder="Location" 
          onChange={(e)=>setLocation(e.target.value)}
          required
          />
         <label> Job Type</label>
          <select className="form-select mb-2"
          value={Jobtype}
          name="selected"
          onChange={(e)=>setJobtype(e.target.value)}
          required
          >
        <option value="" disabled>Select Job Type</option>
        <option value="Full-Time">Full-Time</option>
        <option value="Part-Time">Part-Time</option>
        <option value="Contract">Contract</option>
        <option value="Casual">Casual</option>
          </select>
          <label>Deadline Date</label>
          <input type="date" 
          className="form-control mb-2"
          value={Date} 
          name="Date"
          placeholder="01/01/1999"
          onChange={(e)=>setDate(e.target.value)}
          required
          />
          <label>Salary</label>
          <input type="number" 
          className="form-control mb-2"
          value={Salary} 
          name="salary"
          placeholder="30,000"
          onChange={(e)=>setSalary(e.target.value)}
          required
          />
          <label>Job description</label>
          <textarea  class="form-control mb-2" rows="5" 
          value={Description} 
          name="description"
          placeholder="type Job description to this textarea"
          onChange={(e)=>setDescription(e.target.value)}
          required
          ></textarea>
          <button onClick={submitpost}className="btn btn-success" >
            Post Job
          </button>
        </form>
      </div>
    </div>
    );
}

export default Postnew;