import React from 'react'
import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar.js'
import Textform from './components/Textform.js'
import Alert from "./components/Alert.js"
import About from './components/about.js'


import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [darkMode, setDarkMode] = useState("light")
  const [alert, setAlert] = useState(null)

  let alertset = (msg, type) => {
    setAlert({
      msg: msg,
      type: type
    })

    setTimeout(() => {
      setAlert(null)
    }, 1900);
  }


  let toogleMode = () => {
    if (darkMode === "dark") {
      setDarkMode("light")
      document.body.style.backgroundColor = "white"
      document.body.style.color = "black"
      alertset("  Dark mode has been enabled", "success ")
    } else {
      setDarkMode("dark")
      document.body.style.backgroundColor = "#111"
      document.body.style.color = "white"
      alertset("  light mode has been enabled", "success ")
    }
  }

  return (
    <>
      <Router>
        <NavBar mode={darkMode} toogleMode={toogleMode} setalert={alertset} />
        <Alert alert={alert} />
        <div className="container my-4">
          <Routes>
            <Route exact path="/" element={
              <Textform alertset={alertset} heading="Enter the text to analyze" />
            } />
            <Route exact path="/about" element={
              <About />
            } />
          </Routes>
        </div>
      </Router>
    </>
  )
}

export default App
