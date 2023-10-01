import { styled } from "../../styles";

export const TextInputContainer = styled("div", {
  backgroundColor: '$gray900',
  padding: '$3 $4',
  borderRadius: '$sm',
  boxSizing: 'border-box',
  border: '2px solid $gray900',

  display: 'flex',
  alignItems: 'baseline',
  cursor: 'auto',

  '&:has(input:focus)': {
    borderColor: '$ignite300',
    transition: 'all 300ms'
  },

  '&:has(input:disabled)': {
    opacity: 0.5,
    cursor: 'not-allowed'
  }

});

export const Prefix = styled("span", {
  fontFamily: '$default',
  fontSize: '$sm',
  color: '$gray400',
  fontWeight: '$regular'
});

export const Input = styled("input", {
  all: 'unset',
  fontFamily: '$default',
  fontSize: '$sm',
  color: '$white',
  fontWeight: '$regular',
  backgroundColor: 'transparent',
  width: '100%',

  '&:placeholder': {
    color: '$gray400'
  }
});
