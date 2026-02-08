import type { UserFormData } from "../../schemas/user.schema";
import type { User } from "../../types/user.types";

export type DynamicFormType = {
  defaultValues?: User;
  onSubmit: (data: UserFormData) => void;
  isEditable: boolean;
};

export type FormInputsType = {
  control: any;
  name: string;
  label: string;
  type: string;
  isEditable?: boolean;
  required?: boolean;
};
