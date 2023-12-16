import { Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import {ReactQueryDevtools} from 'react-query/devtools'

import HomePage from "./Pages/HomePage";
import NotFoundPage from "./Pages/NotFoundPage";
import CourseExplorePage from "./Pages/CourseExplorePage";
import CourseSearchResultPage from "./Pages/CourseSearchResultPage";
import CourseDetailPage from "./Pages/CourseDetailPage";
import SignupPage from "./Pages/SignupPage";
import LoginPage from "./Pages/LoginPage";
import ForgetPassPage from "./Pages/ForgetPassPage";
import ResetPassPage from "./Pages/ResetPassPage";
import AdminHome from "./Pages/AdminHome";
import AdminCheckProfilePage from "./Pages/AdminCheckProfilePage";
import AdminNewsPage from "./Pages/AdminNewsPage";
import AdminCategoryPage from "./Pages/AdminCategoryPage";
import StudentHome from "./Pages/StudentHome";
import StudentProfile from "./Pages/StudentProfile";
import InstructorHome from "./Pages/InstructorHome";
import InstructorProfile from "./Pages/InstructorProfile";
import Layout from "./Components/Layout";
import SellSucess from "./Pages/SellSucess";
import PurchaseErrorPage from "./Pages/PurchaseErrorPage";
import PDFDownloadPage from "./Pages/PDFDownloadPage";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <HomePage />
            </Layout>
          }
        />
        <Route
          path="/allCourse"
          element={
            <Layout>
              <CourseExplorePage />
            </Layout>
          }
        />
        <Route
          path="/searchCourse"
          element={
            <Layout>
              <CourseSearchResultPage />
            </Layout>
          }
        />
        <Route
          path="/course/:courseId"
          element={
            <Layout>
              <CourseDetailPage />
            </Layout>
          }
        />
        <Route
          path="/login"
          element={
            <Layout>
              <LoginPage />
            </Layout>
          }
        />
        <Route
          path="/signup"
          element={
            <Layout>
              <SignupPage />
            </Layout>
          }
        />
        <Route
          path="/forgetPassword"
          element={
            <Layout>
              <ForgetPassPage />
            </Layout>
          }
        />
        <Route
          path="/resetPassword"
          element={
            <Layout>
              <ResetPassPage />
            </Layout>
          }
        />

        <Route
          path="/admin-home"
          element={
            <Layout>
              <AdminHome />
            </Layout>
          }
        />
        <Route
          path="/admin-check"
          element={
            <Layout>
              <AdminCheckProfilePage />
            </Layout>
          }
        />
        <Route
          path="/admin-news"
          element={
            <Layout>
              <AdminNewsPage />
            </Layout>
          }
        />
        <Route
          path="/admin-category"
          element={
            <Layout>
              <AdminCategoryPage />
            </Layout>
          }
        />

        <Route
          path="/student-home"
          element={
            <Layout>
              <StudentHome />
            </Layout>
          }
        />
        <Route
          path="/student-profile"
          element={
            <Layout>
              <StudentProfile />
            </Layout>
          }
        />

        <Route
          path="/payemntSuccess/:courseId/:sellerId/:price"
          element={
            <SellSucess/>
          }
        />

        <Route
          path="/cancel"
          element={
            <PurchaseErrorPage/>
          }
        />

        <Route
          path="/certificate/:courseId/:courseTitle"
          element={
            <PDFDownloadPage/>
          }
        />

        <Route
          path="/instructor-home"
          element={
            <Layout>
              <InstructorHome />
            </Layout>
          }
        />
        <Route
          path="/instructor-profile"
          element={
            <Layout>
              <InstructorProfile />
            </Layout>
          }
        />
        <Route
          path="/*"
          element={
            <Layout>
              <NotFoundPage />
            </Layout>
          }
        />
      </Routes>
      <ReactQueryDevtools initialIsOpen={false} position='bottom-right'/>
    </QueryClientProvider>
  );
};

export default App;
