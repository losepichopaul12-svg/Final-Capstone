
// import "./Home.css"
import {Link} from "react-router-dom"


function Home(){
// guide array
    const steps=[
        {guide:"1.Create Your Profile",para:"Register and build a professional profile with your skills"},
        {guide:"2.Browse & Apply jobs",para:"Find job opportunities from NGOs,Companies,Business Enterpreneurs,Education institutions and Country wide"},
        {guide:"3.Get Connected ",para:"Employers will review your application and contact you."}
    ]

// jobs array

const jobs=[
    {title:"Community Mobilizer", organization:"save the children",location:"Lokichogio"},
    {title:"IT Support Assistant", organization:"Turkana University",location:"Lodwar"},
    {title:"Field Enumerator", organization:"UNHCR", location:"Kakuma"},
   
]


    return(
        <div>
<div className="container my-5">
  <div className="row justify-content-center">
    <div className="col-12 col-md-10 col-lg-8">
      
      <div className="card bg-primary text-white shadow-lg p-4 text-center">
         <h1 > Welcome to Pastoral Community Hub </h1>
<h4 > Start Your Journey Today </h4>
<p > Discover jobs, opportunities, and growth within the pastoral community.</p>

 {/* Buttons */}
<div className="d-flex flex-column flex-sm-row justify-content-center gap-3 mt-4">
 <Link to="/Jobs" className="btn btn-light px-4">Explore Jobs </Link>
<Link to="/Register" className="btn btn-warning px-4">  Create Account</Link>
        </div>

      </div>
    </div>
  </div>
</div>

<div className="container mt-5" >
<h2 className="mb-4 text-center">how it works</h2>
<div className="row">
 {steps.map((step, index) => (
      <div className="col-md-4 mb-4" key={index}>
        <div className="card h-100 shadow-sm">
          
          <div className="card-body">
            <h5>{step.guide}</h5>
            <p>{step.para}</p>
          </div>
          </div>
          </div>
 ))}

</div>
</div>

<div className="container mt-5">

  <h2 className="mb-4 text-center">Featured Jobs</h2>

  <div className="row">

    {jobs.map((job, index) => (
      <div className="col-md-4 mb-4" key={index}>
        <div className="card h-100 shadow-sm">
          
          <div className="card-body">
            <h5>{job.title}</h5>
            <p>{job.organization}</p>
            <p>{job.location}</p>
            <button className="btn btn-primary w-100">Apply Now</button>
          </div>
        </div>
      </div>
    ))}

  </div>
</div>

<div className="container my-5">
<div className="row justify-content-center">
 <div className="col-12 col-md-10 col-lg-8">
 <div className="card  text-black shadow-lg p-4 text-center" >
 <h1> Why Choose Us</h1>
 <p>Our platform works well even for first-time users. </p>
 <h1>Our Mission</h1>
 <p>To Link Youth with Trusted connected NGOs,Companies and country-wide opportunities.</p>

</div>
</div>
</div>
</div>

</div>


);
}


export default Home;