
const inputRef = document.querySelector(".guessnumbers__input")
const textRef = document.querySelector(".guessnumbers__text")



const imgRef = document.querySelector(".guessnumbers__img")

imgRef.addEventListener("click", () => {
    const userNumber = Number(inputRef.value)
    const computerNumber = Math.floor(Math.random() * 10) + 1;

    
    if(!userNumber || userNumber < 1 || userNumber > 10){
        textRef.textContent = "Будь ласка ведіть число від 1 до 10!";
        textRef.style.color = "red";
        return;
    }

    if(userNumber === computerNumber){
        textRef.textContent = `вітаю ви вгадали число ${computerNumber}`
        textRef.style.color = "green"
    }else{
        textRef.textContent = `ви програли компютер загадав ${computerNumber}`
        textRef.style.color = "red"
    }

     inputRef.value = "";
})
