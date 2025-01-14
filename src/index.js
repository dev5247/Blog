import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { AuthProvider } from './provider/AuthContext';
import reportWebVitals from './reportWebVitals';
import '../src/utils/i18n'
import { GoogleOAuthProvider } from "@react-oauth/google"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <GoogleOAuthProvider
    clientId={`928429139277-d9mhj3kontmd0ims3f98igk88083ftps.apps.googleusercontent.com`}
  >
    <AuthProvider>
      <App />
    </AuthProvider>
  </GoogleOAuthProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
