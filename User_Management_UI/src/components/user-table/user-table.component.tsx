import Button from "@mui/material/Button";
import TableContainer from "@mui/material/TableContainer";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Fragment } from "react/jsx-runtime";
import type { User } from "../../types/user.types";
import { deleteUser, getUsers } from "../../api/userApi";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import Stack from "@mui/material/Stack";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import { userTableColumns } from "./user-table.data";
import "./user-table.css";
import { Typography } from "@mui/material";
import type { UserTableColumn } from "./user-table.types";

const UserListComponent = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const navigate = useNavigate();
  const loadUsers = async () => {
    try {
      setLoading(true);
      const data = await getUsers();
      setUsers(data);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    loadUsers();
  }, [location.pathname]);

  const renderCell = (
    column: UserTableColumn<User>,
    user: User,
    index: number,
  ) => {
    switch (column.key) {
      case "index":
        return index + 1;

      case "actions":
        return (
          <Stack className="slackName">
            <Button
              size="small"
              variant="outlined"
              onClick={() => navigate(`/view/${user.id}`)}
              className="viewButton"
            >
              View
            </Button>

            <Button
              size="small"
              variant="contained"
              onClick={() => navigate(`/edit/${user.id}`)}
              className="editButton"
            >
              Edit
            </Button>

            <Button
              size="small"
              color="error"
              variant="contained"
              onClick={async () => {
                await deleteUser(user.id!);
                loadUsers();
              }}
            >
              Delete
            </Button>
          </Stack>
        );

      default:
        return user[column.key as keyof User];
    }
  };

  return (
    <Fragment>
      <div className="buttonWrapper">
        <Button
          variant="contained"
          onClick={() => navigate("/create")}
          className="addButton"
        >
          Add User
        </Button>
      </div>

      <TableContainer component={Paper} className="tableContainer">
        <Table>
          <TableHead>
            <TableRow>
              {userTableColumns.map((col) => (
                <TableCell key={col.key as string} align={col.align || "left"}>
                  {col.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {loading ? (
              <TableRow>
                <TableCell colSpan={userTableColumns.length}>
                  <Stack
                    alignItems="center"
                    justifyContent="center"
                    spacing={2}
                    sx={{ height: "20rem" }}
                  >
                    <Typography variant="body1" color="text.secondary">
                      Loading users...
                    </Typography>
                  </Stack>
                </TableCell>
              </TableRow>
            ) : users.length === 0 ? (
              <TableRow>
                <TableCell
                  colSpan={userTableColumns.length}
                  align="center"
                  sx={{ height: "20rem", color: "text.secondary" }}
                >
                  No data found
                </TableCell>
              </TableRow>
            ) : (
              users.map((u, index) => (
                <TableRow key={u.id}>
                  {userTableColumns.map((col) => (
                    <TableCell key={col.key} align={col.align || "left"}>
                      {renderCell(col, u, index)}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Fragment>
  );
};

export default UserListComponent;
