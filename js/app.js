const hireMeBtn = document.querySelector('.hireme-btn-container');
const navBtn = document.querySelectorAll('.menu-li');
const burger = document.querySelector('.burger');
const nav = document.querySelector('.navlinks');
const navBar = document.querySelector('nav');
var width = window.innerWidth;

console.log(width)

const navSlide = () => {

    const navLinks = document.querySelector('.navlinks li');
    // Toggle Nav
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
    });

    window.addEventListener('scroll', () => {
        navBar.classList.toggle('fixed', window.scrollY > 0);
    });


}

navSlide();


window.addEventListener('resize', function() {
    width = window.innerWidth;
    console.log(width);
    return width;
});


function navBarHiding() {
    if(width < 768){

        var lastScrollTop = 0;
        window.addEventListener('scroll', function(){
            var scrollTop = window.pageYOffset || this.document.documentElement.scrollTop;
            if (scrollTop > lastScrollTop){
                navBar.style.top="-80px";
                if(nav.classList.contains('nav-active')){
                    nav.classList.remove('nav-active'); 
                }
            }
                else{
                    navBar.style.top="0";
                }
                lastScrollTop = scrollTop;
        });

    }
}

navBarHiding();


