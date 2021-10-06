const hireMeBtn = document.querySelector('.hireme-btn-container');
const about = document.querySelector('.about');
const burger = document.querySelector('.burger');
const nav = document.querySelector('.navlinks');

const navSlide = () => {

    const navLinks = document.querySelector('.navlinks li');
    // Toggle Nav
        burger.addEventListener('click', function (){
            nav.classList.toggle('nav-active');
        });
    
    about.addEventListener('click', function (){
        if(nav.classList.contains('nav-active')){
            nav.classList.remove('nav-active'); 
        }
    });

}

navSlide();


    window.addEventListener('scroll', () => {
        let nav = document.querySelector('nav');
        nav.classList.toggle('sticky', window.scrollY > 0);
    });




/*

     const rainbowHovering = hoveredItem => {

        hoveredItem.addEventListener('mouseover', function() {

            const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
                let hexColor = '#';

            for(let i = 0; i < 6; i++){
                hexColor += hex[Math.floor(Math.random() * hex.length)];
            };

            hoveredItem.style["boxShadow"] = `4px 4px ${hexColor}`;

        });
    }



rainbowHovering(hireMeBtn);  
 


   skills.forEach(function(skill) {

        skill.addEventListener('click', function displayBubble(){
        
            skill.classList.toggle('clickedItem');
            clickedItemVar = document.querySelector('.clickedItem');
            const bubble = clickedItemVar.querySelector('.bubble');
            bubble.classList.toggle('skill-info');
            displayBubble();

        });

    });

    

    function checkOverflow(elem) {
        const elemWidth = elem.getBoundingClientRect().width
        const parentWidth = elem.parentElement.getBoundingClientRect().width
    
        if (elemWidth > parentWidth){
            console.log('overflow!');
        }
    }
    const bubble = document.querySelector('.nav-links');

    checkOverflow(bubble);

    */












   /*   skill.addEventListener('click', function(){
        

        

        
        
        
       skill.classList.toggle('clickedItem');
        clickedItemVar = document.querySelector('.clickedItem');
        const bubble = clickedItemVar.querySelector('.bubble');
        bubble.classList.toggle('skill-info'); 
        
    });   */




