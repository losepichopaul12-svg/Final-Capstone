function Notification(){
    const notifications = [
  {id: 1,message: "Your application for Community Mobilizer is under review.",date: "2025-01-12",type: "info"},
  {id: 2,message: "You have been shortlisted for Data Analyst at Safaricom.", date: "2025-01-08",type: "success"},
  {id: 3,message: "Interview scheduled for HR Assistant position.",date: "2025-01-02",type: "warning"   }
];

    return(
        <div className="container">
        <div className="row">
        {notifications.map((notification,index)=>(
            <div className="col-sm text-center" key={index}>
            <div className="card">
            <div className="card-body m-4">
             <p>Message:{notification.message}</p>
             <p>Date:{notification.date}</p>
             <div>
                <p className="btn btn-info">{notification.type}</p>
             </div>
            </div>

            </div>

            </div>
        ))}

        </div>

        </div>
    );
}
export default Notification;