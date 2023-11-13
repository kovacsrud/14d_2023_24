import {useNavigate} from 'react-router-dom';

function Tanulo({tanulo,update}) {
  const navigate=useNavigate();

  const {id,vezeteknev,keresztnev,kor,om_azonosito,szuletesi_hely,email}=tanulo;
  
  const modosit=()=>{
    navigate("/modosittanulo",{state:{tanulo}});    
  }

  const torles=()=>{
     fetch(`http://127.0.0.1:8000/tanulok/${id}`,{
      method:'DELETE',
      headers:{'Content-type':'application/json'}
     })
     .then(res=>res.json())
     .then(res=>{alert(res);update()})
     .catch(err=>console.log(err));
  }
  return (
    <div className="card my-5 w-96 bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">{vezeteknev} {keresztnev}</h2>
        <p>Kor:{kor} év</p>
        <p>OM azonosító:{om_azonosito}</p>
        <p>Születési hely:{szuletesi_hely}</p>
        <p>E-mail cím:{email}</p>
        <p>
          <button onClick={modosit} className="btn btn-primary mx-5">Módosítás</button>
          <button onClick={torles} className="btn btn-secondary">Törlés</button>
        </p>
      </div>
    </div>
  )
}

export default Tanulo;