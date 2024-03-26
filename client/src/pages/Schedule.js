import React from 'react';
import { Box,Button, Grid,styled, Paper} from '@mui/material';
import Sidebar from "../components/SideBar"
import { Link } from 'react-router-dom'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Calender from '../components/DateCalendarViews';
import Countdown from '../components/Countdown';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
const Schedule = () => {
  return (
    <Box m="20px">
        <Box height="75vh">
            <Sidebar/>

        </Box>
        <Box marginTop={'-30rem'}>  

        <Grid container spacing={3} >
  <Grid item xs={8} sx={{  textAlign: 'right' , height: 400, width:200, }}>
    
    <Card sx={{ display: 'flex',marginTop:'1rem', marginLeft:'17rem', backgroundColor:'white', width: 700 , height: 90}}>
    <CardMedia
      component="img"
      sx={{ width: 121 }}
      image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLkYY3R12UsGTTxwFWo9STw5q9X-I6T_hoJlxOCQjQsMXTEgKhafBWTqBy9okebNfJS9s&usqp=CAU"
      alt="Live from space album cover"
    />
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
    <CardContent sx={{ flex: '1 0 auto' }}>
    <Typography textAlign="left" component="div" fontSize={'15px'} marginTop={'-0.5rem'}>
        Nakuru, Kenya Redcross.
      </Typography>
      <Typography textAlign="left" variant="subtitle1" color="text.secondary" component="div">
      Date: Saturday, May 15, 2024  
      
      <Typography textAlign="left" variant="subtitle1" color="text.secondary" component="div">
       
      Time: 9:00 AM - 3:00 PM

      </Typography>    
        <Button 
            component={Link} 
            to={'/rsvp'}
            variant='contained'
            sx={{
              ml: 58,
              mt: -14,
                px: 1, 
                py: 0.2,
                fontSize: '1.0rem',
                textTransform: 'capitalize',
                borderRadius: 4,
                borderColor: '#14192d',
                color: '#fff',
                backgroundColor: '#a23232',
                "&&:hover": {
                    backgroundColor: "#8c1515"
                },
                "&&:focus": {
                    backgroundColor: "#8c1515"
                }
            }}
            >
                RSVP
            </Button>
      </Typography>
      
    </CardContent>           
    
    </Box>

    </Card>

    <Card sx={{ display: 'flex',marginTop:'1rem', marginLeft:'17rem', backgroundColor:'white', width: 700 , height: 90}}>
    <CardMedia
      component="img"
      sx={{ width: 121 }}
      image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLkYY3R12UsGTTxwFWo9STw5q9X-I6T_hoJlxOCQjQsMXTEgKhafBWTqBy9okebNfJS9s&usqp=CAU"
      alt="Live from space album cover"
    />
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
    <CardContent sx={{ flex: '1 0 auto' }}>
    <Typography textAlign="left" component="div" fontSize={'15px'} marginTop={'-0.5rem'}>
        Nakuru, Kenya Redcross.
      </Typography>
      <Typography textAlign="left" variant="subtitle1" color="text.secondary" component="div">
      Date: Saturday, May 15, 2024  
      
      <Typography textAlign="left" variant="subtitle1" color="text.secondary" component="div">
       
      Time: 9:00 AM - 3:00 PM

      </Typography>    
        <Button 
            component={Link} 
            to={'/rsvp'}
            variant='contained'
            sx={{
              ml: 58,
              mt: -14,
                px: 1, 
                py: 0.2,
                fontSize: '1.0rem',
                textTransform: 'capitalize',
                borderRadius: 4,
                borderColor: '#14192d',
                color: '#fff',
                backgroundColor: '#a23232',
                "&&:hover": {
                    backgroundColor: "#8c1515"
                },
                "&&:focus": {
                    backgroundColor: "#8c1515"
                }
            }}
            >
               RSVP
            </Button>
      </Typography>
    </CardContent>
    
    </Box>

    </Card>

    <Card sx={{ display: 'flex',marginTop:'1rem', marginLeft:'17rem', backgroundColor:'white', width: 700 , height: 90}}>
    <CardMedia
      component="img"
      sx={{ width: 121 }}
      image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLkYY3R12UsGTTxwFWo9STw5q9X-I6T_hoJlxOCQjQsMXTEgKhafBWTqBy9okebNfJS9s&usqp=CAU"
      alt="Live from space album cover"
    />
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
    <CardContent sx={{ flex: '1 0 auto' }}>
    <Typography textAlign="left" component="div" fontSize={'15px'} marginTop={'-0.5rem'}>
        Nakuru, Kenya Redcross.
      </Typography>
      <Typography textAlign="left" variant="subtitle1" color="text.secondary" component="div">
      Date: Saturday, May 15, 2024  
      
      <Typography textAlign="left" variant="subtitle1" color="text.secondary" component="div">
       
      Time: 9:00 AM - 3:00 PM

      </Typography>    
      <Button 
            component={Link} 
            to={'/rsvp'}
            variant='contained'
            sx={{
              ml: 58,
              mt: -14,
                px: 1, 
                py: 0.2,
                fontSize: '1.0rem',
                textTransform: 'capitalize',
                borderRadius: 4,
                borderColor: '#14192d',
                color: '#fff',
                backgroundColor: '#a23232',
                "&&:hover": {
                    backgroundColor: "#8c1515"
                },
                "&&:focus": {
                    backgroundColor: "#8c1515"
                }
            }}
            >
                RSVP
            </Button>
      </Typography>
    </CardContent>
    
    </Box>

    </Card>  
    <Card sx={{ display: 'flex',marginTop:'1rem', marginLeft:'17rem', backgroundColor:'white', width: 700 , height: 90 ,}}>
    <CardMedia
      component="img"
      sx={{ width: 91 , mr:'1rem',ml:'1rem' }}
      image="https://www.hopealivefound.org/wp-content/uploads/2022/06/haf_logo.png"
      alt="Live from space album cover"
    />
    <Box sx={{ display: 'flex', flexDirection: 'column',  }}>
    <CardContent sx={{ flex: '1 0 auto' }}>
    <Typography textAlign="left" component="div" fontSize={'15px'} marginTop={'-0.5rem'}>
        Naivasha, Hope Alive Foundation.
      </Typography>
      <Typography textAlign="left" variant="subtitle1" color="text.secondary" component="div">
      Date: Saturday, May 15, 2024  
      
      <Typography textAlign="left" variant="subtitle1" color="text.secondary" component="div">
       
      Time: 9:00 AM - 3:00 PM

      </Typography>  
      <Button 
            component={Link} 
            to={'/rsvp'}
            variant='contained'
            sx={{
              ml: 58,
              mt: -14,
                px: 1, 
                py: 0.2,
                fontSize: '1.0rem',
                textTransform: 'capitalize',
                borderRadius: 4,
                borderColor: '#14192d',
                color: '#fff',
                backgroundColor: '#a23232',
                "&&:hover": {
                    backgroundColor: "#8c1515"
                },
                "&&:focus": {
                    backgroundColor: "#8c1515"
                }
            }}
            >
                RSVP
            </Button>
            <Countdown/>
      </Typography>
    </CardContent>
    
    </Box>

    </Card>
    <Card sx={{ display: 'flex',marginTop:'1rem', marginLeft:'17rem', backgroundColor:'white', width: 700 , height: 90 ,}}>
    <CardMedia
      component="img"
      sx={{ width: 91 , mr:'1rem',ml:'1rem' }}
      image="https://www.hopealivefound.org/wp-content/uploads/2022/06/haf_logo.png"
      alt="Live from space album cover"
    />
    <Box sx={{ display: 'flex', flexDirection: 'column',  }}>
    <CardContent sx={{ flex: '1 0 auto' }}>
    <Typography textAlign="left" component="div" fontSize={'15px'} marginTop={'-0.5rem'}>
        Naivasha, Hope Alive Foundation.
      </Typography>
      <Typography textAlign="left" variant="subtitle1" color="text.secondary" component="div">
      Date: Saturday, May 15, 2024  
      
      <Typography textAlign="left" variant="subtitle1" color="text.secondary" component="div">
       
      Time: 9:00 AM - 3:00 PM

      </Typography>  
      <Button 
            component={Link} 
            to={'/rsvp'}
            variant='contained'
            sx={{
                ml: 58,
                mt: -14,
                px: 1, 
                py: 0.2,
                fontSize: '1.0rem',
                textTransform: 'capitalize',
                borderRadius: 4,
                borderColor: '#14192d',
                color: '#fff',
                backgroundColor: '#a23232',
                "&&:hover": {
                    backgroundColor: "#8c1515"
                },
                "&&:focus": {
                    backgroundColor: "#8c1515"
                }
            }}
            >
               RSVP
            </Button>
      </Typography>
    </CardContent>
    
    </Box>

    </Card>
            
          </Grid>
          <Grid item xs={3} sx={{ marginTop: '1rem',marginLeft: 'auto', textAlign: 'right' , height: 400, width:100,background:'white'}}>
            <Item sx={{
    
              marginLeft: 'auto',
              textAlign: 'right',
              height: 550,
              width: 300,
              background: 'linear-gradient(#ffffff,#ffffff,#f9f4f2,#f2e9e6,#ecddd9, #e5d2cd, #dfc7c0,#d9bcb3, #d2b1a7,#cca59a,#c59a8e, #bf8f81,#c4777f)',
              borderRadius: '10px', // Add borderRadius for rounded corners
              border: 'transparent',
    
              }}>

                <Box mb="15px">
                    
                    <Calender/>
                    
                    
                </Box>

            </Item>
          </Grid>
  
        </Grid>

      </Box>
    
    </Box>
  )
}

export default Schedule;