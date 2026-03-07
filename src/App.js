import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from "./Components/Pages/Navbar.js";
import Home from "./Components/Pages/Home.js";
import Jobs from "./Components/Pages/Jobs.js";
import Login from "./Components/Pages/Login.js";
import Register from "./Components/Pages/Register.js"
import Footer from "./Components/Pages/Footer.js"
import Forgotpassword from './Components/Pages/Forgotpassword.js';
import Resetpassword from './Components/Pages/Resetpassword.js'
import AdminDashboard from './Dash/Admindashboard/pages/AdminDashboard.js';
import JobSeekerDashboard from './Dash/Jobseekerdashboard/pages/JobSeekerDashboard.js';
import EmployerDashboard from './Dash/Employerdashboard/Pages/EmployerDashboard.js';
import {BrowserRouter,Routes,Route } from "react-router-dom";
import Reports  from './Dash/Admindashboard/pages/Reports.js';
import ManageUsers from './Dash/Admindashboard/pages/Manageuser.js';
import Approvedjobs from './Dash/Admindashboard/pages/Approvedjobs.js';
import Application from './Dash/Jobseekerdashboard/pages/Application.js';
import Findjob from './Dash/Jobseekerdashboard/pages/Findjob.js';
import Postnew from './Dash/Employerdashboard/Pages/Postnew.js';
import Newjobs from './Dash/Employerdashboard/Pages/Newjobs.js';
import Applicantlist from './Dash/Employerdashboard/Pages/Applicantlist.js';
import Employerprofile from './Dash/Employerdashboard/Pages/Employerprofile.js';
import Jobseekerprofile from './Dash/Jobseekerdashboard/pages/Jobseekerprofile.js';
import AdminProfile from './Dash/Admindashboard/pages/AdminProfile.js';


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
<Route path='/Resetpassword' element={<Resetpassword/>}></Route>
</Route>

{/* Admin Dashboard */}
<Route path='/AdminDashboard' element={<AdminDashboard/>}>
<Route index element={<AdminProfile/>}></Route>
<Route path='AdminProfile' element={<AdminProfile/>}></Route>
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
<Route path='Jobseekerprofile' element={<Jobseekerprofile/>}></Route>
<Route path='Application' element={<Application/>}></Route>
<Route path='Findjob' element={<Findjob/>}></Route>
</Route>
{/* End of Jobseeker nested dashbaord */}
</Routes>
<Footer></Footer>
</BrowserRouter>
      
  );
}

export default App;
