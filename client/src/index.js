import React from 'react';

import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "bootstrap/dist/css/bootstrap.min.css";

import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { AuthProvider } from './context/AuthProvider';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <AuthProvider>
                <App />
            </AuthProvider>
        </BrowserRouter>
    </React.StrictMode>
);

// reportWebVitals(console.log);
