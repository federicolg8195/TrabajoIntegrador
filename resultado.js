
  

function crearRecibo (){ //esta funciona va en el boton de crear la cotizacion 
var primerArticulo=document.getElementById("primerArticulo");
var valorPrimerArticulo=primerArticulo.value;

var segundoArticulo=document.getElementById("segundoArticulo");
var valorSegundoArticulo=segundoArticulo.value;

var tercerArticulo=document.getElementById("tercerArticulo");
var valorTercerArticulo=tercerArticulo.value;

var totalPrimerArticulo =0;
var totalSegundoArticulo =0;
var totalTercerArticulo=0;
var subTotal;
var impuesto;
var total;

if(valorPrimerArticulo>0){
const tbody = document.getElementsByTagName("tbody")[0];
const fila = tbody.insertRow();
const celda1 = fila.insertCell();
const celda2 = fila.insertCell();
const celda3 = fila.insertCell();
const celda4 = fila.insertCell();
celda1.innerHTML = "primer producto";
celda2.innerHTML = valorPrimerArticulo;
celda3.innerHTML = "$15.00";
celda4.innerHTML = "$"+valorPrimerArticulo*15+".00";
totalPrimerArticulo=totalPrimerArticulo+(valorPrimerArticulo*15);
}
if(valorSegundoArticulo>0){
    const tbody = document.getElementsByTagName("tbody")[0];
    const fila = tbody.insertRow();
    const celda1 = fila.insertCell();
    const celda2 = fila.insertCell();
    const celda3 = fila.insertCell();
    const celda4 = fila.insertCell();
    celda1.innerHTML = "segundo producto";
    celda2.innerHTML = valorSegundoArticulo;
    celda3.innerHTML = "$20.00";
    celda4.innerHTML = "$"+valorSegundoArticulo*20+".00";
    totalSegundoArticulo=totalSegundoArticulo+(valorSegundoArticulo*20);
    }
    if(valorTercerArticulo>0){
        const tbody = document.getElementsByTagName("tbody")[0];
        const fila = tbody.insertRow();
        const celda1 = fila.insertCell();
        const celda2 = fila.insertCell();
        const celda3 = fila.insertCell();
        const celda4 = fila.insertCell();
        celda1.innerHTML = "tercer producto";
        celda2.innerHTML = valorTercerArticulo;
        celda3.innerHTML = "$30.00";
        celda4.innerHTML = "$"+valorTercerArticulo*30+".00";
        totalTercerArticulo=totalTercerArticulo+(valorTercerArticulo*30);
        }
            //subtotal
        var tbody = document.getElementsByTagName("tbody")[0];
        var fila = tbody.insertRow();
        var celda1 = fila.insertCell();
        var celda2 = fila.insertCell();
        var celda3 = fila.insertCell();
        var celda4 = fila.insertCell();
        celda1.innerHTML = "";
        celda2.innerHTML = "";
        celda3.innerHTML = "SubTotal";
        subTotal=totalPrimerArticulo+totalSegundoArticulo+totalTercerArticulo;
        celda4.innerHTML = "$"+subTotal+".00";
        // impuesto%20
        tbody = document.getElementsByTagName("tbody")[0];
        fila = tbody.insertRow();
        celda1 = fila.insertCell();
        celda2 = fila.insertCell();
        celda3 = fila.insertCell();
        celda4 = fila.insertCell();
        celda1.innerHTML = "";
        celda2.innerHTML = "";
        celda3.innerHTML = "Impuesto %20";
        impuesto=subTotal*0.2;
        celda4.innerHTML = "$"+impuesto+".00";
        //total
        tbody = document.getElementsByTagName("tbody")[0];
        fila = tbody.insertRow();
        celda1 = fila.insertCell();
        celda2 = fila.insertCell();
        celda3 = fila.insertCell();
        celda4 = fila.insertCell();
        celda1.innerHTML = "";
        celda2.innerHTML = "";
        celda3.innerHTML = "Total";
        total=subTotal+impuesto;
        celda4.innerHTML = "$"+total+".00";

}
