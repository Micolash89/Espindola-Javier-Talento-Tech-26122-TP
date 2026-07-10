import { Outlet } from "react-router-dom";
import HeaderDashboard from "../components/adminComponents/dashboard/HeaderDashboard";
import Footer from "../components/footer/Footer";

export const AdminLayout = () => {
  return (
    <>
      <HeaderDashboard />
      <main className="container">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
