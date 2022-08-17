import './App.css';
import React from 'react';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Experience from './pages/Experience';
import Projects from './pages/Projects';

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/experience' element={<Experience />} />
            <Route path='/projects' element={<Projects />} />
          </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
