import { styled } from "@stitches/react";
import { schema } from "../configs/theme";

export const Button = styled('button', {
  padding: '.5rem 1rem',
  borderRadius: '.5rem',
  border: 0,
  color: 'white', // Text color
  cursor: 'pointer', // Show pointer cursor on hover
  fontSize: '1rem', // Adjust font size as needed
  fontWeight: 'bold', // Adjust font weight as needed
  transition: 'background-color 0.3s ease', // Smooth transition on hover

  variants: {
    variant: {
      primary: {
        background: schema.primary,
        '&:hover': {
          background: '#FF8C66', // Replace with a slightly different shade for hover effect
        },
        '&:focus': {
          boxShadow: '0 0 0 3px #FFB399', // Example focus style
        },
        '&:disabled': {
          background: "#FFD9CC"
        }
      },
      secondary: {
        background: schema.secondary, // Replace with your secondary color value
        '&:hover': {
          background: '#D6D3E6', // Replace with a slightly different shade for hover effect
        },
        '&:focus': {
          boxShadow: '0 0 0 3px #C2BFDB', // Example focus style for secondary variant
        },
        '&:disabled': {
          background: "#E3E1E8"
        }
      }
    }
  },

  defaultVariants: {
    variant: 'primary', // Set the default variant to primary
  },
});
