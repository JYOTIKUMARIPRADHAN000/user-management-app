import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { Controller } from "react-hook-form";
import type { FormInputsType } from "./form.types";
import "./form.css";

const FormInputComponent = ({
  control,
  name,
  label,
  type,
  isEditable,
  required,
}: FormInputsType) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <div className="form-label">
          <Typography variant="body2" sx={{ mb: 0.5 }}>
            {label}
            {required && <span className="required-star">*</span>}
          </Typography>

          <TextField
            {...field}
            value={field.value ?? ""}
            onChange={(e) => field.onChange(e.target.value)}
            type={type}
            placeholder={`Enter ${label}`}
            fullWidth
            size="small"
            error={!!fieldState.error}
            helperText={fieldState.error?.message}
            disabled={isEditable}
          />
        </div>
      )}
    />
  );
};

export default FormInputComponent;
