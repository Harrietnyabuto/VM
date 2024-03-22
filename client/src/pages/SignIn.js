import React from 'react'
import Avatar from '@mui/material/Avatar';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { outlinedInputClasses } from '@mui/material/OutlinedInput';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider  } from '@mui/material/styles';
import { Button, Box, Grid,styled, Paper} from '@mui/material';
import { useTheme, } from '@mui/material/styles';
import Link from '@mui/material/Link';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        VolunteerMe
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const Item = styled(Paper)(({ theme }) => ({
 
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  
}));

const customTheme = (outerTheme) =>
  createTheme({
    palette: {
      mode: outerTheme.palette.mode,
    },
    components: {
      MuiTextField: {
        styleOverrides: {
          root: {
            '--TextField-brandBorderColor': '#E0E3E7',
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

const Signin = () => {
  const outerTheme = useTheme();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  

  return (
    
  <Box >
    
    <Box marginTop={'-3rem'}>  

        <Grid container spacing={3} >

        <Grid item xs={3} sx={{ marginTop: '0.5rem',textAlign: 'right' , height: 400, width:100,background:'white'}}>
            <Item sx={{
    
              marginLeft: '0.5px',
              marginRight:'0',
              textAlign: 'right',
              height: 522,
              width: 680,
              background: 'linear-gradient(#ffffff,#ffffff,#f9f4f2,#f2e9e6,#ecddd9, #e5d2cd, #dfc7c0,#d9bcb3, #d2b1a7,#cca59a,#c59a8e, #bf8f81,#c4777f)',
              border: 'transparent',
    
              }}>

                <Box mb="50px">
                    <Box display="flex" justifyContent="center" alignItems="center" marginTop={'5rem'} marginLeft={'-1rem'} marginRight={'1rem'}>
                      <CardMedia
                        component="img"
                        sx={{ width: 181 }}
                        image="https://holidayalot.com/assets/images/hero-image.png"
                         alt="Live from space album cover"
                       />
                    </Box>
                    <Box textAlign="center">
                        <Typography
                            variant="h4"
                            color={'black'}
                            fontWeight="bold"
                            sx={{  m: "10px 0 0 10px" }}
                            >
                            Stacey Keen
                        </Typography>                
                    </Box>
                    <Box textAlign="center">
                        <Typography
                           
                            color={'black'}
                            fontSize={'20px'}
                            fontWeight="400"
                            sx={{  m: "10px 0 0 10px" }}
                            >
                              "<br/>
                                A catalyst for change, freely connecting <br/>
                                hearts and hands to make an impactful<br/>
                                 difference in the society<br/>
                             <b style={{ color: '#a40a1f' }}>#VolunteerMe </b>
                        </Typography>                
                    </Box>
                </Box>

            </Item>
          </Grid>

          <Grid item xs={8} sx={{  textAlign: 'right' , height: 400, width:200,  marginRight:'4rem',}}>
            
            <Card sx={{ display: 'flex',marginTop:'1.5rem',marginLeft:'26rem',  backgroundColor:'#f9f4f2', width: 550 , height: 480, borderRadius:'20px'}}>
            
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            
            
            <Avatar sx={{ m: 1, bgcolor: '#8c1515', ml: 33, mt: 2.5 }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5" mr={22}>
              Sign in
            </Typography>
            <ThemeProvider theme={customTheme(outerTheme)}>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ my: 4,
              mx: 2, mt: 0.5, ml: 10,width:400, }}>
             
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                
              />
             
              <FormControlLabel sx={{mr:'16rem', mb: -1,}}
                control={<Checkbox value="remember" style={{ color: '#8c1515', }} />}
                label="Remember me"
              />
              
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 2, mb: 2.5, backgroundColor:'#8c1515' ,  
                "&:hover": {
                  backgroundColor: '#bb4b5b', // Set hover color 
                  color: 'white', // Set text color on hover
                },}}
              >  
              <Link href="/opportunity" style={{color:'white', textDecorationLine: 'none'}} >           
                 Sign In
                 </Link>   
              </Button>
              
              <Grid container>
                <Grid item xs sx={{ml:'-30rem',  mb: 2,}}>
                  <Link href="#" variant="body2"  color={"#8c1515"} mr={"-12.5rem"}>
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="/signup" variant="body2" color={"#8c1515"} ml={"18rem"}>
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 3}} />
            </Box>
            </ThemeProvider>
            </Box>     
            </Card>           
          </Grid> 
        </Grid>
      </Box>
    </Box>
  )
}

export default Signin;