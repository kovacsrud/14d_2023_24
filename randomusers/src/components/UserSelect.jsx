
function UserSelect({setUserNum}) {

  return (
    <select onChange={(e)=>setUserNum(e.target.value)} className="select select-primary w-full max-w-xs">
                        
    <option selected value="5">5</option>
    <option value="10">10</option>
    <option value="15">15</option>
    <option value="20">20</option>
    <option value="30">30</option>
    <option value="50">50</option>
    
    </select>
  )
}

export default UserSelect