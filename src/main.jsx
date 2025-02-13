import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './style.css'
import Router from './Router'

// react router dom
import { BrowserRouter} from 'react-router-dom';

// react bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  </StrictMode>,
)
