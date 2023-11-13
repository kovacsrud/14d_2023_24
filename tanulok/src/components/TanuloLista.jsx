import { useState,useEffect } from "react";
import Tanulo from "./Tanulo";

function TanuloLista() {
  const[tanulok,setTanulok]=useState([]);
  const[refresh,setRefresh]=useState(false);

  const update=()=>{
    setRefresh(prev=>!prev);
  }

  useEffect(()=>{
    fetch("http://127.0.0.1:8000/tanulok")
    .then(res=>res.json())
    .then(tanulok=>setTanulok(tanulok))
    .catch(err=>alert(err));
  },[refresh]);

  return (
    <div>
      {
        tanulok.map((tanulo)=>(<Tanulo key={tanulo.id} tanulo={tanulo} update={update}/>))
      }
    </div>
  )
}

export default TanuloLista