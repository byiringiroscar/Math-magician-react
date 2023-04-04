import React from 'react';
import { Link } from 'react-router-dom';

const HeaderMain = () => (
  <header>
    <a href="/" className="site-title"><h1>Math Magicians</h1></a>
    <ul className="nav">
      <li className="nav-single"><Link to="/">Home</Link></li>
      <li className="nav-single"><Link to="/calculator">Calculator</Link></li>
      <li className="nav-single"><Link to="/quote">Quote</Link></li>
    </ul>
  </header>
);

export default HeaderMain;
