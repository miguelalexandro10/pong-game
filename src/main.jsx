import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import AOS from 'aos';
import 'aos/dist/aos.css';

// 👉 AOS initialization
AOS.init({
  duration: 800,         // animation duration (in ms)
  once: true,            // whether animation should happen only once
  easing: 'ease-out',    // easing function
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);

