import React, { FC } from 'react'
import { Grid, Box, Typography, Paper, ThemeProvider } from '@mui/material'
import Theme from '../utils/theme'

const theme = Theme

const styles = {
  newsHeading: {
    fontWeight: '600',
    fontSize: '14px',
    lineHeight: '25.14px',
  },
  newsBar: {
    Width: '318px',
    Height: '86px',
    gap: '16px',
    padding: '12px',
    marginTop: '20px',
    fontFamily: 'Source Sans Pro',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: '14px',
    lineHeight: '18px',
    border: '1px solid #F4F4F4',
    borderRadius: '8px',
    boxSizing: 'border-box',
    isolation: 'isolate',
  },
  date: {
    fontSize: '12px',
    lineHeight: '18px',
    fontWeight: '400',
    color: '#767676',

    marginTop: '6px',
  },
  heading: {
    fontFamily: 'Source Sans Pro',
    fontWeight: '600',
    fontSize: '14px',
    lineHeight: '17.6px',
    color: '#1A1A1A',
    borderLeftColor: 'red',
  },
}

type NewsItemProps = {
  title: string
  date: string
}

const NewsItem: FC<NewsItemProps> = ({ title, date }) => {
  return (
    <ThemeProvider theme={theme}>
      <Paper elevation={3} sx={styles.newsBar}>
        <Typography variant="h5" sx={styles.heading}>
          {title}
        </Typography>
        <Typography sx={styles.date}>{date}</Typography>
      </Paper>
    </ThemeProvider>
  )
}

export default NewsItem
