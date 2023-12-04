import { useContext,useState } from "react";
import KutyaContext from "../context/KutyaContext";
import {useNavigate,useLocation} from 'react-router-dom';

function KutyaForm() {
  const{kutyanevek,kutyafajtak,backendMuvelet}=useContext(KutyaContext);
  const navigate=useNavigate();
  const {state}=useLocation();
  let cim="Új rendelési adat felvitele";
  let method="POST";
  let formObj={};
  let url='http://localhost:8000/api/rendelo/kutyak';

  if(state!==null){
    const{kutya}=state;
    cim="Rendelési adat módosítása";
    method="PATCH";
    formObj={
      id:kutya.id,
      nevid:kutya.nevid,
      fajtaid:kutya.fajtaid,
      eletkor:kutya.eletkor,
      utolsoell:kutya.utolsoell
    }
   
  }
  else {
    formObj={
      nevid:1,
      fajtaid:1,
      eletkor:"",
      utolsoell:""
    }

  }

  const[formData,setFormData]=useState(formObj);

  const writeData=(e)=>{
    setFormData((prevState)=>({...prevState,[e.target.id]:e.target.value}))
  }

  const onSubmit=(e)=>{
    e.preventDefault();
    backendMuvelet(formData,method,url);
    navigate('/kutyalista');
  }

  


  return (
    <div>
      <h1 className="text-3xl font-bold text-center">{cim}</h1>
      <div className='grid justify-items-center lg:grid-cols-1 md:grid-cols-1 sm:grid-cols-1'>
      <form onSubmit={onSubmit}>
        <div>
          <input type="text" id='eletkor' required value={formData.eletkor} onChange={writeData} placeholder="A kutya életkora" className="input input-bordered input-info w-full max-w-xs" />
        </div>
        <div>
          <input type="text" id='utolsoell' required value={formData.utolsoell} onChange={writeData} placeholder="Utolsó ellenőrzés időpontja" className="input input-bordered input-info w-full max-w-xs" />
        </div>
        <div>
          <select className="select select-bordered" value={formData.fajtaid} onChange={writeData} id="fajtaid">
            {
              kutyafajtak.map((kutyafajta)=>(<option key={kutyafajta.id} value={kutyafajta.id}>{kutyafajta.nev}</option>))
            }
          </select>
        </div>
        <div>
          <select className="select select-bordered" value={formData.nevid} onChange={writeData} id="nevid">
            {
              kutyanevek.map((kutyanev)=>(<option key={kutyanev.id} value={kutyanev.id}>{kutyanev.kutyanev}</option>))
            }
          </select>
        </div>
        <button className="btn btn-primary">Küldés</button>


      </form>
      </div>

    </div>
  )
}

export default KutyaForm