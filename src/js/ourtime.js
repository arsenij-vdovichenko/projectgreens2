
const prev = document.getElementById("prev")
const next = document.getElementById("next")
const slide = document.querySelectorAll(".slide")
const slides = document.getElementById("slides")

let index = 0

const slideWidth = slides.clientWidth

function showSlide(i) {
    if (i < 0) {
        index = slide.length - 1
    } else if (i >= slide.length) {
        index = 0
    } else {
        index = i
    }

    slides.style.transform = `translateX(${-index * slideWidth}px)`
}

prev.addEventListener("click", () => showSlide(index - 1))
next.addEventListener("click", () => showSlide(index + 1))
