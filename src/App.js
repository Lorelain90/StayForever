import React, { useEffect, useState } from "react";
import "./App.css";
import Home from "./pages/homepage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Catalog from "./components/catalog.jsx";
import Nav from "./components/Nav";
import DetalleExperiencia from "./pages/detalle";

function App() {

  const [characters, setCharacters] = useState([]);
  const initialUrl ="https://api.idealista.com/3.5/es/search"


  let secret = 'YTByOHhxdHJkdXh1cm5tdGpxZDU2b3J5enF6emN5NTI6IHVCYUhEd1ZiakxSRA=='

  const [info, setInfo] = useState({})

  const fetchCharacters = async (url) => {
     await fetch(url, {
      method: "POST",
      headers: {
        "Authorization": "Basic "+secret,
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"   
      }, 
      body:"grant_type=client_credentials&scope=read",
    })
      .then(response => response.json())
      .then(data => console.log(data))
  }

  useEffect(() => {
    fetchCharacters(initialUrl);
  }, [])

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/Nav" element={<Nav />} />
          <Route path="/" element={<Home />} />
          <Route path="/catalog" element={<Catalog />}></Route>
          <Route path="/catalog" element={<DetalleExperiencia />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App;