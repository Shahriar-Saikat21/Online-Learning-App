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

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/allCourse" element={<CourseExplorePage />} /> 
      <Route path="/searchCourse" element={<CourseSearchResultPage />} />    
      <Route path="/course/:courseId" element={<CourseDetailPage />} /> 
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/forgetPassword" element={<ForgetPassPage />} />
      <Route path="/resetPassword" element={<ResetPassPage />} />  
      <Route path="/*" element={<NotFoundPage />} />

    </Routes>
  );
};

export default App;