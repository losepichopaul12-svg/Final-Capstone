function Reports(){
  const reports = {
  totalUsers: 120,
  jobSeekers: 80,
  employers: 30,
  jobsPosted: 45,
  pendingJobs: 10
};

    return(
<div className="container-sm-4   container-lg-5 text-center justify-content-space-between">
 <h4 className="mb-4 fw-bold text-center">Platform Reports Overview</h4>
<div className="row mt-3 row-cols-1 row-cols-md-2 g-4 mx-auto p-2 justify-content-center g-4">
<div className="col-md-3 my-2">
<div className="card text-bg-primary border-dark p-4">
{/* job seekers report */}
<i className="bi bi-person-workspace fs-3"></i>
<div className="card-header fw-bold fs-20">Job seekers</div>
<p>Job seekers form the majority of users on the platform.</p>
<h3>{reports.jobSeekers}%</h3>

</div>
</div>


{/*employers report column  */}
<div className="col-md-3 my-2">
<div className="card p-4 text-bg-warning border-dark text-white">
<i className="bi bi-person-rolodex fs-3 text-white"></i>
<div className="card-header">Employers</div>
<p>Employers are actively posting jobs, with most jobs approved.</p>
<h3>{reports.employers}%</h3>

</div>
</div>
{/* posted jobs report column */}
<div className="col-md-3 my-2  text-center">
<div className="card p-4 text-bg-success border-dark ">
<i className="bi bi-collection-fill fs-3"></i>
<div className="card-header">Posted Jobs</div>
<p>The platform is experiencing steady growth in job applications.</p>
<h3>{reports.jobsPosted}%</h3>
</div>
</div>
</div>

</div>
   
 



    );
}

export default Reports;