import { useState } from "react" ;
import {Link,useNavigate} from "react-router-dom"
import axios from "axios"




function   Login(){

    const[email,setemail]=useState("");
    const[password,setpassword]=useState("");


    const navigate = useNavigate();

    const HandleSubmit=async(e)=>{
        e.preventDefault();
        if(!email|| !password){
            alert("Insert Login Credientials ");
            return;
        }
       

        // API
        try {
          console.log("sending login request")
    const response =await axios.post( "http://localhost:8082/login",
      { email, password }
    );
    console.log(response.data);
    if(response.data.status=="02"){
        const role = response.data.user.role;
    localStorage.setItem(
      "user",
      JSON.stringify(response.data.user)
    );
    alert("Login successfuly")

    
    if (role === "admin") {
      navigate("/AdminDashboard");
    } else if (role === "employer") {
      navigate("/EmployerDashboard");
    } else {
      navigate("/JobseekerDashboard");
    }
    }
    else{
      alert(response.data.message);
    }
  } catch (err) {
    alert("Login error");
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

          <form onSubmit={HandleSubmit}>
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
            <button className="btn btn-primary w-100 mt-2">
              Login
            </button>
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