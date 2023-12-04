import {BrowserRouter,Routes,Route,Navigate} from 'react-router-dom';
import Main from './components/Main';
import Menu from './components/Menu';
import KutyanevLista from './components/KutyanevLista';
import KutyaLista from './components/KutyaLista';
import KutyafajtaLista from './components/KutyafajtaLista';
import KutyaForm from './components/KutyaForm';
import { KutyaProvider } from './context/KutyaContext';


function App() {
  

  return (
    <>
      <h1 className="text-5xl font-bold text-center">Állatorvosi rendelő</h1>    
     
      <BrowserRouter>
      <KutyaProvider>
       <Menu />
       <Routes>
         <Route path='/' element={<Main />} />
         <Route path='/kutyanevlista' element={<KutyanevLista />} />
         <Route path='/kutyafajtalista' element={<KutyafajtaLista />} />
         <Route path='/kutyalista' element={<KutyaLista />} />
         <Route path='/kutyaform' element={<KutyaForm />} />
         <Route path='*' element={<Navigate to={'/'} />} />
       </Routes>
       </KutyaProvider>
      </BrowserRouter>
      
    </>
  )
}

export default App
