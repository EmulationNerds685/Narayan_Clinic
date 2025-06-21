import Header from "./components/Header";
import HomePage from "./pages/Homepage";
import Footer from "./components/Footer";
import { BrowserRouter as Router } from "react-router-dom";
import Approutes from "./Routes/AppRoutes";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
const theme = createTheme({
  palette: {
    primary: {
      main: '#30638E',           // updated main color
      contrastText: '#ffffff',   // white text for contrast
    },
    secondary: {
      main: '#F49D37',           // keep secondary unless you want to adjust
      contrastText: '#ffffff',
    },
    background: {
      default: '#F5F7FA',
      paper: '#ffffff',
    },
    text: {
      primary: '#1A1A1A',
      secondary: '#4F4F4F',
    },
  },
  typography: {
    fontFamily: '"Poppins", "Roboto", "Helvetica", "Arial", sans-serif',
    button: {
      textTransform: 'none',
      fontWeight: 600,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#30638E', // updated to match new primary
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router >
        <Header />
        <Approutes />
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
