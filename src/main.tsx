import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom';
import AppProvider from './context/AppProvider.jsx';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
  <AppProvider>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </AppProvider>
  </BrowserRouter>,
)