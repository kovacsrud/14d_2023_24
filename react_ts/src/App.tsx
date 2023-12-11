
import './App.css'
import Header from './components/Header'
import Subheader from './components/Subheader'
import Section from './components/Section'

function App() {


  return (
    <>
      <h1>React és TypeScript</h1>
      <Header headerText={"Header"} id={1223523424}/>
      <Subheader>Alcím <p>Ismertető:</p></Subheader>
      <Section title='Általános iskola'>
          <h3>Tanulói adatok</h3>
          <p>Kiss Jenő, 8/a osztály</p>
      </Section>

      <Section>
        <h3>Dolgozói adatok</h3>
          <p>Kiss Emil, portás</p>
      </Section>




    </>
  )
}

export default App
