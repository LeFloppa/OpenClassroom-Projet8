import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import HeaderComponent from './components/header/header';
import FooterComponent from './components/footer/footer';
import HomePage from './pages/HomePage/homepage';
import AboutPage from './pages/AboutPage/aboutpage';
import PropertyPage from './pages/PropertyPage/propertypage';
import ErrorPage from './pages/ErrorPage/errorpage';

import './sass/main.scss';

function App() {
  return (
    <Router>
      <div className="App">
        <HeaderComponent />
        <Routes>
          <Route path="/" element={<Navigate to="/Home" />} />
          <Route path="/Home" element={<HomePage />} />
          <Route path="/a-propos" element={<AboutPage />} />
          <Route path="/logement/:id" element={<PropertyPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <FooterComponent />
      </div>
    </Router>
  );
}

export default App;
