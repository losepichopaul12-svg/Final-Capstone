function Applicantlist(){
    const applicants = [
    {
      id: 1,
      name: "Losepicho Paul",
      job: "Frontend Developer",
      status: "Shortlisted"
    },
    {
      id: 2,
      name: "Sarah Wanjiru",
      job: "UI/UX Designer",
      status: "Pending"
    }
  ];
    return(
         <div className="container mt-3">
      <div className="card p-3 shadow-sm">
        <h4 className="mb-3">Applicants</h4>

        <table className="table table-striped text-center">
          <thead>
            <tr>
              <th>Name</th>
              <th>Job</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {applicants.map(app => (
              <tr key={app.id}>
                <td>{app.name}</td>
                <td>{app.job}</td>
                <td>
                  <button className="btn btn-sm btn-outline-success">
                    {app.status}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    );
}

export default Applicantlist;