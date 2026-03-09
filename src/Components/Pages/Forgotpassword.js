import { useState } from "react"
import axios from "axios"

function Forgotpassword(){

const[email,setEmail]=useState("")
const[userId,setUserId]=useState("")
const[newPassword,setNewPassword]=useState("")

const checkEmail = async ()=>{

try{

const response = await axios.post(
"https://capstonebackend-bh74.onrender.com/forgot-password",
{email: email.toLowerCase()}
)

setUserId(response.data.userId)

alert("Email verified. Enter new password")

}catch(error){

alert("Email not found")

}

}

const resetPassword = async ()=>{

try{

await axios.put(
`https://capstonebackend-bh74.onrender.com/reset-password/${userId}`,
{password:newPassword}
)

alert("Password updated successfully")

}catch(error){

alert("Error resetting password")

}

}

return(

<div className="container mt-5">

<h3>Forgot Password</h3>

<input
type="email"
placeholder="Enter your email"
className="form-control mb-2"
value={email}
onChange={(e)=>setEmail(e.target.value)}
/>

<button
className="btn btn-primary"
onClick={checkEmail}
>
Verify Email
</button>

{userId && (

<div className="mt-3">

<input
type="password"
placeholder="New Password"
className="form-control mb-2"
value={newPassword}
onChange={(e)=>setNewPassword(e.target.value)}
/>

<button
className="btn btn-success"
onClick={resetPassword}
>
Reset Password
</button>

</div>

)}

</div>

)

}

export default Forgotpassword