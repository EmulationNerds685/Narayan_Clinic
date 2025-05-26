import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
  Button,
  Typography,
  useTheme,
  useMediaQuery,
  Stack,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import PhoneIcon from '@mui/icons-material/Phone';
import { Link, useLocation } from 'react-router-dom';

const menuItems = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Contact', path: '/contact' },
  { label: 'Reach Us', path: 'https://maps.app.goo.gl/tsKEg2pHUXZzp1STA' },
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
    <AppBar position="sticky" sx={{ backgroundColor: theme.palette.primary.main }}>
      <Toolbar sx={{ justifyContent: 'space-between', flexWrap: 'wrap', gap: 1 }}>
        {/* Logo + Title */}
          <Link to ="/">
        <Stack direction="row" alignItems="center" spacing={2}>
          <Box
            component="img"
            src="/nc.png"
            alt="Logo"
            sx={{ height: 40, width: 'auto' }}
          />
          <Typography
            variant="h6"
            sx={{
              color: '#fff',
              fontWeight: 'bold',
              fontSize: { xs: '1rem', sm: '1.25rem', md: '1rem' },
            }}
            >
            Narayan Heart & Maternity Centre
          </Typography>
        </Stack>
            </Link>

        {/* Phone Section */}
        <Stack
          direction="row"
          alignItems="center"
          spacing={1}
          sx={{
            color: '#fff',
            fontSize: { xs: '0.75rem', sm: '0.875rem' },
            flexWrap: 'wrap',
            justifyContent: { xs: 'center', md: 'flex-end' },
          }}
        >
          <PhoneIcon sx={{ fontSize: 18 }} />
          <a href="tel:+919708441467" style={{ color: '#fff', textDecoration: 'none' }}>
            +91 97084 41467
          </a>
          <span>|</span>
          <a href="tel:+919830197624" style={{ color: '#fff', textDecoration: 'none' }}>
            +91 98301 97624
          </a>
        </Stack>

        {/* Desktop Nav */}
        {!isMobile && (
          <Box sx={{ display: 'flex', gap: 1 }}>
            {menuItems.map(({ label, path }) => (
              <Button
                key={label}
                component={Link}
                to={path}
                sx={{
                  color: isActive(path) ? theme.palette.primary.contrastText : '#fff',
                  backgroundColor: isActive(path) ? theme.palette.primary.dark : 'transparent',
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

        {/* Mobile Nav */}
        {isMobile && (
          <>
            <IconButton color="inherit" onClick={toggleDrawer(true)} sx={{ ml: 1 }}>
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor="right"
              open={drawerOpen}
              onClose={toggleDrawer(false)}
              PaperProps={{ sx: { backgroundColor: theme.palette.background.default } }}
            >
              <Box
                sx={{ width: 250, paddingTop: 2 }}
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
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
