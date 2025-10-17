import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Articles from './pages/Articles';
import Contact from './pages/Contact';

function App(){
  return (
    <div className="app-root">
      <Header />
      <main className="main-container">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/articles" element={<Articles/>} />
          <Route path="/contact" element={<Contact/>} />
          {/* Fallback: show Home for any unmatched route so opening the site displays homepage content */}
          <Route path="*" element={<Home/>} />
        </Routes>
      </main>
      <footer className="site-footer">© {new Date().getFullYear()} Your Name</footer>
    </div>
  )
}

export default App;

