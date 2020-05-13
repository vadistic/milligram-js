/* eslint-disable react/no-danger */
import { css } from '@emotion/core'
import Prism from 'prismjs'
import React, { useRef, useMemo } from 'react'

import { Theme } from './theme'

export interface FixtureProps {
  title: string
  source: string
  theme?: Theme
}

const styles = {
  root: css`
    margin: 4rem 0;
  `,
  html: (theme: Theme) => css`
    padding: 2rem 0;

    .column {
      background: ${theme.color.quaternary};
      border: 0.5rem solid ${theme.color.initial};
    }
  `,
  source: (theme: Theme) => css`
    padding: 2rem 0;

    & > pre {
      margin: 0;
      background: ${theme.color.tertiary} !important;
    }
  `,
}

export const Fixture: React.FC<FixtureProps> = ({ title, source }) => {
  const ref = useRef<HTMLDivElement>(null)

  // momoized becuase multiple prims highlighting breaks stuff
  const inner = useMemo(() => {
    if (ref.current) {
      Prism.highlightElement(ref.current)
    }

    return (
      <>
        <div css={styles.html} dangerouslySetInnerHTML={{ __html: source }} />
        <div css={styles.source} ref={ref}>
          <pre className="language-html">
            <code>{source.trim()}</code>
          </pre>
        </div>
      </>
    )
  }, [source])

  return (
    <section css={styles.root}>
      <h3>{title}</h3>
      {inner}
    </section>
  )
}
