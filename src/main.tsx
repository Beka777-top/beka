import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './home/home16.03/App'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)