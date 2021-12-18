import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';

const NavBar = () => {



  return (
    <AppBar position="relative" sx = {{ background : "white"}} >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            className = " text-dark"
            sx={{ mr: 2, display: { xs: "none", md: "flex", width : "300px" } }}
          >
            Foodie's Haunt
          </Typography>
          <Box sx={{ flexGrow: 0, width : "100%",   }}>
            <Tooltip title="Hi, I am Ayush"  >
              <IconButton href = "https://www.linkedin.com/in/ayush-bisht-9a5582192/"  sx={{ p: 0, float : "right" , background : "black" }}>
                <Avatar alt="Ayush Bisht" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default NavBar;
