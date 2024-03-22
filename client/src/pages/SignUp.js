import React, { useState } from 'react'
import axios from 'axios';
import Avatar from '@mui/material/Avatar';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Button, Box, Grid,styled, Paper} from '@mui/material';
import { useTheme, } from '@mui/material/styles';
import Link from '@mui/material/Link';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="none" href="https://mui.com/">
        VolunteerMe
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


//const Logout = () => {
  //const theme = useTheme();

  //const handleSubmit = (event) => {
    //event.preventDefault();
    //const data = new FormData(event.currentTarget);
    //console.log({
    //  email: data.get('email'),
     // password: data.get('password'),
    //});
  //};

  const Signup = () => {
    const [formData, setFormData] = useState({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    });
    const [error, setError] = useState(null); // State for error message
    const [successMessage, setSuccessMessage] = useState(null); // State for success message
  
    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const response = await axios.post('http://127.0.0.1:5000/register', formData);
        console.log('Registration successful:', response.data);
        // Handle success: redirect user, show success message, etc.
      } catch (error) {
        console.error('Registration failed:', error.response.data);
        // Handle error: display error message to user, etc.
      }
    };
  

  return (
  <Box >
    
    <Box marginTop={'-3rem'}>  

        <Grid container spacing={3} >

          <Grid item xs={8} sx={{  textAlign: 'right' , height: 400, width:200,  marginRight:'-6rem',}}>
            
            <Card sx={{ display: 'flex',marginTop:'2.5rem',marginLeft:'1rem',  backgroundColor:'#f9f4f2', width: 550 , height: 480, borderRadius:'20px'}}>
            <form onSubmit={handleSubmit}>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            
            
            <Avatar sx={{ m: 1, bgcolor: '#8c1515',ml: 33, mt: 2.5 }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5" mr={23}>
              Sign up
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 3 , ml: 7,width:450,}}
              >
              <Grid container spacing={2}>
                
                <Grid item xs={12} sm={6}>
                
                  <TextField
                    autoComplete="given-name"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    fullWidth
                    id="firstName"
                    label="First Name"
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="lastName"
                    label="Last Name"
                    name="lastName"
                    autoComplete="family-name"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="new-password"
                  />
                </Grid>
                
                <Grid item xs={12}>
                  <FormControlLabel sx={{mr:"10.3rem"}}
                    control={
                      <Checkbox value="allowExtraEmails" style={{ color: '#8c1515' , mb:'-0.5'}} />
                    }
                    label="I want to receive updates via email."
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                
                sx={{ mt: 2, mb: 1, backgroundColor:'#8c1515',
                "&:hover": {
                    backgroundColor: '#bb4b5b', // Set hover color 
                    color: 'white', // Set text color on hover
                }
            }}
              >
               <Link href="/signin" style={{color:'white', textDecorationLine: 'none'}} >
                    Sign Up
                  </Link>
              </Button>
              <Grid container justifyContent="flex-end">
                <Grid item sx={{mt:'0.2rem', mr:'15rem'}}>
                  <Link href="/signin" variant="body2" color={"#8c1515"} alignItems={"center"}>
                    Already have an account? Sign in
                  </Link>
                 
                </Grid>
              
              </Grid>
              
            </Box>
            </Box>
            </form>
            </Card>
          </Grid>

            <Grid item xs={3} sx={{ marginTop: '0.5rem',textAlign: 'right' , height: 400, width:100,background:'white'}}>
              <Item sx={{
    
                marginLeft: '-10rem',
                marginRight:'0',
                textAlign: 'right',
                height: 522,
               width: 680,
                 background: 'linear-gradient(#ffffff,#ffffff,#f9f4f2,#f2e9e6,#ecddd9, #e5d2cd, #dfc7c0,#d9bcb3, #d2b1a7,#cca59a,#c59a8e, #bf8f81,#c4777f)',
                border: 'transparent',
    
                  }}>

                  <Box mb="50px">
                    <Box display="flex" justifyContent="center" alignItems="center" marginTop={'3rem'} marginLeft={'-1rem'} marginRight={'1rem'}>
                      <CardMedia
                        component="img"
                        sx={{ width: 200 , ml:"2rem",borderRadius: '50rem'}}
                        image="https://holidayalot.com/assets/images/hero-image.png"
                         alt="VOLUNTEER"
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

          
        </Grid>
      </Box>

      {error && ( // Conditionally render error message
        <p style={{ color: 'red' }}>{error}</p>
      )}

      {successMessage && ( // Conditionally render success message
        <p style={{ color: 'green' }}>{successMessage}</p>
      )}
    </Box>
  )
}

export default Signup;