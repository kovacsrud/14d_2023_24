import {useState,useEffect} from 'react';
import User from './User';

function Users() {
    const[users,setUsers]=useState([]);
    useEffect(()=>{
        fetch(`${import.meta.env.VITE_BACKEND_BASE_URL}/users`)
        .then(res=>res.json())
        .then(adat=>setUsers(adat))
        .catch(err=>console.log(err));
    },[])

  return (
    <div>
        {
            users.map((user)=>(<User key={user.id} user={user} />))
        }
    </div>
  )
}

export default Users