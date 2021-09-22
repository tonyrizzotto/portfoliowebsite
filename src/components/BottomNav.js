import React from 'react';
import './BottomNav.css';

const BottomNav = () => {
  const date = new Date();
  return (
    <div id="nav-container">
      <div id="bottom-nav">
        <div className="copyright">
          &copy; Tony Rizzotto {date.getFullYear()}
        </div>
        <nav className="nav">
          <ul>
            <li>Home</li>
            <li>Projects</li>
            <li>Resume</li>
            <li>Contact</li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default BottomNav;
