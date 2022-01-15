    //declarando variables
    let body =document.querySelector("body");
    let logo1=document.querySelector("#logo1");
    let form=document.querySelector("form");
    let button=document.querySelector("button");
    let header=document.querySelector("header");
    let bienv=document.querySelector(".bienv");
    let contenedorPuntos=document.querySelector(".contenedorPuntos");
    
    //pagina de inicio con TIMEOUT
    setTimeout(function(){
        body.classList.remove("setTime");
        logo1.classList.add("hidden2");
    
    },1500);
    setTimeout(function(){
        form.classList.remove("hidden2"); 
        bienv.classList.remove("hidden2")
        button.classList.remove("hidden2"); 
        header.classList.remove("hidden2");
        header.style.backgroundColor="white";
        contenedorPuntos.classList.add("hidden2");
        
    },2300);
  
    


    
    