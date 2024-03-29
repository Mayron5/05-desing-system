import type { Meta, StoryObj } from "@storybook/react";

import { Box, BoxProps, Text } from "@meu-quarto/react";

export default {
  title: "Surfaces/Box",
  component: Box,
  tags: ["autodocs"],
  args: {
    children: <Text>Elemento do box</Text>,
  },
} as Meta<BoxProps>;

export const Primary: StoryObj<BoxProps> = {
  args: {},
};
