// modal comunicacion
let modalComunicacion=document.querySelectorAll(".modalComunicacion2");
console.log(modalComunicacion);
let modalComunicacion3=document.querySelector(".modalComu3");
let modalComu=document.querySelector(".modalComu");
let oscurecer=document.querySelector(".oscurecer");
modalComunicacion.forEach(element=> {
   element.addEventListener("click", function(){
       modalComu.style.marginBottom="0%";
       oscurecer.classList.remove("hidden3");
   })
   }
)
modalComunicacion3.addEventListener("click",function(){
   modalComu.style.marginBottom="-100%";
   oscurecer.classList.add("hidden3");
})

//carrusel imagenes
let img=document.querySelector("#imagenCarru")
let dot1=document.querySelector(".dot1");
let dot2=document.querySelector(".dot2");
let dot3=document.querySelector(".dot3");
dot2.style.backgroundColor="rgb(196,196,196)";
let contador=1;
let respuesta=false;
let respuesta2=false;
let imagenes=["img/image 44.svg","img/image 55.png","img/image 44.svg"];
let end=0;
let start=0;
function validar(){
   img.addEventListener("touchstart",
function (event){
   respuesta=true;
   console.log("move");
   start =event.changedTouches[0].clientX;
})
   img.addEventListener("touchend",
function (event){
   end= event.changedTouches[0].clientX;
   respuesta2=true;
   let diferencia= end-start;
   
   if(respuesta==true && respuesta2==true && diferencia>0 && contador==1 ){
      img.src=imagenes[contador-1];
      izquierda();
     
     return contador=0;
      
   }
   if(respuesta==true && respuesta2==true && diferencia>0 && contador==0 ){
      img.src=imagenes[contador+2];
      derecha();
      return contador=-1;
   }
   if(respuesta==true && respuesta2==true && diferencia>0 && contador==-1 ){
      img.src=imagenes[contador+2];
      centro();
      return contador=1;
   }
   if(respuesta==true && respuesta2==true && diferencia<0 && contador==1 ){
      img.src=imagenes[contador+1];
      derecha();
       return  contador=-1;
   }
   if(respuesta==true && respuesta2==true && diferencia<0 && contador==-1 ){
      img.src=imagenes[contador+3];
      izquierda();
      return contador=0;
   }
   if(respuesta==true && respuesta2==true && diferencia<0 && contador==0 ){
      img.src=imagenes[contador+1];
      centro();
      return contador=1;
    
   }
})
}
validar();


dot1.addEventListener("click",function(){
   izquierda();
   img.src="img/image 44.svg";
})
dot2.addEventListener("click",function(){
   centro();
   img.src="img/image 55.png";
})
dot3.addEventListener("click",function(){
   derecha();
   img.src="img/image 44.svg";
})
function centro(){
   dot2.style.backgroundColor="rgb(196,196,196)";
   dot1.style.backgroundColor="rgba(196,196,196,0.5)";
   dot3.style.backgroundColor="rgba(196,196,196,0.5)";
}
function izquierda(){
   dot1.style.backgroundColor="rgb(196,196,196)";
   dot2.style.backgroundColor="rgba(196,196,196,0.5)";
   dot3.style.backgroundColor="rgba(196,196,196,0.5)";
}
function derecha(){
   dot3.style.backgroundColor="rgb(196,196,196)";
   dot1.style.backgroundColor="rgba(196,196,196,0.5)";
   dot2.style.backgroundColor="rgba(196,196,196,0.5)";
}