let eliminar=document.querySelectorAll(".instMod");


let modalComu33=document.querySelector(".modalComu33");
let modalComu44=document.querySelectorAll("#volver44");
eliminar.forEach(element=> {
   element.addEventListener("click", function(event){
       event.preventDefault();
       modalComu33.style.marginBottom="0%";
       oscurecer.classList.remove("hidden3");

   })
   }
)
modalComu44.forEach(element=> {
    element.addEventListener("click", function(event){
        event.preventDefault();
        modalComu33.style.marginBottom="-100%";
	    oscurecer.classList.add("hidden3");
    })
    }
 )


