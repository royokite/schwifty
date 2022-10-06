import React from "react";
import Characters from "./components/Characters";
import Episodes from "./components/Episodes";
import Locations from "./components/Locations";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import { Route, Routes } from 'react-router-dom'


function App() {
  return (
    <section>
        <NavBar />
        <Routes>
          <Route exact path="/characters" element={<Characters />} />
          <Route exact path="/locations" element={<Locations />} />
          <Route exact path="/episodes" element={<Episodes />} />
          <Route exact path="/" element={<Home />} />
          <Route path="*" element={<h1 className="text-lime-400/100 text-5xl">404 Not Found!</h1>} />
        </Routes>
        <Footer />
    </section>
  );
}

export default App;
