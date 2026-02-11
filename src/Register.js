import { useState } from "react";
import{Link} from "react-router-dom";
import axios from "axios"





function Register(){

const[role,setrole]=useState("");
const[name,setname]=useState("");
const[email,setemail]=useState("");
const[password,setpassword]=useState("")
const[gender,setgender]=useState("");
const[phonenumber,setphonenumber]=useState()



const register= async(e)=>{
    e.preventDefault();
   
    if(!name || !email || !role ||!gender){
        alert("Please fill all fields required")
        return;

    }

   
console.log("Sending user data to register api")
  const response=await axios.post("http://localhost:8082/usersdetail",
    {
   name:name,
   email:email,
   password:password,
   role:role,
   gender:gender,
   phonenumber:phonenumber
    }
  )
  console.log("the response from server is: ", response.data);
  alert(response.data.message)
}

    return(
       <div className="container d-flex justify-content-center align-items-center min-vh-100 mt-3" >
      <div className="col-md-6 col-lg-5 ">
      <div className="card shadow p-4 border-0 border-top border-primary border-4 border-0 border-bottom border-primary border-4" >
        <h3 className="text-center mb-3">Create An Account</h3>
        <hr />

        <form onSubmit={register}>
          
          {/* Full Name */}
          <div className="mb-3">
            <label className="form-label">Enter Full Names</label>
            <input
              type="text"
              className="form-control"
              placeholder="Jordan Walker"
              value={name}
              onChange={(e) =>setname(e.target.value)}
           required
            />
          </div>

          {/* Email */}
          <div className="mb-3">
            <label className="form-label">Your Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="johnjoe@gmail.com"
              value={email}
              onChange={(e) => setemail(e.target.value)}
            required

            />
          </div>
          {/* password */}
           <div className="mb-3">
            <label className="form-label">Enter Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="************"
              value={password}
              onChange={(e) =>setpassword(e.target.value)}
              pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$"
       title="Password must be at least 8 characters long, include uppercase, lowercase, number, and special character"
      
           required
            />
          </div>
           {/* Phone Number */}
          <div className="mb-3">
            <label className="form-label">Enter Phone Number</label>
            <input
              type="text"
              className="form-control"
              value={phonenumber}
              onChange={(e) =>setphonenumber(e.target.value)}
           required
            />
          </div>

          {/* Gender */}
          <div className="mb-3">
            <label className="form-label mb-2 d-block">Gender</label>

            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="gender"
                value="Male"
                onChange={(e) => setgender(e.target.value)}
                required
              />
              <label className="form-check-label">Male</label>
            </div>

            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="gender"
                value="Female"
                onChange={(e) => setgender(e.target.value)}
              />
              <label className="form-check-label">Female</label>
            </div>
          </div>

          {/* Role */}
          <div className="mb-4">
            <label className="form-label">Role</label>
            <select
              className="form-select"
              value={role}
              onChange={(e) => setrole(e.target.value)}
            >
            <option value="" disabled>Select Your Role</option>
            <option value="Employer">Employer</option>
            <option value="Jobseeker">Jobseeker</option>
            </select>
          </div>

          {/* Button */}
          <button className="btn btn-primary w-100" type="button" onClick={register}>
            Register
          </button>

          <p className="text-center mt-3" >
            Already have an account?{" "}
            <Link to="/Login">Sign in</Link>
          </p>

        </form>
      </div>
      </div>
    </div>
    )
}

export default Register;