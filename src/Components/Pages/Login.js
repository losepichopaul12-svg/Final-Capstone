import { useState } from "react" ;
import {Link,useNavigate} from "react-router-dom"
import axios from "axios"
import "./Login.css"




function   Login(){

    const[email,setemail]=useState("");
    const[password,setpassword]=useState("");
    const navigate = useNavigate();
    
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState(null);

    const login = async(e)=>{
            e.preventDefault();
        console.log("Sending login request");
        
        // button loader.
        setLoading(true)
        setTimeout(()=>{
          setData("Welcome loged to the account successfuly!");
          setLoading(false)
        },3000);
        const response = await axios.post("https://capstonebackend-bh74.onrender.com/login",
            {email:email, password:password}
        )
        console.log("the login response is: ",  response.data);
        if(response.data.status === "00" && response.data.role ==="Employer"){
          
          localStorage.setItem("usertoken", response.data.token); //token stored after being generated 
            navigate("/EmployerDashboard");
        }
        else if(response.data.status ==="00" && response.data.role ==="Jobseeker"){
               localStorage.setItem("usertoken", response.data.token); //token stored after being generated 
            navigate("/JobseekerDashboard");
        }
        else if(response.data.status ==="00" && response.data.role ==="Admin"){
                localStorage.setItem("usertoken", response.data.token); //token stored after being generated 
            navigate("/AdminDashboard");
        }
        else{
            alert(response.data.message);
        }
   

    }
    return(
         <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div className="col-md-6 col-lg-5 mt-3">
        <div className="card shadow p-4 border-0 border-top border-primary border-4 border-0 border-bottom border-primary border-4">
          <h3 className="text-center mb-2">Welcome Back !</h3>
          <p className="text-center text-muted mb-3">
            Login to Pastoral Community Hub
          </p>
          <hr/>
          <div>
             {
              loading ?(
                <div></div>
              ):(<h2 className="notification">{data}</h2>)
            }
          </div>

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
            <button className="btn btn-primary w-100 mt-2" type="submit" onClick={login}>Login  </button> <div className="loader"></div>
           
            <div className="checkbox">
            <div className="checkbox2" >
            <input  
             className="form-check-input " type="checkbox"/><label>Remember Me</label>
            <Link to="/Forgotpassword" className="forget">Forgot Password?</Link>
            </div>
            </div>

            <p className="login-para">
              Don’t have an account?{" "}
              <Link to="/Register" className="login-link">Register</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
    )
}


export default Login;