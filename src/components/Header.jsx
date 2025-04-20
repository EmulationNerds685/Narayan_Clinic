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
  const location = useLocation();

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
      <AppBar position="static" sx={{ backgroundColor: theme.palette.primary.main }}>
        <Toolbar>
          <FavoriteIcon sx={{ mr: 1, color: '#fff' }} />
          <Typography variant="h6" sx={{ flexGrow: 1, color: '#fff', fontWeight: 600 }}>
            {isMobile ? 'NHMC' : 'NARAYAN HEART AND MATERNITY CENTER'}
          </Typography>

          {isMobile ? (
            <>
              <IconButton color="inherit" edge="end" onClick={toggleDrawer(true)}>
                <MenuIcon />
              </IconButton>
              <Drawer
                anchor="right"
                open={drawerOpen}
                onClose={toggleDrawer(false)}
                transitionDuration={300}
                PaperProps={{
                  sx: { backgroundColor: theme.palette.background.default },
                }}
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
                        selected={isActive(path)}
                        sx={{
                          '&.Mui-selected': {
                            backgroundColor: theme.palette.primary.light,
                            color: theme.palette.primary.contrastText,
                          },
                          '&:hover': {
                            backgroundColor: theme.palette.primary.main,
                            color: '#fff',
                          },
                        }}
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
                    color: isActive(path)
                      ? theme.palette.primary.contrastText
                      : '#fff',
                    backgroundColor: isActive(path)
                      ? theme.palette.primary.dark
                      : 'transparent',
                    marginLeft: 2,
                    fontWeight: 500,
                    '&:hover': {
                      backgroundColor: theme.palette.primary.main,
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
