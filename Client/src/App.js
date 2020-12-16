import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Landing from './pages/Landing'
import Login from './pages/Login'
import Resume from './pages/Resume'
import Work from './pages/Work'
import './App.css'

const App = _ => {
  return (
    <Router>
      <Route exact path='/' render={_ => (<Landing />)} />
      <Route path='/login' render={_ => (<Login />)} />
      <Route path='/resume' render={_ => (<Resume />)} />
      <Route path='/work' render={_ => (<Work />)} />
    </Router>
  )
}

export default App
