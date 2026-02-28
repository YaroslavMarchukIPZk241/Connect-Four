import React from "react";
import SettingsModal from "../SettingsModal";
import { SettingsProvider } from "../../context/SettingsContext"; // шлях до провайдера

export default {
  title: "Complex/SettingsModal",
  component: SettingsModal,
  decorators: [
    (Story) => (
      <SettingsProvider>
        <Story />
      </SettingsProvider>
    ),
  ],
};

const Template = (args) => <SettingsModal {...args} />;

export const Open = Template.bind({});
Open.args = {
  open: true,
  onClose: () => console.log("close"),
};