import React from 'react'
import ReactDOM from 'react-dom/client'
import { NextUIProvider } from '@nextui-org/react'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './index.css'
import Presidentes from './components/Presidentes.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NextUIProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/Presidentes/:name/:id" element={<Presidentes />} />
          
        </Routes>
      </BrowserRouter>
    </NextUIProvider>
  </React.StrictMode>
)
