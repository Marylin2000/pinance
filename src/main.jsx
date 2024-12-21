import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ExchangeProvider } from './context/ExchangeContext.jsx'
import { ThemeProvider } from './context/DarkModeContext.jsx'
import { ReceiptProvider } from './context/RecieptContext.jsx'
// import { UserDataProvider } from './context/UserContext.jsx'
// import { UserProvider } from './context/Context.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ReceiptProvider>

 <ExchangeProvider>
  <ThemeProvider>


        <App />
  </ThemeProvider>
 </ExchangeProvider>
 </ReceiptProvider>

     
  </React.StrictMode>,
)
