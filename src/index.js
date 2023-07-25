import React from 'react';
import {createRoot} from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './assets/fonts/Montserrat-Medium.ttf';
import './index.scss';
import Home from './pages/Home/home.jsx';
import About from './pages/About/about.jsx';
import Error from './pages/Error/error.jsx';
import Housing from './pages/Housing/housing.jsx';
import Header from './components/Header/header.jsx';
import Footer from './components/Footer/footer.jsx';

const domNode = document.getElementById('root');
const root = createRoot(domNode);

root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/housing/:id" element={<Housing />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
)
