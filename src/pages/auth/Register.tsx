import React from "react";
import { Button, Form, Input, Row, Col } from "antd";
import { Controller, useForm } from "react-hook-form";
import { useRegisterUserMutation } from "../../redux/features/auth/authApi";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

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
    } catch (error) {
      console.log(error);
      toast.error("Something Went Wrong", { id: loader, duration: 2000 });
    }
  };

  return (
    <>
      <Row justify="center">
        <Col span={8}>
          <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
              <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                Register a New Account
              </h2>
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
                          type="text"
                        />
                      </Form.Item>
                    )}
                  />

                  <Form.Item>
                    <Button type="primary" htmlType="submit" className="w-full">
                      Register
                    </Button>
                  </Form.Item>
                </Form>

                <div className="mt-6">
                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-gray-300"></div>
                    </div>
                    <div className="relative flex justify-center text-sm">
                      <span className="bg-white px-2 text-gray-500">
                        Or continue with
                      </span>
                    </div>
                  </div>
                  <div className="mt-6 flex gap-4">
                    <a
                      href="#"
                      className="inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-gray-500 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                    >
                      <span className="sr-only">Sign Up with GitHub</span>
                      <svg
                        className="h-5 w-5"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 0C4.477 0 0 4.477 0 10c0 4.418 2.865 8.167 6.839 9.489.5.092.683-.217.683-.482 0-.237-.009-.868-.013-1.703-2.782.605-3.369-1.34-3.369-1.34-.454-1.153-1.11-1.461-1.11-1.461-.908-.62.069-.607.069-.607 1.004.07 1.532 1.031 1.532 1.031.892 1.528 2.341 1.087 2.91.832.091-.647.35-1.087.636-1.337-2.22-.252-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.03-2.682-.103-.253-.447-1.27.097-2.647 0 0 .84-.269 2.75 1.025A9.563 9.563 0 0110 4.803c.852.004 1.71.115 2.51.337 1.908-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.698 1.027 1.591 1.027 2.682 0 3.841-2.339 4.687-4.566 4.935.359.309.679.923.679 1.86 0 1.343-.012 2.425-.012 2.753 0 .268.18.58.688.481A10.014 10.014 0 0020 10c0-5.523-4.477-10-10-10z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default Register;
