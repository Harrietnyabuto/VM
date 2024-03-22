import React from 'react'
import { Box, Button, styled, Typography } from "@mui/material";
import { Link } from 'react-router-dom';
import SwipeableTextMobileStepper from './SwipeableTextMobileStepper';

const Header = () => {

    const CustomBox = styled(Box) (({ theme }) => ({
        minHeight: '80vh',
        display: 'flex',
        justifyContent: 'center',
        
        gap: theme.spacing(2),
        paddingTop: theme.spacing(6),
       
        
        background: '-webkit-linear-gradient(#c4777f, #bf8f81,#c59a8e,#cca59a, #d2b1a7,#d9bcb3, #dfc7c0)',
                                 
        [theme.breakpoints.down('md')]: {
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
        },

        [theme.breakpoints.up('md')]: {
            marginRight: theme.spacing(2), // Add your desired margin right
            marginLeft: theme.spacing(2), // Add your desired margin left
          },
        
    }));

    const BoxText = styled(Box) (({ theme }) => ({
        flex: '1',
        paddingLeft: theme.spacing(8),
        [theme.breakpoints.down('md')]: {
            flex: '2',
            textAlign: 'center',
            paddingLeft: theme.spacing(2),
            paddingRight: theme.spacing(2),
        },
    }));


  return  (
        <CustomBox component='header'>
            {/*  Box text  */}
            <BoxText 
            component='section'
            >
                <Typography
                variant='h2'
                component= 'h1'
                sx={{
                    fontWeight: 700,
                    color: '#fff',
                    
                }}
                >
                    "Welcome to <br/>VolunteerMe!<br />
                </Typography>

                <Typography
                variant='h2'
                component= 'h1'
                sx={{
                    fontWeight: 300,
                    fontSize: 40,
                    color: '#fff',
                }}
                >
                        <br />
                    – Where Compassion <br/>Meets Action
                </Typography>

                <Typography
                variant='p'
                component='p'
                sx={{
                    py: 3,
                    fontSize:20,
                    lineHeight: 1.6,
                    color: '#fff',
                }}
                >
                  ...in giving back, connecting with communities<br/> and making a positive impact.
                </Typography>

                <Box>
                    <Button 
                    component={Link} 
                    to={'/signin'}
                    variant='contained'
                    sx={{
                        mr: 2,
                        px: 4, 
                        py: 1,
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
                        Login
                    </Button>
                    <Button 
                    component={Link} 
                    to={'/signup'}
                    variant='outlined'
                    sx={{
                        px: 4, 
                        py: 1,
                        fontSize:'1.0em',
                        textTransform: 'capitalize',
                        borderRadius: 4,
                        color: '#fff',
                        backgroundColor: 'transparent',
                        borderColor: '#fff',
                        "&&:hover": {
                            color: '#8c1515',
                            borderColor: '#8c1515',
                        },
                        "&&:focus": {
                            color: '#8c1515',
                            borderColor: '#8c1515',
                        }
                    }}
                    >
                        Register
                    </Button>
                </Box>
            </BoxText>

            <SwipeableTextMobileStepper />

        </CustomBox>
    )
}

export default Header