import { useState } from "react";
import { useNavigate } from "react-router-dom";

function UjJarat() {
    const navigate=useNavigate();
  
    const[id,setId]=useState("");
    const[jaratSzam,setJaratszam]=useState("");
    const[jaratTipus,setJaratTipus]=useState("T");
    const[elsoAjtos,setElsoajtos]=useState("1");

    const onSubmit=(e)=>{
        e.preventDefault();
        kuldes();
        //navigate("/");
    }

    const kuldes=()=>{
        fetch('http://localhost:8000/jarat',{
            method:"POST",
            headers:{"Content-type":"application/json"},
            body:JSON.stringify({id,jaratSzam,jaratTipus,elsoAjtos})
        })
        .then(res=>res.json())
        .then(valasz=>{alert(valasz.message);navigate('/')})
        .catch(err=>alert(err))
    }


  return (
    <div className='bg-red-100 h-screen'>
    <h1 className="text-2xl text-center p-2 bg-red-100 text-red-800">Új járat</h1>
    <form onSubmit={onSubmit}>
      <div className='flex flex-col items-center p-5'>
        <label>Adja meg az Id-t</label>
        <input type='text'  className='input input-bordered m-2'  value={id} onChange={(e)=>setId(e.target.value)} />
        <label>Adja meg a járatszámot:</label>
        <input type='text'  className='input input-bordered m-2'  value={jaratSzam} onChange={(e)=>setJaratszam(e.target.value)} />
        <label>A járat típusa:</label>
        <select className='select select-bordered w-60' value={jaratTipus} onChange={(e)=>setJaratTipus(e.target.value)}>
          
          <option value="M">Metró</option>
          <option value="T" selected>Troli</option>
          <option></option>
        </select>
        <label>Elsőajtós felszállás:</label>
        <select className='select select-bordered w-60' value={elsoAjtos} onChange={(e)=>setElsoajtos(e.target.value)}>
          <option value="1" selected>Igen</option>
          <option value="0">Nem</option>
        </select>          
      

      <button type='submit' className='btn btn-secondary my-5'>Küldés</button>
      </div>
    </form>
  </div>
  )
}

export default UjJarat