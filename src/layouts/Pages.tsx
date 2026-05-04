import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
// import About from "../pages/About/About";
// import Services from "../pages/Services/Services";
// import Career from "../pages/Career/Career";
// import Contact from "../pages/Contact/Contact";
import NotFound from "./NotFound";

export default function Pages() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/career" element={<Career />} />
      <Route path="/contact" element={<Contact />} /> */}

      {/* 404 - Page Not Found */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}