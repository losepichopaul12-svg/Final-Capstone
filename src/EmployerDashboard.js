import { Link, Outlet } from "react-router-dom";



function EmployerDashboard() {
  return (
    <div className="container my-4 m-vh-w-100 employerndashboard-sm-6 employerdashboard-lg-5 border rounded-4 ">
      
      <div class="row">
  <div class="col-md-5 col-lg-2  p-3 bg-secondary-subtle border rounded-4">
  {/* links for pages */}
   <h5 className="mb-4 text-break "> <i class="bi bi-person-circle p-1"></i>Employer Panel</h5>

          <ul className="nav flex-column gap-2">
            <li className="nav-item">
              <Link className="nav-link text-black fw-bold fs-20 shadow-sm bg-white border rounded-4 fst-italic fw-bold" to="Postnew"> <i class="bi bi-stickies-fill p-1 fs-5 me-2"></i>Post new</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-black fw-bold fs-20 shadow-sm bg-white border rounded-4 fst-italic fw-bold" to="Newjobs"> <i class="bi bi-briefcase-fill p-1 fs-5 me-2"></i>New Jobs</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-black fw-bold fs-20 shadow-sm bg-white border rounded-4 fst-italic fw-bold" to="Applicantlist"><i class="bi bi-person-vcard-fill fs-5 me-2"></i>Applicants List</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-black fw-bold fs-20 shadow-sm bg-white border rounded-4 fst-italic fw-bold" to="Employerprofile"><i class="bi bi-person-lines-fill fs-5 me-2"></i>Profile</Link>
            </li>
            <li className="nav-item mt-3">
              <Link className="nav-link text-white bg-danger border rounded-4" to="/login"><i class="bi bi-box-arrow-in-left fs-5 me-2"></i>Logout</Link>
            </li>
          </ul> 

  </div>
  {/* main content */}
  <div className="col-sm-10">
  <h1 className="text-center fst-italic">Employer Dashboard</h1>
 
  <Outlet/>
  </div>
 

</div>   
 </div> //container closing tag
    
  );}
export default EmployerDashboard;