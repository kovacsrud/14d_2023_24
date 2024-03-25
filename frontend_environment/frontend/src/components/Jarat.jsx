

function Jarat({jarat}) {

  return (
    <div className="card w-96 bg-red-200 shadow-xl m-5">
    <div className="card-body">
      <h2 className="card-title">{jarat.jaratSzam}</h2>
      <p>Járat típusa:{
        jarat.jaratTipus=="M" ? "Metró" : "Troli"
      }</p>
      <p>Elsőajtós felszállás:{
      jarat.elsoAjtos==0 ? "Nem" : "Igen"
      }</p>
      <div className="card-actions justify-end">
       
      </div>
    </div>
  </div>
  )
}

export default Jarat