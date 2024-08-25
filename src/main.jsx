import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import axios from 'axios';


axios.defaults.baseURL="https://bootapp-test-production.up.railway.app/"

// const customAxios = axios.create({
//   // Add any desired configuration options (e.g., baseURL, headers)
//   baseURL: "http://localhost:9090"
// });

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
