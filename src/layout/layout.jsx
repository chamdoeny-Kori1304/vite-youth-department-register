import { Outlet } from "react-router-dom";
import Navbar from "../components/common/Navbar";
import Header from "../components/common/Header";

function Layout() {
  return (
    <div>
      <Header />
      <Navbar />
      <Outlet />
    </div>
  );
}

export default Layout;
