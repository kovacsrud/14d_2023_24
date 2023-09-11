let szemely={
    "vezeteknev":"Kósa",
    "keresztnev":"Zénó",
    "szulhely":"Gyula",
    
}

//console.log(szemely.keresztnev);

//egyszerű destruktúrálás
const {vezeteknev,keresztnev}=szemely;

//destruktúrálás a változó átnevezésével
const {vezeteknev:vnev,keresztnev:knev}=szemely;

console.log(vnev,knev);

szemely={...szemely,szulido:"1999.09.09"};

let foglalkozas={
    "munkaltato":"Csőd Kft",
    "beosztas":"kazánfűtő",
    "munkarend":{
        "nappal":"1",
        "éjszaka":"2"
    }
}

//összekombinálás a rest operátorral
szemely={...szemely,foglalkozas};

//másik lehetőség objekumok összekombinálására
//let szemely2=Object.assign(szemely,foglalkozas);

//console.log(szemely2);

//Az objektum adatának módósítása
szemely={...szemely,["szulhely"]:"Orosháza"};

console.log(szemely);