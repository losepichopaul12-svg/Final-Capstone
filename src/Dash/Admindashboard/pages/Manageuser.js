import { useEffect, useState } from "react";
import axios from "axios";

function ManageUsers(){
    const[users,setusers]=useState([]);
    
   const userslist = async () => {
    console.log("fetching jobs applicants list from the database")
    try {
      const response = await axios.get("https://capstonebackend-bh74.onrender.com/fetch-users");
      console.log("Response from backend:", response.data);
      setusers(response.data.data); 
    } catch (error) {
      console.error("Error fetching new users:", error);
    }
  };

 useEffect(() =>{
  userslist()
 },[]);
// Blocking user API
 const blockUser = async(id) => {

  try{

    await axios.put(
      `https://capstonebackend-bh74.onrender.com/block-user/${id}`
    )

    alert("User blocked successfully")

    userslist() // refresh table

  }catch(error){

    console.error("Error blocking user",error)

  }

};

// Deleting user API
const deleteUser = async(id) => {

  try{

    await axios.delete(
      `https://capstonebackend-bh74.onrender.com/delete-user/${id}`
    )

    alert("User deleted successfully")

    userslist()

  }catch(error){

    console.error("Error deleting user",error)

  }

};
    // const usersdata=[
    //     {id:1,name:"Mathew deng ",email:"Mathew@gmail.com",role:"Job seeker",status:"Active"},
    //     {id:2,name:"Mactaba Lokai",email:"Lokai@gmail.com",role:"Job seeker",status:"Active"},
    //     {id:3,name:"wilson kout ",email:"kuot@gmail.com",role:"Job seeker",status:"pending"},
    //     {id:4,name:"UNCHR ",email:"mission@gmail.com",role:"Employer",status:"Active"},
    //     {id:5,name:"Peace Wind Japan ",email:"Peace@wind.org",role:"Employer",status:"Active"},
    //     {id:6,name:"Turkana county",email:"turkana023@gmail.com",role:"Employer",status:"Active"},
    //     {id:7,name:"Save The Children ",email:"Hr@Savethechildren.org",role:"Job seeker",status:"Active"},
    //     {id:8,name:"SystemAdmin ",email:"Admin@hubgmail.com",role:"System Admin",status:"Active"},
    // ]
    return(
        <div className="container max-auto">
        <div className="card shadow-sm">
        <div className="card-body">
        <h1 className=" text-center fw-bold"> Platfrom Users</h1>
        <div className="table-responsive-sm">
        <table className="table table-striped table-hover table-bordered align-middle table-padding">
        <thead className="fw-bold text-white text-center table-primary">
        <tr className="table-info">
        <th scope="col">USER NAME</th>
        <th scope="col">EMAIL</th>
        <th scope="col">ROLE</th>
        <th scope="col">GENDER</th>
        <th scope="col">PHONE NUMBER</th>
        <th scope="col">STATUS</th>
        <th scope="col">ACTION</th>
        </tr>
        </thead>
        <tbody>
        {
            users.map((user,index)=>(
                <tr key={index} className="text-center p-3">
                    <td >{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.role}</td>
                    <td>{user.gender}</td>
                    <td>{user.phonenumber}</td>
                    <td>
<span className={
(user.status || "Active") === "Blocked"
? "badge bg-danger"
: "badge bg-success"
}>
{user.status || "Active"}
</span>
</td>
                   <td>

<button
 className="btn btn-sm btn-warning me-2"
 onClick={()=>blockUser(user._id)}
>
Block
</button>

<button
 className="btn btn-sm btn-danger mt-1"
 onClick={()=>deleteUser(user._id)}
>
Delete
</button>

</td>
                </tr>
            ))}
            </tbody>
        </table>
        </div>
        </div>
        </div>
        </div>
    );
}

export default ManageUsers;