import React from "react";
import Home from "./components/Home";
import Characters from "./components/Characters";
import Episodes from "./components/Episodes";
import Locations from "./components/Locations";


function App() {
  return (
    <section>
      <Home />
      <Characters />
      <Locations />
      <Episodes />
    </section>
  );
}

export default App;
