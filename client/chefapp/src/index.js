import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux'
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './App.js'
import store from './redux/store'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD-9zY5NAFS_dTA1dlbZXAwh1DwRlWWIfE",
  authDomain: "cheff-173de.firebaseapp.com",
  projectId: "cheff-173de",
  storageBucket: "cheff-173de.ayppspot.com",
  messagingSenderId: "487205944495",
  appId: "1:487205944495:web:9eb463b4ffaf2cc105685a",
  measurementId: "G-2CG3X1H5YS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <Provider store={store}>
    <App />
  </Provider>
  
  );


reportWebVitals();
