import React from 'react';

import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "bootstrap/dist/css/bootstrap.min.css";

import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { AuthProvider } from './context/AuthProvider';
import { InfoProvider } from './context/InfoProvider';
import App from './App';
import Header from './components/Header';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <AuthProvider>
                <InfoProvider>
                    <Header />
                    <Routes>
                        <Route path="/*" element={<App />} />
                    </Routes>
                </InfoProvider>
            </AuthProvider>
        </BrowserRouter>
    </React.StrictMode>
);

