
const checkbox = document.querySelector("#hellow__btn");
const sun = document.querySelector(".hellow__sun");
const moon = document.querySelector(".hellow__monthn");

const themeTexts = document.querySelectorAll(".theme-text");

const themeDinos = document.querySelectorAll(".theme-dino");

checkbox.addEventListener("change", () => {
    document.body.classList.toggle("active");

    if (checkbox.checked) {

        sun.style.opacity = "0";
        moon.style.opacity = "1";


        themeTexts.forEach(text => {
            text.style.color = "#ffffff";
        });


        //"brightness(0) => робить картинку повність чорною
        //invert(1) => перевертає робить з чорного білу
        themeDinos.forEach(dino => {
                                
            dino.style.filter = "brightness(0) invert(1)";
        });

    } else {
 
        sun.style.opacity = "1";
        moon.style.opacity = "0";

        themeTexts.forEach(text => {
            text.style.color = "#000000";
        });

        themeDinos.forEach(dino => {
            dino.style.filter = "none";

            // dino.style.filter = "none"; прибирає всі ефекти динозаврику
        });
    }
});
