import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './class/class02.04/App.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
