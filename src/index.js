import { AuthProvider } from '@propelauth/react';
import {BrowserRouter} from "react-router-dom";
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const authUrl = "https://1819377.propelauthtest.com";
console.log("Auth URL:", authUrl);

try {
  new URL(authUrl);
} catch (e) {
  console.error("Invalid authUrl:", authUrl);
  throw new Error("Invalid authUrl");
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider authUrl={authUrl}>
	    <BrowserRouter>
	      <App/>
	    </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>
);