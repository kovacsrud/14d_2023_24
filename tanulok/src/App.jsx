import {BrowserRouter as Router,Routes,Route,Navigate} from 'react-router-dom';
import Navbar from './components/Navbar';
import Main from './components/Main';
import TanuloLista from './components/TanuloLista';
import Ujtanulo from './components/UjTanulo';


function App() {
  

  return (
    <>
      <h1 className="text-5xl font-bold text-center">Tanuló nyilvántartás</h1>    
      <Router>
        <Navbar />
          <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/tanulok' element={<TanuloLista />} />
            <Route path='/ujtanulo' element={<Ujtanulo />} />
            <Route path='*' element={<Navigate to={'/'} />} />
          </Routes>  


      </Router>

    </>
  )
}

export default App
