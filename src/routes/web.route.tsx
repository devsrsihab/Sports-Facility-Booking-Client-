import About from "../pages/About";
import ArchiveCategory from "../pages/ArchiveCategory";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import BookDetails from "../pages/BookDetails";
import ContactUs from "../pages/ContactUs";
import Home from "../pages/Home";

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
    path: "/books/:id",
    element: <BookDetails />,
  },
  {
    path: "/category/:catname",
    element: <ArchiveCategory />,
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
