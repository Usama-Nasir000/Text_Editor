// import './setupEnv';
// import './index.css';

// import * as React from 'react';
// import {createRoot} from 'react-dom/client';

// import App from './App';

// // Handle runtime errors
// const showErrorOverlay = (err: Event) => {
//   const ErrorOverlay = customElements.get('vite-error-overlay');
//   if (!ErrorOverlay) {
//     return;
//   }
//   const overlay = new ErrorOverlay(err);
//   const body = document.body;
//   if (body !== null) {
//     body.appendChild(overlay);
//   }
// };

// window.addEventListener('error', showErrorOverlay);
// window.addEventListener('unhandledrejection', ({reason}) =>
//   showErrorOverlay(reason),
// );

// createRoot(document.getElementById('root') as HTMLElement).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// );
import './setupEnv';
import './index.css';

import React from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';

// Handle runtime errors
const showErrorOverlay = (err) => {
  const ErrorOverlay = customElements.get('vite-error-overlay');
  if (!ErrorOverlay) {
    return;
  }
  const overlay = new ErrorOverlay(err);
  const body = document.body;
  if (body !== null) {
    body.appendChild(overlay);
  }
};

window.addEventListener('error', showErrorOverlay);
window.addEventListener('unhandledrejection', ({ reason }) =>
  showErrorOverlay(reason),
);

createRoot(document.getElementById('root')).render(
  React.createElement(React.StrictMode, null, React.createElement(App, null))
);
