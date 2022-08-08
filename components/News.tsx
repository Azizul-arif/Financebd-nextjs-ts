import React, { useState } from 'react'
import { Grid, Box, Typography, Paper, ThemeProvider } from '@mui/material'
import NewsItem from './News/newsitem'

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
    fontWeight: '600',
    fontSize: '14px',
    lineHeight: '17.6px',
    color: '#1A1A1A',
    borderLeftColor: 'red',
  },
}

const number = [1, 2, 3, 4, 5, 6, 7, 8]
// const data = {
// 	news: string,
// 	date: string,
// };

const News = () => {
  return (
    <div>
      <Typography variant="h5" sx={styles.newsHeading}>
        News
      </Typography>

      {number.map((item, i) => {
        return (
          <NewsItem
            title="Fades preferred infaltion measures rose 4.7% in May,around multi-decade heights"
            date="Jan 22,2022"
          />
        )
      })}
    </div>
  )
}

export default News
