import './App.css';
import React from 'react'
import Login from './components/Login'
import Home from './components/Home'

import { BrowserRouter as  Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <Router>
   <div className="App">

<Routes>
    <Route path="/" 
    element={<Login/>}/>

    <Route path="/home" 
    element={<Home/>}/>
    
    <Route path="/login" 
    element={<Login/>}/>

</Routes>
</div>
    </Router>
  
   
  );
}

export default App;
