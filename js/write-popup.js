'use strict';

(function () {
    const writePopup = document.querySelector('.pop-write')
    const writeButton = document.querySelector('.pop-write-btn')
    const closeWrieBtn = document.querySelector('.pop-write .close-btn')




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
        if (!e.target.closest('.popup-msg')) {
            windowTag.classList.add('hidden')
        }
    }

    // 2 КАРТА //
    // 21 обработчик открытия //
    const openModalMapHandler = function (e) {
        openModal (e, writePopup, closeWrieBtn)
    }

     // 22 обработчик закрытия //
    const closeModalMapHandler = function (e) {
        closeModal (e, writePopup, closeWrieBtn)
    }

    // 23 обработчик закрытия по ESC //
    const closeModalMapEschHandler = function (e) {
        closeModalESC(e, writePopup, closeWrieBtn)
    }

    const closeModalOutsideHandler = function (e) {
        closeModalOutside(e, writePopup, closeWrieBtn)
    }

    // 24 слушатель открытия окна //
    writeButton.addEventListener('click', openModalMapHandler)

}) ();