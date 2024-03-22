import { Button, Box, Grid,styled, Paper} from '@mui/material';
import Sidebar from "../components/SideBar"
import { useTheme, } from '@mui/material/styles';
import { Link } from 'react-router-dom'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


const Notifications = () => {
  const theme = useTheme();
  return (
  <Box m="20px">
    <Box height="75vh">
      <Sidebar/>

    </Box>
    
    <Box marginTop={'-30rem'}>  

        <Grid container spacing={3} >
          <Grid item xs={8} sx={{  textAlign: 'right' , height: 400, width:200, }}>
            
            <Card sx={{ display: 'flex',marginTop:'1rem', marginLeft:'17rem', backgroundColor:'white', width: 700 , height: 100}}>
            <CardMedia
              component="img"
              sx={{ width: 151 }}
              image="https://holidayalot.com/assets/images/hero-image.png"
              alt="Notification"
            />
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <CardContent sx={{ flex: '1 0 auto' }}>
              <Typography textAlign="left" component="div" variant="h6">
                Now.
              </Typography>
              <Typography  textAlign="left" variant="subtitle1" color="text.secondary" component="div">
                Stacy has just posted an event.
                <Button 
                    component={Link} 
                    to={'#'}
                    variant='contained'
                    sx={{
                        ml: 48,
                        mt: -10,
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
                        Learn More
                    </Button>
              </Typography>
              
            </CardContent>           
            
            </Box>
      
            </Card>

            <Card sx={{ display: 'flex',marginTop:'1rem', marginLeft:'17rem', backgroundColor:'white', width: 700 , height: 100}}>
            <CardMedia
              component="img"
              sx={{ width: 151 }}
              image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc6OKtCBsS5GP51lSKn9qOC6dX_eXWr8Ia_g&usqp=CAU"
              alt="Notification"
            />
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <CardContent sx={{ flex: '1 0 auto' }}>
              <Typography textAlign="left" component="div" variant="h6">
                Today, 11:28AM
              </Typography>
              <Typography textAlign="left" variant="subtitle1" color="text.secondary" component="div">
                Macy Miller has just posted an event.
                <Button 
                    component={Link} 
                    to={'#'}
                    variant='contained'
                    sx={{
                        ml: 48,
                        mt: -10,
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
                        Learn More
                    </Button>
              </Typography>
            </CardContent>
            
            </Box>
      
            </Card>

            <Card sx={{ display: 'flex',marginTop:'1rem', marginLeft:'17rem', backgroundColor:'white', width: 700 , height: 100}}>
            <CardMedia
              component="img"
              sx={{ width: 151 }}
              image="https://holidayalot.com/assets/images/hero-image.png"
              alt="Notification"
            />
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <CardContent sx={{ flex: '1 0 auto' }}>
              <Typography textAlign="left" component="div" variant="h6">
                Yesterday, 10:30AM
              </Typography>
              <Typography textAlign="left" variant="subtitle1" color="text.secondary" component="div">
              Stacy has just posted an event.
              <Button 
                    component={Link} 
                    to={'#'}
                    variant='contained'
                    sx={{
                        ml: 48,
                        mt: -10,
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
                        Learn More
                    </Button>
              </Typography>
            </CardContent>
            
            </Box>
      
            </Card>  
            <Card sx={{ display: 'flex',marginTop:'1rem', marginLeft:'17rem', backgroundColor:'white', width: 700 , height: 100 ,}}>
            <CardMedia
              component="img"
              sx={{ width: 151 }}
              image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc6OKtCBsS5GP51lSKn9qOC6dX_eXWr8Ia_g&usqp=CAU"
              alt="Notification"
            />
            <Box sx={{ display: 'flex', flexDirection: 'column',  }}>
            <CardContent sx={{ flex: '1 0 auto' }}>
              <Typography textAlign="left" component="div" variant="h6">
                11th Feb, 2024, 03:01PM 
              </Typography>
              <Typography textAlign="left" variant="subtitle1" color="text.secondary" component="div">
              Macy Miller has just posted an event.
              <Button 
                    component={Link} 
                    to={'#'}
                    variant='contained'
                    sx={{
                        ml: 48,
                        mt: -10,
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
                        Learn More
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
                    <Box display="flex" justifyContent="center" alignItems="center" marginTop={'1rem'} marginLeft={'-1rem'} marginRight={'1rem'}>
                        <img
                        alt="profile-user"
                        width="100%"
                        height="100%"
                        src={`https://www.crossroads.org.hk/wp-content/uploads/2014/12/0000cameroon_base.jpg`}
                        style={{ marginLeft:'2rem', cursor: "pointer", borderRadius:'6px' }}
                        />
                    </Box>
                    <Box textAlign="center">
                        <Typography
                            variant="h5"
                            color={'black'}
                            fontWeight="bold"
                            sx={{  m: "10px 0 0 10px" }}
                            >
                            Nakuru, Rhoda Estate
                        </Typography>                
                    </Box>
                    <Box textAlign="center">
                        <Typography
                           
                            color={'black'}
                            fontSize={'16px'}
                            fontWeight="300"
                            sx={{  m: "10px 0 0 10px" }}
                            >
                            Get ready for an exciting opportunity to make a difference in our community! We're thrilled to announce a visit to <b>Rhonda Children's Home </b>on 22nd
                             of November in Nakuru. Stay tuned for more details, and let's come together to create a day filled with smiles and positive impact.<br/>
                                <br/>
                             <b style={{ color: '#a40a1f' }}>#VolunteerMe #CommunityVisit</b>
                        </Typography>  
                        <Button 
                    component={Link} 
                    to={'#'}
                    variant='contained'
                    sx={{
                        
                        mt: 2,
                        px: 2, 
                        py: 1,
                        fontSize: '1.0rem',
                        textTransform: 'capitalize',
                        borderRadius: 2,
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
                        Register
                    </Button>              
                    </Box>
                </Box>

            </Item>
          </Grid>
  
        </Grid>

      </Box>
    </Box>
  )
}

export default Notifications;