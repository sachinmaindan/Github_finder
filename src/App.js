import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './components/About';
import Search from './components/Search';
import Users from './components/Users';
import UserDetail from './components/UserDetail';
import axios from 'axios'

import './App.css';


function App() {

const [user, setUser] = useState([])

const getUserDetails = async(user) => {
  console.log("async", user)
   const result = await axios.get(`https://api.github.com/search/users?q=${user}`)
   console.log(result.data.items)
   setUser(result.data.items)
}




  return (
    <>
      <Router>
        <div className="container">
          <Navbar />
          <Routes>
            <Route path="/" element={<Search />} />
            <Route path="/about" element={<About />} />
            <Route path="/users" element={<Users />} />
            <Route path="/user/:anything" element={<UserDetail getUserDetails={getUserDetails} user={user} />} /> 
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
