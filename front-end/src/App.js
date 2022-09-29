import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';

import Administrator from './Pages/Administrator';
import Checkout from './Pages/Checkout';
import Login from './Pages/Login';
import Products from './Pages/Products';
import Register from './Pages/Register';
import Checkout from './Pages/Checkout';
import SalesOrders from './Pages/SalesOrders';

function App() {
  return (
    <Routes>
      <Route exact path="/" element={ <Navigate to="/login" /> } />
      <Route exact path="/customer/products" element={ <Products /> } />
      <Route exact path="/sales/orders" element={ <SalesOrders /> } />
      <Route exact path="/login" element={ <Login /> } />
      <Route exact path="/register" element={ <Register /> } />
      <Route exact path="/customer/checkout" element={ <Checkout /> } />
      <Route exact path="/admin/manage" element={ <Administrator /> } />
      <Route exact path="/customer/order/:id" element={ <Orders /> } />

    </Routes>
  );
}

export default App;
