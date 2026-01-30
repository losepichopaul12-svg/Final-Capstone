import {  useState } from "react";
function Forgotpassword(){

    const [Password,updatePassword]=useState("");
    const [ConfirmPassword, setConfirmPassword] = useState("");
    const [Email,updateEmail]=useState("");
    const HandleSubmit=async(e)=>{
      e.preventDefault();
      if(Password !==ConfirmPassword){
        alert("Password do not match")
        return;
      }
      
      
    }
    return(
      <div className="container d-flex justify-content-center align-items-center min-vh-100 " >
      <div className="col-md-6 col-lg-5 ">
      <div className="card shadow p-4 border-0 border-top border-primary border-4 border-0 border-bottom border-primary border-4" >
        <h3 className="text-center mb-3">Reset New Password</h3>
        <hr />

        <form onSubmit={HandleSubmit}>
          
          {/* enter email */}
          <div className="mb-3">
            <label className="form-label">Enter Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="valencia@gmail.com"
              value={Email}
              onChange={(e) =>updateEmail(e.target.value)}
           required
            />
          </div>

          {/* password*/}
          <div className="mb-3">
            <label className="form-label">New password</label>
            <input
              type="password"
              className="form-control"
              placeholder="*********"
              value={Password}
              onChange={(e) => updatePassword(e.target.value)}
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
              value={ConfirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
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

export default Forgotpassword;