import { Link, Outlet } from "react-router-dom";



function JobSeekerDashboard() {
  return (
    <div className="container my-4 m-vh-w-100 admindashboard-sm-6 admindashboard-lg-5 border rounded-4  ">
     
      <div className="row">
  <div className="col-md-5 col-lg-2  p-3 bg-secondary-subtle border rounded-4">
  {/* links for pages */}
   <h5 className="mb-4 fst-italic fw-bold"> <i class="bi bi-person-circle fs-5 me-2"></i>Job Seeker Panel</h5>
  <div>
          <ul className="nav flex-column gap-2 ">
            <li className="nav-item">
              <Link className="nav-link text-black  shadow-sm bg-white border rounded-4 fst-italic fw-bold" to="Profile"><i class="bi bi-people-fill fs-5 me-2"></i>Profile</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-black  shadow-sm bg-white border rounded-4 fst-italic fw-bold" to="Application"><i class="bi bi-briefcase fs-5 me-2"></i>My Application</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-black  shadow-sm bg-white border rounded-4 fst-italic fw-bold " to="Notification"><i class="bi bi-bell-fill fs-5 me-2"></i>Notification</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-black shadow-sm bg-white  border rounded-4 fst-italic  fw-bold" to="Findjob"><i class="bi bi-journals fs-5 me-2"></i>Find job</Link>
            </li>
            <li className="nav-item mt-2">
              <Link className="nav-link text-white  border rounded-4 bg-danger fst-italic fw-bold " to="/login"><i class="bi bi-box-arrow-in-left fs-5 me-2"></i>Logout</Link>
            </li>
          </ul>
          </div>

  </div>
  {/* main content */}
  <div className="col-sm-10">
  <h1 className="text-center fst-italic  fw-old">Job seeker Dashboard</h1>
 
  <Outlet/>
  </div>
 

</div>   
 </div> //container closing tag
    
    
  );
}

export default JobSeekerDashboard;
