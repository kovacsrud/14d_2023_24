import {BrowserRouter as Router,Routes,Route,Navigate} from 'react-router-dom';
import Main from './components/Main';
import FirstLetter from './components/FirstLetter';
import Menu from './components/Menu';
import { FirstLetterProvider } from './context/FirstLetterContext';

function App() {
  

  return (
    <>
      
      <Router>
        <FirstLetterProvider>
        <Menu />
        <Routes>
           <Route path='/' element={<Main />}/>
           <Route path='/firstletter' element={<FirstLetter />}/>
           <Route path='*' element={<Navigate to={'/'} />}/>
        </Routes>
        </FirstLetterProvider>
      </Router>

    </>
  )
}

export default App
