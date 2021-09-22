import React from 'react';
import Hero from './custom/Hero/Hero';
import Home from './components/Home';
import Projects from './components/Projects';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';

const App = () => {
  const date = new Date();
  return (
    <div>
      <Hero imageSrc={process.env.PUBLIC_URL + 'images/codingdesk.jpg'}>
        <Router>
          <div id="wrapper">
            <div id="nav-container">
              <div id="bottom-nav">
                <nav className="nav">
                  <ul>
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>
                      <Link to="/projects">Projects</Link>
                    </li>
                    <li>
                      <Link to="/resume">Resume</Link>
                    </li>
                    <li>
                      <Link to="/contact">Contact</Link>
                    </li>
                  </ul>
                </nav>
                <div className="copyright">
                  &copy; Tony Rizzotto {date.getFullYear()}
                </div>
              </div>
            </div>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/projects">
                <Projects></Projects>
              </Route>
              <Route path="/resume"></Route>
              <Route path="/contact"></Route>
            </Switch>
          </div>
        </Router>
      </Hero>
    </div>
  );
};

export default App;
