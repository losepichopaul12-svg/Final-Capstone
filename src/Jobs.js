
// import "./Jobs.css";

function Jobs (){
const jobs=[
    {title:"Community Mobilizer", organization:"save the children",location:"Lokichogio"},
    {title:"IT Support Assistant", organization:"Turkana University",location:"Lodwar"},
    {title:"Field Enumerator", organization:"UNHCR", location:"Kakuma"},
   
]

const jobs1=[
     {title:"Operation Manager", organization:"INKO MOKO",location:"Kalobeyei"},
    {title:"Full Stack Developer", organization:"Kenya Revenue Authority",location:"Nairobi"},
    {title:"Sales Agents", organization:"Kenya Breweries",location:"Nakuru"}
]
    
const jobs2 = [
  { title: "Project Officer", organization: "World Vision", location: "Kitale" },
  { title: "Data Analyst", organization: "Safaricom", location: "Nairobi" },
  { title: "HR Assistant", organization: "Red Cross", location: "Eldoret" },
];
const jobs3 = [
  {title: "Project Officer", organization: "World Vision",location: "Marsabit"},
  {title: "Data Analyst",organization: "Amref Health Africa", location: "Nairobi"},
  { title: "Logistics Assistant",organization: "International Rescue Committee",location: "Kakuma" }
];



    return(
        <div className="container mt-5">

  <h2 className="mb-4 text-center text-decoration-underline text-uppercase fw-bold">Featured Jobs</h2>
  

  <div className="row">

    {jobs.map((job, index) => (
      <div className="col-md-4 mb-4" key={index}>
        <div className="card h-100 shadow-sm">
          
          <div className="card-body">
            <h5 >{job.title}</h5>
            <p >{job.organization}</p>
            <p >{job.location}</p>
            <button className="btn btn-primary w-100"> Apply Now</button>
          </div>
        </div>
      </div>
    ))}

  </div>

   {/* jobs1 row */}
  <div className="row">
    {jobs1.map((job1, index) => (
      <div className="col-md-4 mb-4" key={index}>
        <div className="card h-100 shadow-sm">
          <div className="card-body">
            <h5>{job1.title}</h5>
            <p>{job1.organization}</p>
            <p >{job1.location}</p>
             <button className="btn btn-primary w-100">Apply Now</button>
          </div>
        </div>
      </div>
    ))}
  </div>
  {/* jobs 2 row */}
   <div className="row">
    {jobs2.map((job2, index) => (
      <div className="col-md-4 mb-4" key={index}>
        <div className="card h-100 shadow-sm">
          <div className="card-body">
            <h5>{job2.title}</h5>
            <p>{job2.organization}</p>
            <p >{job2.location}</p>
            <button className="btn btn-primary w-100">Apply Now</button>
          </div>
        </div>
      </div>
    ))}
  </div>
   {/* jobs 3 row */}
   <div className="row">
    {jobs3.map((job3, index) => (
      <div className="col-md-4 mb-4" key={index}>
        <div className="card h-100 shadow-sm">
          <div className="card-body">
            <h5>{job3.title}</h5>
            <p>{job3.organization}</p>
            <p >{job3.location}</p>
            <button className="btn btn-primary w-100">Apply Now</button>
          </div>
        </div>
      </div>
    ))}
  </div>


{/* container closing tag */}
</div>
    )
}

export default Jobs;