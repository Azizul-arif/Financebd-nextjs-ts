import { IconButton, InputBase } from '@mui/material'
import { Box } from '@mui/system'
import SearchIcon from '@mui/icons-material/Search'
import React from 'react'

import { colors } from '../utils'

const styles = {
  input: {
    padding: 1,
    paddingLeft: 3,
    paddingRight: 0,
    '& input::placeholder': {
      // jss
      color: colors.primary,
    },
  },
}

const SearchBox = () => {
  return (
    <Box bgcolor={colors.fade} borderRadius={8}>
      <InputBase placeholder="Search" sx={styles.input} />
      <IconButton sx={{ p: '10px' }} aria-label="menu">
        <SearchIcon />
      </IconButton>
    </Box>
  )
}

export default SearchBox
