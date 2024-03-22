import { Typography } from '@mui/material'
import React from 'react'

const Title = ({ text, textAlign }) => {
  return (
    <Typography 
    variant='h4'
    component='h3'
    sx={{ 
      fontWeight: '700',
      color: '#8c1515',
      textAlign: textAlign,
   }}
    >
      {text}
    </Typography>
  )
}

export default Title