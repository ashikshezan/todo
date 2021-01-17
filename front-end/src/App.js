import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import LogIn from './pages/Login';
import SignUp from './pages/SignUp';
import LogOut from './components/Logout';
import axiosInstance from './axios';


function App() {

  const [state, setState] = useState({});
  useEffect(() => {
    console.log("from HOME: ", localStorage);
  })

  return (
    <Router>
      <Navbar />
      <Switch>
        {/* <Route exact path='/' component={Home} /> */}
        <Route exact path='/login' component={LogIn} />
        <Route exact path='/signup' component={SignUp} />
        <Route component={() => {
          return (
            <div>
              {localStorage.getItem('access_token')
                ? <div>'User is authenticated' <LogOut /></div>
                : <div>'Please log in' <Link to='/login'>Log In</Link></div>
              }

            </div>
          )
        }} />
      </Switch>
      <Footer />
    </Router>
  );
}
export default App;


