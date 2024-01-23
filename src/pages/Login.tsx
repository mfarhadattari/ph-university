import { Button, Form, Input } from "antd";
import { jwtDecode } from "jwt-decode";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Toast from "../components/ui/Toast";
import {
  TLoginCredential,
  useLoginMutation,
} from "../redux/features/auth/authApi";
import { TUser, setUser } from "../redux/features/auth/authSlice";
import { useAppDispatch } from "../redux/hooks";

const Login = () => {
  const [loginUser] = useLoginMutation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const [isLoading, setIsLoading] = useState(false);

  const onFinish = async (values: TLoginCredential) => {
    setIsLoading(true);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const res = (await loginUser(values)) as any;
    if (res.data && res.data.success === true) {
      const data = res.data.data;
      const user = jwtDecode(data.accessToken) as TUser;
      const userInfo = {
        token: data.accessToken,
        user,
      };
      dispatch(setUser(userInfo));
      setIsLoading(false);

      await Toast({ icon: "success", title: res.data.message });
      const redirectURL =
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        location?.state?.from || `/${(user as any).role}/dashboard`;

      navigate(redirectURL);
    } else if (res.error && res.error.data.success === false) {
      const error = res.error.data;
      setIsLoading(false);
      Toast({ icon: "error", title: error.message });
    } else {
      setIsLoading(false);
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
          <Button
            type="primary"
            htmlType="submit"
            style={{ width: "100%" }}
            loading={isLoading}
          >
            Login
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;
