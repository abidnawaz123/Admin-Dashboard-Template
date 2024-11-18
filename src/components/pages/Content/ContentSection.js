import Dashboard from "../Dashboard/Dashboard";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import SettingsPage from "../settings/SettingsPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/settings",
    element: <SettingsPage />,
  },
]);

const ContentSection = () => {
  return (
    <RouterProvider router={router} />
  );
};

export default ContentSection;
