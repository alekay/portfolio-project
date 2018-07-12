document.addEventListener("DOMContentLoaded", function(){
  console.log('connected');

  function classToggle() {
    const navs = document.querySelectorAll('.navbar-items')
    
    navs.forEach(nav => nav.classList.toggle('navbar-toggleShow'));
  }
  
  document.querySelector('.navbar-link-toggle')
    .addEventListener('click', classToggle);
});
