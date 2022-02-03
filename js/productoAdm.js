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