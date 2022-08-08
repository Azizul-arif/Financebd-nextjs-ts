import React from 'react'
import { createTheme } from '@mui/material'

export const Font = {
  font: {
    fontFamily: ['Source Sans Pro'],
  },
}

export const Colors = {
  primary: '#7B61FF',
  secondary: '#EEEEEE',
}

///////
export const palette = {
  primary: {
    main: '#F33A3A',
    contrastText: '#ffffff',
    fade: 'rgba(254, 231, 231, 1)',
  },
  secondary: {
    main: '#F3C03A',
  },
  white: {
    100: '#ffffff',
    50: '#f2f2f2',
  },
}
//////
export const bottomLine = {
  backgroundColor: '#EEEEEE',
  height: '835px',
  width: '1px',
  display: 'inline-flex',
  flexDirection: 'column',
}

const Theme = createTheme({
  palette,
  typography: {
    fontFamily: [
      '-apple-system',
      'Poppins',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      'Source Sans Pro',
    ].join(','),
  },
})

export default Theme
