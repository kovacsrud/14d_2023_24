//alapvető promise
let p=new Promise((resolve,reject)=>{
    let a=101;
    if(a>100){
        resolve(a);
    } else {
        reject("A szám nem megfelelő");
    }
});

p.then(adat=>console.log(adat)).catch(err=>console.log(err));

function p2(szam1,szam2){
    return new Promise((resolve,reject)=>{
        if(szam1>szam2){
            resolve(szam1);
        } else {
            reject("Az első számnak nagyobbnak kell lennie!");
        }

    });
}

function novel(szam){
    return szam+30;
}

p2(50,10)
.then(adat=>p2(adat,40))
.then(adat=>novel(adat))
.then(adat=>p2(adat,10))
.then(adat=>console.log(adat))
.catch(err=>console.log(err));

async function promiseHivas(a,b){
    try {
        let elso=await p2(a,b);
        let masodik=await p2(elso,20);
        console.log(masodik);

    } catch (error) {
        console.log(error)
    }
}

promiseHivas(60,35);

const all=Promise.all([p,p2(10,20)]);

all.then(ertekek=>console.log(ertekek)).catch(err=>console.log(err));