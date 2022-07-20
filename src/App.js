//import "./App.css";
import Home from "./pages/homepage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Catalog from "./components/catalog.jsx";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalog" element={<Catalog />}></Route>

        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App;
