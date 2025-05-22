import { Route, Routes } from "react-router-dom";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import About from "./about/about";
import Contact from "./Contact/Contact";
import Information from "./Information/Information";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/information" element={<Information />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
