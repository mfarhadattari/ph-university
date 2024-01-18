import { Menu } from "antd";
import Sider from "antd/es/layout/Sider";
import { adminSidebarItems } from "../../routes/admin.route";
import { facultySidebarItems } from "../../routes/faculty.route";
import { studentSidebarItems } from "../../routes/student.route";
import { TRole } from "../../types";

const USER_ROLE = {
  ADMIN: "admin",
  FACULTY: "faculty",
  STUDENT: "student",
};

const Sidebar = () => {
  let items;
  const role: TRole = "student";

  switch (role) {
    case USER_ROLE.ADMIN:
      items = adminSidebarItems;
      break;
    case USER_ROLE.FACULTY:
      items = facultySidebarItems;
      break;
    case USER_ROLE.STUDENT:
      items = studentSidebarItems;
      break;
    default:
      break;
  }

  return (
    <Sider
      breakpoint="lg"
      collapsedWidth="0"
      onBreakpoint={(broken) => {
        console.log(broken);
      }}
      onCollapse={(collapsed, type) => {
        console.log(collapsed, type);
      }}
    >
      <div
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: "10px 0",
        }}
      >
        <h1 style={{ color: "white", textAlign: "center" }}>PH University</h1>
      </div>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["4"]}
        items={items}
      />
    </Sider>
  );
};

export default Sidebar;
