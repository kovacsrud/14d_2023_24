"use strict";
let szam = 123;
szam = 256;
let szoveg = "Valami";
//union type
let uni;
uni = "valami";
uni = 123;
function osszead(a, b) {
    if (typeof a === "string") {
        return a;
    }
    return a + b;
}
console.log(osszead(10, 20));
console.log(osszead("bb", 20));
//literál típus
let lszamok;
lszamok = 30;
let tszam = 10;
let szamok = [];
let szamok2 = [2, 3, 5, 88];
let szamesszoveg = ["a", 3, 56, "valami"];
let dolgozo = ["Kiss Ubul", 19];
const [nev, eletkor] = dolgozo;
let vegyesAdat = ["Valami", 45, true];
