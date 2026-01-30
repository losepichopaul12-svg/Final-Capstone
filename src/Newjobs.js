function Newjobs(){
    const jobs = [
    {
      id: 1,
      title: "Frontend Developer",
      location: "Remote",
      applicants: 12,
      status: "Active"
    },
    {
      id: 2,
      title: "UI/UX Designer",
      location: "Nairobi",
      applicants: 8,
      status: "Pending"
    }
  ];
    return(
        <div className="container mt-3">
      <div className="card p-3 shadow-sm">
        <h4 className="mb-3">My Jobs</h4>

        <table className="table table-bordered text-center">
          <thead className="table-dark">
            <tr>
              <th>Job Title</th>
              <th>Location</th>
              <th>Applicants</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {jobs.map(job => (
              <tr key={job.id}>
                <td>{job.title}</td>
                <td>{job.location}</td>
                <td>{job.applicants}</td>
                <td>
                  <span className="badge bg-success">{job.status}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    );
}
export default Newjobs;