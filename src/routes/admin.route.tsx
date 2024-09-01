import AdminDashboard from "../pages/admin/AdminDashboard";
import Bookings from "../pages/admin/booking/Bookings";
import CreateFacility from "../pages/admin/facility/CreateFacility";
import EditFacility from "../pages/admin/facility/EditFacility";
import Facilities from "../pages/admin/facility/Facilities";
import Admins from "../pages/admin/userManagement/Admins";
import CreateAdmin from "../pages/admin/userManagement/CreateAdmin";

export const adminPaths = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <AdminDashboard />,
  },
  {
    name: "Facility",
    children: [
      {
        name: "Create Facility",
        path: "create-facility",
        element: <CreateFacility />,
      },
      {
        name: "Facilities",
        path: "facilities",
        element: <Facilities />,
      },
      {
        path: "facilities/:id",
        element: <EditFacility />,
      },
    ],
  },
  {
    name: "Bookings",
    path: "bookings",
    element: <Bookings />,
  },
  {
    name: "User Management",
    children: [
      {
        name: "Create Aadmin",
        path: "create-admin",
        element: <CreateAdmin />,
      },
      {
        name: "Admins",
        path: "admin-list",
        element: <Admins />,
      },
    ],
  },
];
