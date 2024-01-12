import VisitorNavbar from "./VisitorNavbar";
import AdminNavbar from "./AdminNavbar";
import StudentNavbar from "./StudentNavbar";
import InstructorNavbar from "./InstructorNavbar";
import {useSelector} from 'react-redux';

const Layout = ({ children }) => {
  const status = useSelector((state) => state.logAuth.status);
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
