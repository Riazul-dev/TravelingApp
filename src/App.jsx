import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./PAGES/Home";
import AboutUs from "./PAGES/AboutUs";
import Services from "./PAGES/Services";
import News from "./PAGES/News";
import Contact from "./PAGES/Contact";
import Header from "./COMPONENTS/Header/Header";
import FooterSection from "./COMPONENTS/FooterSection";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/aboutUs" Component={AboutUs} />
        <Route path="/services" Component={Services} />
        <Route path="/news" Component={News} />
        <Route path="/contact" Component={Contact} />
      </Routes>
      <FooterSection />
    </BrowserRouter>
  );
}

export default App;
