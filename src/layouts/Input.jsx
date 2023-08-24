import { styled } from "@stitches/react";
import { schema } from "../utils/theme";

export const Input = styled('input', {
  border: `2px solid ${schema.white}`,
  padding: "1rem",
  borderRadius: ".5rem",
  display: "block",
  width: "100%",
  transition: "border-color .3s ease-in-out",
  '&:focus': {
    outline: "none",
    borderColor: schema.primary,
  }
})