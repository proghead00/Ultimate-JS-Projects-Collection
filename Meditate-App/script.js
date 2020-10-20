const container = document.getElementById('container');
const text = document.getElementById('text');

const totalTime = 7500;
const breatheTime = (totalTime / 5) * 2;
const holdTime = totalTime / 5;

breathAnimation();

function breathAnimation() {
  text.innerText = 'Breathe In';
  container.className = 'container grow';

     if(text.innerText==="Breathe In")
        text.style.marginLeft= '5.4rem'
        
  setTimeout(() => {
    text.innerText = 'Hold';
     if(text.innerText==="Hold")
        text.style.marginLeft= '7.5rem'
        
    setTimeout(() => {
      text.innerText = 'Breathe Out';

         if(text.innerText==="Breathe Out")
        text.style.marginLeft= '4.8rem'
        
      container.className = 'container shrink';
    }, holdTime);
  }, breatheTime);
}

setInterval(breathAnimation, totalTime);
