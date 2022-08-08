import React from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { ThemeProvider } from '@emotion/react'

import Navbar from '../components/Navbar'
import Board from '../components/Board'

const Home: NextPage = () => {
  return (
    <div>
      <Navbar />
      <Board />
    </div>
  )
}

export default Home
