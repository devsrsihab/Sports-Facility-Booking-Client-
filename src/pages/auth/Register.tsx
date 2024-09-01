import React from "react";
import { Button, Form, Input, Row, Col } from "antd";
import { Controller, useForm } from "react-hook-form";
import { useRegisterUserMutation } from "../../redux/features/auth/authApi";
import { toast } from "sonner";
import { Link, useNavigate } from "react-router-dom";

const Register: React.FC = () => {
  const [registerUser] = useRegisterUserMutation();
  const navigate = useNavigate();

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    mode: "onBlur", // You can choose different validation modes like "onChange" or "onSubmit"
  });

  const onSubmit = async (data: any) => {
    const loader = toast.loading("Account Creating...", { duration: 2000 });
    try {
      const { ...user } = data;
      const userData = { user };
      console.log(userData);

      const result = await registerUser(userData).unwrap();
      if (result) {
        toast.success("Account Created Successfully", {
          id: loader,
          duration: 2000,
        });
        navigate("/auth/login");
      }
    } catch (error:any) {
      console.log(error);
      toast.error(error.data.message, { id: loader, duration: 2000 });
    }
  };

  return (
    <Row justify="center">
      <Col span={24} md={{ span: 12 }}>
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Register a New Account
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              Or{" "}
              <Link
                to="/auth/login"
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                Allready have an Account
              </Link>
            </p>
          </div>
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <div className="bg-white p-6 shadow sm:rounded-lg">
              <Form layout="vertical" onFinish={handleSubmit(onSubmit)}>
                <Controller
                  name="name"
                  control={control}
                  render={({ field }) => (
                    <Form.Item
                      label="Name"
                      validateStatus={errors.name ? "error" : ""}
                      help={errors.name?.message as React.ReactNode}
                    >
                      <Input
                        placeholder="Name"
                        {...field}
                        id="name"
                        type="text"
                        className="focus:ring-primary"
                      />
                    </Form.Item>
                  )}
                />

                <Controller
                  name="phone"
                  control={control}
                  render={({ field }) => (
                    <Form.Item
                      label="Phone Number"
                      validateStatus={errors.phone ? "error" : ""}
                      help={errors.phone?.message as React.ReactNode}
                    >
                      <Input
                        placeholder="Phone"
                        {...field}
                        id="phone"
                        type="phone"
                        className="focus:ring-primary"
                      />
                    </Form.Item>
                  )}
                />
                <Controller
                  name="email"
                  control={control}
                  render={({ field }) => (
                    <Form.Item
                      label="Email Address"
                      validateStatus={errors.email ? "error" : ""}
                      help={errors.email?.message as React.ReactNode}
                    >
                      <Input
                        placeholder="Email"
                        {...field}
                        id="email"
                        type="email"
                        className="focus:ring-primary"
                      />
                    </Form.Item>
                  )}
                />

                <Controller
                  name="password"
                  control={control}
                  render={({ field }) => (
                    <Form.Item
                      label="Password"
                      validateStatus={errors.password ? "error" : ""}
                      help={errors.password?.message as React.ReactNode}
                    >
                      <Input
                        placeholder="Password"
                        {...field}
                        id="password"
                        type="password"
                        className="focus:ring-primary"
                      />
                    </Form.Item>
                  )}
                />

                <Form.Item>
                  <Button
                    type="primary"
                    htmlType="submit"
                    className="w-full bg-primary hover:bg-primary-dark text-white"
                  >
                    Register
                  </Button>
                </Form.Item>
              </Form>
            </div>
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default Register;
