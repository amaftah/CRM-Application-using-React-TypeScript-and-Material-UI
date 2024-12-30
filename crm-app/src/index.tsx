import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // Ensure App.tsx is in the src directory
// Optional: Remove this line if you don't have index.css

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
