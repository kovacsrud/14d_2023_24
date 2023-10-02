

function Todo({todo}) {
    const{title,completed}=todo;

  return (
    <div>
        {
            completed ?
             <>
                <p className="athuzott">{title}<input type="checkbox" defaultChecked={completed}/></p>
             </> 
             :
             <>
                <p>{title}<input type="checkbox" defaultChecked={completed}/></p>
             </>
        }
    </div>
  )
}

export default Todo