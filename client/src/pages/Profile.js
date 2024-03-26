import React from 'react'
import Sidebar from "../components/SideBar"
import { Link } from 'react-router-dom'
import TextField from '@mui/material/TextField';
import { outlinedInputClasses } from '@mui/material/OutlinedInput';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider  } from '@mui/material/styles';
import { Button, Box, Grid,styled, IconButton,Paper} from '@mui/material';
import { useTheme, } from '@mui/material/styles';
//import Link from '@mui/material/Link';
import {   Stack, } from '@mui/material'
import StarIcon from '@mui/icons-material/Star';
import CardMedia from '@mui/material/CardMedia';
import EditIcon from '@mui/icons-material/Edit';  // Import the EditIcon

const customTheme = (outerTheme) =>
  createTheme({
    palette: {
      mode: outerTheme.palette.mode,
    },
    components: {
      MuiTextField: {
        styleOverrides: {
          root: {
            '--TextField-brandBorderColor': 'grey',
            '--TextField-brandBorderHoverColor': '#B2BAC2',
            '--TextField-brandBorderFocusedColor': '#6F7E8C',
            '& label.Mui-focused': {
              color: 'var(--TextField-brandBorderFocusedColor)',
            },
          },
        },
      },
      MuiOutlinedInput: {
        styleOverrides: {
          notchedOutline: {
            borderColor: 'var(--TextField-brandBorderColor)',
          },
          root: {
            [`&:hover .${outlinedInputClasses.notchedOutline}`]: {
              borderColor: 'var(--TextField-brandBorderHoverColor)',
            },
            [`&.Mui-focused .${outlinedInputClasses.notchedOutline}`]: {
              borderColor: 'var(--TextField-brandBorderFocusedColor)',
            },
          },
        },
      },
      MuiFilledInput: {
        styleOverrides: {
          root: {
            '&::before, &::after': {
              borderBottom: '2px solid var(--TextField-brandBorderColor)',
            },
            '&:hover:not(.Mui-disabled, .Mui-error):before': {
              borderBottom: '2px solid var(--TextField-brandBorderHoverColor)',
            },
            '&.Mui-focused:after': {
              borderBottom: '2px solid var(--TextField-brandBorderFocusedColor)',
            },
          },
        },
      },
      MuiInput: {
        styleOverrides: {
          root: {
            '&::before': {
              borderBottom: '2px solid var(--TextField-brandBorderColor)',
            },
            '&:hover:not(.Mui-disabled, .Mui-error):before': {
              borderBottom: '2px solid var(--TextField-brandBorderHoverColor)',
            },
            '&.Mui-focused:after': {
              borderBottom: '2px solid var(--TextField-brandBorderFocusedColor)',
            },
          },
        },
      },
    },
  });



const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


