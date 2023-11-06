import { useState,useEffect } from "react";
import Tanulo from "./Tanulo";

function TanuloLista() {
  const[tanulok,setTanulok]=useState([]);
  useEffect(()=>{
    fetch("http://127.0.0.1:8000/tanulok")
    .then(res=>res.json())
    .then(tanulok=>setTanulok(tanulok))
    .catch(err=>alert(err));
  },[]);

  return (
    <div>
      {
        tanulok.map((tanulo)=>(<Tanulo key={tanulo.id} tanulo={tanulo} />))
      }
    </div>
  )
}

export default TanuloLista