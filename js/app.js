const navSlide = () => {

    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.navlinks');
    const navLinks = document.querySelector('.navlinks li');
    // Toggle Nav
        burger.addEventListener('click', function (){
            nav.classList.toggle('nav-active');
        });
}

navSlide();


