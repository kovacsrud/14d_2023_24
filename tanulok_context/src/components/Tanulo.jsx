
import { useContext } from 'react';
import TanuloContext from '../context/TanuloContext';

function Tanulo({tanulo}) {
  
  const {torles,modosit}=useContext(TanuloContext);

  const {id,vezeteknev,keresztnev,kor,om_azonosito,szuletesi_hely,email}=tanulo;
  

  return (
    <div className="card my-5 w-96 bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">{vezeteknev} {keresztnev}</h2>
        <p>Kor:{kor} év</p>
        <p>OM azonosító:{om_azonosito}</p>
        <p>Születési hely:{szuletesi_hely}</p>
        <p>E-mail cím:{email}</p>
        <p>
          <button onClick={()=>modosit(tanulo)} className="btn btn-primary mx-5">Módosítás</button>
          <button onClick={()=>torles(id)} className="btn btn-secondary">Törlés</button>
        </p>
      </div>
    </div>
  )
}

export default Tanulo;