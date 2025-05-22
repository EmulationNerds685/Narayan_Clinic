import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Divider,
  useTheme,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Link } from "react-router-dom"; // Only import Link from react-router-dom

const Footer = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        backgroundColor: theme.palette.primary.main,
        color: "#fff",
        pt: 3,
        pb: 3,
        mt: 0,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Clinic Info */}
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" fontWeight="bold" style={{display:"flex"}}>
                           <img
                src="/nc.png"
                alt="Logo"
                style={{ height: 30, width: "auto" }}
              />
              Narayan Heart & Maternity Centre
            </Typography>
            <Typography variant="body2" sx={{ mt: 1 }}>
              Providing compassionate care with a specialized team in cardiology
              and gynecology in Patna.
            </Typography>
          </Grid>

          {/* Navigation */}
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" fontWeight="bold">
              Quick Links
            </Typography>
            <Box sx={{ mt: 1 }}>
              <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
                <Typography variant="body2" sx={{ mb: 1 }}>
                  Home
                </Typography>
              </Link>
              <Link
                to="/services"
                style={{ color: "inherit", textDecoration: "none" }}
              >
                <Typography variant="body2" sx={{ mb: 1 }}>
                  Services
                </Typography>
              </Link>
              <Link
                to="/doctors"
                style={{ color: "inherit", textDecoration: "none" }}
              >
                <Typography variant="body2" sx={{ mb: 1 }}>
                  Our Doctors
                </Typography>
              </Link>
              <Link
                to="/contact"
                style={{ color: "inherit", textDecoration: "none" }}
              >
                <Typography variant="body2" sx={{ mb: 1 }}>
                  Contact
                </Typography>
              </Link>
              <Typography variant="body2" sx={{ mb: 1 }}>
                <a
                  style={{ textDecoration: "none" }}
                  href="https://maps.app.goo.gl/tsKEg2pHUXZzp1STA"
                >
                  Reach us
                </a>
              </Typography>
            </Box>
          </Grid>

          {/* Contact Info */}
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" fontWeight="bold">
              Contact Us
            </Typography>

            <Typography variant="body2" sx={{ mt: 1 }}>
              📍 MIG, 245, Lohia Nagar, kankarbagh,Patna-800020
              <br />
              📞 +91 9708441467 | +91 98301 97624
              <br />
              📧 support@heartmaternityclinic.com
            </Typography>
          </Grid>
        </Grid>

        {/* Divider + Copyright */}
        <Divider sx={{ my: 3, borderColor: "rgba(255,255,255,0.3)" }} />
        <Typography variant="body2" align="center">
          © {new Date().getFullYear()} Narayan Heart & Maternity Centre All
          rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
