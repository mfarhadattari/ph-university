import { LoginOutlined } from "@ant-design/icons";
import { Button, Layout } from "antd";
import moment from "moment";
import { Outlet } from "react-router-dom";
import { logout } from "../../redux/features/auth/authSlice";
import { useAppDispatch } from "../../redux/hooks";
import Sidebar from "./Sidebar";

const { Header, Content, Footer } = Layout;

const MainLayout = () => {
  const dispatch = useAppDispatch();
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sidebar />
      <Layout>
        <Header style={{ padding: 0 }}>
          <div
            style={{
              display: "flex",
              justifyContent: "end",
              alignItems: "center",
              gap: "20px",
              margin: "0 10px",
            }}
          >
            <h3 style={{ color: "white" }}>
              {moment().format("Do MMMM YYYY, HH:mm")}
            </h3>
            <Button
              onClick={() => dispatch(logout())}
              danger
              icon={<LoginOutlined />}
            >
              Logout
            </Button>
          </div>
        </Header>
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
