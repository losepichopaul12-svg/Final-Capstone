import { Link, Outlet } from "react-router-dom";



function AdminDashboard() {
  return (
    <div className="container my-4 m-vh-w-100 admindashboard-sm-6 admindashboard-lg-5 border rounded-4  ">
     
      <div className="row">
  <div className="col-md-5 col-lg-2  p-3 bg-secondary-subtle border rounded-4">
  {/* links for pages */}
   <h5 className="mb-4 fst-italic fw-bold"> <i class="bi bi-person-circle fs-5 me-2"></i>Admin Panel</h5>
  <div className="mt-5">
          <ul className="nav flex-column gap-2 ">
            <li className="nav-item">
              <Link className="nav-link text-black fw-bold fs-20 shadow-sm bg-white border rounded-4 fst-italic fw-bold" to="ManageUsers"><i class="bi bi-people-fill fs-5 me-2"></i>Manage Users</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-black fw-bold fs-20 shadow-sm bg-white border rounded-4 fst-italic fw-bold" to="Approvedjobs"><i class="bi bi-briefcase-fill fs-5 me-2"></i>Approved Jobs</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-black fw-bold fs-20 shadow-sm bg-white border rounded-4 fst-italic fw-bold " to="Reports"><i class="bi bi-clipboard-data-fill fs-5 me-2"></i>View Reports</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-black fw-bold fs-20 shadow-sm bg-white  border rounded-4 fst-italic  fw-bold" to="Profile"><i class="bi bi-people-fill fs-5 me-2"></i>Profile</Link>
            </li>
            <li className="nav-item mt-2">
              <Link className="nav-link text-white fw-bold fs-20 border rounded-4 bg-danger fst-italic fw-bold " to="/login"><i class="bi bi-box-arrow-in-left fs-5 me-2"></i>Logout</Link>
            </li>
          </ul>
          </div>

  </div>
  {/* main content */}
  <div className="col-sm-10 p-5">
  <h1 className="text-center fst-italic  fw-old ">Admin Dashboard</h1>
 
  <Outlet/>
  </div>
 

</div>   
 </div> //container closing tag
    
  );
}

export default AdminDashboard;
