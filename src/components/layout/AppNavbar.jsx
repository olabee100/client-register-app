import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class AppNavbar extends Component {
  
  

  

  render() {
   
    return (
      <nav className="navbar navbar-expand-md navbar-dark bg-primary mb-4">
        <div className="container">
          <Link to="/" className="navbar-brand">
            ClientPanel
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarMain"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarMain">
            <ul className="navbar-nav mr-auto">
              
                <li className="nav-item">
                  <Link to="/" className="nav-link">
                    Dashboard
                  </Link>
                </li>
              
            </ul>
           
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <a href="#!" className="nav-link">
                    
                  </a>
                </li>
                <li className="nav-item">
                  <Link to="/settings" className="nav-link">
                    Settings
                  </Link>
                </li>
                <li className="nav-item">
                  <a
                    href="#!"
                    className="nav-link"
                    
                  >
                    Logout
                  </a>
                </li>
              </ul>
            

            
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link to="/login" className="nav-link">
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/register" className="nav-link">
                    Register
                  </Link>
                </li>
              </ul>
          
          </div>
        </div>
      </nav>
    );
  }
}



export default AppNavbar;


