import React from 'react'
import { colors, List, Paper } from '@mui/material'

import { Grid, Box, Typography, ThemeProvider } from '@mui/material'
import LogoutIcon from '@mui/icons-material/Logout'
import AppsIcon from '@mui/icons-material/Apps'
import BarChart from './barchart'
import { blue } from '@mui/material/colors'
import News from './news'
import Theme from '../utils/theme'
import { Colors, bottomLine } from '../utils/theme'

const styles = {
  leftsideNav: {
    padding: '12px 8px',
    gap: '8px',
    isolation: 'isolate',
    Width: '250px',
    Height: '44px',
    backgroundColor: '#E9E5FA',
    borderRadius: '8px',
    display: 'flex',
    flexDirection: 'row',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: '12px',
    lineHeight: '15px',
    marginRight: '50px',
  },
}

const Board = () => {
  return (
    <section style={{ marginTop: '90px' }}>
      <div
        style={{
          backgroundColor: Colors.secondary, //colors from Theme
          height: '1px',
          width: '1700px',
          marginBottom: '15px',
        }}
      ></div>
      {/* <Box sx={styles.bottomLine}></Box> */}
      <Grid container spacing={2} sx={{ justifyContent: 'center' }}>
        <Grid item xs={2} style={{ marginLeft: '-10px' }}>
          <Box sx={styles.leftsideNav}>
            <div>
              <AppsIcon style={{ color: Colors.primary }} />
            </div>
            <div>
              <Typography
                variant="h6"
                /**Colors from Theme */
                sx={{
                  color: Colors.primary,
                  marginTop: '-5px',
                }}
              >
                Reserve
              </Typography>
            </div>
          </Box>

          <div style={{ marginTop: '700px' }} className="log-out">
            <div
              style={{
                marginTop: '15px',
                marginRight: '10px',
              }}
            >
              <LogoutIcon></LogoutIcon>
            </div>
            <div>
              <p
                style={{
                  marginTop: '-28px',
                  marginLeft: '40px',
                }}
              >
                Logout
              </p>
            </div>
          </div>
        </Grid>
        <Box sx={bottomLine}></Box>
        <Grid item xs={6}>
          <BarChart />
        </Grid>

        <Grid
          item
          xs={3}
          sx={{ Width: '550px', backgroundColor: '#EEEEEE', padding: '20px' }}
        >
          <News />
        </Grid>
      </Grid>
    </section>
  )
}

export default Board
