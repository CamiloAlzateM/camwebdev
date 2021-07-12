let ubicacionPrincipal = window.pageYOffset;
window.onscroll = function(){
    let Desplazamiento = window.pageYOffset;
    if(ubicacionPrincipal >= Desplazamiento){
        document.getElementById('contenedor').style.top = '0';
    }
    else{
        document.getElementById('contenedor').style.top = '-200px';

    }
    ubicacionPrincipal = Desplazamiento;
}