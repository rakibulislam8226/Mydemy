import Navbar from './Navbar';
import Home from "./Home";
import Footer from "./Footer";
import About from "./About";
import TeacherDetail from "./TeacherDetail";
//List
import AllCourses from './AllCourses';
import PopularCourses from './PopularCourses';
import PopularTeacher from './PopularTeacher';
import CategoryCourses from './CategoryCourses';
//student
import Login from "./User/Login";
import Register from "./User/Register";
import Dashboard from "./User/Dashboard";
import CourseDetail from "./CourseDetail";
import {Routes,Route} from 'react-router-dom';
import Mycourses from './User/Mycourses';
import Recommend from './User/Recommend';
import ProfileSetting from './User/ProfileSetting';
//Teacher
import Teacher_Login from "./Teacher/Teacher_Login";
import Teacher_Dashboard from "./Teacher/Teacher_Dashboard";
import Teacher_Register from "./Teacher/Teacher_Register";
import Teacher_Courses from "./Teacher/Teacher_courses";
import Teacher_ProfileSetting from "./Teacher/Teacher_ProfileSetting";

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

        <Route path='/Teacher_Login' element={<Teacher_Login />}/>
        <Route path='/teacher_dashboard' element={<Teacher_Dashboard />}/>
        <Route path='/Teacher_register' element={<Teacher_Register />}/>
        <Route path='/teacher_courses' element={<Teacher_Courses />}/>
        <Route path='/teacher_ProfileSetting' element={<Teacher_ProfileSetting />}/>
        
        <Route path='/teacher_detail/:teacher_id' element={<TeacherDetail />}/>
        <Route path='/AllCourses' element={<AllCourses />}/>
        <Route path='/popular-courses' element={<PopularCourses />}/>
        <Route path='/popular-teacher' element={<PopularTeacher />}/>
        <Route path='/category-courses/:category_slug' element={<CategoryCourses />}/>
      </Routes>
      <Footer />
      
    </div>

  );
}

export default Main;

