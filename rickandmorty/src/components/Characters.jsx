import {useState,useEffect,useContext} from 'react';
import Character from './Character';
import CharacterContext from '../contexts/CharacterContext';

function Characters() {

  const{characters,tovabb,vissza}=useContext(CharacterContext);

  
  // const[characters,setCharacters]=useState([]);
  // const[info,setInfo]=useState({});
  // const[page,setPage]=useState(1);

  // const tovabb=()=>{
  //   if(page<info.pages){
  //     setPage(prev=>prev+1);
  //   }

  // }

  // const vissza=()=>{
  //   if(page>1){
  //     setPage(prev=>prev-1);
  //   }

  // }

  // useEffect(()=>{
  //   fetch(`https://rickandmortyapi.com/api/character/?page=${page}`)
  //   .then(res=>res.json())
  //   .then(characters=>{setCharacters(characters.results);setInfo(characters.info)})
  //   .catch(err=>console.log(err));
  // },[page])

  return (
    <div><h1 className='text-2xl text-center font-bold'>Characters{import.meta.env.VITE_HEADER}</h1>
    <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 justify-items-center'>
      {
        characters.map((character,i)=>(<Character key={i} character={character} />))
      }
      </div>

      <div className="flex justify-center items-center flex-1 max-w-lg px-4 py-3 mt-12 bg-white border-t border-gray-200 shadow-md sm:px-6">
    <div className="flex justify-between flex-1 sm:hidden">
        <button type="button" className="relative inline-flex items-center px-2 py-2 text-sm 5xl:text-xl font-medium text-gray-700 bg-white border border-gray-300 rounded-md sm:rounded-none hover:bg-gray-50 opacity-50 cursor-not-allowed" data-id="pagination-prev" disabled=""><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 20 20" class="w-5 h-5" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg> Previous</button><button type="button" class="relative inline-flex items-center px-2 py-2 text-sm 5xl:text-xl   font-medium text-gray-700 bg-white border border-gray-300 rounded-md sm:rounded-none hover:bg-gray-50 " data-id="pagination-next">Next <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 20 20" class="w-5 h-5" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg></button>
    </div>
    <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
        <div className="relative z-0 flex justify-between w-full -space-x-px rounded-md" aria-label="Pagination">
            <button onClick={()=>vissza()} type="button" className="relative inline-flex items-center px-2 py-2 text-sm 5xl:text-xl font-medium text-gray-700 bg-white border border-gray-300 rounded-md sm:rounded-none hover:bg-gray-50 sm:rounded-l-md opacity-50 cursor-not-allowed" data-id="pagination-prev" disabled=""><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 20 20" class="w-5 h-5" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg> Előző oldal</button>
            <button onClick={()=>tovabb()} type="button" class="relative inline-flex items-center px-2 py-2 text-sm 5xl:text-xl   font-medium text-gray-700 bg-white border border-gray-300 rounded-md sm:rounded-none hover:bg-gray-50 sm:rounded-r-md" data-id="pagination-next">Következő oldal <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 20 20" class="w-5 h-5" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg></button>
        </div>
    </div>
</div>

      
    </div>
  )
}

export default Characters