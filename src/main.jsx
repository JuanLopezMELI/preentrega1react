import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDatOE366zV3wBWF5kppxWvavzGyCqrlIU",
  authDomain: "tapetes-kafe.firebaseapp.com",
  projectId: "tapetes-kafe",
  storageBucket: "tapetes-kafe.appspot.com",
  messagingSenderId: "204523677173",
  appId: "1:204523677173:web:a05094db39a770ac98acbc"
};

const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
