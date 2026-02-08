import type { UserTableColumn } from "./user-table.types";
import type { User } from "../../types/user.types";

export const userTableColumns: UserTableColumn<User>[] = [
  { key: "index", label: "No." },
  { key: "firstName", label: "First Name" },
  { key: "lastName", label: "Last Name" },
  { key: "phone", label: "Contact No" },
  { key: "email", label: "Email" },
  { key: "actions", label: "Action", align: "center" },
];
