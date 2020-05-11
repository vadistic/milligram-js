import React from 'react'
import { css } from '@emotion/core'

export interface FixtureProps {
  title: string
  source: string
}

const styles = {
  root: css`
    margin: 2rem 0;
  `,
  html: css`
    padding: 2rem;
  `,
}

export const Fixture: React.FC<FixtureProps> = ({ title, source }) => (
  <section css={styles.root}>
    <h3>{title}</h3>
    <div css={styles.html} dangerouslySetInnerHTML={{ __html: source }} />
    <div>
      <pre>
        <code lang="html">{source.trim()}</code>
      </pre>
    </div>
  </section>
)
