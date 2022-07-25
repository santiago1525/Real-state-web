import React from 'react'
import GlobalStyle from './globalStyles';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { Route, Routes } from 'react-router-dom';
/* Pages */
import Home from './pages/Home';
import Rentals from './pages/Rentals';


function App() {

  Aos.init();

  

  return (
    <>
    <GlobalStyle />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/alquileres" element={<Rentals />} />
    </Routes>
    </>
  );
}

export default App;
