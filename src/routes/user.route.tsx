import ViewerBorrowings from "../pages/viewer/ViewerBorrowed/ViewerBorrowings";
import ViewerDashboard from "../pages/viewer/ViewerDashboard";

export const userPaths = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <ViewerDashboard />,
  },
  {
    name: "Books",
    children: [
      {
        name: "Borrowed Books", 
        path: "borrowed-books",
        element: <ViewerBorrowings/>
      }
    ]
  }
];
