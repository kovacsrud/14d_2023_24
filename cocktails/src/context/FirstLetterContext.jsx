import { useState,createContext } from "react";

const FirstLetterContext=createContext();

export const FirstLetterProvider=({children})=>{

    const[cocktails,setCocktails]=useState([]);
    const[firstLetter,setFirstLetter]=useState("");


    const kereses=()=>{
        if(firstLetter!=""){
            fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${firstLetter}`)
            .then(res=>res.json())
            .then(cocktails=>setCocktails(cocktails.drinks))
            .catch(err=>console.log(err));
        }
    }




    return <FirstLetterContext.Provider value={{
        cocktails,
        firstLetter,
        setFirstLetter,
        kereses
    }}>{children}</FirstLetterContext.Provider>
}



export default FirstLetterContext;