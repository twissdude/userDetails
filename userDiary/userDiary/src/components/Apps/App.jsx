import React from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from '../pages/Home/Home'
import UserDetails from '../pages/UserDetails/UserDetails'
import Header from '../Header/Header'


const App = () => { 
  
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user/:id" element={<UserDetails />} />
      </Routes>

    </Router>
     
  )
}

export default App
