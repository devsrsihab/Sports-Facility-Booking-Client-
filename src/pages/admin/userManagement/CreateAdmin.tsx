import { Controller, useForm } from "react-hook-form";
import { Button, Col, Flex, Form, Input } from "antd";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import { useCreateAdminMutation } from "../../../redux/features/user/userApi";

const CreateAdmin = () => {
  const [createAdmin] = useCreateAdminMutation();
  const navigate = useNavigate();
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    mode: "onBlur", 
  });

  const onSubmit = async (data: any) => {
    const loader = toast.loading("Admin Creating...", { duration: 2000 });
    try {
      const { ...admin } = data;
      const adminData = { admin };
          console.log(adminData); 


      const result = await createAdmin(adminData).unwrap();
      if (result) {
        toast.success("Admin Created Successfully", {
          id: loader,
          duration: 2000,
        });
        navigate("/admin/admin-list");
      }
    } catch (error:any) {
      console.log(error);
      toast.error(error.data.message, { id: loader, duration: 2000 });
    }
  };

  return (
    <Flex justify="center" align="center">
      <Col span={8}>
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
                <Input placeholder="Name" {...field} id="name" type="text" />
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
                <Input placeholder="phone" {...field} id="phone" type="phone" />
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
                <Input placeholder="Email" {...field} id="email" type="email" />
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
              Create
            </Button>
          </Form.Item>
        </Form>
      </Col>
    </Flex>
  );
};

export default CreateAdmin;
