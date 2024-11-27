import type { Meta, StoryObj } from "@storybook/angular";
import { TableComponent } from "./table.component";
import { fn } from "@storybook/test";

const meta: Meta<TableComponent> = {
  title: 'Example/Table',
  component: TableComponent,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<TableComponent>;

export const Default: Story = {
  args: {
    columns: [
      { key: 'id', title: 'ID' },
      { key: 'name', title: 'Name' },
      { key: 'email', title: 'Email' },
    ],
    rows: [
      { id: 1, name: 'John Doe', email: 'john.doe@example.com' },
      { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com' },
      { id: 3, name: 'Sam Johnson', email: 'sam.johnson@example.com' },
    ],
  },
};
