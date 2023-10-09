import { useState,useEffect } from "react";
import Image from "./Image";

function Images() {
    const[images,setImages]=useState([]);

    useEffect(()=>{
        fetch(`${import.meta.env.VITE_BACKEND_BASE_URL}/photos`)
        .then(res=>res.json())
        .then(adat=>setImages(adat))
        .catch(err=>console.log(err));
    },[]);

  return (
    <div>
        {
            images.map((image)=>(<Image key={image.id} image={image} />))
        }
    </div>
  )
}

export default Images