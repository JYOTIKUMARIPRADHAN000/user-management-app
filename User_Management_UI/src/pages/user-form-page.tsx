import { useLocation, useNavigate, useParams } from "react-router-dom";
import DynamicFormComponent from "../components/form/dynamic-form.component";
import { createUser, getUser, updateUser } from "../api/userApi";
import { Fragment, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { emptyUser } from "../components/form/user-form.data";
import type { UserFormData } from "../schemas/user.schema";
import { CircularProgress, Stack, Typography } from "@mui/material";
import "./pages.css";

const UserFormPage = () => {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const isViewMode = location.pathname.includes("view");
  const [user, setUser] = useState<UserFormData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        if (!id) {
          setLoading(false);
          return;
        }

        setLoading(true);
        const response = await getUser(id);
        setUser(response);
      } catch {
        toast.error("Failed to load user");
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [id]);

  const onSubmit = async (formData: UserFormData) => {
    try {
      if (id) {
        await updateUser(id, formData);
        toast.success("User updated successfully");
      } else {
        await createUser(formData);
        toast.success("User created successfully");
      }

      navigate("/");
    } catch {
      toast.error("Something went wrong");
    }
  };

  if (loading) {
    return (
      <div>
        <Stack spacing={2} alignItems="center">
          <CircularProgress size={42} />
          <Typography variant="body1" color="text.secondary">
            Form is loading...
          </Typography>
        </Stack>
      </div>
    );
  }

  return (
    <Fragment>
      <span className="listHeader"> Create User Form</span>
      <DynamicFormComponent
        defaultValues={user ?? emptyUser}
        onSubmit={onSubmit}
        isEditable={isViewMode}
      />
    </Fragment>
  );
};

export default UserFormPage;
