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

dot1.addEventListener("click",function(){
   dot1.style.backgroundColor="rgb(196,196,196)";
   dot2.style.backgroundColor="rgba(196,196,196,0.5)";
   dot3.style.backgroundColor="rgba(196,196,196,0.5)";
   img.src="img/image 44.svg";
})
dot2.addEventListener("click",function(){
   dot2.style.backgroundColor="rgb(196,196,196)";
   dot1.style.backgroundColor="rgba(196,196,196,0.5)";
   dot3.style.backgroundColor="rgba(196,196,196,0.5)";
   img.src="img/image 55.png";
})
dot3.addEventListener("click",function(){
   dot3.style.backgroundColor="rgb(196,196,196)";
   dot1.style.backgroundColor="rgba(196,196,196,0.5)";
   dot2.style.backgroundColor="rgba(196,196,196,0.5)";
   img.src="img/image 44.svg";
})