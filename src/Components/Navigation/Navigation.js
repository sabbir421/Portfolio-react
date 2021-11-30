import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from 'react-router-dom';
const Navigation = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          
          <NavLink to='/home'><Button color="inherit">Download Resume</Button></NavLink>
          <NavLink to='/Contact'><Button color="inherit">Contact</Button></NavLink>
          <NavLink to='/skill'><Button color="inherit">Skill</Button></NavLink>
        </Toolbar>
      </AppBar>
    </Box>
    );
};

export default Navigation;