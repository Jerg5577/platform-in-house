function actual() {
    fecha=new Date(); //Actualizar fecha.
    año=fecha.toDateString(); //año actual
    hora=fecha.getHours(); //hora actual
    minuto=fecha.getMinutes(); //minuto actual
    segundo=fecha.getSeconds(); //segundo actual
    jornada = hora >= 12 ? 'PM' : 'AM';

    if (hora<10) { //dos cifras para la hora
       hora="0"+hora;
       }
    if (minuto<10) { //dos cifras para el minuto
       minuto="0"+minuto;
       }
    if (segundo<10) { //dos cifras para el segundo
       segundo="0"+segundo;
       }
    //ver en el recuadro del reloj:
    mireloj = `${año}, ${hora} : ${minuto} : ${segundo} ${jornada}`;	
            return mireloj; 
    }
function actualizar() { //función del temporizador
mihora=actual(); //recoger hora actual
mireloj=document.getElementById("reloj"); //buscar elemento reloj
mireloj.innerHTML=mihora; //incluir hora en elemento
}
setInterval(actualizar,1000); //iniciar temporizador