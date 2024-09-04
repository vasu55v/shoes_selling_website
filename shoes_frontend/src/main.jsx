import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ScrollProvider } from './Context.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <ScrollProvider>

  <React.StrictMode>
    <App />
   </React.StrictMode>
   </ScrollProvider>

)
