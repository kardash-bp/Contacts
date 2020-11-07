import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Contacts from './components/contacts/Contacts'
import FormContact from './components/contacts/FormContact'
import { Header } from './components/parts/Header'
function App() {
  return (
    <Router>
      {/* <Route path='/add' component={FormContact} /> */}
      <div>
        <Header />
        <div className='container'>
          <FormContact />
          <Contacts />
        </div>
      </div>
    </Router>
  )
}

export default App
