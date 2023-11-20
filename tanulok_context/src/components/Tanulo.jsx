
import { useContext } from 'react';
import TanuloContext from '../context/TanuloContext';

function Tanulo({tanulo}) {
  
  const {torles,modosit}=useContext(TanuloContext);

  const {id,vezeteknev,keresztnev,kor,om_azonosito,szuletesi_hely,email}=tanulo;

  const modDialog=document.getElementById(`mod${id}`);
  const moddDialog=document.getElementById(`modd${id}`);
  const delDialog=document.getElementById(`del${id}`);
  

  return (
    <div className="card my-5 w-96 bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">{vezeteknev} {keresztnev}</h2>
        <p>Kor:{kor} év</p>
        <p>OM azonosító:{om_azonosito}</p>
        <p>Születési hely:{szuletesi_hely}</p>
        <p>E-mail cím:{email}</p>
        <p>
          <button onClick={()=>document.getElementById(`modd${id}`).showModal()} className="btn btn-primary mx-5">Módosítás</button>
          <button onClick={()=>document.getElementById(`delete${id}`).showModal()} className="btn btn-secondary">Törlés</button>
        </p>
      </div>
      <dialog id={`mod${id}`} className='bg-sky-200 p-10'>
        <p className='text-2xl text-center'>Biztosan módosítja?{id}</p>
        <p>
          <button onClick={()=>{modosit(tanulo);modDialog.close()}} className='btn btn-primary'>Ok</button>
          <button onClick={()=>modDialog.close()} className='btn btn-primary'>Mégse</button>
        </p>
      </dialog>
      <dialog id={`del${id}`} className='bg-sky-200 p-10'>
        <p className='text-2xl text-center'>Biztosan törli?{id}</p>
        <p>
          <button onClick={()=>{torles(id);document.getElementById(`del${id}`).close()}} className='btn btn-primary'>Ok</button>
          <button onClick={()=>document.getElementById(`del${id}`).close()} className='btn btn-primary'>Mégse</button>
        </p>
      </dialog>

      <dialog id={`modd${id}`} className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Megerősítés</h3>
          <p className="py-4">Biztosan módosítja?</p>
          <div className="modal-action">
          <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button onClick={()=>{modosit(tanulo);document.getElementById(`modd${id}`).close()}} className="btn">Ok</button>
              <button className="btn">Mégse</button>
          </form>
          </div>
        </div>
      </dialog>

      <dialog id={`delete${id}`} className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Megerősítés</h3>
          <p className="py-4">Biztosan törli?</p>
          <div className="modal-action">
          <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button onClick={()=>{torles(id);document.getElementById(`delete${id}`).close()}} className="btn">Ok</button>
              <button className="btn">Mégse</button>
          </form>
          </div>
        </div>
      </dialog>
    </div>
  )
}

export default Tanulo;