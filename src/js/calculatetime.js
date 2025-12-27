
const btnRef = document.querySelector("#searchBtn");
const inputRef = document.querySelector("#numInput");
const timeRef = document.querySelector("#time");

btnRef.addEventListener("click", () => {
  const totalMinutes = parseInt(inputRef.value.trim());

  if (isNaN(totalMinutes) || totalMinutes < 0) {
    alert("Введіть коректне число хвилин!");
    return;
  }

  const days = Math.floor(totalMinutes / 1440);
  const restMinutes = totalMinutes % 1440;

  const hours = Math.floor(restMinutes / 60);
  const minutes = restMinutes % 60;

  const hh = String(hours).padStart(2, "0");
  const mm = String(minutes).padStart(2, "0");

  timeRef.textContent = `${days} дн. ${hh}:${mm}`;
});
