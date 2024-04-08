import { useState } from "react";
import { useNavigate } from "react-router-dom";

function UjEloado() {

  const navigate = useNavigate();
  const [eloado, setEloado] = useState("");

  const kuldes=()=>{
    fetch("http://localhost:8000/artist",{
      method:"POST",
      headers:{"Content-type":"application/json"},
      body:JSON.stringify({name:eloado})
    })
    .then(res=>res.json())
    .then(valasz=>{alert(valasz.message);navigate("/")})
    .catch(err=>alert(err));
  }

  const onSubmit=(e)=>{
    e.preventDefault();
    kuldes();
  }

  return (
    <div className="h-screen bg-gray-200 py-20 p-4 md:p-20 lg:p-32">
      <div className="max-w-sm bg-white rounded-lg overflow-hidden shadow-lg mx-auto">
        <div className="p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Új előadó rögzítése!</h2>
          
          <form onSubmit={onSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" for="username">
                Előadó neve
              </label>
              <input value={eloado} onChange={(e)=>setEloado(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" />
            </div>
            
            <div className="flex items-center justify-between">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                Küldés
              </button>
              
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default UjEloado