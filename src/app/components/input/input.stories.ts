import type { Meta, StoryObj } from "@storybook/angular";
import { InputComponent } from "./input.component";
import { fn } from "@storybook/test";

const meta: Meta<InputComponent> = {
  title: 'Example/Input',
  component: InputComponent,
  tags: ['autodocs'],
  args: { onClick: fn() },
};

export default meta;
type Story = StoryObj<InputComponent>;

export const Text: Story = {
  args: {
    variant: 'text',
    label: 'Input',
    placeholder: 'text',
  },
};

export const Email: Story = {
  args: {
    variant: 'email',
    label: 'Email',
    placeholder: 'example@example.com',
  },
};

export const Password: Story = {
  args: {
    variant: 'password',
    label: 'Password',
  },
};

export const Search: Story = {
  args: {
    variant: 'search',
    placeholder: 'search...',
  },
};
