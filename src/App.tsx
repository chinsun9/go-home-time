import './App.css';
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Start from './components/Start';

function App() {
  useEffect(() => {
    if (!('Notification' in window)) return;

    if (Notification.permission === 'granted') return;

    Notification.requestPermission((permission) => {
      if (permission === 'denied') return;

      // eslint-disable-next-line no-new
      new Notification('퇴근시간이 되면 알려드립니다!', {
        silent: true,
      });
    });
  }, []);

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/about">
            <About />
          </Route>

          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/start/:input">
            <Start />
          </Route>

          <Route path="/:input">
            <Home />
          </Route>

          <Route path="*">
            <p>im not found</p>
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
