import {
  createBrowserRouter,
  RouterProvider,
  useNavigate,
} from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import SettingsPage from "./pages/settings/SettingsPage";
import RootLayout from "./pages/RootLayout";
import LoginPage from "./pages/Login/Login";
import { useEffect } from "react";
import ProtectedRoute from "./pages/ProtecedRoute";
import KanbanBoard from "./components/Kanban/Kanbanboard";
import WelcomePage from "./pages/theme/MyTheme";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: (
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          ),
        },
        {
          path: "/settings",
          element: (
            <ProtectedRoute>
              <SettingsPage />
            </ProtectedRoute>
          ),
        },
        {
          path: "/kanban",
          element: (
            <ProtectedRoute>
              <KanbanBoard />
            </ProtectedRoute>
          ),
        },
        {
          path: "theme",
          element: (
            <ProtectedRoute>
              <WelcomePage/>
            </ProtectedRoute>
          )
        }
      ],
    },
    {
      path: "login",
      element: <LoginPage />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
