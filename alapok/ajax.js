
//a kérés aszinkron futású
let request=new XMLHttpRequest();

request.open("GET","https://jsonplaceholder.typicode.com/posts");

request.onload=function(){
    let main=document.getElementById('main');
    var data=JSON.parse(this.response);
    //console.log(data);
    data.forEach(elem => {
        //console.log(elem.body);
        let p=document.createElement('p');
        p.textContent=elem.body;
        main.appendChild(p);
    });

}


request.send();

let userRequest=new XMLHttpRequest();
userRequest.open("GET","https://jsonplaceholder.typicode.com/users");

userRequest.onload=function (){
    let users=document.getElementById('users');
    var data=JSON.parse(this.response);

    data.forEach(adat=>{
        let p=document.createElement('p');
        p.textContent=adat.username+","+adat.email;
        users.appendChild(p);
    });
}

userRequest.send();