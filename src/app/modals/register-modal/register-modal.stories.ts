import type { Meta, StoryObj } from "@storybook/angular";
import { RegisterModalComponent } from './register-modal.component';

const meta: Meta<RegisterModalComponent> = {
  title: 'Example/RegisterModal',
  component: RegisterModalComponent,
  tags: ['autodocs'],
}

export default meta;
type Story = StoryObj<RegisterModalComponent>;

export const Default: Story = {
  args: {
    isActive: false,
  },
};
