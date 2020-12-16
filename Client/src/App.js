import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Landing from './pages/Landing'
import Resume from './pages/Resume'
import './App.css'

const App = _ => {
  return (
    <Router>
      <Route exact path='/' render={_ => (<Landing />)} />
      <Route path='/resume' render={_ => (<Resume />)} />
    </Router>
  )
}

export default App
