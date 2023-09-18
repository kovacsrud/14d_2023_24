
function colorToHex(red,green,blue){
    return "#"+red.toString(16)+green.toString(16)+blue.toString(16);
}

function kattint(e){
    let elem=e.target;
    console.log(elem.textContent);
    let selected=document.getElementById('selected');
    selected.setAttribute('style','background-color:'+elem.style.backgroundColor);
    selected.textContent=elem.textContent;
}

let main=document.getElementById('main');

for(let i=0;i<256;i++){
    let negyzet=document.createElement('div');
    negyzet.textContent=colorToHex(i,i,255);
    negyzet.setAttribute('class','negyzet');
    negyzet.setAttribute('style','background-color:'+colorToHex(i,i,255));
    negyzet.addEventListener('click',kattint);
    main.appendChild(negyzet);
}