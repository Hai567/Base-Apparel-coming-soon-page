let mailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
let formContainer = document.querySelector(".info-container__form__container")
let mailInputBox = document.querySelector(".info-container__form__input")
let warning = document.querySelector(".warning-container")
let inputValue = ""
let valid = false
mailInputBox.addEventListener("keyup", function(e){
    inputValue = mailInputBox.value
    valid = mailRegex.test(inputValue)
    if (! valid){
        formContainer.classList.add("form-invalid")
        warning.classList.remove("none-display")
    }
    else{
        formContainer.classList.remove("form-invalid")
        warning.classList.add("none-display")
    }
})

// let windowWidth = window.innerWidth
// let mainImg = document.querySelector(".img-container img")
// if (windowWidth <= 900){
//     mainImg.src = "images/hero-mobile.jpg"
// }else{
//     mainImg.scr = "images/hero-desktop.jpg"
// }
// window.addEventListener("resize", function(e){
//     console.log(e.target.innerWidth)
//     if (e.target.innerWidth > 900){
//         mainImg.scr = "images/hero-desktop.jpg"
//         console.log("smaller")
//     }else if (e.target.innerWidth <= 900){
//         mainImg.src = "images/hero-mobile.jpg"
//         console.log("larger")
//     }
// })