import { useState } from "react";
import RandomUser from "./RandomUser";
import UserDetails from "./UserDetails";

function UserRender({user}) {
    const[isOpen,setIsOpen]=useState(false);

    const kapcsol=()=>{
        setIsOpen(prev=>!prev);
    }

  return (
    <div>
        {
            isOpen ?  
            <>
                <RandomUser user={user} kapcsol={kapcsol}/>
                <UserDetails user={user} />
            </>
            :
            <>
                <RandomUser user={user} kapcsol={kapcsol}/>
            </>
        }
    </div>
  )
}

export default UserRender