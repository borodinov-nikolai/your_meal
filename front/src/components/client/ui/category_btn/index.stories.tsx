import type { Meta, StoryObj } from "@storybook/react";

import Category_btn from "./";

const meta: Meta<typeof Category_btn> = {
  title: "Button",
  component: Category_btn,
  parameters: {
    layout: "centered",
  },

  argTypes: {
    size: {
      name: "Size",
      control: "radio",
      options: ["small", "normal"],
      defaultValue: { summary: "normal" },
      description: "Change size:",
    },
  },

  args: {
    size: "normal",
    active: false,
    children: "button",
  },
};

export default meta;
type Story = StoryObj<typeof Category_btn>;

export const Normal: Story = {
  args: {
    size: "normal",
  },
};

export const Small: Story = {
  args: {
    size: "small",
  },
};

export const Active_normal: Story = {
  args: {
    active: true,
  },
};
export const Active_small: Story = {
  args: {
    active: true,
    size: "small",
  },
};
