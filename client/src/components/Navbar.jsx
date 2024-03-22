import React from 'react'
import { AppBar, Toolbar, Box, List, ListItem, Typography, styled, ListItemButton, ListItemText,} from '@mui/material';
// menu
import DrawerItem from './DrawerItem';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'

const StyledToolbar = styled(Toolbar) ({
    display: 'flex',
    alignItems:'center',
    justifyContent: '',
});

const ListMenu = styled(List)(({ theme }) => ({
    display: 'none',
    [theme.breakpoints.up("sm")] : {
        display: "flex",
        
    },
}));


const itemList = [
    {
      text: "Home",
      to: "/" 
    },
    {
      text: "About",
      to: "/about"
    },
    {
        text: "Contact",
        to: "/contact"
    }
];


const Navbar = () => {
    
    return (
        <AppBar 
        component="nav" 
        position="sticky"
        sx={{ 
            backgroundColor: '#fff', 
            borderBottomColor: '#8c1515',
            paddingBottom: '#8c1515',
        }}
        elevation={0}
        >
            <StyledToolbar>
            <Typography variant="h6" component="div" style={{ color: 'black',display: 'flex', alignItems: 'center' }}>
      <img
        src={logo}
        alt="VolunteerMe Logo"
        style={{ height: '80px', marginRight: '26rem', borderRadius:4,}} 
      />
      
    </Typography>
                <Box sx={{display: { xs: 'block', sm: 'none' } }}>
                    <DrawerItem /> 
                </Box>
                <ListMenu>
                    {itemList.map( ( item ) => {
                        const { text } = item;
                        return(
                            <ListItem key={text}>
                                <ListItemButton component={Link} to={item.to}
                                sx={{
                                    
                                    color: '#8c1515', 
                                                                  
                                    "&:hover": {
                                        backgroundColor: 'transparent',
                                        textDecoration: 'underline',
                                        color: '#1e2a5a',
                                        
                                    }
                                }}
                                >
                                    <ListItemText primary={text} />
                                </ListItemButton>
                            </ListItem>
                        )
                    })}
                </ListMenu>
            </StyledToolbar>
        </AppBar>
    )
}

export default Navbar;
