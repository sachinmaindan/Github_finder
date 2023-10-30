import React from 'react';
import { Link } from 'react-router-dom';


function Navbar() {
  return (
    <div className="container">
    <nav className="navbar bg-primary">
      <h1>
        <i className="fa fa-github"></i> GithubFinder
      </h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
    
      </ul>
    </nav>
    </div>
  );
}

export default Navbar;
