import Menu from "./components/Menu";
import Main from "./components/Main";
import Komp1 from "./components/Komp1";
import Komp2 from "./components/Komp2";
import Komp3 from "./components/Komp3";
import Komp4 from "./components/Komp4";

import {BrowserRouter as Router,Routes,Route,Navigate} from "react-router-dom";


function App() {
  

  return (
    <>
      <h1 className="text-5xl font-bold text-center">Navigáció</h1>    
      
      <Router>
      <Menu />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/komp1" element={<Komp1 />} />
          <Route path="/komp2" element={<Komp2 />} />
          <Route path="/komp3" element={<Komp3 />} />
          <Route path="/komp4" element={<Komp4 />} />
          <Route path="*" element={<Navigate to={"/"}/>} />
         </Routes>
      </Router>
    </>
  )
}

export default App
