const Mousecursor = document.querySelector('.cursor');
const navLinks = document.querySelectorAll('.nav li');

window.addEventListener('mousemove', (e)=>{
  Mousecursor.style.top = e.pageY + 'px';
  Mousecursor.style.left = e.pageX + 'px';
});

navLinks.forEach(link => {

  link.addEventListener('mouseleave', ()=>{
    Mousecursor.classList.remove('link-grow');
    link.classList.remove('hovered-link');
  });
  link.addEventListener('mouseover', ()=>{
    Mousecursor.classList.add('link-grow');
    link.classList.add('hovered-link');
  });

})