import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom';
import AuthContextProvider from './context/AuthContext';
import {GlobalProvider} from "./context/GlobalState";
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Router>
            <AuthContextProvider>
                <GlobalProvider>
                    <App/>
                </GlobalProvider>
            </AuthContextProvider>
        </Router>
    </React.StrictMode>
);


reportWebVitals();
