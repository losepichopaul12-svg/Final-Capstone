function Application(){
const Applications=[
    {id: 1,jobtitle: "Community Mobilizer",employer: "World Vision",location:"Lokichogio",date:"2026/01/12",status: "Pending"},
    {id:2,jobtitle: "Data Analyst", employer: "Safaricom", location: "Nairobi",date:"2026/02/02",status:"shortlisted" },
    {id:3,jobtitle: "HR Assistant", employer: "Red Cross", location: "Eldoret" ,date:"2026/01/22",status:"shortlisted"},
    {id:4,jobtitle: "IT Support Assistant",employer: "Turkana University",location:"Lodwar",date:"2026/01/28", status: "Shortlisted"}

]

    return(
         <div className="container max-auto">
        <div className="card shadow-sm">
        <div className="card-body">
        <h1 className=" text-center fw-bold">My Applications</h1>
        <div className="table-responsive-sm">
        <table className="table table-striped table-hover table-bordered align-middle table-padding">
        <thead className="fw-bold  text-center table-primary">
        <tr className="table-info">
        <th scope="col">EMPLOYER</th>
        <th scope="col">JOB TITLE</th>
        <th scope="col">LOCATION</th>
        <th scope="col">APPLICATION DATE</th>
        <th scope="col">STATUS</th>
        </tr>
        </thead>
        <tbody>
        {
            Applications.map((Application)=>(
                <tr key={Application.id} className="text-center p-3">
                    <td >{Application.employer}</td>
                    <td>{Application.jobtitle}</td>
                    <td>{Application.location}</td>
                    <td>{Application.date}</td>
                    <td><button className="btn btn-sm btn-success me-2">{Application.status}</button></td>
                </tr>
            ))}
            </tbody>
        </table>
        </div>
        </div>
        </div>
        </div>
    )
}


export default Application;