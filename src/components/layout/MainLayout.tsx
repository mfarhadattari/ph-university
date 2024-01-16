import { Layout, Menu } from "antd";
import { NavLink, Outlet } from "react-router-dom";

const { Header, Content, Footer, Sider } = Layout;

const items = [
  {
    key: "Dashboard",
    label: <NavLink to="/admin/dashboard">Dashboard</NavLink>,
  },
];

const MainLayout = () => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
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
      <Layout>
        <Header style={{ padding: 0 }} />
        <Content style={{ margin: "24px 16px 0" }}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
            }}
          >
            <Outlet />
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          PH University ©{new Date().getFullYear()} All right reserved
        </Footer>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
