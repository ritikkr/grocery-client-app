import React, { useState } from 'react'
import { Avatar, Badge, Menu, MenuItem, Tooltip } from '@mui/material';
import { ShoppingBag } from '@mui/icons-material';
import { styled, useTheme } from '@mui/material/styles';
import MuiAppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import MenuIcon from '@mui/icons-material/Menu';
import SearchBox from './SearchBox';
import { Link, useNavigate } from 'react-router-dom';

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
  })(({ theme, open }) => ({
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: `${drawerWidth}px`,
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    }),
  }));

const settings = ['Categories', 'Orders', 'Account', 'Support', ];

const drawerWidth = 240;

const TopAppBar = ({handleDrawerOpen, open, cartOpen, setCartOpen}) => {
 

  return (
    <AppBar position="fixed" open={open}>
    <Toolbar sx={{display: "flex", justifyContent: 'space-between',}}>
    <Box sx={{display:"flex", justifyContent: 'center', alignItems:'center'}}>
      <IconButton
        color="inherit"
        aria-label="open drawer"
        onClick={handleDrawerOpen}
        edge="start"
        sx={{ mr: 2, ...(open && { display: 'none' }) }}
      >
        <MenuIcon />
      </IconButton>
      <Link to="/app" style={{textDecoration: 'none', color: 'white'}}>
      <Typography variant="h6" noWrap component="div" sx={{ display: { xs: 'none', xl: 'block' }, }}>
       Quick Shop
      </Typography>
      </Link>
      </Box>
      <SearchBox />
      <IconButton sx={{  right: 0}} onClick={() => setCartOpen(true)}>
      <Tooltip title="Cart">
        {/* <Link to="cart"> */}
        <Badge  badgeContent={4} color="secondary" >
        <ShoppingBag sx={{color: "#fff" }}/>
        </Badge>
        {/* </Link> */}
        </Tooltip>
      </IconButton>
     
     
    </Toolbar>
  </AppBar>
  )
}

export default TopAppBar