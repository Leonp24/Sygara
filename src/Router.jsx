import {Routes, Route} from 'react-router-dom';

// pages
import LandingPage from './pages/Customer/LandingPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ProductPage from './pages/Customer/ProductPage';

function Router() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        
        <Route path="/" element={<LandingPage />} />
        <Route path="/product" element={<ProductPage />} />
      </Routes>
    </>
  )
}

export default Router;
