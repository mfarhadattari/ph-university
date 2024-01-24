import { Button } from "antd";
import { jwtDecode } from "jwt-decode";
import { useState } from "react";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import PHInput from "../components/form/PHInput";
import Toast from "../components/ui/Toast";
import {
  TLoginCredential,
  useLoginMutation,
} from "../redux/features/auth/authApi";
import { TUser, setUser } from "../redux/features/auth/authSlice";
import { useAppDispatch } from "../redux/hooks";
import PHFrom from "./../components/form/PHFrom";

const Login = () => {
  const [loginUser] = useLoginMutation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const [isLoading, setIsLoading] = useState(false);

  const onFormSubmit = async (data: TLoginCredential) => {
    setIsLoading(true);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const res = (await loginUser(data)) as any;
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
      <div
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
            marginBottom: "20px",
          }}
        >
          User Login
        </h3>
        <PHFrom
          defaultValues={{
            id: "A-0001",
            password: "ph@university",
          }}
          onSubmit={onFormSubmit as SubmitHandler<FieldValues>}
        >
          <PHInput
            type="text"
            label="UserId"
            name="id"
            placeholder="Input your userId"
            requiredMessage="User Id is required"
          />
          <PHInput
            type="password"
            label="Password"
            name="password"
            placeholder="Input your password"
            requiredMessage="Password is required"
          />
          <Button
            type="primary"
            htmlType="submit"
            style={{ width: "100%" }}
            loading={isLoading}
          >
            Login
          </Button>
        </PHFrom>
      </div>
    </div>
  );
};

export default Login;
