import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

// --- Placeholder Components ---
// In a real application, these would be in separate files.
// They are defined here to make this component self-contained and runnable.

const Header = () => (
  <div style={{ padding: '1rem', backgroundColor: '#30638E', color: 'white', textAlign: 'center' }}>
    <h1>Header</h1>
  </div>
);

const Footer = () => (
  <div style={{ padding: '1rem', backgroundColor: '#30638E', color: 'white', textAlign: 'center', position: 'absolute', bottom: 0, width: '100%' }}>
    <p>Footer</p>
  </div>
);

const HomePage = () => (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
        <h2>Home Page</h2>
        <p>This is a placeholder for the home page content.</p>
    </div>
);


const Approutes = () => (
  <Routes>
    <Route path="/" element={<HomePage />} />
    {/* Add other routes here */}
  </Routes>
);

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// --- Main App Component ---

// IMPORTANT: Replace this with your actual backend URL from your environment variables.
// The 'import.meta.env' object is specific to Vite projects and might not be available in all environments.
const backendURL = 'YOUR_BACKEND_URL_HERE'; // e.g., https://your-render-app.onrender.com

const theme = createTheme({
  palette: {
    primary: {
      main: '#30638E',          // Brand blue (Navbar, Footer, Headings)
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#3CAEA3',          // Teal/Green (CTAs, Buttons, Icons)
      contrastText: '#ffffff',
    },
    error: {
      main: '#D9534F',          // Subtle Red (only for alerts/warnings)
      contrastText: '#ffffff',
    },
    background: {
      default: '#F5F7FA',        // Light gray background for sections
      paper: '#ffffff',           // White cards
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

function App() {
  useEffect(() => {
    // This effect runs once when the component mounts to keep the backend server alive.
    if (backendURL && backendURL !== 'YOUR_BACKEND_URL_HERE') {
      console.log('Pinging backend to keep it active...');
      fetch(backendURL)
        .then(res => {
            if(res.ok) {
                 console.log('Backend ping successful.');
            } else {
                 console.warn('Backend ping returned a non-OK status:', res.status);
            }
        })
        .catch(err => console.error('Backend ping failed:', err));
    } else {
        console.warn("Backend URL is not set. Please replace 'YOUR_BACKEND_URL_HERE' to enable the keep-alive ping.");
    }
  }, []); // The empty dependency array ensures this runs only once.

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <div style={{ minHeight: '100vh', position: 'relative', paddingBottom: '4rem' }}>
            <ScrollToTop />
            <Header />
            <Approutes />
            <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;

