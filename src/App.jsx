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
      main: '#166088', // Main color set to #166088
    },
    secondary: {
      main: '#4caf50', // Secondary color can be set to a complementary green or another color
    },
    background: {
      default: '#e0f7fa', // Light background color to balance the blue
    },
    text: {
      primary: '#333333', // Dark text for better readability
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif', // Primary sans-serif font
    h1: {
      fontFamily: '"Merriweather", serif', // Serif font for headings
      fontWeight: 'bold',
    },
    h2: {
      fontFamily: '"Merriweather", serif',
      fontWeight: 'bold',
    },
    body1: {
      fontFamily: '"Open Sans", sans-serif', // Sans-serif font for body text
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Header />
        <Approutes />
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
