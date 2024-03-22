import React from 'react'
import { Button, Stack,Divider} from '@mui/material'
import Title from './Title'
import Paragraph from './Paragraph'
import { Link } from 'react-router-dom'

const GetInTouch = () => {

    return (
        
        <Stack 
        
        component='section'
        direction="column"
        justifyContent= 'center'
        alignItems='center'
        sx={{
            py: 10,
            mx: 6,
        }}
        >
            
            <Title 
            text={
                'About Us'
                } 
            textAlign={'center'}
            />
            <Paragraph 
            text={
                'VolunteerMe is driven by a profound belief in the power of an individual to create a positive change.\
                Our Journey began with a group of passionate individuals who shared a common dream - to build a platform that unites people from all walks of life in a collective mission to make the world a better place\ .'
            }
            maxWidth = {'sm'}
            mx={0}
            textAlign={'center'}
            />
            <Button component={Link} 
            to={'/contact'}
            variant="contained" 
            type="submit"
            size="medium"
            sx= {{ 
                fontSize: '0.9rem',
                textTransform: 'capitalize', 
                py: 2,
                px: 4,
                mt: 3, 
                mb: 2,
                borderRadius: 4,
                backgroundColor: '#a23232',
                "&:hover": {
                    backgroundColor: '#8c1515',
                }
            }}
            >
                get in touch
            </Button>
 
        </Stack>
    )
}

export default GetInTouch;