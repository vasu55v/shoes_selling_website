import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ScrollProvider } from './Context.jsx'
// import { Toaster } from "@/components/ui/sonner"


ReactDOM.createRoot(document.getElementById('root')).render(
  <>
  <ScrollProvider>

  <React.StrictMode>
    <App />
   </React.StrictMode>
   </ScrollProvider>
  {/* <Toaster /> */}
  </>
)
