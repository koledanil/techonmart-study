'use strict';

(function (){

    const listHeroSlides = document.querySelectorAll('.special li');
    const nextSlideBtn = document.querySelector('.slide-right')

    let slidesCounter = 0

    const showSlide = function (slideNumber) {
        listHeroSlides[slideNumber].classList.remove('hidden')
    }

    const hideSlide = function (slideNumber) {
        listHeroSlides[slideNumber].classList.add('hidden')
    }



    

    document.addEventListener('click', function(e){

        if (e.target.className === 'slide-right' && slidesCounter<listHeroSlides.length-1) {
            e.preventDefault()

            slidesCounter+=1
            let previousSlide = slidesCounter-1

            showSlide(slidesCounter)
            hideSlide(previousSlide)
        }

        if (e.target.className === 'slide-left' && slidesCounter>0) {
            e.preventDefault()
            slidesCounter-=1
            let previousSlide = slidesCounter+1
            showSlide(slidesCounter)
            hideSlide(previousSlide)
        }
       
        console.log(slidesCounter)

    })
   
    

    }) ();



     // slideListToc.forEach(element => {
        //     console.log(element.id)
        //     if(element.id !== e.target.id) {
        //         element.classList.remove('active')
        //     }
    
        //     if(element.id === e.target.id) {
        //         element.classList.add('active')
        //     }  
        // });
    
        // slideListText.forEach(element => {
        //     console.log(element.id)
        //     if(element.id === e.target.id) {
        //         element.classList.remove('hidden')
        //     }
    
        //     if(element.id !== e.target.id) {
        //         element.classList.add('hidden')
        //     }  
        // });