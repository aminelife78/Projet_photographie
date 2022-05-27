import './App.css';
import {Routes,Route} from "react-router-dom"
import Header from './components/Header/Header';
import Accueil from './components/Accueil/Accueil';
import Galerie from './components/Galerie/Galerie';
import Tarifs from './components/Tarifs/Tarifs';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="Galerie" element={<Galerie />} />
        <Route path="Tarifs" element={<Tarifs />} />
        <Route path="Contact" element={<Contact />} />
        
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
