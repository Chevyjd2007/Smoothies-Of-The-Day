import React from 'react';
import { createRoot } from "react-dom/client";
import './index.css';
import App from './App';

import ColorModeContextProvider from './components/themes/ColorModeContextProvider';

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <ColorModeContextProvider>
      <App />
      </ColorModeContextProvider>
  </React.StrictMode>
);

