import { Routes, Route } from 'react-router-dom'

import Navbar from "./Components/Navbar";
import Footer from "./Components/footer";

import Home from "./Pages/Home";
import Pokemones from './Pages/Pokemones';
import Contacto from './Pages/Contacto';
import NoFound from "./Pages/NotFound";

export default function App() {
  return (

    <div>
      <Navbar />

      <main>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pokemones" element={<Pokemones />} />
          <Route path="/Contacto" element={<Contacto />} />
          <Route path="*" element={<NoFound />} />
        </Routes>
        
      </main>
      

      <Footer footer=" © 2020-2021 Santiago, Chile Ð€IMØ§¯®Ã§Iv Todos los derechos reservados." />
      
    </div>
      )
}