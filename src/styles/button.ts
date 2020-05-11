import { css } from '../css'
import { theme } from '../theme'

export const buttonBase = css`
  background-color: ${theme.color.primary};
  border: 0.1rem solid ${theme.color.primary};
  border-radius: 0.4rem;
  color: ${theme.color.initial};
  cursor: pointer;
  display: inline-block;
  font-size: 1.1rem;
  font-weight: 700;
  height: 3.8rem;
  letter-spacing: 0.1rem;
  line-height: 3.8rem;
  padding: 0 3rem;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  white-space: nowrap;

  &:focus,
  &:hover {
    background-color: ${theme.color.secondary};
    border-color: ${theme.color.secondary};
    color: ${theme.color.initial};
    outline: 0;
  }

  &[disabled] {
    cursor: default;
    opacity: 0.5;
  }

  &:focus,
  &:hover {
    background-color: ${theme.color.primary};
    border-color: ${theme.color.primary};
  }
`

export const buttonVariant = {
  outline: css`
    background-color: transparent;
    color: ${theme.color.primary};

    &:focus,
    &:hover {
      background-color: transparent;
      border-color: ${theme.color.secondary};
      color: ${theme.color.secondary};
    }

    &[disabled] {
      &:focus,
      &:hover {
        border-color: inherit;
        color: ${theme.color.primary};
      }
    }
  `,
  clear: css`
    background-color: transparent;
    border-color: transparent;
    color: ${theme.color.primary};

    &:focus,
    &:hover {
      background-color: transparent;
      border-color: transparent;
      color: ${theme.color.secondary};
    }

    &[disabled] {
      &:focus,
      &:hover {
        border-color: inherit;
        color: ${theme.color.primary};
      }
    }
  `,
}

export const buttonStyles = css`
  .button,
  button,
  input[type='button'],
  input[type='reset'],
  input[type='submit'] {
    ${buttonBase}

    &.button-outline {
      ${buttonVariant.outline}
    }

    &.button-clear {
      ${buttonVariant.clear}
    }
  }
`

export const button = {
  base: buttonBase,
  variant: buttonVariant,
  styles: buttonStyles,
}
