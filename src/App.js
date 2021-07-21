import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Projects from "./components/pages/Projects";
import Contact from "./components/pages/Contact";

function App() {
  return (
    <div className="App">
    <div className="App-header">
              <h2>Perlum Clark McCaa Toombs</h2>
              <h3>Coding Portfolio</h3>
    </div>

    <Router>
      <div>
        <Header />
 
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/projects" component={Projects} />
        <Route path="/contact" component={Contact} />
        <Footer />
      </div>
    </Router>
    </div>
  );
}

export default App;