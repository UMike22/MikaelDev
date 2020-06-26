// Scroll suave com javascript

const menuItens =   document.querySelectorAll('.container a[href^="#"')

menuItens.forEach(item =>{
    item.addEventListener('click' , scrollToIdOnCLick)
})
 function getScrollToByHref(element){
    const id = element.getAttribute('href')
  return  document.querySelector(id).offsetTop
}

function scrollToIdOnCLick(event){
   event.preventDefault() 
    const to = getScrollToByHref(event.target)
   scroolToPosition(to)
}
function scroolToPosition(to){
    smoothScrollTo(0,to)
}
function smoothScrollTo(endX, endY, duration) {
  const startX = window.scrollX || window.pageXOffset;
  const startY = window.scrollY || window.pageYOffset;
  const distanceX = endX - startX;
  const distanceY = endY - startY;
  const startTime = new Date().getTime();

  duration = typeof duration !== 'undefined' ? duration : 400;

  // Easing function
  const easeInOutQuart = (time, from, distance, duration) => {
    if ((time /= duration / 2) < 1) return distance / 2 * time * time * time * time + from;
    return -distance / 2 * ((time -= 2) * time * time * time - 2) + from;
  };

  const timer = setInterval(() => {
    const time = new Date().getTime() - startTime;
    const newX = easeInOutQuart(time, startX, distanceX, duration);
    const newY = easeInOutQuart(time, startY, distanceY, duration);
    if (time >= duration) {
      clearInterval(timer);
    }
    window.scroll(newX, newY);
  }, 1000 / 60); // 60 fps
};


// Maquina de escrever 

function typeWriter(elemento){
  const textoArray = elemento.innerHTML.split('')
  elemento.innerHTML = ''
  textoArray.forEach((letra,i) => setTimeout(() => elemento.innerHTML += letra, 80 * i) 
  )}
const titulo = document.querySelector('.paragrafo-principal')
typeWriter(titulo)