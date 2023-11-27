

function Character({character}) {
  return (
    <div className="rounded-xl overflow-hidden flex shadow hover:shadow-md max-w-sm bg-gray-200 cursor-pointer m-5">
    <div className="w-7/12 pl-3 p-3 text-text1 flex flex-col justify-center">
        <p className="text-base mb-2 font-bold truncate">{character.name}</p>
        <div className="text-xs text-primary mb-2">
            
                
               <p><span className="font-bold tracking-wide text-sm text-pink-400">{character.status}</span></p>
               <p><span className="font-bold tracking-wide text-sm text-pink-400">{character.species}</span></p>
               <p><span className="font-bold tracking-wide text-sm text-pink-400">{character.gender}</span></p>
            
        </div>
        <div className="text-sm text-text2 tracking-wider">{character.origin.name}</div>
    </div>
    <div className="lg:flex flex w-5/12 p-2">
        <img src={character.image} className="rounded-xl object-cover w-full h-full"/>
    </div>
</div>
  )
}

export default Character