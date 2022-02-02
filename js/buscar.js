//cargarmas

let productoss=document.querySelectorAll(".searchProduct");
let cargar10=document.querySelector(".cargar10");
console.log(productoss);
for(let i=5; i<productoss.length; i++){
      productoss[i].classList.add("hidden3");
}
let variable=10;
cargar10.addEventListener("click",function(){
	let auxiliar=productoss.length-variable;
	if(auxiliar<0){
		for(let i=variable-5; i<variable+auxiliar; i++){
			productoss[i].classList.remove("hidden3");
		}
	}
	else{
		for(let i=variable-5; i<variable; i++){
			productoss[i].classList.remove("hidden3");
		}
	}
	console.log(variable)
	variable=variable+5;
})


 //declarando variables
 let body =document.querySelector("body");
 let logo1=document.querySelector("#logo1");
 let content=document.querySelector(".content");
 let header=document.querySelector("header");
 let contenedorPuntos=document.querySelector(".contenedorPuntos");
 let floating=document.querySelector(".floating-menu");
 
 //pagina de inicio con TIMEOUT
 setTimeout(function(){
	 body.classList.remove("setTime");
	 logo1.classList.add("hidden2");
 
 },1500);
 setTimeout(function(){
	 content.classList.remove("hidden2"); 
	 header.classList.remove("hidden2");
	 floating.classList.remove("hidden2");
	 header.style.backgroundColor="white";
	 contenedorPuntos.classList.add("hidden2");
	 
 },2300);


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

 // focus al buscar
 let focuseame=document.querySelector(".focuseame");
 let formControl=document.querySelector(".form-control");
 focuseame.addEventListener("click",function(){
      formControl.focus();
 })