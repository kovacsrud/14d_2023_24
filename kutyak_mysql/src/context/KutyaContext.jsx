import { useState,useEffect,createContext } from "react";
import { useNavigate } from "react-router-dom";

const KutyaContext=createContext();

export const KutyaProvider=({children})=>{
    //Ide jönnek a state-ek, függvények
    const[kutyak,setKutyak]=useState([]);
    const[kutyanevek,setKutyanevek]=useState([]);
    const[kutyafajtak,setKutyafajtak]=useState([]);
    const[refresh,setRefresh]=useState(false);
    const navigate=useNavigate();

    useEffect(()=>{
        fetch('http://localhost:8000/api/rendelo/kutyak')
        .then(res=>res.json())
        .then(kutyak=>setKutyak(kutyak))
        .catch(err=>console.log(err))
    },[refresh]);

    useEffect(()=>{
        fetch('http://localhost:8000/api/rendelo/kutyafajtak')
        .then(res=>res.json())
        .then(fajtak=>setKutyafajtak(fajtak))
        .catch(err=>console.log(err))
    },[refresh]);

    useEffect(()=>{
        fetch('http://localhost:8000/api/rendelo/kutyanevek')
        .then(res=>res.json())
        .then(nevek=>setKutyanevek(nevek))
        .catch(err=>console.log(err))

    },[refresh]);

    const update=()=>{
        setRefresh(prev=>!prev);
    }

    const backendMuvelet=async (adat,method,url)=>{
        const response=await fetch(url,{
            method:method,
            headers:{'Content-type':'application/json'},
            body:JSON.stringify(adat)
        });
        const valasz=await response.json();
        update();        
        alert(valasz.message);
    }

    const modositas=(kutya)=>{
        navigate("/kutyaform",{state:{kutya}})    
    }

    const torles=(kutya,url)=>{    
        backendMuvelet(kutya,"DELETE",url);
    }


    return <KutyaContext.Provider value={{
        kutyak,
        kutyanevek,
        kutyafajtak,
        update,
        backendMuvelet,
        modositas,
        torles
        }}>
            {children}
           </KutyaContext.Provider>
}


export default KutyaContext;