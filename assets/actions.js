function inicio(){
    top.location.href= '/'
}

//click imagen - add class
function clickID(el){
    const validador = document.getElementsByClassName(el.id);
    if(validador.length===0){
        const div1= document.getElementById(el.id)
        div1.classList.add("click");
        const div2= document.getElementById(el.id+"-theback")
        div2.classList.add("visible")
        setTimeout(()=>selectclick(el.id),600)
    }
}
//remove class
function selectclick(id){
    const totalimg= document.getElementsByClassName("card-container")
    const div3 = document.getElementById(id+"-thefront")
    div3.classList.add("selected")
    //llama la funcion que valida si las dos imagenes coinciden
    let selection = document.getElementsByClassName("selected");

    if(selection.length>1){
        const ident1 = selection[0].id
        const ident2= selection[1].id
        const clasident1= ident1.split('-')[0] 
        const clasident2= ident2.split('-')[0]
        const id1= clasident1+ "-" +ident1.split('-')[1]
        const id2= clasident2+ "-" +ident2.split('-')[1]
        if(clasident1!=clasident2){
            setTimeout(() => {
                const element1= document.getElementById(id1)
                element1.classList.remove("click");
                element1.classList.add("normalized")
                const front1= document.getElementById(ident1);
                front1.classList.remove("selected");
                const element2 = document.getElementById(id2);
                element2.classList.remove("click");
                element2.classList.add("normalized")
                const front2= document.getElementById(ident2);
                front2.classList.remove("selected");
            }, 300);
        }else{
            setTimeout(() => {
                const front1= document.getElementById(ident1);
                front1.classList.remove("selected");
                front1.classList.add("desactived");
                
                const front2= document.getElementById(ident2);
                front2.classList.remove("selected");
                front2.classList.add("desactived");
               
                //div principal
                const element1= document.getElementById(id1)
                element1.classList.add("disable");
                element1.classList.add(id1);
                const element2= document.getElementById(id2);
                element2.classList.add("disable");
                element2.classList.add(id2);
                //validacion de juego terminado:
                let disables = document.getElementsByClassName("disable");
                if(totalimg.length===disables.length){
                    stop();
                    const crono= document.getElementById("crono");
                    const intentos= document.getElementById("clicks");
                    const presult= document.getElementById("result");
                    presult.innerHTML= "Tiempo &rarr; " + crono.innerHTML + ", Intentos: &rarr; " + intentos.innerHTML
                    const mensaje = document.getElementsByClassName("container-msg-disabled")
                    mensaje[0].classList.add("container-msg-finish")
                    mensaje[0].classList.remove("container-msg-disabled")   
                }
            }, 200);
        }      
    }
}

window.onload = function () {
    var contador = 0;
    const imgs=document.querySelectorAll(".card-container");
    imgs.forEach(el => {
        el.addEventListener("click", contar);
    });

    function contar(){
        contador++;
        if(contador%2===0){
            let intento = contador / 2
            document.getElementById("clicks").innerHTML = intento
        }
        if(contador>0){
            start()
        }
    }
    /// cronómetro

    pantalla = document.getElementById("crono");
}

var isMarch = false; 
var acumularTime = 0; 
function start () {
    if (isMarch == false) { 
        timeInicial = new Date();
        control = setInterval(cronometro,10);
        isMarch = true;
    }
}
function cronometro () { 
    timeActual = new Date();
    acumularTime = timeActual - timeInicial;
    acumularTime2 = new Date();
    acumularTime2.setTime(acumularTime); 
    cc = Math.round(acumularTime2.getMilliseconds()/10);
    ss = acumularTime2.getSeconds();
    mm = acumularTime2.getMinutes();
    hh = acumularTime2.getHours()-19;
    if (cc < 10) {cc = "0"+cc;}
    if (ss < 10) {ss = "0"+ss;} 
    if (mm < 10) {mm = "0"+mm;}
    if (hh < 10) {hh = "0"+hh;}
    pantalla.innerHTML = hh+" : "+mm+" : "+ss+" : "+cc;
}

function stop () { 
    if (isMarch == true) {
        clearInterval(control);
        isMarch = false;
    }     
}      

function reset () {
    if (isMarch == true) {
        clearInterval(control);
        isMarch = false;
        }
    acumularTime = 0;
    pantalla.innerHTML = "00 : 00 : 00 : 00";
}
