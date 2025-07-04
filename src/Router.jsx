import {Routes, Route} from 'react-router-dom';

// pages
import LandingPage from './pages/Customer/LandingPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ProductPage from './pages/Customer/ProductPage';
import CartPage from './pages/Customer/CartPage';
import OrderPage from './pages/Customer/OrderPage';
import PaymentPage from './pages/Customer/PaymentPage';
import SuccessPage from './pages/Customer/SuccessPage';
import HistoryPage from './pages/Customer/HistoryPage';

function Router() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        
        <Route path="/" element={<LandingPage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/order" element={<OrderPage />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/success" element={<SuccessPage />} />
        <Route path="/history" element={<HistoryPage />} />
      </Routes>
    </>
  )
}

export default Router;
