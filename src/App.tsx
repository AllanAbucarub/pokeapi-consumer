import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import GlobalStyle from './globalStyles'
import Header from './components/Header'
import Home from './pages/Home'
import Details from './pages/Details'

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/details" component={Details} />
      </Switch>
    </Router>
  )
}

export default App
