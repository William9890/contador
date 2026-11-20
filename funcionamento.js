const numero= document.getElementById("numero");
const botaomais= document.getElementById("mais");
const botaomenos= document.getElementById("menos");
const botaozerar= document.getElementById("zerar");

let contador=0

botaomais.addEventListener("click",function(){

    contador=contador+1;
    numero.textContent=contador;
});

botaomenos.addEventListener("click",function(){

    contador=contador-1;
    numero.textContent=contador;
     if(contador<0){
        numero.style.color ="red"
      
    }else{
        numero.style.color=""
        }
    atualizartela();
});

botaozerar.addEventListener("click",function(){

    contador=contador=0;
    numero.textContent=contador;
    atualizartela();
});

function atualizartela(){
     if(contador<0){
        numero.style.color ="red"
      
    }else{
        numero.style.color=""
        }
    
    };
