import { Link, useNavigate } from "react-router-dom";
import PHForm from "../../components/form/PHForm";
import { Button, Col, Row } from "antd";
import PHInput from "../../components/form/PHInput";
import { useLoginMutation } from "../../redux/features/auth/authApi";
import { SubmitHandler } from "react-hook-form";
import { toast } from "sonner";
import { useAppDispatch } from "../../redux/hooks";
import { TLoginPayload } from "../../types/auth.type";
import { TUser } from "../../types";
import { verifyToken } from "../../utils/verifyToken";
import { setuser } from "../../redux/features/auth/authSlice";

const Login = () => {
  const [login] = useLoginMutation();
  const navigation = useNavigate();
  const dispatch = useAppDispatch();

  const onSubmit: SubmitHandler<TLoginPayload> = async (
    payload: TLoginPayload
  ) => {
    const loader = toast.loading("Account Login...", { duration: 2000 });
    try {
      const res = await login(payload).unwrap();
      const user = verifyToken(res.data.accessToken) as TUser;
      dispatch(setuser({ user: user, token: res.data.accessToken }));

      if (res) {
        toast.success("Account Login Successfully", { id: loader });
        navigation("/");
      }
    } catch (error: any) {
      console.log(error);
      toast.error(error.data.message, { id: loader });
    }
  };

  return (
    <div className="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
          Sign in to your account
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Or{" "}
          <Link
            to="/register"
            className="font-medium text-primary hover:text-primary-dark"
          >
            Sign Up for free
          </Link>
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-lg">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <PHForm onSubmit={onSubmit}>
            <Row gutter={12} justify={"center"} align={"middle"}>
              <Col span={24}>
                <PHInput label="Email" name="email" type="text" />
              </Col>
              <Col span={24}>
                <PHInput label="Password" name="password" type="password" />
              </Col>
            </Row>

            <div className="mt-6">
              <Button
                type="primary"
                htmlType="submit"
                className="w-full bg-primary hover:bg-primary-dark text-white"
              >
                Submit
              </Button>
            </div>
          </PHForm>
        </div>
      </div>
    </div>
  );
};

export default Login;
