import { ComponentProps } from "react";
import { styled } from "../styles";

export const TextArea = styled("textarea", {
  all: "unset",
  backgroundColor: "$gray900",
  padding: "$3 $4",
  borderRadius: "$sm",
  boxSizing: "border-box",
  border: "2px solid $gray900",

  fontFamily: "$default",
  fontSize: "$sm",
  fontWeight: "$regular",
  color: "$white",

  resize: "vertical",
  minHeight: 80,
  width: "100%",
  height: "max-content",

  "&:focus": {
    borderColor: "$ignite300",
    transition: "all 300ms",
  },

  "&:disabled": {
    opacity: 0.5,
    cursor: "not-allowed",
  },

  "&:placeholder": {
    color: "$gray500",
  },
});

export interface TextAreaProps extends ComponentProps<typeof TextArea> {}
