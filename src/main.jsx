import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import './index.css'
import Navbar from './Navbar.jsx';
import App from './App.jsx';


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Navbar />
    <App />
  </BrowserRouter>
)
