import { useContext } from "react";
import KutyaContext from "../context/KutyaContext";
import KutyaListaElem from "../components/KutyaListaElem";

function KutyaLista() {

  const {kutyak}=useContext(KutyaContext);

  return (
    <div>
      <p>Adatok száma:{kutyak.length}</p>  
      {
        kutyak.map((kutya,i)=>(<KutyaListaElem key={i} kutya={kutya}/>))
      }
    </div>
  )
}

export default KutyaLista;