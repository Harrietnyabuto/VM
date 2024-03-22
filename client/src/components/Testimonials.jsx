import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import Img from '../assets/about.png';
import Img1 from '../assets/home1.jpg';
import Img2 from '../assets/about5.jpg';
import Title from './Title'
import Paragraph from './Paragraph'
import { Grid} from "@mui/material";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    label: 'VolunteerMe, Kenya',
    description: "From organizing health campaigns to facilitating access to medical resources, it's been a rewarding journey dedicated to the well-being of our communities. The Red Cross has empowered me to make a direct impact, fostering positive change in healthcare outcomes.",
    imgPath: Img,
  },
  {
    label: 'San Francisco – Oakland Bay Bridge, United States',
    imgPath: Img1,
      
  },
  {
    label: 'San Francisco – Oakland Bay Bridge, United States',
    imgPath: Img2
     
  },
  
];

function Testimonials() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Grid container spacing={0}   
        sx={{
            display: 'flex',
            flexDirection: 'column',
            display: 'flex',
            textAlign: 'center',
            justifyContent: 'center',
            alignItems: 'center',
            py: 10,
            px: 2,
        }}
        >
            
            <Grid item xs={12} 
            sx={{
                marginLeft:'-18rem',
                marginRight:'5rem',
            }}
            >  

    <Box sx={{ maxWidth: '650px', flexGrow: 1 }}>
        <Paper
      square
      elevation={0}
      sx={{
        display: 'flex',
        alignItems: 'center',
        height: 120,
        border: '1px solid #ccc',
        pl: 2,
        mt: '-3rem',
        bgcolor: 'background.default',
      }}
        >
         <Typography>{images[activeStep].label}</Typography>
        </Paper>
      
   <Box sx={{ flexGrow: 1, marginRight:'-0.5rem',mt: '-0.5rem', paddingTop:'4px'}}>
       
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {images.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                component="img"
                sx={{
                  height: 405,
                  display: 'block',
                  maxWidth: 650,
                  overflow: 'hidden',
                 
                  width: '100%',
                  
                }}
                src={step.imgPath}
                alt={step.label}
              />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
            sx={{
                color: '#fff', // Change the text color to red
                backgroundColor: '#a23232', // Change the background color to blue
                "&:hover": {
                  backgroundColor: '#8c1515', // Change the background color on hover
                },
                "&:focus": {
                  backgroundColor: '#8c1515', // Change the background color on focus
                }
              }}
          >
            Next
            {theme.direction === 'rtl' ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0} sx={{
            color: '#fff', // Change the text color to red
            backgroundColor: '#a23232', // Change the background color to blue
            "&:hover": {
              backgroundColor: '#8c1515', // Change the background color on hover
            },
            "&:focus": {
              backgroundColor: '#8c1515', // Change the background color on focus
            }
          }}>
            {theme.direction === 'rtl' ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
        style={{ borderBottom: 6 }}
      />
    </Box>
    
    </Box>
    </Grid>
        <Grid item xs={12} sm={12} md={5}
            component = 'section'
            sx={{
                mr:'-48rem',
                mt:'-16rem'
            }}
            >
                <Title
                text={
                    'Testimonials'
                }
                textAlign={'start'}
                />

                <Paragraph 
                text={
                    ' We have more 500 reviews of \
                    Individual Testimonials from Our Dedicated Volunteers\
                    highlighting their unique stories and experiences .'
                }
                maxWidth = {'65%'}
              
                textAlign={'start'}
                />
            </Grid>
    </Grid>
  );
}

export default Testimonials;
