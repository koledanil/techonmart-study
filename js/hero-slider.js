'use strict';

(function (){

    const listHeroSlides = document.querySelectorAll('.special li');
    const nextSlideBtn = document.querySelector('.slide-right')
    const previousSlideBtn = document.querySelector('.slide-left')
    const slideSection = document.querySelector('.second-promo-row')

    let slidesCounter = 0

    const showSlide = function (slideNumber) {
        listHeroSlides[slideNumber].classList.remove('hidden')
    }

    const hideSlide = function (slideNumber) {
        listHeroSlides[slideNumber].classList.add('hidden')
    }

    console.log(slideSection);

    const switchSlidesHandler =  function(e){

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

        if (slidesCounter === listHeroSlides.length-1) {
            previousSlideBtn.classList.remove('hidden')
            nextSlideBtn.classList.add('hidden')
        }

        if (slidesCounter === 0) {
            previousSlideBtn.classList.add('hidden')
            nextSlideBtn.classList.remove('hidden')
        }

        if (slidesCounter > 0 && slidesCounter < listHeroSlides.length-1) {
            previousSlideBtn.classList.remove('hidden')
            nextSlideBtn.classList.remove('hidden')
        }
    }

    slideSection.addEventListener('click', switchSlidesHandler)
    }) ();