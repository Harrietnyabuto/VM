import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import Img from '../assets/home.jpg';
import Img1 from '../assets/home1.jpg';
import Img2 from '../assets/home2.jpg';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    label: '',
    imgPath: Img,
  },
  {
    label: '',
    imgPath: Img1,
      
  },
  {
    label: '',
    imgPath: Img2
     
  },
  
];

function SwipeableTextMobileStepper() {
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
   <Box sx={{ maxWidth: 600, flexGrow: 1, marginRight:'5rem', paddingTop:'4px'}}>
       
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
                  height: 385,
                  display: 'block',
                  maxWidth: 700,
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
  );
}

export default SwipeableTextMobileStepper;
