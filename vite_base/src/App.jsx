
import './App.css';
import Header from './components/Header';
import List from './components/List';
import JsonPholder from './components/JsonPholder';
import Users from './components/Users';

function App() {
  

  return (
    <>
      <Header headerText={"React app vite-al"}/>
      <Users />
      <JsonPholder />
      <List />
    </>
  )
}

export default App
