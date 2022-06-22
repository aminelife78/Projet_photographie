import './App.css';
import {Routes,Route} from "react-router-dom"
import Header from './components/Header/Header';
import Accueil from './components/Accueil/Accueil';
import Galerie from './components/Galerie/Galerie';
import Tarifs from './components/Tarifs/Tarifs';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Photo from './components/Galerie/Photo';
import Scroll from './components/Scroll/Scroll';
import Eroor from './components/Eroor/Eroor';


function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="Galerie" element={<Galerie />} />
        <Route path="Galerie/:photoId" element={<Photo />} />
        <Route path="Tarifs" element={<Tarifs />} />
        <Route path="Contact" element={<Contact />} />
        <Route path='*' element={<Eroor />} />
        
        
      </Routes>
      <Scroll />
      <Footer />
    </div>
  );
}

export default App;
