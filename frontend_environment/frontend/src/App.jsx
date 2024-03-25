import Header from "./components/Header";
import Jaratok from "./components/Jaratok";
import Main from "./components/Main";
import Menu from "./components/Menu";
import {BrowserRouter as Router,Routes,Route,Navigate} from 'react-router-dom';
import UjJarat from "./components/UjJarat";

function App() {
 

  return (
    <div>
      <Header headerSzoveg={"Trolibusz hálózat"} />
      <Router>
      <Menu />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/jaratok" element={<Jaratok />} />
          <Route path="/ujjarat" element={<UjJarat />} />
          <Route path="*" element={<Navigate to={"/"} />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
