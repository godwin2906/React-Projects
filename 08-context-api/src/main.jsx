import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import LoginContextProvider from './context/LoginContextProvider.jsx'

createRoot(document.getElementById('root')).render(
<LoginContextProvider>
    <App />
</LoginContextProvider>
)
