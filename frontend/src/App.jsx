import { BrowserRouter, Routes, Route } from "react-router-dom";
import GeneroPage from "./pages/GeneroPage";
import Navbar from "./components/Navbar";
import DirectorPage from "./pages/DirectorPage";
import ProductoraPage from "./pages/ProductoraPage";
import TipoPage from "./pages/TipoPage";
import MediaPage from "./pages/MediaPage";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Peliculas from "./pages/Peliculas";
import Series from "./pages/Series";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/generos" element={<GeneroPage />} />
        <Route path="/directores" element={<DirectorPage />} />
        <Route path="/productoras" element={<ProductoraPage />} />
        <Route path="/tipos" element={<TipoPage />} />
        <Route path="/media" element={<MediaPage />} />
        <Route path="/peliculas" element={<Peliculas />} />
        <Route path="/series" element={<Series />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;