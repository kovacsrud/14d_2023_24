import { useState,useEffect } from "react";
import Eloado from "./Eloado";

function Eloadok() {
  const [eloadok,setEloadok]=useState([]);

  useEffect(()=>{
    fetch("http://localhost:8000/artists")
    .then(res=>res.json())
    .then(artists=>setEloadok(artists))
    .catch(err=>alert(err));
  },[]);


  return (
    <div>
       <h2 className="text-3xl font-bold text-center my-5">Előadók</h2>
       <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 justify-items-center">
       {
        eloadok.map((eloado,i)=><Eloado key={i} eloado={eloado}/>)
       }
       </div>
    </div>
  )
}

export default Eloadok