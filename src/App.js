import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from "./Navbar.js";
import Home from "./Home.js";
import Jobs from "./Jobs.js";
import Login from "./Login.js";
import Register from "./Register.js"
import Footer from "./Footer.js"
import Forgotpassword from './Forgotpassword.js';
import AdminDashboard from './AdminDashboard.js';
import JobSeekerDashboard from './JobSeekerDashboard.js';
import EmployerDashboard from './EmployerDashboard.js';
import {BrowserRouter,Routes,Route } from "react-router-dom";
import Reports  from './Reports.js';
import ManageUsers from './Manageuser.js';
import Approvedjobs from './Approvedjobs.js';
import Application from './Application.js';
import Findjob from './Findjob.js';
import Notification from "./Notification.js"
import Postnew from './Postnew.js';
import Newjobs from './Newjobs.js';
import Applicantlist from './Applicantlist.js';
import Employerprofile from './Employerprofile.js';
import Jobseekerprofile from './Jobseekerprofile.js';


function App() {


  return (
   <BrowserRouter>
    <Routes>
    {/* Common pages under Navigation bar */}
<Route path='/' element={<Navbar/>}>
<Route index element={<Home/>}></Route>
<Route path='/Home' element={<Home/>}></Route>
<Route path='/Jobs' element={<Jobs/>}></Route>
<Route path='/Login' element={<Login/>}></Route>
<Route path='/Register' element={<Register/>}></Route>
<Route path='/Forgotpassword' element={<Forgotpassword/>}></Route>
</Route>

{/* Admin Dashboard */}
<Route path='/AdminDashboard' element={<AdminDashboard/>}>
<Route path='Manageusers' element={<ManageUsers/>}></Route>
<Route path='Approvedjobs' element={<Approvedjobs/>}></Route>
<Route path='Reports' element={<Reports/>}></Route>
</Route>
{/* Employer dashbaord */}
<Route path='/EmployerDashboard' element={<EmployerDashboard/>}>
<Route index element={<Employerprofile/>}></Route>
<Route path='Postnew' element={<Postnew/>}></Route>
<Route path='Newjobs' element={<Newjobs/>}></Route>
<Route path='Applicantlist' element={<Applicantlist/>}></Route>
<Route path='Employerprofile' element={<Employerprofile/>}></Route>
</Route>

{/* joobseeker dashboard */}
<Route path='/JobseekerDashboard' element={<JobSeekerDashboard/>}>
<Route index element={<Findjob/>}></Route>
<Route path='Jobseekerprofile' element={< Jobseekerprofile/>}></Route>
<Route path='Application' element={<Application/>}></Route>
<Route path='Findjob' element={<Findjob/>}></Route>
<Route path='Notification' element={<Notification/>}></Route>
</Route>
{/* End of Jobseekr nested dashbaord */}
</Routes>
<Footer></Footer>
</BrowserRouter>
      
  );
}

export default App;
