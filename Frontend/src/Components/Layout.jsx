import VisitorNavbar from "./VisitorNavbar";
import AdminNavbar from "./AdminNavbar";
import StudentNavbar from "./StudentNavbar";
import InstructorNavbar from "./InstructorNavbar";

const Layout = ({ children }) => {
  const status = sessionStorage.getItem("status");
  return (
    <div>
      {(() => {
        if(status === "admin"){
          return <AdminNavbar />;
        }else if (status === "student") {
          return <StudentNavbar />;
        } else if (status === "instructor") {
          return <InstructorNavbar />;
        }else{
          return <VisitorNavbar />;
        }
      })()}
      {children}
    </div>
  );
};

export default Layout;
