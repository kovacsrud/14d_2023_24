import {useState,useEffect} from 'react';
import User from './User';

function Users() {
    const[users,setUsers]=useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
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