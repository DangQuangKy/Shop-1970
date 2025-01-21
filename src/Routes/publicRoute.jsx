import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Main from "../Layout/main/Main";
import SanPham from "../Pages/SanPham/SanPham";
import ProductDetail from "../Pages/ProductDetail/ProductDetail";
import GioiThieu from "../Pages/GioiThieu/GioiThieu";
import TinTuc from "../Pages/TinTuc/TinTuc";
import LienHe from "../Pages/LienHe/LienHe";
import Cart from "../Pages/Cart/Cart";
import Error from "../Layout/Error/Error";
import Checkout from "../Pages/CheckOut/CheckOut";
import ConfirProduct from "../Pages/ConfirProduct/ConfirProduct";
import OrderSuccess from "../Pages/OrderSuccess/OrderSuccess";
import DefaultLayout from "../Layout/DefaultLayout/DefaultLayout";

const PublicRoute = () => {
  return (
    <Router>
      <Routes>
        <Route path="" element={<DefaultLayout />}>
          <Route index element={<Main />} />
          <Route path="/SanPham">
            <Route path="" element={<SanPham />} />
            <Route path="/SanPham/:id" element={<ProductDetail />} />
          </Route>
          <Route path="/Cart" element={<Cart />} />
          <Route path="/CheckOut" element={<Checkout />} />
          <Route path="/GioiThieu" element={<GioiThieu />} />
          <Route path="/TinTuc" element={<TinTuc />} />
          <Route path="/LienHe" element={<LienHe />} />
          <Route path="/ConfirProduct" element={<ConfirProduct />} />
          <Route path="/success" element={<OrderSuccess />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default PublicRoute;
