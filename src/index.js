import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom';
import AuthContextProvider from './context/AuthContext';
import {GlobalProvider} from "./context/GlobalState";

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // <React.StrictMode>
    // Router component should wrap all components. Because you need to be able to use the routing all over the website.
        <Router>
           <AuthContextProvider>
            <GlobalProvider>
                <App/>

            </GlobalProvider>
           </AuthContextProvider>

        </Router>
    // </React.StrictMode>
    ,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
