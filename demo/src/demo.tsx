import React from 'react'

import { Fixture } from './fixture'
import * as fixtures from './fixtures'

export const Demo: React.FC = () => (
  <div>
    <h2>Demo</h2>
    <Fixture title="Typography" source={fixtures.typography} />
    <Fixture title="Blockquotes" source={fixtures.blockquotes} />
    <Fixture title="Buttons" source={fixtures.buttons} />
    <Fixture title="Lists" source={fixtures.lists} />
    <Fixture title="Forms" source={fixtures.forms} />
    <Fixture title="Tables" source={fixtures.tables} />
    <Fixture title="Grids" source={fixtures.grids} />
    <Fixture title="Code" source={fixtures.code} />
    <Fixture title="Utilities" source={fixtures.utilities} />
  </div>
)
