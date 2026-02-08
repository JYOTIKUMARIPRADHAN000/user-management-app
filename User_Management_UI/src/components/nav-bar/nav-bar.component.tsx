import { AppBar, Toolbar, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import "../nav-bar/nav-bar.css";

const Navbar = () => {
  return (
    <AppBar className="navbar">
      <Toolbar>
        <Typography className="nav-title">User Management App</Typography>

        <div className="nav-links">
          <NavLink
            to="/"
            end
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <span className="nav-button">Users</span>
          </NavLink>

          <NavLink
            to="/create"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <span className="nav-button">Create User</span>
          </NavLink>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
