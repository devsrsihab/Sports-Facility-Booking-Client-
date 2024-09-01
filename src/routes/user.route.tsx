import Bookings from "../pages/admin/booking/Bookings";
import ViewerDashboard from "../pages/viewer/ViewerDashboard";

export const userPaths = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <ViewerDashboard />,
  },
  {
    name: "Bookings",
    path: "bookings",
    element: <Bookings />,
  },
];
