import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home";
import './App.css';

function App() {
  return (
   <Router>
    <Route exact path="/sokraacademy" component={Home} />
    <Route exact path="/sokraacademy/terms" component={Home} />
  </Router>
  );
}

export default App;
