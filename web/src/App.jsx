import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Home from './pages/Home.jsx'
import Chambres from './pages/Chambres.jsx'
import Restauration from './pages/Restauration.jsx'
import BienEtre from './pages/BienEtre.jsx'
import Evenements from './pages/Evenements.jsx'
import NotreHotel from './pages/NotreHotel.jsx'
import Experiences from './pages/Experiences.jsx'
import Avis from './pages/Avis.jsx'
import Galerie from './pages/Galerie.jsx'
import Emplacement from './pages/Emplacement.jsx'
import Contact from './pages/Contact.jsx'
import NotFound from './pages/NotFound.jsx'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/chambres" element={<Chambres />} />
          <Route path="/restauration" element={<Restauration />} />
          <Route path="/bien-etre" element={<BienEtre />} />
          <Route path="/evenements" element={<Evenements />} />
          <Route path="/notre-hotel" element={<NotreHotel />} />
          <Route path="/experiences" element={<Experiences />} />
          <Route path="/avis" element={<Avis />} />
          <Route path="/galerie" element={<Galerie />} />
          <Route path="/emplacement" element={<Emplacement />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
