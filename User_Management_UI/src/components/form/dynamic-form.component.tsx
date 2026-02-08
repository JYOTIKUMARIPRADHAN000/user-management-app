import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import "./form.css";
import { userSchema, type UserFormData } from "../../schemas/user.schema";
import { emptyUser, userFormConfig } from "./user-form.data";
import FormInputComponent from "./form-inputs.component";
import Button from "@mui/material/Button";
import { Fragment, useEffect } from "react";
import type { DynamicFormType } from "./form.types";

const DynamicFormComponent = ({
  defaultValues,
  onSubmit,
  isEditable,
}: DynamicFormType) => {
  const {
    handleSubmit,
    control,
    reset,
    formState: { isDirty, isSubmitting },
  } = useForm<UserFormData>({
    resolver: zodResolver(userSchema),
    defaultValues: defaultValues ?? emptyUser,
    mode: "onSubmit",
  });

  useEffect(() => {
    if (defaultValues) {
      reset(defaultValues, {
        keepDirty: false,
        keepTouched: false,
      });
    }
  }, [defaultValues, reset]);

  return (
    <div className="formWrapper">
      <form onSubmit={handleSubmit(onSubmit)}>
        {userFormConfig.map((field) => (
          <FormInputComponent
            key={field.name}
            control={control}
            name={field.name}
            label={field.label}
            type={field.type}
            isEditable={isEditable}
            required={field.required}
          />
        ))}
        <div className="form-actions">
          {!isEditable && (
            <Fragment>
              <Button
                type="submit"
                variant="contained"
                color="inherit"
                disabled={!isDirty || isSubmitting}
                className={"submitBtn"}
              >
                Submit
              </Button>

              <Button
                type="button"
                variant="outlined"
                color="secondary"
                onClick={() => reset(defaultValues ?? emptyUser)}
              >
                Cancel
              </Button>
            </Fragment>
          )}
        </div>
      </form>
    </div>
  );
};

export default DynamicFormComponent;
