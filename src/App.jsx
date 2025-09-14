import { useEffect } from "react";
import axios from "axios";

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
