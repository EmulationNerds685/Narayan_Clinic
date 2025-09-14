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
  Divider,
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
    <AppBar
      position="sticky"
      elevation={3}
      sx={{ backgroundColor: theme.palette.primary.main }}
    >
      <Toolbar sx={{ justifyContent: 'space-between', flexWrap: 'wrap', gap: 1 }}>
        {/* Logo + Title */}
       <Link to="/" style={{ textDecoration: 'none' }}>
  <Stack direction="row" alignItems="center" spacing={1}>
    <Box
      component="img"
      src="/nc.webp"
      alt="Logo"
      sx={{ height: 42, width: 'auto' }}
    />
    <Typography
      variant="h6"
      sx={{
        color: '#fff',
        fontWeight: 700,
        fontSize: { xs: '0.95rem', sm: '1.15rem', md: '1.2rem' },
        // Remove whiteSpace: 'nowrap' to allow wrapping
        // whiteSpace: 'nowrap', 
        lineHeight: { xs: 1.2, sm: 1.5 } // Optional: Adjust line-height on mobile for better spacing
      }}
    >
      Narayan Heart
      {/* This Box will display as a block on xs screens (forcing a line break) 
          and be hidden on sm screens and up. */}
      <Box component="span" sx={{ display: { xs: 'block', sm: 'none' } }} />
      {' '}& Maternity Centre
    </Typography>
  </Stack>
</Link>

        {/* Phone Section (hidden on very small screens) */}
        {!isMobile && (
          <Stack
            direction="row"
            alignItems="center"
            spacing={1.5}
            sx={{
              color: '#fff',
              fontSize: { xs: '0.75rem', sm: '0.875rem' },
            }}
          >
            <PhoneIcon sx={{ fontSize: 18 }} />
            <a
              href="tel:+919708441467"
              style={{ color: '#fff', textDecoration: 'none' }}
            >
              +91 97084 41467
            </a>
            <span style={{ opacity: 0.6 }}>|</span>
            <a
              href="tel:+919836197624"
              style={{ color: '#fff', textDecoration: 'none' }}
            >
              +91 98361 97624
            </a>
          </Stack>
        )}

        {/* Desktop Nav */}
        {!isMobile && (
          <Box sx={{ display: 'flex', gap: 1 }}>
            {menuItems.map(({ label, path }) => (
              <Button
                key={label}
                component={Link}
                to={path}
                sx={{
                  color: isActive(path) ? theme.palette.secondary.main : '#fff',
                  fontWeight: 500,
                  '&:hover': {
                    color: theme.palette.secondary.main,
                  },
                }}
              >
                {label}
              </Button>
            ))}
            <Button
              component={Link}
              to="/book"
              variant="contained"
              color="secondary"
              sx={{ ml: 1, borderRadius: '20px', px: 2.5 }}
            >
              Book Appointment
            </Button>
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
              PaperProps={{ sx: { width: 260, backgroundColor: '#fff' } }}
            >
              <Box
                sx={{ padding: 2 }}
                role="presentation"
                onClick={toggleDrawer(false)}
                onKeyDown={toggleDrawer(false)}
              >
                {/* Logo inside drawer */}
                <Stack direction="row" alignItems="center" spacing={1} mb={2}>
                  <Box
                    component="img"
                    src="/nc.webp"
                    alt="Logo"
                    sx={{ height: 50, width: 'auto' }}
                  />
                  <Typography variant="subtitle1" fontWeight={600} color="primary">
                    Narayan Heart & Maternity Centre
                  </Typography>
                </Stack>

                <Divider sx={{ mb: 1 }} />

                <List>
                  {menuItems.map(({ label, path }) => (
                    <ListItem
                      button
                      key={label}
                      component={Link}
                      to={path}
                      selected={isActive(path)}
                      sx={{
                        borderRadius: 1,
                        mb: 0.5,
                        '&.Mui-selected': {
                          backgroundColor: theme.palette.primary.light,
                          color: '#fff',
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

                <Divider sx={{ my: 2 }} />

                {/* CTA in Drawer */}
                <Button
                  component={Link}
                  to="/book"
                  fullWidth
                  variant="contained"
                  color="secondary"
                  sx={{ borderRadius: '20px', py: 1.2 }}
                >
                  Book Appointment
                </Button>

                {/* Phone numbers for mobile */}
                <Stack direction="column" alignItems="flex-start" spacing={0.5} mt={3}>
                  <Stack direction="row" spacing={1} alignItems="center">
                    <PhoneIcon fontSize="small" color="primary" />
                    <a href="tel:+919708441467" style={{ color: '#333', textDecoration: 'none' }}>
                      +91 97084 41467
                    </a>
                  </Stack>
                  <Stack direction="row" spacing={1} alignItems="center">
                    <PhoneIcon fontSize="small" color="primary" />
                    <a href="tel:+919836197624" style={{ color: '#333', textDecoration: 'none' }}>
                      +91 98361 97624
                    </a>
                  </Stack>
                </Stack>
              </Box>
            </Drawer>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
