import React from 'react'
import ReactDOM from 'react-dom/client'
//import App from './App.jsx'
import './index.css'
import { Noticias } from './Noticias/Noticias'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Noticias />
  </React.StrictMode>,
)
