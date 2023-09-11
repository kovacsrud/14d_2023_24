
fetch("https://jsonplaceholder.typicode.com/comments")
.then(res=>res.json())
.then(adat=>{
    let comments=document.getElementById('comments');
    adat.forEach(elem => {
        let p=document.createElement('p');
        p.textContent=elem.email;
        comments.appendChild(p);
    });
 }).catch(err=>{
    let comments=document.getElementById('comments');
    let h1=document.createElement('h1');
    h1.textContent="Hiba!"+err;
    comments.appendChild(h1);
 });

async function todoLetolt(){

    const request=await fetch("https://jsonplaceholder.typicode.com/todos");

    const adat=await request.json();

    let todos=document.getElementById('todos');

    adat.forEach(elem=>{
        let p=document.createElement('p');
        p.textContent=elem.title;
        todos.appendChild(p);
    });

}
todoLetolt();