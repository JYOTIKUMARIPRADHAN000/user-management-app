import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserList from "../pages/user-list-page";
import UserFormPage from "../pages/user-form-page";
import MainLayout from "../layout/main-layout";

const AppRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<UserList />} />
        <Route path="/create" element={<UserFormPage />} />
        <Route path="/edit/:id" element={<UserFormPage />} />
        <Route path="/view/:id" element={<UserFormPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default AppRoutes;
