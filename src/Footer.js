import{Link} from "react-router-dom"
 import "./footer.css";

function Footer(){


    return(
      <>
          <footer >
      <div className="container">

     <div className="row gy-4 align-items-start text-center text-sm-start">
        <div className="col-sm-4 p-3">
     <h2><strong>Contact Us</strong></h2>
     <p className="text-white"><strong>Email Address:Pastrolcommunity.info.org</strong></p>
     <p><strong>P.O.Box 101-30501 Lodwar</strong></p>
     <p><strong>Tel:0748931344</strong></p>

     </div>
     <div className="col-sm-4 links">
     <h5>Jump to</h5>
      <ul className="nav  mb-3 flex-column">
          <li className="nav-item">
            <Link className="nav-link text-white fw-bolder " to="/Home"><i className="bi bi-house-check me-3"></i> HOME</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white fw-bolder " to="/Jobs"><i className="bi bi-briefcase-fill me-3"></i>JOBS</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white fw-bolder " to="/Login"><i className="bi bi-box-arrow-in-right me-3"></i>LOGIN</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white fw-bolder " to="/Register"><i className="bi bi-person-badge-fill me-3"></i>REGISTER</Link>
          </li>
        </ul>
     </div>
  
     <div className="col-sm-4 mx-auto p-2 follow">
     <h3 className="follow">Follow Us</h3>
     <ul>
    <li><a href="https://www.facebook.com" target="blank" ><i className="fa-brands fa-facebook"></i>Facebook</a></li> 
    <li><a href="https://www.facebook.com" target="blank"><i className="fa-brands fa-whatsapp"></i>WhatsApp</a></li>
    <li><a  href="https://www.whatsapp.com"  target="blank"><i className="fa-brands fa-x-twitter"></i>Twitter</a></li>
    <li> <a  href="https://www.tiktok.com" target="blank" ><i className="fa-brands fa-tiktok"></i>TikTok</a></li>
     </ul>
   </div>


  </div>
  <hr className="fs-2 border border-2 text-bright"></hr>
  <div className="row">
  <div className="text-center small">
  <p className="mb-1">Developed & Maintained by <strong>Trust Shield Technologies</strong></p>
  <p className="mb-0"> &copy;2026 Pastrol community Hub. Privacy Policy | Terms. </p>
  </div>
  </div>
 </div>
</footer>
{/* <Outlet/> */}
</>
      
    )
}

export default Footer;