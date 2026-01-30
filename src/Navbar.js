import {Outlet,Link } from "react-router-dom"

function Navbar(){


  return (
     <>
<nav className="navbar navbar-expand-lg bg-primary custom-navbar">
  <div className="container">
          
    {/* logo symbol */}
    <Link className="navbar-brand text-white" to="/Home">PASTROL COMMUNITY HUB </Link>

    {/* Hamburger Button */}
    <button
    className="navbar-toggler"
    type="button"
    data-bs-toggle="collapse"
    data-bs-target="#navbarNav"
    >
    <span className="navbar-toggler-icon"></span>
   </button>
          

   {/* Links */}
   <div className="collapse navbar-collapse" id="navbarNav">
   <ul className="navbar-nav ms-auto">
   <li className="nav-item">
   <Link className="nav-link text-white fw-bolder " to="/Home"> 
   <i class="bi bi-house-check me-2"></i> HOME</Link>
   </li>
   <li className="nav-item">
   <Link className="nav-link text-white fw-bolder "to="/Jobs"> 
   <i className="bi bi-briefcase-fill me-2"></i>JOBS</Link>
   </li>
  <li className="nav-item">
  <Link className="nav-link text-white fw-bolder " to="/Login"> 
  <i className="bi bi-box-arrow-in-right me-2"></i>LOGIN</Link>
  </li>
  <li className="nav-item">
  <Link  className="nav-link text-white fw-bolder bg-warning rounded-4 " to="/Register"> 
  <i class="bi bi-person-badge-fill me-2"></i>REGISTER</Link>
  </li>
  </ul>
  </div>
  </div>
  </nav>
  <Outlet />
</>
  );
}

export default Navbar;