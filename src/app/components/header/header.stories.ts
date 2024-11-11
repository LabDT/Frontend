import type { Meta, StoryObj } from "@storybook/angular";
import { HeaderComponent } from "./header.component";
import { fn } from "@storybook/test";

const meta: Meta<HeaderComponent> = {
  title: 'Example/Header',
  component: HeaderComponent,
  tags: ['autodocs'],
}

export default meta;
type Story = StoryObj<HeaderComponent>;

export const Default: Story = {};