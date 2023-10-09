import { useState,useEffect } from "react";
import Todo from "./Todo";


function Todos() {
    const[todos,setTodos]=useState([]);
    useEffect(()=>{
        //fetch('https://jsonplaceholder.typicode.com/todos')
        fetch(`${import.meta.env.VITE_BACKEND_BASE_URL}/todos`)
        .then(res=>res.json())
        .then(adat=>{setTodos(adat);console.log(import.meta.env.VITE_BACKEND_BASE_URL)})
        .catch(err=>console.log(err));
    },[]);
  return (
    <div>
        {
            todos.map((todo)=>(<Todo key={todo.id} todo={todo} />))
        }
    </div>
  )
}

export default Todos