'use strict';

(function () {
    const mapPopup = document.querySelector('.pop-map')
    const mapButton = document.querySelector('.map-link')
    const closeMapBtn = document.querySelector('.btn-close-map')


    // 1 ФУНКЦИИ //
    // 11 открытие окна //
    const openModal = function (e, windowTag, closeBtnTag) {
        e.preventDefault()
        windowTag.classList.remove('hidden')

        closeBtnTag.addEventListener('click', closeModalMapHandler)
        window.addEventListener('keydown', closeModalMapEschHandler)
        windowTag.addEventListener('click', closeModalOutsideHandler)
    }

    // 12 закрытие окна //
    const closeModal = function (e, windowTag, closeBtnTag) {
        e.preventDefault()
        windowTag.classList.add('hidden')
      

        closeBtnTag.removeEventListener('click', closeModalMapHandler)
        window.removeEventListener('keydown', closeModalMapEschHandler)
    }

    // 13 закрытие по ESC //
    const closeModalESC = function (e, windowTag, closeBtnTag) {
        e.preventDefault();

        if (e.keyCode === 27) {
            windowTag.classList.add('hidden')
        }

        closeBtnTag.removeEventListener('click', closeModalMapHandler)
        window.removeEventListener('keydown', closeModalMapEschHandler)
        windowTag.removeEventListener('click', closeModalOutsideHandler)
    }

    // 14 закоытие по клику вне //

    const closeModalOutside = function (e, windowTag, closeBtnTag) {
        if (!e.target.closest('.map-wrapper')) {
            windowTag.classList.add('hidden')
        }
    }

    // 2 КАРТА //
    // 21 обработчик открытия //
    const openModalMapHandler = function (e) {
        openModal (e, mapPopup, closeMapBtn)
    }

     // 22 обработчик закрытия //
    const closeModalMapHandler = function (e) {
        closeModal (e, mapPopup, closeMapBtn)
    }

    // 23 обработчик закрытия по ESC //
    const closeModalMapEschHandler = function (e) {
        closeModalESC(e, mapPopup, closeMapBtn)
    }

    const closeModalOutsideHandler = function (e) {
        closeModalOutside(e, mapPopup, closeMapBtn)
    }

    // 24 слушатель открытия окна //
    mapButton.addEventListener('click', openModalMapHandler)
   
}) ();