import Header from "./components/Header";
import HomePage from "./pages/Homepage";
import Footer from "./components/Footer";
import { BrowserRouter as Router } from "react-router-dom";
import Approutes from "./Routes/AppRoutes";
import ScrollToTop from "./Routes/ScrollToTop";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { useEffect } from "react";
import axios from 'axios'
const theme = createTheme({
  palette: {
    primary: {
      main: '#30638E',           // Brand blue (Navbar, Footer, Headings)
      contrastText: '#ffffff',   
    },
    secondary: {
      main: '#3CAEA3',           // Teal/Green (CTAs, Buttons, Icons)
      contrastText: '#ffffff',
    },
    error: {
      main: '#D9534F',           // Subtle Red (only for alerts/warnings)
      contrastText: '#ffffff',
    },
    background: {
      default: '#F5F7FA',        // Light gray background for sections
      paper: '#ffffff',          // White cards
    },
    text: {
      primary: '#1A1A1A',        // Dark gray text
      secondary: '#4F4F4F',      // Softer gray text
    },
  },
  typography: {
    fontFamily: '"Poppins", "Roboto", "Helvetica", "Arial", sans-serif',
    button: {
      textTransform: 'none',
      fontWeight: 600,
    },
    h1: {
      color: '#30638E',          // Consistent blue headings
    },
    h2: {
      color: '#30638E',
    },
    h3: {
      color: '#30638E',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          fontWeight: 600,
        },
        containedPrimary: {
          backgroundColor: '#30638E',
          '&:hover': {
            backgroundColor: '#25516F',
          },
        },
        containedSecondary: {
          backgroundColor: '#3CAEA3',
          '&:hover': {
            backgroundColor: '#31988E',
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#30638E', 
        },
      },
    },
  },
});
const backendURL = import.meta.env.VITE_BACKEND_URL;
function App() {

  useEffect(() => {
    const keepServerAlive = async () => {
      try {
        await axios.get(`${backendURL}/`);
        console.log("Pinged server to keep it awake");
      } catch (error) {
        console.error("Failed to ping server:", error);
      }
    };

    // Ping immediately
    keepServerAlive();

    // Set interval to ping every 10 minutes (600,000 ms)
    const interval = setInterval(keepServerAlive, 10 * 60 * 1000);

    // Clean up interval on unmount
    return () => clearInterval(interval);
  }, []);


  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <ScrollToTop />
        <Header />
        <Approutes />
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
