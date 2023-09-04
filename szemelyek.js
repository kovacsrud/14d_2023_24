function randNumber(min,max){
    return Math.floor(Math.random()*(max-min))+min;
}

class Szemely {
    constructor(vezeteknev,keresztnev,lakhely,szulIdo){
        this.vezeteknev=vezeteknev;
        this.keresztnev=keresztnev;
        this.lakhely=lakhely;
        this.szulIdo=szulIdo;
    }
}

let vezetekNevek=["Kiss","Kovács","Urbán","Kósa","Majoros","Nagy"];
let keresztNevek=["Éva","Klára","János","Tamás","Ágnes","Mátyás"];
let lakhelyek=["Gyula","Orosháza","Szeged","Győr","Nyíregyháza"];

let szemelyek=[];
let darab=100;

for(let i=0;i<darab;i++){
    let vezeteknev=vezetekNevek[randNumber(0,vezetekNevek.length-1)];
    let keresztnev=keresztNevek[randNumber(0,keresztNevek.length-1)];
    let lakhely=lakhelyek[randNumber(0,lakhelyek.length-1)];
    let szulido=randNumber(1920,2022);
    let szemely=new Szemely(vezeteknev,keresztnev,lakhely,szulido);
    szemelyek.push(szemely);
}

console.log(szemelyek);

//írassuk ki weboldalba!
let main=document.getElementById('main');

let ol=document.createElement('ol');    

for(let i=0;i<szemelyek.length;i++){
    

    let li=document.createElement('li');
    li.textContent=szemelyek[i].vezeteknev+" "+szemelyek[i].keresztnev+","+szemelyek[i].lakhely+","+szemelyek[i].szulIdo;
    ol.appendChild(li);


}

main.appendChild(ol);