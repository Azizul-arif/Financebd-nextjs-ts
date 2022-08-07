import React from 'react'
// import Chart from 'react-apexcharts'
import { Box, Typography } from '@mui/material'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'
import { colors } from '../utils'
import dynamic from 'next/dynamic'

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false })

const styles = {
  heading: {
    display: 'flex',
    flexDirection: 'row',
  },

  headingcolor: {
    color: '#7B61FF',
  },

  icon: {
    marginTop: '0.3rem',
    color: '#7B61FF',
  },
  chart: {
    marginTop: '500px',
    backgroundColor: '#7B61FF',
  },
  fill: {
    colors: '#7B61FF',
    type: 'gradient',
    gradient: {
      shade: 'light',
      type: 'vertical',
      shadeIntensity: 0,
      opacityFrom: 0.7,
      opacityTo: 0.0,
    },
  },
  chartbox: {
    marginTop: '7rem',
  },
}

const BarChart = () => {
  const charts = {
    options: {
      chart: {
        id: 'basic-bar',
        // sparkline: {
        //   enabled: true,
        // },
      },
      fill: {
        colors: [colors.primary],
        type: 'gradient',
        gradient: {
          shade: 'light',
          type: 'vertical',
          shadeIntensity: 0,
          opacityFrom: 0.7,
          opacityTo: 0.0,
        },
      },
      stroke: {
        colors: [colors.primary],
      },
      xaxis: {
        categories: [
          'Jan',
          'Feb',
          'March',
          'April',
          'May',
          'June',
          'July',
          'Aug',
          'Sep',
          'Oct',
          'Nov',
          'Dec',
        ],
      },
    },
    series: [
      {
        name: 'series-1',
        data: [
          0, 10000, 20000, 30000, 35000, 0, 20000, 35000, 0, 0, 42000, 45000,
        ],
      },
    ],
    // style: {
    //   colors: ['#7B61FF'],
    // },
  }
  return (
    <div>
      <Box sx={styles.heading}>
        <div>
          <KeyboardArrowRightIcon sx={styles.icon} />
        </div>
        <div>
          <Typography variant="h5" sx={styles.headingcolor}>
            Reserve
          </Typography>
        </div>
      </Box>

      <div>
        <Box sx={styles.chartbox}>
          {typeof window !== 'undefined' && (
            <Chart
              sx={styles.fill}
              options={charts.options}
              series={charts.series}
              type="area"
              width="1000"
              height="500"
              //color="#7B61FF"
            />
          )}
        </Box>
      </div>
    </div>
  )
}

export default BarChart
