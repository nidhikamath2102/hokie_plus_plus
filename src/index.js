import { AuthProvider } from '@propelauth/react';
import {BrowserRouter} from "react-router-dom";
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider authUrl={process.env.REACT_APP_PROPELAUTH_AUTH_URL}>
	    <BrowserRouter>
	      <App/>
	    </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>
);