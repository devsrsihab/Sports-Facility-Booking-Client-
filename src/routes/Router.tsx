import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { routeGenerator } from "../utils/routeGenerator";
import { adminPaths } from "./admin.route";
import Login from "../pages/auth/LoginDraft";
import { webPaths } from "./web.route";
import AdminApp from "../AdminApp";
import { userPaths } from "./user.route";

const router = createBrowserRouter([
  {
    path: "/", // Root path
    element: <App />, // The layout component
    children: routeGenerator(webPaths), // Routes generated for web paths
  },
  {
    path: "/admin",
    element: <AdminApp />,
    children: routeGenerator(adminPaths),
  },
  {
    path: "/user",
    element: <AdminApp />,
    children: routeGenerator(userPaths),
  },
  {
    path: "/admin/auth/login",
    element: <Login />,
  },
]);

export default router;
