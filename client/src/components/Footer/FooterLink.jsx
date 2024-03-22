import { Link } from '@mui/material'
import React from 'react'

const FooterLink = ({ text }) => {
  return (
    <Link 
    href="#"
    variant='p'
    component='a'
    sx={{
      fontSize: '1.05rem',
      fontWeight: '400',
      textDecoration: 'none',
      color: '#FFF',
      textTransform: 'capitalize',
      "&:hover": {
        color: '#32a2a2',
      }
    }}
    >
      {text}
    </Link>
  )
}

export default FooterLink