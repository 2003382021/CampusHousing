document.addEventListener("DOMContentLoaded", () => {


const navBar = document.querySelector('.nav-bar');
const indexIntroduction = document.querySelector('.index-opacity');
const homeButtons = document.querySelectorAll('.home-text button');
const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.reg-link');
const btnpopup = document.querySelector('.Login-button');
const signupBtn = document.querySelector('.Sign-up-btn');
const iconClose = document.querySelector('.icon-close');


setTimeout(() => {
    navBar.style.animation = "slideInFromTop .5s ease-out forwards";
  }, 1500);

  setTimeout(() => {
    indexIntroduction.style.animation = "fadeIn 1s ease forwards";
  }, 2000);

  homeButtons.forEach((button, index) => {
    setTimeout(() => {
      button.classList.add('visible');
    }, 2500 + index * 500); 
  });


  window.addEventListener("load", () => {
    const preloader = document.getElementById("preloader");
    const mainContent = document.getElementById("main-content");

    setTimeout(() => {
        preloader.style.display = "none"; 
        mainContent.classList.remove("hidden");
        mainContent.classList.add("fade-in");
    }, 500);
});


registerLink.addEventListener('click', ()=>{
    wrapper.classList.add('active');
});

loginLink.addEventListener('click', ()=>{
    wrapper.classList.remove('active');
});

btnpopup.addEventListener('click', ()=>{
    wrapper.classList.add('active-popup');
    wrapper.classList.remove('active');
    btnpopup.classList.add('active');
});

signupBtn.addEventListener('click', ()=>{
    wrapper.classList.add('active-popup');
    wrapper.classList.add('active');
    btnpopup.classList.add('active');
});

iconClose.addEventListener('click', ()=>{
    wrapper.classList.remove('active-popup');
    wrapper.classList.remove('active');
    btnpopup.classList.remove('active');
});

window.addEventListener('click', function closeLoginForm(event) {
    if (
        wrapper.classList.contains('active-popup') &&
        !wrapper.contains(event.target) &&
        !btnpopup.contains(event.target) &&
        !signupBtn.contains(event.target)
    ) {
        wrapper.classList.remove('active-popup');
        wrapper.classList.remove('active');
        btnpopup.classList.remove('active');
    }
});




























});