import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Contacts from './components/contacts/Contacts'
import FormContact from './components/contacts/FormContact'
import EditContact from './components/contacts/EditContact'
import { Header } from './components/parts/Header'
import About from './pages/About'
import NotFound from './pages/NotFound'
function App() {
  return (
    <Router>
      <div>
        <Header />
        <div className='container'>
          <Switch>
            <Route exact path='/add' component={FormContact} />
            <Route exact path='/edit/:id' component={EditContact} />
            <Route exact path='/about' component={About} />
            <Route exact path='/' component={Contacts} />
            <Route path='*' component={NotFound} />
          </Switch>
        </div>
      </div>
    </Router>
  )
}

export default App