const Profile = () => {
  
  const outerTheme = useTheme();

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('email'),
            phone: data.get('phone'),
        });
    }

    const handleEditClick = () => {
      // Add your logic for handling the edit button click
      console.log('Edit button clicked');
    };

  return (
    <Box  p="0" m="0">
        <Box height="70vh" top="0">
            <Sidebar/>
           
        </Box>   
    
      <Box >         

        <Grid item xs={3} sx={{ textAlign: 'right' , height: 400, width:100,background:'white'}}>
            <Item sx={{
    
              marginLeft: '16.5rem',
              marginRight:'0',
              textAlign: 'right',
              marginTop: '-30rem',
              height: 650,
              width: 1085,
              background: 'linear-gradient(#ffffff,#ffffff)',
              border: 'transparent',
    
              }}>

                <Box mb="50px">
                

                    <Box display="flex" justifyContent="center" alignItems="center" marginTop={'6rem'} marginLeft={'-35rem'} marginRight={'1rem'}>
                    <Box display="flex" justifyContent="center" alignItems="center">
                  <StarIcon sx={{ color: 'yellow', fontSize: 20, marginRight: -16 ,ml: -1, mt: -24}} />
                  <StarIcon sx={{ color: 'yellow', fontSize: 20, marginRight: 7, ml:-1,mt: -21 }} />
                  <StarIcon sx={{ color: 'yellow', fontSize: 20, marginRight: -10 , mt: -14}} />
                  <StarIcon sx={{ color: 'yellow', fontSize: 20, marginRight: -12 ,mt:-7}} />
                  <StarIcon sx={{ color: 'yellow', fontSize: 20, mt:3, ml:12 }} />
                </Box>
                        
                      
                      <CardMedia

                      
                        component="img"
                        sx={{ width: 140,  }}
                        image="https://holidayalot.com/assets/images/hero-image.png"
                         alt="Live from space album cover"
                       />
                    </Box>
                    
                    <Box textAlign="left">
                        <Typography
                            variant="h5"
                            color={'black'}
                            fontWeight="bold"
                            sx={{  m: "-7rem 0 0 21rem" }}
                            >
                            Stacey Keen
                        </Typography> 
                        <IconButton onClick={handleEditClick} size="small"  sx={{ml:'29.5rem', mt:'-6rem', color: 'white',backgroundColor:'#8c1515', '&:hover': { background: '#bb4b5b' }}}>
                          <EditIcon />
                        </IconButton>               
                    </Box>
                    <Box textAlign="left">
                        <Typography
                           
                            color={'black'}
                            fontSize={'16px'}
                            fontWeight="300"
                            sx={{  m: "-8px 0 0 21rem" }}
                            >
                              The deep-seated desire to make a meaningful and lasting difference in our community,<br/>
                              while actively contributing to positive change, has been the driving force behind  <br/>
                              my role as a dedicated community volunteer leader.<br/>
                              
                             <b style={{ color: '#a40a1f' , ml:'10rem' }}> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;#Education  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; #Health &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; #Mental Awareness</b>
                        </Typography>                
                    </Box>
                </Box>

                <Stack 
                 component='section'
                 direction="column"
                 justifyContent= 'center'
                  alignItems='center'
                sx={{  py: 10, px: 2, ml:8,}}
                 >
                 <Box 
                  component="form" 
                    noValidate 
                    onSubmit={handleSubmit} 
                    sx={{ 
                    mt: -18,
                    py: 2,
                    width:750,
               
                    }}>
                 <ThemeProvider theme={customTheme(outerTheme)} >
                 <Box display="flex" alignItems="center">
                  <Box width="180px" marginRight="26px" color={'black'} fontWeight={'500'}>
                       <label htmlFor="email">Email Address:</label>
                  </Box>
                <TextField
                    size="small"
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    name="email"
                    autoComplete="email"
                    autoFocus
                    placeholder="example@example.com"
            
                />
                </Box>
                <Box display="flex" alignItems="center" mt={'-0.5rem'}>
                  <Box width="180px" marginRight="26px" color={'black'} fontWeight={'500'}>
                       <label htmlFor="phone">Phone Number:</label>
                  </Box>
                  <TextField
                    size="small"
                    margin="normal"
                    required
                    fullWidth
                    name="phone"
                    type="phone"
                    id="phone"
                    autoComplete="current-phone"
                  />
                </Box>
                <Box display="flex" alignItems="center" mt={'0.5rem'}>
                  <Box width="180px" marginRight="26px" color={'black'} fontWeight={'500'}>
                       <label htmlFor="password">Password:</label>
                  </Box>
                <TextField
                size="small"
                    required
                    fullWidth
                    name="password"
                    type="password"
                    id="password"
                    placeholder="•••••••••" 
                    
                  />
                </Box>
                
                <Box display="flex" alignItems="center" mt={'1rem'}>
                  <Box width="180px" marginRight="26px" color={'black'} fontWeight={'500'}>
                       <label htmlFor="password">Confirm Password:</label>
                  </Box>
                  <TextField
                  size="small"
                    required
                    fullWidth
                    name="password"
                    type="password"
                    id="password"
                    autoComplete="new-password"
                  />
                </Box>
               <Box display="flex" alignItems="center">
                  <Box width="180px" marginRight="26px" color={'black'} fontWeight={'500'}>
                       <label htmlFor="text">Education:</label>
                  </Box>
                <TextField   
                    size="small"
                    margin="normal" 
                    fullWidth 
                    placeholder="current level of education e.g, university. Skills e.g, Caregiveredc g" 
                    />
                    
                </Box>
              </ThemeProvider>
                <Button 
                component={Link} 
                to={'/signin'}
                variant="contained" 
                fullWidth
                type="submit"
                size="medium"
                sx= {{ 
                    fontSize: '0.9rem',
                    textTransform: 'capitalize', 
                    py: 1,
                    mt: 1, 
                    mb: 1,
                    mr: 52,
                    width: 120,
                    borderRadius: 4,
                    backgroundColor: '#8c1515',
                    "&:hover": {
                        backgroundColor: '#bb4b5b',
                        color: 'white', 
                    }
                }}
                >
                    submit
                </Button>
            </Box>
        </Stack>

              </Item>
            </Grid>       
          
        </Box>
        
      </Box>   
    
   
  )
}

export default Profile;