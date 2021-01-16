import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        {/* <Route exact path='/' component={Home} /> */}
        <Route component={() => <div>404</div>} />
      </Switch>
    </Router>
  );
}
export default App;


