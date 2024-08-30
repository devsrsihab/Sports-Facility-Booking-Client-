import { Form, TimePicker } from "antd";
import { Controller } from "react-hook-form";

type TTimePickerProps = {
  name: string;
  label: string;
};


const PHTimePicker = ({ name, label }: TTimePickerProps) => {
  return (
    <Controller
      name={name}
      render={({ field }) => (
        <Form.Item label={label}>
          <TimePicker
            placeholder={label}
            format={"HH:mm"}
            id={name}
            {...field}
          />
        </Form.Item>
      )}
    />
  );
};

export default PHTimePicker;
