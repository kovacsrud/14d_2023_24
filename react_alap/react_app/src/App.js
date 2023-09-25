
import './App.css';
import Header from './components/Header';
import Box from './components/Box';

function App() {
  return (
    <div className="container">
      <Header headerText={"React alkalmazás"}/>
      <Box hatter={"red"} felirat={"Box"} kezd={0}/>
      <Box hatter={"green"} felirat={"Box"} kezd={1}/>
      <Box hatter={"blue"} felirat={"Box"} kezd={2}/>
    </div>
  );
}

export default App;
