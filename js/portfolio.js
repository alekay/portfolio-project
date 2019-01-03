document.addEventListener("DOMContentLoaded", function(){

  // navbar toggler
    function classToggle() {
      const navs = document.querySelectorAll('.navbar-items')
      
      navs.forEach(nav => nav.classList.toggle('navbar-toggleShow'));
    }
  
    document.querySelector('.navbar-link-toggle').addEventListener('click', classToggle);
  
  // header changes when scroll
  window.onscroll = () => {
    scrollBar();
    headerScrollFunc();
  };
  
  headerScrollFunc = () =>{
    if (document.body.scrollTop > 75 || document.documentElement.scrollTop > 75) {
      document.getElementById('header box').className = 'headerScroll';
    } else {
      document.getElementById('header box').className = 'header box';
    }
  }
  
  // Scroll Bar
  scrollBar = () => {
    let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrolled = (winScroll / height) * 100;
    document.getElementById("myBar").style.width = scrolled + "%";
  } 
    
});