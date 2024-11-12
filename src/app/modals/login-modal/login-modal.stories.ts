import type { Meta, StoryObj } from "@storybook/angular";
import { LoginModalComponent } from './login-modal.component';

const meta: Meta<LoginModalComponent> = {
  title: 'Example/LoginModal',
  component: LoginModalComponent,
  tags: ['autodocs'],
}

export default meta;
type Story = StoryObj<LoginModalComponent>;

export const Default: Story = {
  args: {
    isActive: false,
  },
};
