import React from "react";
import Characters from "./components/Characters";
import Episodes from "./components/Episodes";
import Locations from "./components/Locations";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
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
        </Routes>
    </section>
  );
}

export default App;
