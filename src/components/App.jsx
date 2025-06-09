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

function App() {
  return (
    <>
      <Header />
      <Main>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/company" element={<Company />} />
          <Route path="/products" element={<Products />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/information" element={<Information />} />
        </Routes>
      </Main>

      <Footer />
    </>
  );
}

export default App;
