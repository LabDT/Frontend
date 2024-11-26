import type { Meta, StoryObj } from "@storybook/angular";
import { IconButtonComponent } from './icon-button.component';
import { fn } from "@storybook/test";

const meta: Meta<IconButtonComponent> = {
  title: 'Example/IconButton',
  component: IconButtonComponent,
  tags: ['autodocs'],
  args: { onClick: fn() },
};

export default meta;
type Story = StoryObj<IconButtonComponent>;

export const Search: Story = {
  args: {
    variant: 'search',
  },
};

export const Next: Story = {
  args: {
    variant: 'next',
  },
};

export const Small: Story = {
  args: {
    size: 'small',
  },
};

export const Medium: Story = {
  args: {
    size: 'medium',
  },
};

export const Large: Story = {
  args: {
    size: 'large',
  },
};
