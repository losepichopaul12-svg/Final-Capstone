function Findjob(){
 const AvailableJobs = [
  { id:1, title: "Community Mobilizer",employer: "Save the Children",location: "Kakuma",jobType: "Contract",deadline: "2026-02-15"},
  {id: 2,title: "IT Support Assistant",employer: "Turkana University",location: "Lodwar",jobType: "Full-Time",deadline: "2026-02-10"},
  {id: 3,title: "Field Enumerator",employer: "UNHCR",location: "Kalobeyei",jobType: "Temporary",deadline: "2026-01-30"},
  {id:4, title: "Logistics Assistant",employer: "International Rescue Committee",location: "Kakuma",jobType:"Permanent",deadline:"2026-02-28" }
];

    return(
        <div className="container">
        <h2 className="text-center m-3">Available Jobs for you</h2>
        <div className="row">
  {AvailableJobs.map((AvailableJob, index) => (
      <div className="col-md-4 mb-4 text-center" key={index}>
        <div className="card h-100 shadow-5 border border-success">
          
          <div className="card-body">
            <h5 className="p-2">Job Title: {AvailableJob.title}</h5>
            <p>Employer:  {AvailableJob.employer}</p>
            <p>Job Type:  {AvailableJob.jobType}</p>
            <p>Deadline Date:<span>{AvailableJob.deadline}</span> </p>
            <div className="text-center">
                <button className="btn btn-primary text-center">Apply now</button>
            </div>
          </div>
        </div>
      </div>
    ))}
    <hr></hr>

        </div>

        </div>
    );
}


export default Findjob;