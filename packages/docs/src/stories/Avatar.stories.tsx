import type { Meta, StoryObj } from "@storybook/react";

import { Avatar, AvatarProps } from "@ignite-ui/react";

export default {
  title: "Data display/Avatar",
  component: Avatar,
  tags: ["autodocs"],
  args: {
    src: "https://github.com/mayron5.png",
    alt: "Mayron Alves",
  },
} as Meta<AvatarProps>;

export const Primary: StoryObj<AvatarProps> = {};

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
};
