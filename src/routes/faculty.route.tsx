import FacultyDashboard from "../pages/faculty/FacultyDashboard";
import OfferedCourse from "../pages/faculty/OfferedCourse";
import generateRoutes from "../utils/generateRoutes";
import generateSidebarItems from "../utils/generateSidebarItems";

const facultyPaths = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <FacultyDashboard />,
  },
  {
    name: "Offered Course",
    path: "offered-course",
    element: <OfferedCourse />,
  },
];

export const facultyRoutes = generateRoutes(facultyPaths);

export const facultySidebarItems = generateSidebarItems(
  facultyPaths,
  "faculty"
);
