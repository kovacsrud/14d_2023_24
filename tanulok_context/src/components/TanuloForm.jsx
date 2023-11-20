import { useState,useContext } from 'react';
import {useNavigate,useLocation} from 'react-router-dom';
import TanuloContext from '../context/TanuloContext';

function TanuloForm() {
    const navigate=useNavigate();
    const {adatfelvitel}=useContext(TanuloContext);
    const {state}=useLocation();
    let method="POST";
    let url=`http://localhost:8000/tanulok`;
    let formObj={};
    

    if(state!==null){
        method="PATCH";
        const {tanulo}=state;
        url=`http://localhost:8000/tanulok/${tanulo.id}`;
        formObj={
            vezeteknev:tanulo.vezeteknev,
            keresztnev:tanulo.keresztnev,
            kor:tanulo.kor,
            om_azonosito:tanulo.om_azonosito,
            szuletesi_hely:tanulo.szuletesi_hely,
            email:tanulo.email
        }

    } else {
        formObj={
            vezeteknev:"",
            keresztnev:"",
            kor:"",
            om_azonosito:"",
            szuletesi_hely:"",
            email:""
        }

    }

    const[formData,setFormData]=useState(formObj);

    const writeFormData=(e)=>{
        setFormData((prev)=>({...prev,[e.target.id]:e.target.value}));
    }

    const onSubmit = (e) => {
        e.preventDefault();
        adatfelvitel(url,method,formData);
        navigate('/tanulok');
        // formObj={
        //   vezeteknev:"",
        //   keresztnev:"",
        //   kor:"",
        //   om_azonosito:"",
        //   szuletesi_hely:"",
        //   email:""
        // }
        // setFormData(formObj);
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

export default TanuloForm