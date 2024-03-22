import React from 'react'
import { Box, Grid, styled, Typography, Divider} from '@mui/material'
import Title from './Title'
import imgDetail from '../assets/mission.jpg';
import imgDetail2 from '../assets/Vision.jpg';


const GetStarted = () => {

    const CustomGridItem = styled(Grid) ({
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    })
    
    const CustomTypography = styled(Typography) ({
        fontSize: '1.1rem',
        textAlign: 'center',
        lineHeight: '1.5',
        color: '#515151',
        marginTop: '1.5rem',
    })

    return (
            
        <Grid container spacing={{ xs: 4, sm: 4, md: 0 }}   
        sx={{
            py: 10,
            px: 2,
             
        }}
        >
            <CustomGridItem item xs={12} sm={8} md={6} 
            component = 'section'
           
            >
                <Box component='article'
                sx={{
                    px: 8,
                    margin:4,
                }}
                >
                    <Title
                    text={
                        'Mission'
                    }
                    textAlign={'center'}
                    />
                    <CustomTypography>
                        Our mission is to empower<br />
                        individuals to make a meaningful<br />
                        impact on the world by connecting<br />
                        them with volunteer opportunities that<br />
                        match their passion, skills, and availability.
                    </CustomTypography> 
                </Box>

            </CustomGridItem>
            
            <Grid item xs={12} sm={4} md={6}>
                <img src={imgDetail} alt="" 
                style={{
                    width: '100%',
                    
                }}
                />
            </Grid>
            <Divider sx={{ marginBottom: '2rem', marginTop: '2rem', width:'100%', backgroundColor: 'grey' ,}} />

            
            <Grid item xs={12} sm={4} md={6}
            sx={{
                order: {xs: 4, sm: 4, md: 3}
            }}
            >
                <img src={imgDetail2} alt="" 
                style={{ 
                    width: "100%",
                }}
                />
            </Grid>
            

            <CustomGridItem item xs={12} sm={8} md={6}
            sx={{
                order: {xs: 3, sm: 3, md: 4}
            }}
            >
                <Box component='article'
                sx={{
                    px: 4,
                }}
                >
                    <Title
                    text={
                        'Vision'
                        
                    }
                    textAlign={'center'}
                    />
                    <CustomTypography >
                        Our vision is to build a world<br /> 
                        where compassion and community impact<br /> 
                        are at the heart of human interaction. We aspire <br /> 
                        to create a global network of volunteers who work <br /> 
                        together to address the world's most pressing challenges.
                        
                    </CustomTypography>
                </Box>
                
            </CustomGridItem>
            
        </Grid>
        
    )
}

export default GetStarted;