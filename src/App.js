import "./App.scss";
import Naav from "./Components/Nav/Naav";
import Home from "./Pages/Home/Home";
import Cart from "./Pages/Cart/Cart";
import Footer from "./Components/Footer/Footer";
import ErrorPage from "./Pages/ErrorPage/ErrorPage";
import ProductDetail from "./Components/ProductDetail/ProductDetail";


import { Route, Routes } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import WishList from "./Pages/WishList/WishList";
import Login from "./Pages/Login/Login";

function App() {
  return (
    <div className="App">
      <Naav />
      <div className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login/>} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/wishlist" element={<WishList />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
      <Footer />
      <ToastContainer position="top-right" />
      <ToastContainer />
    </div>
  );
}

export default App;
