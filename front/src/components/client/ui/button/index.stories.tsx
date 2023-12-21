import type { Meta, StoryObj } from "@storybook/react";

import Category_btn from "./";

const meta: Meta<typeof Category_btn> = {
  title: "Button",
  component: Category_btn,
  parameters: {
    layout: "centered",
  },



argTypes: {
    color: {
        name:'Color',
        control: 'radio',
        options: ['orange', 'gray'],
        defaultValue: {summary: 'orange'},
        description: 'Change color'
    }
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
    width: 268,
    color: 'orange',
    children: "button",
  },
};

export default meta;
type Story = StoryObj<typeof Category_btn>;



export const Orange: Story = {
    args: {
          
    }
}

export const Gray: Story = {
    args: {
          color:'gray'
    }
}