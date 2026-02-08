import { Fragment } from "react";
import UserListComponent from "../components/user-table/user-table.component";
import "./pages.css";

const UserList = () => {
  return (
    <Fragment>
      <div className="listHeader">User Table</div>
      <UserListComponent />
    </Fragment>
  );
};

export default UserList;
