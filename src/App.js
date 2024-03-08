import React, { Component } from "react";
import Dashboard from "./components/layout/Dashboard";
import AppNavbar from "./components/layout/AppNavbar";
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <AppNavbar />
          <div className="container">
            <Routes>
              <Route exact path="/" element={<Dashboard />} />
            </Routes>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
