import { useState,useEffect } from "react";
import Todo from "./Todo";

function Todos() {
    const[todos,setTodos]=useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then(res=>res.json())
        .then(adat=>setTodos(adat))
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