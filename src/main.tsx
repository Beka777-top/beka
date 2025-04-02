import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './home/home01.04/App.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
