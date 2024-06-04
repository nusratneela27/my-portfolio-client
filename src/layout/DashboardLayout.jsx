import { Outlet } from "react-router-dom";
import Sidebar from "../components/Dashboard/Sidebar";

const DashboardLayout = () => {
  return (
    <div>
      <Sidebar></Sidebar>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
