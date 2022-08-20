import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";

import { PortafolioCVAPP } from './PortafolioCVAPP'
import './styles.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <PortafolioCVAPP/>
    </BrowserRouter>
  </React.StrictMode>
)