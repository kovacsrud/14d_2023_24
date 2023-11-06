import { useState } from "react";

function Send() {
    const [userId,setUserId]=useState("");
    const [title,setTitle]=useState("");
    const [body,setBody]=useState("");

    const onSubmit=(e)=>{
        e.preventDefault();
        adatkuldes();

    }

    const adatkuldes=()=>{
        fetch("https://jsonplaceholder.typicode.com/posts",{
            method:'POST',
            headers:{'Content-type':'application/json'},
            body:JSON.stringify({userId,title,body})
        })
        .then(res=>res.json())
        .then(res=>console.log(res))
        .catch(err=>console.log(err));

    }


  return (
    <div>
        <form onSubmit={onSubmit}>
            <input type="text" value={userId} onChange={(e)=>setUserId(e.target.value)} />
            <br />
            <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} />
            <br />
            <input type="text" value={body} onChange={(e)=>setBody(e.target.value)} />
            <br />
            <button type="submit">Küldés</button>
        </form>

    </div>
  )
}

export default Send