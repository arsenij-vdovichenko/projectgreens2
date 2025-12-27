
const imgRef = document.querySelector(".header-modal__img")
const modalRef = document.querySelector(".header-modal")
const inputRef = document.querySelector(".header-modal__input")
const spanRef = document.querySelector(".hellow__span")
const btnRef = document.querySelector(".header-modal__btn")



window.addEventListener("keydown", (event) => {
    if(event.code ===  "Escape"){
        modalRef.style.display = "none"
    }
})

imgRef.addEventListener("click", () => {
    modalRef.style.display = "none";
});


btnRef.addEventListener("click", () => {
    spanRef.textContent = inputRef.value;
    modalRef.style.display = "none"
});

modalRef.addEventListener("click", (event)=>{
    if(event.target === modalRef){
        modalRef.style.display = "none"
    }
})
