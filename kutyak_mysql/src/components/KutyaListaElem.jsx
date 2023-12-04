import { useContext } from "react";
import KutyaContext from "../context/KutyaContext";


function KutyaListaElem({kutya}) {
  const {modositas,torles}=useContext(KutyaContext);
  const url="http://localhost:8000/api/rendelo/kutyak";



  return (
    <div className="my-5 rounded-xl overflow-hidden flex shadow hover:shadow-md max-w-sm bg-white cursor-pointer h-28">
    <div className="w-7/12 pl-3 p-3 text-text1 flex flex-col justify-center">
        <p className="text-base mb-2 font-bold truncate">{kutya.nev}, {kutya.eletkor}</p>
        <div className="text-xs text-primary mb-2">
            <a className="flex items-center">
                
                <span className="font-bold tracking-wide text-sm text-pink-400">{kutya.kutyanev}</span>
            </a>
        </div>
        <div className="text-sm text-text2 tracking-wider">{kutya.utolsoell}</div>
    </div>
    <div className=" p-2">
    <button onClick={()=>modositas(kutya)} className="border border-blue-500 text-blue-500 font-bold py-2 my-2 px-4 rounded">
           Módosítás
        </button>
        <button onClick={()=>torles(kutya,url)} className="border border-blue-500 text-blue-500 font-bold py-2 px-4 rounded">
           Törlés
        </button>
    </div>
</div>
  )
}

export default KutyaListaElem