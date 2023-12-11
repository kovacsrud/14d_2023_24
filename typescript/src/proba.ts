let szam=123;
szam=256;

let szoveg="Valami";

//union type

let uni:string|number;
uni="valami";
uni=123;

function osszead(a:number|string,b:number){
    if(typeof a==="string"){
        return a;
    }
    return a+b;
}

console.log(osszead(10,20));
console.log(osszead("bb",20));

//literál típus
let lszamok:10|20|30;

lszamok=30;

type Szamok=10|20|30;

let tszam:Szamok=10;

let szamok:Array<number>=[];

let szamok2=[2,3,5,88];

//Szám és string a tömbben
type vegyes=(string|number)[];

let szamesszoveg:vegyes=["a",3,56,"valami"];

//Típus definiálása
type Szemely={
    vezeteknev:string,
    keresztnev:string,
    kor:number,
    kepek?:Array<Kep>
}

interface Kep {
    fajnev:string,
    szelesseg:number,
    magassag:number
}

//tuple
type Dolgozo=[nev:string,eletkor:number];

let dolgozo:Dolgozo=["Kiss Ubul",19];

const[nev,eletkor]=dolgozo;

let vegyesAdat:[string,number,boolean]=["Valami",45,true]



