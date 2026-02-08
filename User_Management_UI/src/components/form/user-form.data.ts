import type { UserFormData } from "../../schemas/user.schema";
import type { FormFieldConfig } from "../user-table/user-table.types";

export const userFormConfig: FormFieldConfig[] = [
  { name: "firstName", label: "First Name", type: "text", required: true },
  { name: "lastName", label: "Last Name", type: "text", required: true },
  { name: "phone", label: "Phone Number", type: "tel", required: true },
  { name: "email", label: "Email Address", type: "email", required: true },
];

export const emptyUser: UserFormData = {
  firstName: "",
  lastName: "",
  phone: "",
  email: "",
};
