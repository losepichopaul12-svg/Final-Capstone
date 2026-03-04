

function ManageUsers(){
    const usersdata=[
        {id:1,name:"Mathew deng ",email:"Mathew@gmail.com",role:"Job seeker",status:"Active"},
        {id:2,name:"Mactaba Lokai",email:"Lokai@gmail.com",role:"Job seeker",status:"Active"},
        {id:3,name:"wilson kout ",email:"kuot@gmail.com",role:"Job seeker",status:"pending"},
        {id:4,name:"UNCHR ",email:"mission@gmail.com",role:"Employer",status:"Active"},
        {id:5,name:"Peace Wind Japan ",email:"Peace@wind.org",role:"Employer",status:"Active"},
        {id:6,name:"Turkana county",email:"turkana023@gmail.com",role:"Employer",status:"Active"},
        {id:7,name:"Save The Children ",email:"Hr@Savethechildren.org",role:"Job seeker",status:"Active"},
        {id:8,name:"SystemAdmin ",email:"Admin@hubgmail.com",role:"System Admin",status:"Active"},
    ]
    return(
        <div className="container max-auto">
        <div className="card shadow-sm">
        <div className="card-body">
        <h1 className=" text-center fw-bold">Manage Users</h1>
        <div className="table-responsive-sm">
        <table className="table table-striped table-hover table-bordered align-middle table-padding">
        <thead className="fw-bold text-white text-center table-primary">
        <tr className="table-info">
        <th scope="col">USER NAME</th>
        <th scope="col">EMAIL</th>
        <th scope="col">ROLE</th>
        <th scope="col">STATUS</th>
        <th scope="col">ACTION</th>
        </tr>
        </thead>
        <tbody>
        {
            usersdata.map((users)=>(
                <tr key={users.id} className="text-center p-3">
                    <td >{users.name}</td>
                    <td>{users.email}</td>
                    <td>{users.role}</td>
                    <td>{users.status}</td> 
                    <td>
                <button className="btn btn-sm btn-warning me-2">Block</button>
                <button className="btn btn-sm btn-danger">Delete</button>
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