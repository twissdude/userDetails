import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './components/Apps/App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
