import { Route, Routes } from "react-router-dom";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import About from "./about/about";
import Contact from "./contact/Contact";
import Information from "./Information/Information";
import Company from "./company/Company";
import Products from "./products/Products";
import Videos from "./Videos/Videos";
import Main from "./main/main";
import ProductDetail from "./products/productsDetail/ProductDetail";

function App() {
  return (
    <div className="app-container">
      <Header />
      <Main>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/company" element={<Company />} />
          <Route path="/productos" element={<Products />} />
          <Route path="/productos/:productId" element={<ProductDetail />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/information" element={<Information />} />
        </Routes>
      </Main>

      <Footer />
    </div>
  );
}

export default App;
