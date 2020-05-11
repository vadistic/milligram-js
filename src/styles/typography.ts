import { css } from '../css'
import { theme } from '../theme'

export const body = css`
  color: ${theme.color.secondary};
  font-family: ${theme.font.family};
  font-size: ${theme.font.size};
  font-weight: ${theme.font.weigth};
  letter-spacing: ${theme.font.letterSpacing};
  line-height: ${theme.font.lineHeight};
`

const paragraph = css`
  margin-top: 0;
`

export const headingBase = css`
  font-weight: 300;
  letter-spacing: -0.1rem;
  margin-bottom: 2rem;
  margin-top: 0;
`

export const headingVariants = {
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

export const headings = {
  h1: headingBase + headingVariants.h1,
  h2: headingBase + headingVariants.h2,
  h3: headingBase + headingVariants.h3,
  h4: headingBase + headingVariants.h4,
  h5: headingBase + headingVariants.h5,
  h6: headingBase + headingVariants.h6,
}

export const typographyStyles = css`
  /* TYPOGRAPHY */

  /* Default body styles */
  body {
    ${body}
  }

  b,
  strong {
    font-weight: bold;
  }

  p {
    ${paragraph}
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    ${headingBase}
  }

  h1 {
    ${headingVariants.h1}
  }

  h2 {
    ${headingVariants.h2}
  }

  h3 {
    ${headingVariants.h3}
  }

  h4 {
    ${headingVariants.h4}
  }

  h5 {
    ${headingVariants.h5}
  }

  h6 {
    ${headingVariants.h6}
  }
`

export const typography = {
  heading: {
    base: headingBase,
    ...headings,
  },
  body,
  paragraph,
  styles: typographyStyles,
}
