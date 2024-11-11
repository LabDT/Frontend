import type { Meta, StoryObj } from "@storybook/angular";
import { ButtonComponent } from "./button.component";
import { fn } from "@storybook/test";

const meta: Meta<ButtonComponent> = {
  title: 'Example/Button',
  component: ButtonComponent,
  tags: ['autodocs'],
  argTypes: {

  },
  args: { onClick: fn() },
};

export default meta;
type Story = StoryObj<ButtonComponent>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    label: 'Button',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    label: 'Button',
  },
};

export const Header: Story = {
  args: {
    variant: 'header',
    label: 'Button',
  },
};

export const Minimalist: Story = {
  args: {
    variant: 'minimalist',
    label: 'Button',
  },
};

export const Small: Story = {
  args: {
    size: 'small',
    label: 'Button',
  }
}

export const Large: Story = {
  args: {
    size: 'large',
    label: 'Button',
  },
};