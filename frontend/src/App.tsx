import "/src/App.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import PageSelector from "./pages/PageSelector";
import Favicon from "react-favicon";
import icon from "./components/images/logo_MB_MINI.png";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div className="container mainLayout">
      <Favicon url={icon} />
      <Router>
        <div className="container navbarOwn">
          <Navbar />
        </div>
        <div className="container contentContainerOwn">
          <PageSelector />
        </div>
        <div className="container">
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
