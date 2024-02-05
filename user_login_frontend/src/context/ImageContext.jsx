import {createContext} from 'react';

const ImageContext=createContext();

export const ImageProvider=({children})=>{
    const token=sessionStorage.getItem('usertoken');

    const imgDelete=(imageId)=>{
        fetch(`${import.meta.env.VITE_BASE_URL}/api/images`,{
            method:'DELETE',
            headers:{
                "Content-type":"application/json",
                "Authorization":`Bearer ${token}`
            },
            body:JSON.stringify({imageId})
        })
        .then(res=>res.text())
        .then(valasz=>alert(valasz))
        .catch(err=>alert(err));
    }

    return <ImageContext.Provider value={{imgDelete}}>{children}</ImageContext.Provider>
}

export default ImageContext;