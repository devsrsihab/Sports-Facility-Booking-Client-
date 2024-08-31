import AcademicSemester from "../pages/admin/academicManagement/AcademicSemester";
import CreateAcademicSemester from "../pages/admin/academicManagement/CreateAcademicSemester";
import AdminDashboard from "../pages/admin/AdminDashboard";
import CreateFacility from "../pages/admin/facility/CreateFacility";
import Facilities from "../pages/admin/facility/Facilities";

export const adminPaths = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <AdminDashboard />,
  },
  {
    name: "Semester Management",
    children: [
      {
        name: "Create A. Semester",
        path: "create-academic-semesteter",
        element: <CreateAcademicSemester />,
      },
      {
        name: "Academic Semester",
        path: "academic-semesteter",
        element: <AcademicSemester />,
      },
    ],
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
    ],
  },
];
