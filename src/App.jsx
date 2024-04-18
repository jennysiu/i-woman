import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as bootstrap from 'bootstrap';

// INTERNAL IMPORTS
import { ThemeProvider } from './contexts/ThemeContext';
import './App.css'

// pages
import Home from "./pages/Home"
import About from "./pages/About"
import Groups from "./pages/Groups"
import JobBoard from "./pages/JobBoard"
import Profile from "./pages/Profile"

// components
import CustomNavbar from "./components/CustomNavbar"
import CustomFooter from "./components/CustomFooter"

function App() {

  return (
    <>
      <div>
        <ThemeProvider>
          <BrowserRouter>
            <CustomNavbar />
            <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/about" element={<About/>} />
              <Route path="/groups" element={<Groups/>} />
              <Route path="/profile"  element={<Profile/>} />
            </Routes>
            <CustomFooter />
          </BrowserRouter>
        </ThemeProvider>
      </div>
    </>
  )
}

export default App
