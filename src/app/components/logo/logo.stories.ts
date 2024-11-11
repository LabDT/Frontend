import type { Meta, StoryObj } from "@storybook/angular";
import { LogoComponent } from "./logo.component";
import { fn } from "@storybook/test";

const meta: Meta<LogoComponent> = {
  title: 'Example/Logo',
  component: LogoComponent,
  tags: ['autodocs'],
  args: { onClick: fn() },
};

export default meta;
type Story = StoryObj<LogoComponent>;

export const Default: Story = {};
