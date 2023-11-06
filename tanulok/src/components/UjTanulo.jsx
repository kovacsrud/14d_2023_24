import { useState } from 'react';
import {useNavigate} from 'react-router-dom';

function UjTanulo() {

  const navigate=useNavigate();

  let formObj={
    vezeteknev:"",
    keresztnev:"",
    kor:"",
    om_azonosito:"",
    szuletesi_hely:"",
    email:""
  }

  const[formData,setFormData]=useState(formObj);

  const adatkuldes=async ()=>{
    const keres=await fetch("http://127.0.0.1:8000/tanulok",{
      method:'POST',
      headers:{'Content-type':'application/json'},
      body:JSON.stringify(formData)
    })
    const valasz=await keres.text();
    alert(valasz);
  }

  const writeFormData=(e)=>{
    setFormData((prev)=>({...prev,[e.target.id]:e.target.value}));
  }

  const onSubmit = (e) => {
    e.preventDefault();
    adatkuldes();
    //navigate('/');
    formObj={
      vezeteknev:"",
      keresztnev:"",
      kor:"",
      om_azonosito:"",
      szuletesi_hely:"",
      email:""
    }
    setFormData(formObj);
  }



  return (
    <div className='grid justify-items-center lg:grid-cols-1 md:grid-cols-1 sm:grid-cols-1'>

      <form onSubmit={onSubmit}>
        <div>
          <input type="text" id='vezeteknev' required value={formData.vezeteknev} onChange={writeFormData} placeholder="Vezetéknév" className="input input-bordered input-info w-full max-w-xs" />
        </div>
        <div>
          <input type="text" id='keresztnev' required value={formData.keresztnev} onChange={writeFormData} placeholder="Keresztnév" className="input input-bordered input-info w-full max-w-xs" />
        </div>
        <div>
          <input type="text" id='kor' required value={formData.kor} onChange={writeFormData} placeholder="Kor" className="input input-bordered input-info w-full max-w-xs" />
        </div>
        <div>
          <input type="text" id='om_azonosito' required value={formData.om_azonosito} onChange={writeFormData} placeholder="OM azonosító" className="input input-bordered input-info w-full max-w-xs" />
        </div>
        <div>
          <input type="text" id='szuletesi_hely' required value={formData.szuletesi_hely} onChange={writeFormData} placeholder="Születési hely" className="input input-bordered input-info w-full max-w-xs" />
        </div>
        <div>
          <input type="text" id='email' required value={formData.email} onChange={writeFormData} placeholder="E-mail cím" className="input input-bordered input-info w-full max-w-xs" />
        </div>
        <div>
          <button type='submit' className='btn btn-primary'>Küldés</button>
        </div>

      </form>


    </div>
  )
}

export default UjTanulo