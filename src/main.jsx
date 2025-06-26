import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Home from './pages/Home.jsx';
import { BrowserRouter, Route, Routes } from 'react-router';
import About from './pages/About.jsx';
import Service from './pages/Service.jsx';
import Book from './pages/Book.jsx';
import Navbar from './components/Navbar.jsx';
import NotFound from './pages/NotFound.jsx';
import Room from './pages/rooms/Room.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='about' element={<About />} />
      <Route path='service' element={<Service />} />
      <Route path='book' element={<Book />} />
      <Route path='room/:id' element={<Room />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);
