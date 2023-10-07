import type { Meta, StoryObj } from "@storybook/react";

import { Text, TextProps } from "@meu-quarto/react";

export default {
  title: "Typography/Text",
  component: Text,
  tags: ["autodocs"],
  args: {
    children:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione deserunt assumenda repellendus, recusandae nesciunt, iusto magni dolores culpa incidunt sit doloribus asperiores voluptates exercitationem obcaecati quam vero nam odit atque.",
  },
} as Meta<TextProps>;

export const Primary: StoryObj<TextProps> = {};
export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: "Strong text",
    as: "strong",
  },
};
