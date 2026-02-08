export type FieldType = "text" | "email" | "tel";
export type FormFieldConfig = {
  name: string;
  label: string;
  type: FieldType;
  required?: boolean;
  disabled?: boolean;
};

export type UserTableColumn<T> = {
  key: keyof T | "actions" | "index";
  label: string;
  align?: "left" | "center" | "right";
  render?: (row: T, index: number) => React.ReactNode;
};
