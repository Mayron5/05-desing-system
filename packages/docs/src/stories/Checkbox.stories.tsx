import type { Meta, StoryObj } from "@storybook/react";

import { Box, Checkbox, CheckboxProps, Text } from "@ignite-ui/react";

export default {
  title: "Form/Checkbox",
  component: Checkbox,
  args: {},
  tags: ["autodocs"],
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{ display: "flex", alignItems: "center", gap: "$2" }}
        >
          {Story()}
          <Text size={"sm"}>Accept term of use</Text>
        </Box>
      );
    },
  ],
} as Meta<CheckboxProps>;

export const Primary: StoryObj<CheckboxProps> = {};
