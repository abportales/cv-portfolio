import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";

import { PortafolioCVAPP } from './PortafolioCVAPP'
import Aos from 'aos';
import './styles.css'

Aos.init({
  duration: 1000,
  mirror: false,
  easing: 'ease',
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <PortafolioCVAPP/>
    </BrowserRouter>
  </React.StrictMode>
)