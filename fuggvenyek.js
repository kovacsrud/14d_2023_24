function osszead(a,b=10,c=30){
    return a+b+c;
}

console.log(osszead(10,30,40)); 

const osszead_=(a,b,c)=>a+b+c;

console.log(osszead_(10,10,10));

function sokSzam(){
   let osszeg=0;
   for(let i=0;i<arguments.length;i++) {
    osszeg+=arguments[i];
   }
   return osszeg;
}

console.log(sokSzam(10,10,10));
console.log(sokSzam(10,10,10,10,10,10,10,10,10));

let szemely={
    vezeteknev:"Kiss",
    keresztnev:"Ubul",
    kor:34,
    szuletesiEv() 
    {
       return 2023-this.kor
    }
}

console.log(szemely.szuletesiEv());

for(let k in szemely){
    console.log(k+":"+szemely[k]);
}

class Auto{
    constructor(marka,tipus,gyartasiEv){
        this.marka=marka,
        this.tipus=tipus,
        this.gyartasiEv=gyartasiEv
    }
    kor(){
        return 2023-this.gyartasiEv;
    }
}

let audi=new Auto("Audi","A6",2018);

console.log(audi.marka);
console.log(audi.kor());



