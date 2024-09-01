import AdminDashboard from "../pages/admin/AdminDashboard";
import Bookings from "../pages/admin/booking/Bookings";

export const userPaths = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <AdminDashboard />,
  },
  {
    name: "Bookings",
    path: "bookings",
    element: <Bookings />,
  },
];
