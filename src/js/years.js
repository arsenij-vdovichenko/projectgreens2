
const inputRef = document.querySelector(".years__input");
const textRef = document.querySelector(".years__text");
const btnRef = document.querySelector(".years__btn")


btnRef.addEventListener("click", () => {
     const year = Number(inputRef.value);

    if (!isNaN(year)) {
        if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
            textRef.textContent = "Ви народилися у високосний рік!";
            textRef.style.color = "green";
        } else {
            textRef.textContent = "Ви народилися не у високосний рік!";
            textRef.style.color = "red";
        }
    } 
});
