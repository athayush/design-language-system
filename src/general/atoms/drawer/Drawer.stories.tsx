import type { Meta, StoryObj } from '@storybook/react-vite';
import { DrawerWithState } from './DrawerWithState';

const meta = {
  title: 'general/atoms/Drawer',
  component: DrawerWithState,
  parameters: {
    layout: 'centered',
    a11y: {
      config: {
        rules: [
          {
            id: "button-name",
            enabled: false,
          },
        ],
      },
    }
  },
  tags: ['autodocs'],
  args: {
    title: 'Drawer Title',
    description: 'This is a drawer description',
    triggerLabel: 'Open Drawer',
  },
} satisfies Meta<typeof DrawerWithState>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};