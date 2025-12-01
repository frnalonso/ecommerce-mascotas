import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // CSS plano de Bootstrap


createRoot(document.getElementById('root')).render(<App />)
