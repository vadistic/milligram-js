import React, { useRef } from 'react'
import { css } from '@emotion/core'
import Prism from 'prismjs'
import { theme } from './theme'

export interface FixtureProps {
  title: string
  source: string
}

const styles = {
  root: css`
    margin: 4rem 0;
  `,
  html: css`
    padding: 2rem 0;

    .column {
      background: ${theme.color.quaternary};
      border: 0.5rem solid ${theme.color.initial};
    }
  `,
  source: css`
    padding: 2rem 0;

    & > pre {
      margin: 0;
      background: ${theme.color.tertiary} !important;
    }
  `,
}

export const Fixture: React.FC<FixtureProps> = ({ title, source }) => {
  const ref = useRef<HTMLDivElement>(null)

  if (ref.current) {
    Prism.highlightElement(ref.current)
  }

  return (
    <section css={styles.root}>
      <h3>{title}</h3>
      <div css={styles.html} dangerouslySetInnerHTML={{ __html: source }} />
      <div css={styles.source} ref={ref}>
        <pre className="language-html">
          <code>{source.trim()}</code>
        </pre>
      </div>
    </section>
  )
}
