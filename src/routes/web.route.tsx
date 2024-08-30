import About from "../pages/About";
import ArchiveCategory from "../pages/ArchiveCategory";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import FacilitieDetails from "../pages/FacilitieDetails";
import ContactUs from "../pages/ContactUs";
import Facilities from "../pages/Facilities";
import Home from "../pages/Home";
import Booking from "../pages/Booking";
import ProtectedRoute from "../components/layout/ProtectedRoute";

export const webPaths = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <ContactUs />,
  },
  {
    path: "/facilities",
    element: <Facilities />,
  },
  {
    path: "/facilities/:id",
    element: <FacilitieDetails />,
  },
  {
    path: "/category/:catname",
    element: <ArchiveCategory />,
  },
  {
    path: "/booking/:id",
    element: (
      <ProtectedRoute>
        <Booking />
      </ProtectedRoute>
    ),
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/auth/login",
    element: <Login />,
  },
];
