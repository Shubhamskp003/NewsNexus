import React from 'react'
import {BrowserRouter as Router,Routes, Route} from "react-router-dom";
import Home from './Pages/Home';
import NavBar from "./componets/NavBar"
import FetchData from "./componets/FetchData";
import Footer from './componets/Footer';
function App() {
  return (
    <>
    <Router>
    <NavBar/>
    <Routes>
      <Route exact path="/" element={<Home/>} />
      <Route  path="/general" element={<FetchData cat="general"/>} />
      <Route  path="/Business" element={<FetchData cat="Business"/>} />
      <Route  path="/Entertainment" element={<FetchData cat="Entertainment"/>} />
      <Route  path="/Health" element={<FetchData cat="Health"/>} />
      <Route  path="/Science" element={<FetchData cat="Science"/>} />
      <Route  path="/Technology" element={<FetchData cat="Technology"/>} />
      <Route  path="/Sports" element={<FetchData cat="Sports"/>} />

    </Routes>
    <Footer/>
    </Router>
   
    </>
  )
}

export default App