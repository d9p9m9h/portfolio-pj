import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App.jsx'
import { GlobalStyle } from './styles/GlobalStyle.js'

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <GlobalStyle />
        <App />
    </StrictMode>,
)
