import type { Meta, StoryObj } from '@storybook/react';
import Category_btn from "./";


const meta: Meta<typeof Category_btn> = {
    title: 'category_button',
    component: Category_btn,
   
    args: {
           children: 'button' ,
    }
}

export const Normal: Story = {
    args: {
        active: false,
        size: 'normal'
    }
}
  


export default meta;
type Story = StoryObj<typeof Category_btn>



