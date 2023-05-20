import type { Meta, StoryObj } from "@storybook/react";

import Button from "./index";

const meta: Meta<typeof Button> = {
  title: "Example/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    // backgroundColor: { control: "color" },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: "contained",
    label: "Primary Button",
  },
};

export const Secondary: Story = {
  args: {
    variant: "outlined",
    label: "Secondary Button",
  },
};
