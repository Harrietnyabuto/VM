import React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Hidden } from '@mui/material';
import Paragraph from './Paragraph'

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function OpportunityReviewCard2() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ marginTop:'1rem', marginLeft:'17rem', background: '#f5f5f5', width: 500 , }}>
    
        <CardMedia
        component="img"
        sx={{ width: 81 ,borderRadius:"50rem",ml:'0.3rem',mt:'1rem' }}
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4rdsaALDb5n_J2vtnYGeRh86KFlo-clQbdw&usqp=CAU"
        alt="Event"
      
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
        
      />
     <Typography variant="body2" color="text.secondary" ml={'4rem'} mt={'-5rem'} alignItems={'left'}>
          
          </Typography>
          <Typography textAlign="left" component="div" variant="h6" ml={'6rem'} >
          Bringing Smiles to Sunshine Children's Home
        </Typography>
        <Typography textAlign="left" variant="subtitle1" color="text.secondary" component="div" ml={'6rem'}fontWeight={500}>
        Date: Saturday, March 30, 2024<br/>
  
        Time: 9:00 AM - 5:00 PM
          </Typography>
      
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites" >
          <FavoriteIcon sx={{color:'darkred'}}/>
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon sx={{ ml:"0.4rem"}}/>
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
        <CardMedia
        component="img"
        sx={{ width: 500, 
         maxHeight: 190,
         ml: '-1rem',
          // Adjust the height as needed
         objectFit: 'fit', // or 'contain', 'fill', 'scale-down', etc.
     }}
        image="https://img.freepik.com/free-vector/hand-drawn-charity-event-twitch-banner_23-2149404991.jpg"
        alt="Hope Alive"

       
      />
          <Typography paragraph>Method:</Typography>
          
          <Typography paragraph>
            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over
            medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring
            occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a
            large plate and set aside, leaving chicken and chorizo in the pan. Add
            pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook,
            stirring often until thickened and fragrant, about 10 minutes. Add
            saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
          </Typography>
          
          </CardContent>
      </Collapse>
    </Card>
  );
}
