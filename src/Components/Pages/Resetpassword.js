import { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function Resetpassword(){
const[password,setpassword]=useState("");  
const[newpassword,setnewpassword]=useState("");
 

const submitnewpassword=async(e)=>{
    e.preventDefault();
      if(password !==newpassword){
        alert("Password do not match")
        return;
      }
      
}
    return(
      <div className="container d-flex justify-content-center align-items-center min-vh-100 " >
      <div className="col-md-6 col-lg-5 ">
      <div className="card shadow p-4 border-0 border-top border-primary border-4 border-0 border-bottom border-primary border-4">
       <h3>Reset Password</h3>
       <form onSubmit={submitnewpassword}>
          {/* password*/}
          <div className="mb-3">
            <label className="form-label">New password</label>
            <input
              type="password"
              className="form-control"
              placeholder="*********"
              value={password}
              onChange={(e) => setpassword(e.target.value)}
            required

            />
          </div>

          {/* confirm password */}
          <div className="mb-3">
            <label className="form-label">confirm New password</label>
            <input
              type="password"
              className="form-control"
              placeholder="*************"
              value={newpassword}
              onChange={(e) => setnewpassword(e.target.value)}
            required

            />
          </div>
          {/* Button */}
          <button className="btn btn-primary w-100">
            Reset password
          </button>
       </form>
      </div>
      </div>
      </div>
    );
}

export default Resetpassword;