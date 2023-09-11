let main=document.getElementById('main');
        let cimsor=document.createElement('h1');
        cimsor.textContent="Javascript ismétlés";
        main.appendChild(cimsor);

        let bekezdes=document.createElement('p');
        bekezdes.textContent="Javascript ismeretek";
        main.appendChild(bekezdes);

        //document.write("JS ismétlés");
        //document.write(a);

        //csak az adott kódblokkban létezik
        let a=12;

        //globális
        var b=234;
        const c=4456;

        if(true)  {
            let lokalis=339;
            console.log(lokalis);
            var lok=233;
        }

        let szamok=[12,34,66,79,121,455,766];
        let ul=document.createElement('ul');

        for(let i=0;i<szamok.length;i++){
            let li=document.createElement('li');
            li.textContent=szamok[i];
            ul.appendChild(li);
        }

        main.appendChild(ul);

        console.log(lok);