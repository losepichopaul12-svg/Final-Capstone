import{Outlet,Link} from "react-router-dom"
// import "./Footer.css";

function Footer(){


    return(
      <>
          <footer className="bg-primary text-light py-4 mt-5 border-top border-warning border-4">
      <div className="container">

     <div className="row gy-4 align-items-start text-center text-sm-start">
        <div className="col-sm-4 p-3">
     <h2><strong>Contact Us</strong></h2>
     <p className="text-white"><strong>Email Address:Pastrolcommunity.info.org</strong></p>
     <p><strong>P.O.Box 101-30501 Lodwar</strong></p>
     <p><strong>Tel:0748931344</strong></p>

     </div>
     <div className="col-sm-4">
     <h1>Jump to</h1>
      <ul className="nav  mb-3 flex-column">
          <li className="nav-item">
            <Link className="nav-link text-white fw-bolder " to="/Home"><i className="bi bi-house-check me-3"></i> HOME</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white fw-bolder " to="/Jobs"><i className="bi bi-briefcase-fill me-2"></i>JOBS</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white fw-bolder " to="/Login"><i className="bi bi-box-arrow-in-right me-2"></i>LOGIN</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white fw-bolder " to="/Register"><i className="bi bi-person-badge-fill me-2"></i>REGISTER</Link>
          </li>
        </ul>
     </div>
  
     <div className="col-sm-4 mx-auto p-2">
     <h3>Follow Us</h3>
  <Link to="#" className="d-flex text-white mb-2  text-decoration-none fw-bold fs-4">
    <i className="bi bi-facebook me-2 fs-4 "></i>
    Facebook
  </Link>

  <Link to="#" className="d-flex text-white mb-2 text-decoration-none fw-bold fs-4">
    <i className="bi bi-whatsapp me-2 fs-4"></i>
    WhatsApp
  </Link>

  <Link to="#" className="d-flex text-white mb-2 text-decoration-none fw-bold fs-4">
    <i className="bi bi-twitter-x me-2 fs-4"></i>
    Twitter
  </Link>

  <Link to="#" className="d-flex text-white text-decoration-none fw-bold fs-4">
    <i className="bi bi-tiktok me-2 fs-4"></i>
    TikTok
  </Link>
</div>


      </div>
      <hr className="fs-4 border border-2 text-white"></hr>
      <div className="row">
        <div className="text-center small">
          <p className="mb-1">
            Developed & Maintained by <strong>Trust Shield Technologies</strong>
          </p>
          <p className="mb-0">
            &copy;2026 Pastrol community Hub. Privacy Policy | Terms.
          </p>
        </div>
        </div>
      </div>
    </footer>
<Outlet/>
</>
      
    )
}

export default Footer;