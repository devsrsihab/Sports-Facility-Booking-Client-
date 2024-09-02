import About from "../pages/About";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import FacilitieDetails from "../pages/FacilitieDetails";
import ContactUs from "../pages/ContactUs";
import Facilities from "../pages/Facilities";
import Home from "../pages/Home";
import Booking from "../pages/Booking";
import ProtectedRoute from "../components/layout/ProtectedRoute";
import NotFound from "../pages/NotFound";
import AutoScrollToTop from "../components/shared/AutoScrollToTop";
export const webPaths = [
  {
    path: "/",
    element: (
      <AutoScrollToTop>
        <Home />
      </AutoScrollToTop>
    ),
  },
  {
    path: "/about",
    element: (
      <AutoScrollToTop>
        <About />
      </AutoScrollToTop>
    ),
  },
  {
    path: "/contact",
    element: (
      <AutoScrollToTop>
        <ContactUs />
      </AutoScrollToTop>
    ),
  },
  {
    path: "/facilities",
    element: (
      <AutoScrollToTop>
        <Facilities />
      </AutoScrollToTop>
    ),
  },
  {
    path: "/facilities/:id",
    element: <FacilitieDetails />,
  },

  {
    path: "/booking/:id",
    element: (
      <AutoScrollToTop>
        <ProtectedRoute roles={["user", "admin"]}>
          <Booking />
        </ProtectedRoute>
      </AutoScrollToTop>
    ),
  },
  {
    path: "/register",
    element: (
      <AutoScrollToTop>
        <Register />
      </AutoScrollToTop>
    ),
  },
  {
    path: "/auth/login",
    element: (
      <AutoScrollToTop>
        <Login />
      </AutoScrollToTop>
    ),
  },
  {
    path: "*",
    element: (
      <AutoScrollToTop>
        <NotFound />
      </AutoScrollToTop>
    ),
  },
];
