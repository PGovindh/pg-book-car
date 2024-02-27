import './styles/common.css'
// import MainNavbar from './components/mainNavbar';
// import Login from './components/auth/login';
// import EmployeeDashboard from './components/employee/employeeDashboard';
// import ManagerDashboard from './components/manager/managerDashboard';
// import SignUp from './components/auth/signup';
// import Logout from './components/auth/logout';
import UserDashboard from './components/user/dashboard';
import UserCarDetail from './components/common-components/cardetail';
import { Route, Routes } from 'react-router';
import SignUp from './components/auth/signup';
import Login from './components/auth/login';
import Header from './components/header';
import Footer from './components/footer'

function App() {
  return (
    <div className="app-body overflow-x-hidden" >
      <Header></Header>
      <Routes>
          <Route path="/" element={<  SignUp />}></Route>
          <Route path="/auth/login" element={<  Login />}></Route>

          <Route path="/user/dashboard" element={<  UserDashboard />}></Route>
          <Route path="/user/cardetail" element={<  UserCarDetail />}></Route>
         
          {/* <Route path="/employee/dashboard" element={<EmployeeDashboard />}></Route>
          <Route path="/backlog/sprint/tasks:pid" element={<Backlog />}></Route>
          <Route path="/post/employee/project" element={<PostEmployeeProject />}></Route>
          <Route path="/manager/dashboard" element={<ManagerDashboard />}></Route>
          <Route path="/employee/post" element={<PostEmployee />}></Route>
          <Route path="/auth/login" element={<FirstPage />}></Route>
          <Route path="/auth/reset" element={<Reset />}></Route>
          <Route path="/auth/signup" element={<SignUp />}></Route>
          <Route path="/auth/logout" element={<Logout />}></Route>
          <Route path="/manager/dashboard" element={<ManagerDashboard />}></Route>
             */}
          
        </Routes>
        <Footer/>
    </div>
  );
}

export default App;