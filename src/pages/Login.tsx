import { Button, Form, Input } from "antd";
import Toast from "../components/ui/Toast";
import {
  TLoginCredential,
  useLoginMutation,
} from "../redux/features/auth/authApi";
import { setUser } from "../redux/features/auth/authSlice";
import { useAppDispatch } from "../redux/hooks";
const Login = () => {
  const [loginUser] = useLoginMutation();
  const dispatch = useAppDispatch();
  const onFinish = async (values: TLoginCredential) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const res = (await loginUser(values)) as any;
    if (res.data && res.data.success === true) {
      const data = res.data.data;
      const userInfo = {
        token: data.accessToken,
      };
      dispatch(setUser(userInfo));
      Toast({ icon: "success", title: res.data.message });
    } else if (res.error && res.error.data.success === false) {
      const error = res.error.data;
      Toast({ icon: "error", title: error.message });
    } else {
      Toast({ icon: "warning", title: "Something went wrong!" });
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyItems: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <Form
        onFinish={onFinish}
        layout="vertical"
        style={{
          maxWidth: "100%",
          minWidth: 320,
          margin: "0 auto",
          background: "#0505050F",
          padding: "20px",
          borderRadius: "10px",
        }}
      >
        <h3
          style={{
            textAlign: "center",
          }}
        >
          User Login
        </h3>
        <Form.Item
          style={{
            fontWeight: 500,
          }}
          label="User Id"
          name="id"
          rules={[{ required: true, message: "Please input your user id!" }]}
          initialValue="A-0001"
        >
          <Input placeholder="Input your user id" />
        </Form.Item>
        <Form.Item
          style={{
            fontWeight: 500,
          }}
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
          initialValue="ph@university"
        >
          <Input.Password placeholder="Input your password" type="password" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" style={{ width: "100%" }}>
            Login
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;
