import { useState } from "react";
import { ProSidebar } from "react-pro-sidebar";
import { Menu, MenuItem } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import "react-pro-sidebar/dist/scss/styles.scss";
import { tokens } from "./theme";
import Divider from '@mui/material/Divider';
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';


const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <MenuItem
      active={selected === title}
      style={{
        color: colors.grey[100],
      }}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Typography>{title}</Typography>
      <Link to={to} />
    </MenuItem>
  );
};

const SideBar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");

  return (
    <Box
      sx={{

        height: '100vh',// Set the height to full viewport height
        position: 'fixed', // Fix the position
        left: 0,// Align to the far left
        top: 0 ,// Align to the top

        "& .pro-sidebar-inner": {
          background: 'linear-gradient(#ffffff,#ffffff,#f9f4f2,#f2e9e6,#ecddd9, #e5d2cd, #dfc7c0,#d9bcb3, #d2b1a7,#cca59a,#c59a8e, #bf8f81,#c4777f)',
        },
        
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important",
        },
        "& .pro-inner-item": {
          padding: "5px 35px 5px 20px !important",
        },
        "& .pro-inner-item:hover": {
          color: "#325fa2 !important",
        },
        "& .pro-menu-item.active": {
          color: "#6870fa !important",
        },
      }}
    >
      <ProSidebar collapsed={isCollapsed}>
        <Menu iconShape="square">
          {/* LOGO AND MENU ICON */}
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{
              margin: "-10px -30px 10px -8px",
              padding: "0px", 
              color: colors.grey[400],
              backgroundColor: "#be4d4f",
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml=""
              >

{!isCollapsed && (
            <Box mb="15px">
              <Box display="flex" justifyContent="center" alignItems="center">
                <img
                  alt="profile-user"
                  width="80px"
                  height="80px"
                  src={`https://holidayalot.com/assets/images/hero-image.png`}
                  style={{ marginLeft:'2rem', cursor: "pointer", borderRadius: "60%" }}
                />
              </Box>
              <Box textAlign="center">
                <Typography
                  variant="h5"
                  color={colors.grey[100]}
                  fontWeight="bold"
                  sx={{  m: "10px 0 0 30px" }}
                >
                  Stacy Keen
                </Typography>                
              </Box>
            </Box>
          )}
                
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)} style={{ marginTop: '-4rem', marginLeft: '4rem' }} >
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>          

          <Box paddingLeft={isCollapsed ? undefined : "10%"} paddingRight={isCollapsed ? undefined : "10%"} >
            <Item 
              title="Home"
              to="/"
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
              sx={{ }}
            />
            <Divider sx={{ marginBottom: '0.7rem', width:'100%', backgroundColor: 'grey' ,}} />
            <Item
              title="Opportunities"
              to="/opportunity"
              icon={<TimelineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            /> 
            <Divider sx={{marginTop: '0.5rem',marginBottom: '0.5rem', width:'100%', backgroundColor: 'grey' ,}} />
            <Item
              title="Notifications"
              to="/notifications"
              icon={<ReceiptOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            /> 
            <Divider sx={{ marginTop: '0.5rem',marginBottom: '0.5rem', width:'100%', backgroundColor: 'grey' ,}} />
            <Item
              title="Schedule"
              to="/schedule"
              icon={<CalendarTodayOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            /> 
            <Divider sx={{ marginTop: '0.5rem',marginBottom: '0.5rem', width:'100%', backgroundColor: 'grey' ,}} />                   
            <Item
              title="Connect"
              to="/connect"
              icon={<PeopleOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Divider sx={{ marginTop: '0.5rem',marginBottom: '0.5rem', width:'100%', backgroundColor: 'grey' ,}} />
            <Item
              title="Profile"
              to="/profile"
              icon={<ContactsOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            /> 
            <Divider sx={{ marginTop: '0.5rem',marginBottom: '0.5rem', width:'100%', backgroundColor: 'grey' ,}} />
            <Item
              title="Logout"
              to="/logout"
              // onClick={handleLogout} // Replace with your logout function
              icon={<ExitToAppOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
          />          

          </Box>       
          
         
          

        </Menu>
      </ProSidebar>
    </Box>
  );
};

export default SideBar;