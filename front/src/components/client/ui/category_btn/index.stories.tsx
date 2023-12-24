import type { Meta, StoryObj } from "@storybook/react";

import Category_btn from ".";

const meta: Meta<typeof Category_btn> = {
  title: "Category_button",
  component: Category_btn,
  parameters: {
    layout: "centered",
  },

  // argTypes: {
  //   size: {
  //     name: "Size",
  //     control: "radio",
  //     options: ["small", "normal"],
  //     defaultValue: { summary: "normal" },
  //     description: "Change size:",
  //   },
  // },

  args: {
    active: false,
    children: "button",
  },
};

export default meta;
type Story = StoryObj<typeof Category_btn>;

export const Active: Story = {
  args: {
    active: true,
  },
};
export const Not_Active: Story = {
  args: {
    active: false,
  },
};
