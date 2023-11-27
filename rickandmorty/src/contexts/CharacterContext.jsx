import { useState,useEffect,createContext } from "react";

const CharacterContext=createContext();

export const CharacterProvider=({children})=>{
    const[characters,setCharacters]=useState([]);
    const[info,setInfo]=useState({});
    const[page,setPage]=useState(1);
  
    const tovabb=()=>{
      if(page<info.pages){
        setPage(prev=>prev+1);
      }
  
    }
    const vissza=()=>{
      if(page>1){
        setPage(prev=>prev-1);
      }
  
    }    
  
    useEffect(()=>{
      fetch(`https://rickandmortyapi.com/api/character/?page=${page}`)
      .then(res=>res.json())
      .then(characters=>{setCharacters(characters.results);setInfo(characters.info)})
      .catch(err=>console.log(err));
    },[page])


    return <CharacterContext.Provider value={{characters,tovabb,vissza}}>{children}</CharacterContext.Provider>
}




export default CharacterContext;