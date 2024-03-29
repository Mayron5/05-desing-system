import type { Meta, StoryObj } from "@storybook/react";

import { Box, Text, TextArea, TextAreaProps } from "@meu-quarto/react";

export default {
  title: "Form/Textarea",
  component: TextArea,
  tags: ["autodocs"],
  args: {},
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{ display: "flex", flexDirection: "column", gap: "$2" }}
        >
          <Text size={"sm"}>Description</Text>
          {Story()}
        </Box>
      );
    },
  ],
} as Meta<TextAreaProps>;

export const Primary: StoryObj<TextAreaProps> = {
  args: {
    placeholder: "Type your name",
  },
};

export const Disabled: StoryObj<TextAreaProps> = {
  args: {
    placeholder: "Type your name",
    disabled: true,
  },
};
