import {BrowserRouter as Router,Routes,Route,Navigate} from 'react-router-dom';
import Navbar from './components/Navbar';
import Main from './components/Main';
import TanuloLista from './components/TanuloLista';
import Ujtanulo from './components/UjTanulo';
import ModositTanulo from './components/ModositTanulo';
import { TanuloProvider } from './context/TanuloContext';


function App() {
  

  return (
    <>
      <h1 className="text-5xl font-bold text-center">Tanuló nyilvántartás</h1>    
      
      <Router>
      <TanuloProvider>
        <Navbar />
          <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/tanulok' element={<TanuloLista />} />
            <Route path='/ujtanulo' element={<Ujtanulo />} />
            <Route path='/modosittanulo' element={<ModositTanulo />} />
            <Route path='*' element={<Navigate to={'/'} />} />
          </Routes>  

          </TanuloProvider>
      </Router>
      

    </>
  )
}

export default App
