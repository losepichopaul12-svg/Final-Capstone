
function Approvedjobs(){
    const jobs=[
    {title:"Community Mobilizer", employer:"save the children",location:"Lokichogio",status:"Approved"},
    {title:"IT Support Assistant", employer:"Turkana University",location:"Lodwar",status:"Pending"},
    {title:"Field Enumerator", employer:"UNHCR", location:"Kakuma",status:"Pending"},
   
]

const jobs1=[
     {title:"Operation Manager", employer:"INKO MOKO",location:"Kalobeyei",status:"Pending"},
    {title:"Full Stack Developer", employer:"Kenya Revenue Authority",location:"Nairobi",status:"Pending"},
    {title:"Sales Agents", employer:"Kenya Breweries",location:"Nakuru",status:"Approved"}
]
    
const jobs2 = [
  { title: "Project Officer", employer: "World Vision", location: "Kitale",status:"Approved" },
  { title: "Data Analyst", employer: "Safaricom", location: "Nairobi",status:"Pending" },
  { title: "HR Assistant", employer: "Red Cross", location: "Eldoret",status:"Approved" },
];
const jobs3 = [
  {title: "Project Officer", employer: "World Vision",location: "Marsabit",status:"Pending"},
  {title: "Data Analyst",employer: "Amref Health Africa", location: "Nairobi",status:"Approved"},
  { title: "Logistics Assistant",employer: "International Rescue Committee",location: "Kakuma",status:"Approved" }
];

    return(
         <div className="container mt-2 mx-auto text-center">

  <h2 className="mb-4 text-center fs-italic text-uppercase fw-bold">Approve Job Posts</h2>
  

  <div className="row">

    {jobs.map((job, index) => (
      <div className="col-md-4 mb-4" key={index}>
        <div className="card h-100 shadow-sm">
          
          <div className="card-body">
            <h5 >{job.title}</h5>
            <p >{job.employer}</p>
            <p >{job.location}</p>
            <p>status:<strong>{job.status}</strong></p>
            <button className="btn btn-success ">Approve</button>
            <button className="btn btn-danger m-2">Reject</button>
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
            <p>{job1.employer}</p>
            <p >{job1.location}</p>
             <p>status:<strong>{job1.status}</strong></p>
            <button className="btn btn-success ">Approve</button>
            <button className="btn btn-danger m-2">Reject</button>
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
            <p>{job2.employer}</p>
            <p >{job2.location}</p>
           <p>status:<strong>{job2.status}</strong></p>
            <button className="btn btn-success ">Approve</button>
            <button className="btn btn-danger m-2">Reject</button>
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
            <p>{job3.employer}</p>
            <p >{job3.location}</p>
             <p>status:<strong>{job3.status}</strong></p>
            <button className="btn btn-success ">Approve</button>
            <button className="btn btn-danger m-2">Reject</button>
          </div>
        </div>
      </div>
    ))}
  </div>


{/* container closing tag */}
</div>
    );
}
export default Approvedjobs;