import type { Meta, StoryObj } from "@storybook/react";

import { Box, Text, TextInput, TextInputProps } from "@meu-quarto/react";

export default {
  title: "Form/Input Text",
  component: TextInput,
  args: {},
  tags: ["autodocs"],
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{ display: "flex", flexDirection: "column", gap: "$2" }}
        >
          <Text size={"sm"}>Username</Text>
          {Story()}
        </Box>
      );
    },
  ],
} as Meta<TextInputProps>;

export const Primary: StoryObj<TextInputProps> = {
  args: {
    placeholder: "Type your name",
  },
};

export const Disabled: StoryObj<TextInputProps> = {
  args: {
    disabled: true,
    placeholder: "Type your name",
  },
};

export const WithPrefix: StoryObj<TextInputProps> = {
  args: {
    prefix: "call.com/",
    placeholder: 'your-username'
  },
};
