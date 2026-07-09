import { Outlet } from "react-router-dom";
import HeaderDashboard from "../components/adminComponents/dashboard/HeaderDashboard";

export const AdminLayout = () => {
  return (
    <>
      <HeaderDashboard />
      <main className="container">
        <Outlet />
      </main>
    </>
  );
};
