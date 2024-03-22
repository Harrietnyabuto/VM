import React from 'react'
import { Box, Stack, styled, Typography,Divider,} from '@mui/material'
import Link from '@mui/material/Link';
import FooterTitle from './FooterTitle'
import FooterLink from './FooterLink'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {

  const StackColumn = styled(Stack) (() => ({
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flex: 1,
    gap: 8,
    textAlign: 'center',
  }));

  const BoxRow = styled(Box) (({ theme }) => ({
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#a23232',
    flex: 1,
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      gap: 30,
    }
  }));

  return (
    
    <BoxRow 
    component = 'footer'
    sx={{
      py: 4,
      px: 2,
    }}
    >
      <StackColumn>
        <FooterTitle text={'Address'} />
        <FooterLink 
        text={'P.O BOX 123-30100 Nakuru, Kenya'} 
        />
        <FooterLink 
        text={'+254 712 345 678'} 
        />
        <FooterLink 
        text={'volunteerme@gmail.com'} 
        />
      </StackColumn>
     
      <Divider orientation="vertical"></Divider>

      <StackColumn>
        <FooterTitle text={'Services'} />
        <FooterLink text={'Fundraise'} />
        <FooterLink text={'Donate'} />
        <FooterLink text={'Volunteer'} />
      </StackColumn>
      <StackColumn>
        <FooterTitle text={'Our Partners'} />
        <FooterLink text={'Hope-alive Kenya'} />
        <FooterLink text={'Redcross Club'} />
        <FooterLink text={'Superficial Hope'} />
      </StackColumn>

      <StackColumn>
        <FooterTitle text={'@volunteerme'} />
        <Stack 
        direction='row' 
        width= '70px'
        maxWidth='100%'
        justifyContent='space-between'
        >
          <Link href="#" variant="body2" 
          sx={{
            color: '#32a2a2',
            marginLeft:-2.5,
            "&:hover": {
              color: '#325fa2',
            }
          }}
          >
            <InstagramIcon />  
          </Link> 
          <Link href="#" variant="body2" 
          sx={{
            color: '#32a2a2',
            marginLeft: 2.5,
            "&:hover": {
              color: '#325fa2',
            }
          }}
          >
            <InstagramIcon />  
          </Link> 
          <Link href="#"variant="body2" 
          sx={{
            color: '#32a2a2',
            marginLeft:2.5,
            "&:hover": {
              color: '#325fa2',
            }
          }}
          >
            <FacebookIcon />
          </Link> 
        </Stack>
        <Typography 
        variant='caption'
        color={'#32a2a2'}
        fontSize={13.5}
        component='p' 
        >
          &copy; 2024 VolunteerMe.Org
        </Typography>
      </StackColumn>
    </BoxRow>
  )
}

export default Footer