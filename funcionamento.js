const numero= document.getElementById("numero");
const botaomais= document.getElementById("mais");
const botaomenos= document.getElementById("menos");

let contador=0

botaomais.addEventListener("click",function(){

    contador=contador+1;
    numero.textContent=contador;
});

botaomenos.addEventListener("click",function(){

    contador=contador-1;
    numero.textContent=contador;
});
if(contador=-1){
    numero.style.color = "red"

};