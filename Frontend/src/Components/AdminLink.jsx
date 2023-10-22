import {Link} from 'react-router-dom';
import {useState} from 'react';

import AdminPassChangeModal from './AdminPassChangeModal';

const AdminLink = () => {
    const [showAdminPassChangeModal, setAdminPassChangeModal] = useState(false);
    return (
        <div className="flex flex-col md:flex-row md:justify-start md:items-start w-full h-auto pt-[90px] px-[50px]">
            <Link
          to={"/admin-check"}
          className="text-lg text-[#192655] hover:text-gray-600 cursor-pointer mr-5"
        >
          Check Profile
        </Link>
        <Link
          to={"/admin-news"}
          className="text-lg text-[#192655] hover:text-gray-600 cursor-pointer mr-5"
        >
          Add News
        </Link>
        <Link
          to="#"
          className="text-lg text-[#192655] hover:text-gray-600 cursor-pointer mr-5"
          onClick={() => setAdminPassChangeModal(true)}
        >
          Change Password
        </Link>
        <Link
          to={"/admin-category"}
          className="text-lg text-[#192655] hover:text-gray-600 cursor-pointer"
        >
          Add Category
        </Link>
        <AdminPassChangeModal isVisible={showAdminPassChangeModal} onClose={()=>{setAdminPassChangeModal(false)}}/>
        </div>
    );
};

export default AdminLink;