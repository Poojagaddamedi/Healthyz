import React from 'react';
import { createRoot } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './index.css';
import App from './App.jsx';
import Context from './CreateContext/Context';
import CalendlyModal from './Component/Calendly/CalendlyModal.jsx';

const container = document.getElementById('root');
const root = createRoot(container); 

root.render(
  <Context>
    <App />
    <CalendlyModal />
  </Context>
);
