import "/src/App.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import PageSelector from "./pages/PageSelector";
import { BrowserRouter as Router } from "react-router-dom";


function App() {
  return (
    <div className="container mainLayout">
      <Router>
      <div className="container navbarOwn"><Navbar/></div>
      <div className="container contentContainerOwn"><PageSelector/></div>
      <div className="container footerOwn"><Footer /></div>
      </Router>
    </div>
  );
}

export default App;
