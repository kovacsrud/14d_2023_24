import { useContext } from "react";
import TanuloContext from "../context/TanuloContext";
import Tanulo from "./Tanulo";

function TanuloLista() {

  const {tanulok}=useContext(TanuloContext);
 

  return (
    <div>
      {
        tanulok.map((tanulo)=>(<Tanulo key={tanulo.id} tanulo={tanulo} />))
      }
    </div>
  )
}

export default TanuloLista