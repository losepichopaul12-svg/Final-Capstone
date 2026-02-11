import { useState } from "react" ;
import {Link,useNavigate} from "react-router-dom"
import axios from "axios"




function   Login(){

    const[email,setemail]=useState("");
    const[password,setpassword]=useState("");
    const navigate = useNavigate();

    const login = async(e)=>{
            e.preventDefault();
        console.log("Sending login request");
        
        const response = await axios.post("http://localhost:8082/login",
            {email:email, password:password}
        )
        console.log("the login response is: ",  response.data);
        if(response.data.status === "00" && response.data.role ==="Employer"){
            navigate("/EmployerDashboard");
        }
        else if(response.data.status==="00" && response.data.role==="Jobseeker"){
            navigate("/JobseekerDashboard");
        }
        else if(response.data.status==="00" && response.data.role==="Admin"){
            navigate("/AdminDashboard");
        }
        else{
            alert(response.data.message);
        }
   

    }
    return(
         <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div className="col-md-6 col-lg-5">
        <div className="card shadow p-4 border-0 border-top border-primary border-4 border-0 border-bottom border-primary border-4">
          <h3 className="text-center mb-2">Welcome Back</h3>
          <p className="text-center text-muted mb-3">
            Login to Pastoral Community Hub
          </p>
          <hr />

          <form onSubmit={login}>
            {/* Email */}
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                className="form-control"
                type="email"
                value={email}
                placeholder="Enter your email"
                onChange={(e) => setemail(e.target.value)}
                required
              />
            </div>

            {/* Password */}
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input
                className="form-control"
                type="password"
                value={password}
                placeholder="********"
                onChange={(e) => setpassword(e.target.value)}
                required
              />
            </div>

            {/* Button */}
            <button className="btn btn-primary w-100 mt-2" onClick={login}>
              Login
            </button>
            <input type="checkbox"/><label className="m-3">Remember Me</label>
            <Link to="/Forgotpassword" className="text-center">Forget Password?</Link>

            <p className="text-center mt-3">
              Don’t have an account?{" "}
              <Link to="/Register">Register</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
    )
}


export default Login;