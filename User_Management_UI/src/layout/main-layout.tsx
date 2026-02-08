import { Outlet } from "react-router-dom";
import Navbar from "../components/nav-bar/nav-bar.component";
import { Fragment } from "react/jsx-runtime";

const MainLayout = () => {
  return (
    <Fragment>
      <Navbar />
      <div style={{ padding: 3 }}>
        <Outlet />
      </div>
    </Fragment>
  );
};

export default MainLayout;
