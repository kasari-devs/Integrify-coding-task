import Cards from "./components/Cards";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FullCard from "./components/FullCard";
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

function App  () {
  const [users, setUsers] = useState([])
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res => {
                console.log(res)
                setUsers(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, []) 

    return (
      <Router>
        <div className="App">
          <Routes>
            
              <Route exact path="/" element={<Cards users={users} />} />
              <Route path="/cards/:id" element={<FullCard users={users} />} />
           
          </Routes>
        </div>
      </Router>
  );
  
}

export default App;
