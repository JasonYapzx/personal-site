import './App.css';
import React from 'react';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
