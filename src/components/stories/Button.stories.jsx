import Button from "../Button";

export default {
  title: "Basic/Button",
  component: Button,
  argTypes: {
    text: { control: "text" },
    onClick: { action: "clicked" }
  }
};

export const Default = {
  args: {
    text: "Click me"
  }
};

export const Success = {
  args: {
    text: "Success",
    className: "bg-green-500 text-white"
  }
};

export const Danger = {
  args: {
    text: "Delete",
    className: "bg-red-500 text-white"
  }
};