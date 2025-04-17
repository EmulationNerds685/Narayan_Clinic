import React from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  Divider,
} from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#d32f2f',
        color: '#fff',
        pt: 6,
        pb: 3,
        mt: 8,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Clinic Info */}
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" fontWeight="bold">
              <FavoriteIcon sx={{ verticalAlign: 'middle', mr: 1 }} />
              Heart & Maternity Clinic
            </Typography>
            <Typography variant="body2" sx={{ mt: 1 }}>
              Providing compassionate care with a specialized team in cardiology and gynecology.
            </Typography>
          </Grid>

          {/* Navigation */}
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" fontWeight="bold">Quick Links</Typography>
            <Box sx={{ mt: 1 }}>
              <Link href="/" color="inherit" underline="hover" display="block">Home</Link>
              <Link href="/services" color="inherit" underline="hover" display="block">Services</Link>
              <Link href="/doctors" color="inherit" underline="hover" display="block">Our Doctors</Link>
              <Link href="/contact" color="inherit" underline="hover" display="block">Contact</Link>
            </Box>
          </Grid>

          {/* Contact Info */}
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" fontWeight="bold">Contact Us</Typography>
            <Typography variant="body2" sx={{ mt: 1 }}>
              📍 123 Clinic Street, Healthy City<br />
              📞 (123) 456-7890<br />
              📧 support@heartmaternityclinic.com
            </Typography>
          </Grid>
        </Grid>

        {/* Divider + Copyright */}
        <Divider sx={{ my: 3, borderColor: 'rgba(255,255,255,0.3)' }} />
        <Typography variant="body2" align="center">
          © {new Date().getFullYear()} Heart & Maternity Clinic. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
