import { useState,useEffect } from "react"

function List() {
    const [lista,setLista]=useState([]);

    useEffect(()=>{
        const adatok=["Békéscsaba","Gyula","Orosháza","Békés","Gádoros"];
        setLista(adatok);
        
    },[]);


  return (
    <div>
        {
            lista.map((elem,i)=>(<h3 key={i}>{elem}</h3>))
        }
    </div>
  )
}

export default List