import Fejlec from "./components/Fejlec";
import Eloadok from "./components/Eloadok";
import FoOldal from "./components/FoOldal";
import Kategoriak from "./components/Kategoriak";
import Menu from "./components/Menu";
import UjEloado from "./components/UjEloado";
import UjKategoriak from "./components/UjKategoriak";
import {BrowserRouter,Routes,Route,Navigate} from "react-router-dom";

function App() {
  

  return (
    <>
      <Fejlec fejlecSzoveg={"Zenei adatbázis"} />
      <BrowserRouter>
       <Menu />
       <Routes>
         <Route path="/" element={<FoOldal />} />
         <Route path="/eloadok" element={<Eloadok />} />
         <Route path="/kategoriak" element={<Kategoriak />} />
         <Route path="/ujeloado" element={<UjEloado />} />
         <Route path="/ujkategoriak" element={<UjKategoriak />} />
         <Route path="*" element={<Navigate to={"/"} />} />
       </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
