/* eslint-disable react/jsx-props-no-spreading */
import { ThemeContext } from '@emotion/core'
import { Theme as DefaultTheme } from 'milligram-js'
import React, { useContext } from 'react'

export type Theme = DefaultTheme

export const useTheme = () => useContext<Theme>(ThemeContext as any)
