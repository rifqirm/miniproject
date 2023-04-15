import React from "react";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Homepage from "./pages/homepage";
import CartPage from "./pages/cart";
import ContactPage from "./pages/contact";
import ProductPage from "./pages/product";
import ProductDetailPage from "./pages/product_detail";
import AboutPage from "./pages/about";
import TransactionPage from "./pages/transaction";
import CheckOutPage from "./pages/checkout";
import Navbar from "./components/navbar"
import Footer from "./components/footer";



function App() {

  return (
      <Router>
        <Navbar/>
        <Routes>

          <Route exact path="/" element={<Homepage />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/product/:url" element={<ProductDetailPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<CheckOutPage />} />
          <Route path="/transaction" element={<TransactionPage />} />

        </Routes>
        <Footer />
      </Router>
  )

}

export default App
