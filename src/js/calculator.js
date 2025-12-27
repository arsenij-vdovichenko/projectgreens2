
const firstInput = document.querySelector(".calculator__input--first");
const secondInput = document.querySelector(".calculator__input--second");
const resultInput = document.querySelector(".calculator__input--result");

const operations = document.querySelectorAll(".calculator__img");

let currentOperation = null;

operations.forEach(img => {
    img.addEventListener("click", () => {
        const operation = img.alt;

        // якщо це НЕ "=" → просто запам'ятовуємо операцію
        if (operation !== "will-be") {
            currentOperation = operation;
            return;
        }

        // якщо це "=" → рахуємо
        const a = Number(firstInput.value);
        const b = Number(secondInput.value);

        if (isNaN(a) || isNaN(b) || !currentOperation) {
            resultInput.value = "";
            return;
        }

        let result;

        switch (currentOperation) {
            case "plus":
                result = a + b;
                break;
            case "minus":
                result = a - b;
                break;
            case "multiplication":
                result = a * b;
                break;
            case "share":
                if (b === 0) {
                    resultInput.value = "";
                    return;
                }
                result = a / b;
                break;
        }

        resultInput.value = result;
    });
});
