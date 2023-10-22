import { Routes, Route } from "react-router-dom";

import HomePage from "./Pages/HomePage";
import NotFoundPage from "./Pages/NotFoundPage";
import CourseExplorePage from './Pages/CourseExplorePage';
import CourseSearchResultPage from "./Pages/CourseSearchResultPage";
import CourseDetailPage from './Pages/CourseDetailPage';
import SignupPage from './Pages/SignupPage';
import LoginPage from './Pages/LoginPage';
import ForgetPassPage from './Pages/ForgetPassPage';
import ResetPassPage from './Pages/ResetPassPage';
import AdminHome from './Pages/AdminHome';
import StudentHome from './Pages/StudentHome';
import StudentProfile from './Pages/StudentProfile';
import StudentCourse from './Pages/StudentCourse';
import InstructorHome from './Pages/InstructorHome';
import InstructorProfile from './Pages/InstructorProfile';
import InstructorCourse from './Pages/InstructorCourse';
import Layout from "./Components/Layout";




const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout><HomePage /></Layout>} />
      <Route path="/allCourse" element={<Layout><CourseExplorePage /></Layout>} /> 
      <Route path="/searchCourse" element={<Layout><CourseSearchResultPage /></Layout>} />    
      <Route path="/course/:courseId" element={<Layout><CourseDetailPage /></Layout>} /> 
      <Route path="/login" element={<Layout><LoginPage /></Layout>} />
      <Route path="/signup" element={<Layout><SignupPage /></Layout>} />
      <Route path="/forgetPassword" element={<Layout><ForgetPassPage /></Layout>} />
      <Route path="/resetPassword" element={<Layout><ResetPassPage /></Layout>} /> 

      <Route path="/admin-home" element={<Layout><AdminHome /></Layout>} /> 

      <Route path="/student-home" element={<Layout><StudentHome /></Layout>} /> 
      <Route path="/student-profile" element={<Layout><StudentProfile /></Layout>} />  

      <Route path="/instructor-home" element={<Layout><InstructorHome /></Layout>} />  
      <Route path="/instructor-profile" element={<Layout><InstructorProfile /></Layout>} />  
      <Route path="/createCourse" element={<Layout><InstructorCourse /></Layout>} />  

      <Route path="/*" element={<Layout><NotFoundPage /></Layout>} />
    </Routes>
  );
};

export default App;