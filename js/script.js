
// loading page start
window.addEventListener("load", () => {
    const loader = document.querySelector(".loader");
  
    loader.classList.add("loader--hidden");
  
    loader.addEventListener("transitionend", () => {
      document.body.removeChild(loader);
    });
  });
//   loading page end




// dark mood start
const toggle = document.getElementById('toggleDark');
const body = document.querySelector('body');
const h31 = document.querySelector('.h31')
const h32 = document.querySelector('.h32')
const h33 = document.querySelector('.h33')
const p1 = document.querySelector('.fe-title')
const p2 = document.querySelector('.big-tit')
const p3 = document.querySelector('.sp1')
const p4 = document.querySelector('.sp5')
const p5 = document.querySelector('.sp3')
const p6 = document.querySelector('.sp4')
toggle.addEventListener('click', function(){
    this.classList.toggle('bi-moon');
    if(this.classList.toggle('bi-brightness-high-fill')){
        body.style.background = 'white';
        body.style.color = 'black';
        body.style.transition = '2s';
        h31.style.color = 'black';
        h32.style.color = 'black';
        h33.style.color = 'black';

        p1.style.color = 'black';
        p2.style.color = 'black';
        p3.style.color = 'black';
        p4.style.color = 'black';
        p5.style.color = 'black';
        p6.style.color = 'black';
    }else{
        body.style.background = 'black';
        body.style.transition = '2s';
        body.style.color = 'black';
        h31.style.color = 'white';
        h32.style.color = 'white';
        h33.style.color = 'white';

        p1.style.color = 'white';
        p2.style.color = 'white';
        p3.style.color = 'white';
        p4.style.color = 'white';
        p5.style.color = 'white';
        p6.style.color = 'white';
        
    }
});

// dark mood end

