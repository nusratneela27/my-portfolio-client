import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Dashboard from "../pages/Dashboard/Dashboard";
import PrivateRoute from "./PrivateRoute";
import DashboardLayout from "../layout/DashboardLayout";
import AddProjects from "../pages/Dashboard/AddProjects";
import AddBlogs from "../pages/Dashboard/AddBlogs";
import AllProjects from "../pages/Dashboard/AllProjects";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
    ],
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout></DashboardLayout>
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard",
        element: (
          <PrivateRoute>
            <Dashboard></Dashboard>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/all-projects",
        element: (
          <PrivateRoute>
            <AllProjects></AllProjects>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/add-projects",
        element: (
          <PrivateRoute>
            <AddProjects></AddProjects>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/add-blogs",
        element: (
          <PrivateRoute>
            <AddBlogs></AddBlogs>
          </PrivateRoute>
        ),
      },
    ],
  },
]);
