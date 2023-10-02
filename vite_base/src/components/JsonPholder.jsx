import { useState,useEffect} from "react"

function JsonPholder() {
    const[posts,setPosts]=useState([]);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts/')
        .then(res=>res.json())
        .then(adat=>setPosts(adat))
        .catch(err=>console.log(err));

    },[]);

  return (
    <div>
        {
            posts.map((item)=>(
                <div key={item.id}>
                    <h2>Id:{item.id}</h2>
                    <h3>{item.title}</h3>
                    <p>{item.body}</p>
                
                </div>   

            ))
        }
    </div>
  )
}

export default JsonPholder