import StudentDashboard from "../pages/student/StudentDashboard";
import generateRoutes from "../utils/generateRoutes";
import generateSidebarItems from "../utils/generateSidebarItems";

const studentPaths = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <StudentDashboard />,
  },
];

export const studentRoutes = generateRoutes(studentPaths);

export const studentSidebarItems = generateSidebarItems(
  studentPaths,
  "student"
);
