const hireMeBtn = document.querySelector('.hireme-btn-container');
const navBtn = document.querySelectorAll('.menu-li');
const burger = document.querySelector('.burger');
const nav = document.querySelector('.navlinks');
const navBar = document.querySelector('nav');

const navSlide = () => {
    burger.addEventListener('click', function (){
        nav.classList.toggle('nav-active');
    });
    navBtn.forEach(btn => {
        btn.addEventListener('click', function (){
            if(nav.classList.contains('nav-active')){
                nav.classList.remove('nav-active'); 
            }
        });
    });
    window.addEventListener('scroll', () => {
        navBar.classList.toggle('sticky', window.scrollY > 0);
        navBar.classList.toggle('fixed', window.scrollY > 0);
        if(nav.classList.contains('nav-active')){
            nav.classList.remove('nav-active'); 
        }
    });
}

navSlide();

