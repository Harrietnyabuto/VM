import React from 'react'
import { Grid, Typography, IconButton, Card, CardContent,} from "@mui/material";
// icons
import SportsGymnasticsIcon from '@mui/icons-material/SportsGymnastics';
import LocalParkingIcon from '@mui/icons-material/LocalParking';
import ArrowCircleRightRoundedIcon from '@mui/icons-material/ArrowCircleRightRounded';
import FastfoodOutlinedIcon from '@mui/icons-material/FastfoodOutlined';
import PoolOutlinedIcon from '@mui/icons-material/PoolOutlined';
import WifiPasswordIcon from '@mui/icons-material/WifiPassword';
import Diversity1Icon from '@mui/icons-material/Diversity1';
import CastForEducationIcon from '@mui/icons-material/CastForEducation';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
// components
import Title from './Title'
import Paragraph from './Paragraph'

const Content = () => {
  return (    
        <Grid container spacing={0}   
        sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            py: 10,
            px: 2,
        }}
        >
            <Grid item xs={12} sm={12} md={5}
            component = 'section'
            >
                <Title
                text={
                    'What we are offering?'
                }
                textAlign={'start'}
                />

                <Typography 
                variant='h6'
                component='h4' 
                sx = {{
                    fontWeight: '400',
                    paddingTop: 1,
                }}
                >
                    In accordance with the organization's values, <br/>goals, and areas of expertise:
                </Typography>

                <Paragraph 
                text={
                    ' VolunteerMe aligns its activities with the specific needs and priorities of the communities it serves \
                    for sustainable development \
                   .'
                }
                maxWidth = {'75%'}
                mx={0}
                textAlign={'start'}
                />
            </Grid>
            
            <Grid item xs={12} sm={6} md={3}>
                <Card 
                square={ true }
                sx={{
                    minHeight: 200,
                    
                    display: 'flex',
                    flexDirection:'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    textAlign: 'center',
                    border: '1px solid #ccc',
                }}>
                    <CardContent>
                        <IconButton>
                            <Diversity1Icon 
                            fontSize="large"
                            color="secondary" />
                        </IconButton>
                        <Typography 
                       
                        font fontSize={'15px'}
                        component="p"
                        sx={{
                            fontWeight: 700,
                            textTransform: 'capitalize',
                        }}
                        >
                        Volunteer programs focused on poverty alleviation, community development, and economic empowerment.
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
                <Card 
                square={ true }
                sx={{ 
                    minHeight: 200,
                    display: 'flex',
                    flexDirection:'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    textAlign: 'center', 
                    border: '1px solid #ccc'
                }}>
                    <CardContent>
                        <IconButton>
                            <CastForEducationIcon
                            fontSize="large"
                            color="secondary" />
                        </IconButton>
                        <Typography 
                        fontSize={'15px'} 
                        component="p"
                        sx={{
                            fontWeight: 700,
                            textTransform: 'capitalize',
                        }}
                        >
                        Volunteer programs that focus on education access, literacy, and skill development.
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>

            <Grid item xs={12} sm={6} md={2}
            sx={{
                display: {xs: 'none', sm: 'block'},
            }}  
            >
                <Card 
                square={ true }
                sx={{ 
                    boxShadow: 'none',
                    minHeight: 180,
                    display: 'flex',
                    flexDirection:'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    textAlign: 'center',
                }}>
                    <CardContent>
                        <ArrowCircleRightRoundedIcon
                        fontSize="large"
                        color="secondary" />
                    </CardContent>
                </Card>
            </Grid>

            <Grid item xs={12} sm={6} md={3}>    
                <Card 
                square={ true }
                sx={{ 
                    minHeight: 200,
                    display: 'flex',
                    flexDirection:'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    textAlign: 'center', 
                    border: '1px solid #ccc'
                }}>
                    <CardContent>
                        <IconButton>
                            <FastfoodOutlinedIcon
                            fontSize="large"
                            color="secondary" />
                        </IconButton>
                        <Typography 
                        fontSize={'15px'} 
                        component="p"
                        sx={{
                            fontWeight: 700,
                            textTransform: 'capitalize',
                        }}
                        >
                        Initiatives that address food insecurity, promote sustainable agriculture, and support community gardens.
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
                <Card 
                square={ true }
                sx={{ 
                    minHeight: 200,
                    display: 'flex',
                    flexDirection:'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    textAlign: 'center',                    
                    border: '1px solid #ccc',
                }}
                >
                    <CardContent>
                        <IconButton>
                            <HealthAndSafetyIcon
                            fontSize="large"
                            color="secondary" />
                        </IconButton>
                        <Typography 
                        fontSize={'15px'} 
                        component="p"
                        sx={{
                            fontWeight: 700,
                            textTransform: 'capitalize',
                        }}
                        >
                        Health-related volunteer opportunities, such as medical missions, health education, and supporting healthcare facilities.
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
                <Card 
                square={ true }
                sx={{ 
                    minHeight: 200,
                    display: 'flex',
                    flexDirection:'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    textAlign: 'center', 
                    border: '1px solid #ccc',
                }}>
                    <CardContent>
                        <IconButton>
                            <WifiPasswordIcon
                            fontSize="large"
                            color="secondary" />
                        </IconButton>
                        <Typography 
                        fontSize={'15px'} 
                        component="p"
                        sx={{
                            fontWeight: 700,
                            textTransform: 'capitalize',
                        }}
                        >
                        Volunteer opportunities related to job training, entrepreneurship, and supporting small businesses.
                        </Typography>
                    </CardContent>
                </Card>
            </Grid> 
        </Grid>
    );
}

export default Content