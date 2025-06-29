import type { Meta, StoryObj } from "@storybook/react";
import { Example } from "./Example";

const meta: Meta<typeof Example> = {
  component: Example,
  title: "Components/Example",
};
export default meta;
type Story = StoryObj<typeof Example>;

export const Default: Story = {
  render: () => <Example />,
};
