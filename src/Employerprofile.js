function Employerprofile(){
     const employer = {
    companyName: "Digital Moran Africa",
    email: "hr@digitalmoran.africa",
    phone: "+254 712 345 678",
    location: "Nairobi, Kenya",
    industry: "Technology",
    description:
      "A digital transformation agency empowering African youth through technology."
  };
    return(
<div className="container mt-3">
      <div className="card p-4 shadow-sm">
        <h4 className="mb-3">Company Profile</h4>

        <p><strong>Company:</strong> {employer.companyName}</p>
        <p><strong>Email:</strong> {employer.email}</p>
        <p><strong>Phone:</strong> {employer.phone}</p>
        <p><strong>Location:</strong> {employer.location}</p>
        <p><strong>Industry:</strong> {employer.industry}</p>

        <p className="mt-3">{employer.description}</p>

        <button className="btn btn-primary mt-3" disabled>
          Edit Profile 
        </button>
      </div>
    </div>
    );
}

export default Employerprofile;