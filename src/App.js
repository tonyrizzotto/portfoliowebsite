import React from 'react';
import Hero from './custom/Hero/Hero';
import Home from './components/Home';
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
                      <a
                        href="https://github.com/tonyrizzotto"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Projects
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://linkedin.com/in/tony-rizzotto"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Resume
                      </a>
                    </li>
                    <li>
                      <a href="mailto:tony@tonyrizzotto.com">Contact</a>
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
              <Route path="/resume"></Route>
            </Switch>
          </div>
        </Router>
      </Hero>
    </div>
  );
};

export default App;
