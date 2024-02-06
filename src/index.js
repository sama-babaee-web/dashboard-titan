import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { SidebarProvider } from './context/sidebarContext';
// import 'bootstrap-icons/font/bootstrap-icons.css';
const container = document.getElementById('root');
const root = createRoot(container);

root.render(
    <SidebarProvider>
        <App />
    </SidebarProvider>
);
