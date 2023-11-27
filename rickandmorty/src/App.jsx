import Header from "./components/Header";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import Characters from "./components/Characters";
import Episodes from "./components/Episodes";
import Locations from "./components/Locations";
import { CharacterProvider } from "./contexts/CharacterContext";

import {BrowserRouter,Routes,Route,Navigate} from 'react-router-dom';


function App() {
  

  return (
    <>
      <Header />
      <CharacterProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/characters" element={<Characters />} />
          <Route path="/episodes" element={<Episodes />} />
          <Route path="/locations" element={<Locations />} />
          <Route path="*" element={<Navigate to="/" />} />

        </Routes>
      </BrowserRouter>
      </CharacterProvider>
      
      
      
    </>
  )
}

export default App
