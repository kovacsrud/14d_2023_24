
import './App.css';
import Header from './components/Header';
import List from './components/List';
import JsonPholder from './components/JsonPholder';
import Users from './components/Users';
import Todos from './components/Todos';
import Images from './components/Images';
import Send from './components/Send';



function App() {
  

  return (
    <>
      <Header headerText={"Adatküldés"}/>
      <Send />          
      
    </>
  )
}

export default App
