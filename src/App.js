import React from "react";
import { Route, Routes } from "react-router-dom";
import Contact from "./Pages/Contact";
import Header from "./Pages/Header";
import Home from "./Pages/Home";
import Partner from "./Pages/Partner";
import Portfolio from "./Pages/Portfolio";
import WhatWeDo from "./Pages/WhatWeDo";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Header />} >
          <Route index element={<Home />}></Route>
          <Route path="/what" element={<WhatWeDo />}></Route>
          <Route path="/partner" element={<Partner />}></Route>
          <Route path="/portfolio" element={<Portfolio />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
