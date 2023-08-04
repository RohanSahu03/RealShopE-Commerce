import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { CartProvider } from './components/context/CartContext';
import { ProductProvider } from './components/context/ProductContext';
import { Auth0Provider } from '@auth0/auth0-react';
import { AmountToggleProvider } from './components/context/AmountToggleContext';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider
    domain="dev-yqlptu2kc1kmvqm3.us.auth0.com"
    clientId="8x3jwKf9qv3QojjCHP85hVq7ibwpZ55N"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <ProductProvider>
  <AmountToggleProvider>
    <CartProvider>
    <App />
    </CartProvider>
  </AmountToggleProvider>
    </ProductProvider>
  </Auth0Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
