'use strict';

(function (){
const listBenefits = document.querySelector('.slide-list');

listBenefits.addEventListener('click', function(e){
    e.preventDefault();

    const slideListToc = document.querySelectorAll('.slide-list a')
    const slideListText = document.querySelectorAll('.slide-text li')    

    slideListToc.forEach(element => {

        if(element.id !== e.target.id) {
            element.classList.remove('active')
        }

        if(element.id === e.target.id) {
            element.classList.add('active')
        }  
    });

    slideListText.forEach(element => {

        if(element.id === e.target.id) {
            element.classList.remove('hidden')
        }

        if(element.id !== e.target.id) {
            element.classList.add('hidden')
        }  
    });
})
}) ();
