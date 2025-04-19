import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
  Button,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Link, useLocation } from 'react-router-dom';

const menuItems = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Contact', path: '/contact' },
  { label: 'Book Appointment', path: '/book' },
];

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const location = useLocation(); // 👈 This gives us the current path

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  const isActive = (path) => location.pathname === path;

  return (
    <>
      <AppBar position="static" sx={{ backgroundColor: '#d32f2f' }}>
        <Toolbar>
          <FavoriteIcon sx={{ mr: 1 }} />
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Heart & Maternity Clinic
          </Typography>

          {isMobile ? (
            <>
              <IconButton
                color="inherit"
                edge="end"
                onClick={toggleDrawer(true)}
              >
                <MenuIcon />
              </IconButton>
              <Drawer
                anchor="right"
                open={drawerOpen}
                onClose={toggleDrawer(false)}
                transitionDuration={300}
              >
                <Box
                  sx={{ width: 250 }}
                  role="presentation"
                  onClick={toggleDrawer(false)}
                  onKeyDown={toggleDrawer(false)}
                >
                  <List>
                    {menuItems.map(({ label, path }) => (
                      <ListItem
                        button
                        key={label}
                        component={Link}
                        to={path}
                        selected={isActive(path)} // 👈 Highlights active
                      >
                        <ListItemText primary={label} />
                      </ListItem>
                    ))}
                  </List>
                </Box>
              </Drawer>
            </>
          ) : (
            <Box>
              {menuItems.map(({ label, path }) => (
                <Button
                  key={label}
                  component={Link}
                  to={path}
                  sx={{
                    color: isActive(path) ? '#ffebee' : '#fff',
                    backgroundColor: isActive(path) ? '#b71c1c' : 'transparent',
                    marginLeft: 2,
                    '&:hover': {
                      backgroundColor: '#c62828',
                    },
                  }}
                >
                  {label}
                </Button>
              ))}
            </Box>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
