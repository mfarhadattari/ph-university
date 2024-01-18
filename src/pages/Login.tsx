import { Button, Form, Input } from "antd";
const Login = () => {
  const onFinish = (values) => {
    console.log(values);
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
          name="userId"
          rules={[{ required: true, message: "Please input your user id!" }]}
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
