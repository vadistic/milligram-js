import { css } from '../css'
import { theme, Theme } from '../theme'

export const bodyBase = (t: Theme = theme) => css`
  color: ${t.color.secondary};
  font-family: ${t.font.family};
  font-size: ${t.font.size};
  font-weight: ${t.font.weigth};
  letter-spacing: ${t.font.letterSpacing};
  line-height: ${t.font.lineHeight};
`

export const bodyStyles = (t: Theme = theme) => css`
  body {
    ${bodyBase(t)}
  }
`

const paragraphBase = (t: Theme = theme) => css`
  margin-top: 0;
`

export const pargaraphStyles = (t: Theme = theme) => css`
  p {
    ${paragraphBase(t)}
  }
`

export const headingBase = (t: Theme = theme) => css`
  font-weight: 300;
  letter-spacing: -0.1rem;
  margin-bottom: 2rem;
  margin-top: 0;
`

export const headingVariant = {
  h1: (t: Theme = theme) => css`
    font-size: 4.6rem;
    line-height: 1.2;
  `,
  h2: (t: Theme = theme) => css`
    font-size: 3.6rem;
    line-height: 1.25;
  `,
  h3: (t: Theme = theme) => css`
    font-size: 2.8rem;
    line-height: 1.3;
  `,
  h4: (t: Theme = theme) => css`
    font-size: 2.2rem;
    letter-spacing: -0.08rem;
    line-height: 1.35;
  `,
  h5: (t: Theme = theme) => css`
    font-size: 1.8rem;
    letter-spacing: -0.05rem;
    line-height: 1.5;
  `,
  h6: (t: Theme = theme) => css`
    font-size: 1.6rem;
    letter-spacing: 0;
    line-height: 1.4;
  `,
}

export const headingStyles = (t: Theme = theme) => css`
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    ${headingBase(t)}
  }

  h1 {
    ${headingVariant.h1(t)}
  }

  h2 {
    ${headingVariant.h2(t)}
  }

  h3 {
    ${headingVariant.h3(t)}
  }

  h4 {
    ${headingVariant.h4(t)}
  }

  h5 {
    ${headingVariant.h5(t)}
  }

  h6 {
    ${headingVariant.h6(t)}
  }
`

export const typographyStyles = (t: Theme = theme) => css`
  b,
  strong {
    font-weight: bold;
  }

  ${bodyStyles(t)}

  ${pargaraphStyles(t)}

  ${headingStyles(t)}
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
