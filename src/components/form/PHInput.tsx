import { Form, Input } from "antd";
import { Controller } from "react-hook-form";

type TInputProps = {
  type: string;
  name: string;
  label: string;
  value?: string;
};
const PHInput = ({ type, name, label, value }: TInputProps) => {
  return (
    <Controller
      name={name}
      render={({ field }) => (
        <Form.Item label={label}>
          <Input defaultValue={value} placeholder={label} {...field} id={name} type={type} />
        </Form.Item>
      )}
    />
  );
};

export default PHInput;
