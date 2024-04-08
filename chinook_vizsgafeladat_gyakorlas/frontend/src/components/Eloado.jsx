

function Eloado({eloado}) {
  return (
    <div>
         <a href="#"
        className="flex-grow text-black border-l-8 border-gray-800 rounded-md px-3 py-2 w-96">
        {eloado.Name}

        <div className="font-thin text-sm pt-1">
            <span>{eloado.ArtistId}</span>
            
        </div>
    </a>
    </div>
  )
}

export default Eloado