import { Fragment } from "react/jsx-runtime";
import "./App.css";
import AppRoutes from "./routes/app-routes";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <Fragment>
      <AppRoutes />
      <Toaster position="top-center" />
    </Fragment>
  );
};

export default App;
