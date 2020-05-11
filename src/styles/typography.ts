import { css } from '../css'
import { theme } from '../theme'

export const bodyBase = css`
  color: ${theme.color.secondary};
  font-family: ${theme.font.family};
  font-size: ${theme.font.size};
  font-weight: ${theme.font.weigth};
  letter-spacing: ${theme.font.letterSpacing};
  line-height: ${theme.font.lineHeight};
`

export const bodyStyles = css`
  body {
    ${bodyBase}
  }
`

const paragraphBase = css`
  margin-top: 0;
`

export const pargaraphStyles = css`
  p {
    ${paragraphBase}
  }
`

export const headingBase = css`
  font-weight: 300;
  letter-spacing: -0.1rem;
  margin-bottom: 2rem;
  margin-top: 0;
`

export const headingVariant = {
  h1: css`
    font-size: 4.6rem;
    line-height: 1.2;
  `,
  h2: css`
    font-size: 3.6rem;
    line-height: 1.25;
  `,
  h3: css`
    font-size: 2.8rem;
    line-height: 1.3;
  `,
  h4: css`
    font-size: 2.2rem;
    letter-spacing: -0.08rem;
    line-height: 1.35;
  `,
  h5: css`
    font-size: 1.8rem;
    letter-spacing: -0.05rem;
    line-height: 1.5;
  `,
  h6: css`
    font-size: 1.6rem;
    letter-spacing: 0;
    line-height: 1.4;
  `,
}

export const headingStyles = css`
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    ${headingBase}
  }

  h1 {
    ${headingVariant.h1}
  }

  h2 {
    ${headingVariant.h2}
  }

  h3 {
    ${headingVariant.h3}
  }

  h4 {
    ${headingVariant.h4}
  }

  h5 {
    ${headingVariant.h5}
  }

  h6 {
    ${headingVariant.h6}
  }
`

export const typographyStyles = css`
  b,
  strong {
    font-weight: bold;
  }

  ${bodyStyles}

  ${pargaraphStyles}

  ${headingStyles}
`

export const typography = {
  heading: {
    base: headingBase,
    variant: headingVariant,
    styles: headingStyles,
  },
  body: {
    base: bodyBase,
    styles: bodyStyles,
  },
  paragraph: {
    base: paragraphBase,
    styles: pargaraphStyles,
  },
  styles: typographyStyles,
}
