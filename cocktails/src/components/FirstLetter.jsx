import FirstLetterContext from "../context/FirstLetterContext";
import { useContext } from "react";
import Cocktail from "./Cocktail";

function FirstLetter() {
    const{cocktails,firsletter,setFirstLetter,kereses}=useContext(FirstLetterContext);

  return (
    <div>
        <h3 className="text-3xl font-bold text-center">Keresés kezőbetű szerint</h3>
        <div className="flex items-center justify-center">
            <div className="flex-column my-10">
                <div>
                <input type="text" value={firsletter} onChange={(e)=>setFirstLetter(e.target.value)} className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Kezdőbetű..." />
                <button onClick={()=>kereses()} className="btn px-8 py-3 my-10 border border-transparent text-base font-medium rounded-md text-white bg-gray-800 hover:bg-gray-600 md:py-4 md:text-lg md:px-10">Keresés</button>
                </div>
                <div>

                </div>

            </div>
            

        </div>
        <div>
                {
                    (cocktails && cocktails.length>0) ? 
                    <>
                        <div className="grid justify-items-center lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1">
                        {
                            cocktails.map((cocktail,i)=>(<Cocktail key={i} cocktail={cocktail} />))
                        }
                        </div>
                     <p className="text-3xl text-center font-bold">Találatok száma:{cocktails.length}</p>
                    </>
                     :
                    <>
                     <p className="text-3xl text-center font-bold">Nincs ilyen koktél!</p>
                    </>
                }
         </div>
    
    </div>
  )
}

export default FirstLetter