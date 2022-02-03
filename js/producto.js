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

/* //carrusel imagenes
let img=document.querySelector("#imagenCarru");
let img2=document.querySelector("#imagenCarru2")
let img3=document.querySelector("#imagenCarru3")
let dot1=document.querySelector(".dot1");
img2.style.position="absolute";
img2.style.marginLeft="-90%";
img3.style.position="absolute";
img3.style.marginLeft="90%";
let dot2=document.querySelector(".dot2");
let dot3=document.querySelector(".dot3");
dot2.style.backgroundColor="rgb(196,196,196)";
let contador=1;
let respuesta=false;
let respuesta2=false;
let imagenes=["img/image44.svg","img/image55.png","img/image44.svg"];
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
   
   if(respuesta==true && respuesta2==true && diferencia>0 ){
      
      izquierda();
      
      img2.style.marginLeft="0%";
      img.style.marginLeft="200%";
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
function validar2(){
   img2.addEventListener("touchstart",
function (event){
   respuesta=true;
   console.log("move");
   start =event.changedTouches[0].clientX;
})
   img2.addEventListener("touchend",
function (event){
   end= event.changedTouches[0].clientX;
   respuesta2=true;
   let diferencia= end-start;
   
   if(respuesta==true && respuesta2==true && diferencia>0 ){
      
      derecha();
      
      img3.style.marginLeft="0%";
     return contador=0;
      
   }
  
})
}
validar2();
function validar3(){
   img3.addEventListener("touchstart",
function (event){
   respuesta=true;
   console.log("move");
   start =event.changedTouches[0].clientX;
})
   img3.addEventListener("touchend",
function (event){
   end= event.changedTouches[0].clientX;
   respuesta2=true;
   let diferencia= end-start;
   
   if(respuesta==true && respuesta2==true && diferencia>0 ){
      
      centro();
      img.style.zIndex="20";
      img.style.marginLeft="0%";
     return contador=0;
      
   }
  
})
}
validar3();


dot1.addEventListener("click",function(){
   izquierda();
   img.src=imagenes[0];
})
dot2.addEventListener("click",function(){
   centro();
   img.src=imagenes[1];
})
dot3.addEventListener("click",function(){
   derecha();
   img.src=imagenes[2];
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
} */
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
let dot1=document.querySelector(".dot1");
let dot2=document.querySelector(".dot2");
let dot3=document.querySelector(".dot3");
izquierda();
const slider = document.querySelector('.slider-container'),
  slides = Array.from(document.querySelectorAll('.slide'))

// set up our state
let isDragging = false,
  startPos = 0,
  currentTranslate = 0,
  prevTranslate = 0,
  animationID,
  currentIndex = 0

// add our event listeners
slides.forEach((slide, index) => {
  const slideImage = slide.querySelector('img')
  // disable default image drag
  slideImage.addEventListener('dragstart', (e) => e.preventDefault())
  // touch events
  slide.addEventListener('touchstart', touchStart(index))
  slide.addEventListener('touchend', touchEnd)
  slide.addEventListener('touchmove', touchMove)
  // mouse events
  slide.addEventListener('mousedown', touchStart(index))
  slide.addEventListener('mouseup', touchEnd)
  slide.addEventListener('mousemove', touchMove)
  slide.addEventListener('mouseleave', touchEnd)
})

// make responsive to viewport changes
window.addEventListener('resize', setPositionByIndex)

// prevent menu popup on long press
window.oncontextmenu = function (event) {
  event.preventDefault()
  event.stopPropagation()
  return false
}

function getPositionX(event) {
  return event.type.includes('mouse') ? event.pageX : event.touches[0].clientX
}

// use a HOF so we have index in a closure
function touchStart(index) {
  return function (event) {
    currentIndex = index
    startPos = getPositionX(event)
    isDragging = true
    animationID = requestAnimationFrame(animation)
    slider.classList.add('grabbing')
  }
}

function touchMove(event) {
  if (isDragging) {
    const currentPosition = getPositionX(event)
    currentTranslate = prevTranslate + currentPosition - startPos
  }
}

function touchEnd() {
  cancelAnimationFrame(animationID)
  isDragging = false
  const movedBy = currentTranslate - prevTranslate

  // if moved enough negative then snap to next slide if there is one
  if (movedBy < -100 && currentIndex < slides.length - 1) currentIndex += 1

  // if moved enough positive then snap to previous slide if there is one
  if (movedBy > 100 && currentIndex > 0) currentIndex -= 1

  setPositionByIndex()

  slider.classList.remove('grabbing')
  if(currentIndex==0){
     izquierda();
  }
  if(currentIndex==1){
   centro();
   }
   if(currentIndex==2){
      derecha();
   }

}

function animation() {
  setSliderPosition()
  if (isDragging) requestAnimationFrame(animation)
}

function setPositionByIndex() {
  currentTranslate = currentIndex * -window.innerWidth
  prevTranslate = currentTranslate
  setSliderPosition()
}

function setSliderPosition() {
  slider.style.transform = `translateX(${currentTranslate}px)`
}

dot3.addEventListener("click",function(){
   currentIndex=2;
   derecha();
   setPositionByIndex();
}
)
dot1.addEventListener("click",function(){
   currentIndex=0;
   izquierda();
   setPositionByIndex();
}
)
dot2.addEventListener("click",function(){
   currentIndex=1;
   centro();
   setPositionByIndex();
}
)