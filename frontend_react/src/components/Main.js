import Navbar from './Navbar';
import Home from "./Home";
import Footer from "./Footer";
import About from "./About";
import Login from "./User/Login"
import Register from "./User/Register"
import Dashboard from "./User/Dashboard"
import CourseDetail from "./CourseDetail";
import {Routes,Route} from 'react-router-dom'
import Mycourses from './User/Mycourses';
import Recommend from './User/Recommend';
import ProfileSetting from './User/ProfileSetting';

function Main() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/detail/:course_id' element={<CourseDetail />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/register' element={<Register />}/>
        <Route path='/dashboard' element={<Dashboard />}/>
        <Route path='/mycourses' element={<Mycourses />}/>
        <Route path='/recommend' element={<Recommend />}/>
        <Route path='/ProfileSetting' element={<ProfileSetting />}/>
      </Routes>
      <Footer />
      
    </div>

  );
}

export default Main;

