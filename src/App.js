import "./App.css";
import Home from "./pages/homepage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/catalogmain";
import CatalogList from './pages/listcatalog'
import Nav from "./components/Nav";
import Detalle from "./pages/detalle";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/Nav" element={<Nav />} />
          <Route path="/" element={<Home />} />
          <Route path="/catalog" element={<Main/>}/>
          <Route path="/cataloglist" element={<CatalogList/>}/>
          <Route path="/Detalle" element={<Detalle />}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App;
