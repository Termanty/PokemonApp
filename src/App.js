import React from "react";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import Pokelist from "./components/Pokelist";
import PokeSingle from "./components/PokeSingle";
import FavList from "./components/FavList";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="pokelist" element={<Pokelist />} />
          <Route path="favlist" element={<FavList />} />
          <Route path=":pokemonName" element={<PokeSingle />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
