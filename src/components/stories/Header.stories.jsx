import Header from "../Header";

/**
 * Storybook configuration for Header component
 */
export default {
  title: "Components/Header",
  component: Header,
  tags: ["autodocs"],
  argTypes: {
    title: {
      control: "text",
      description: "Header title text",
    },
  },
};

/**
 * Default header
 */
export const Default = {
  args: {
    title: "Connect Four",
  },
};

/**
 * Game page header
 */
export const GameTitle = {
  args: {
    title: "Game Started",
  },
};

/**
 * Result page header
 */
export const ResultTitle = {
  args: {
    title: "Game Result",
  },
};