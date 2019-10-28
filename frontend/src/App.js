import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Navbar from './components/NavBar'
import HomeBar from './components/HomeBar'
import Login from './pages/Login'
import Register from './pages/Register'
import Profile from './pages/Profile'
import Pocker from './pages/Poker'

function App() {
    return (
      <Router>
        <div className="App">
          {!(window.location.pathname === "/") ? <Navbar /> : null}  
          <Route exact path="/">
            <HomeBar />
            </Route>
            <Route exact path="/poker">
              <Pocker />
            </Route>
          <div className="container">
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/profile" component={Profile} />
          </div>
        </div>
      </Router>
    )
  }


export default App