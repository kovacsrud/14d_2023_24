let szamok=[23,35,112,56,799,69];

szamok.push(111);

console.log(szamok);

let elso=szamok[0];
let masodik=szamok[1];

console.log(elso);

//destruktúrálás
//const [first,second]=szamok;



//rest operátor
const [first,,third,...rest]=szamok;

console.log(third);
console.log(...rest);

szamok=[...szamok,444,679];

console.log(szamok);