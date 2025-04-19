import Header from "./components/Header";
import HomePage from "./pages/Homepage";
import Footer from "./components/Footer";
import { BrowserRouter as Router } from "react-router-dom";
import Approutes from "./Routes/AppRoutes";
function App() {
  return (
    <>
      <Router>
        <Header />
        <Approutes />
        <Footer />
      </Router>
    </>
  );
}

export default App;
