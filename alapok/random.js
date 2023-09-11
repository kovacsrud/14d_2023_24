//10 és 100 közötti véletlen szám generálása
let veletlenSzam=Math.floor(Math.random()*(100-10))+10;

//console.log(veletlenSzam);


function randNumber(min,max){
    return Math.floor(Math.random()*(max-min))+min;
}

console.log(randNumber(20,50));