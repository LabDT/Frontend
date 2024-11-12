import type { Meta, StoryObj } from "@storybook/angular";
import { BaseModalComponent } from './base-modal.component';

const meta: Meta<BaseModalComponent> = {
  title: 'Example/BaseModal',
  component: BaseModalComponent,
  tags: ['autodocs'],
}

export default meta;
type Story = StoryObj<BaseModalComponent>;

export const Default: Story = {
  args: {
    isActive: true,
  },
};
