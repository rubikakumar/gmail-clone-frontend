import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google'; 
import store from './store';
import App from './App';
import './App.css';
import './styles.css';

const root = ReactDOM.createRoot(document.getElementById('root')); 
root.render(
  <GoogleOAuthProvider clientId="9512886443042-n56ecsplu7ncb2pnfvn5pkps3q6pcgh6.apps.googleusercontent.com">
    <React.StrictMode>
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </React.StrictMode>
  </GoogleOAuthProvider> 
);
