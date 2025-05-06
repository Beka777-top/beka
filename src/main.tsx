import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './class/class06.05/App';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);