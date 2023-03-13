const [max, min, number] = document.querySelectorAll('input[name="max"], input[name="min"] , input[name="valore"]');

const numbers = [];

document.querySelector(".btn-send").addEventListener("click", (e) => {
  numbers.push(Number(number.value));

  textarea.innerHTML += "\r\n".concat(number.value);
});

document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();

  for (const num of numbers) {
    if (num <= max.value && num >= min.value) {
      buoni.innerHTML += "\r\n".concat(num);
    }
  }
});

document.querySelector(".btn-reset").addEventListener("click", (e) => {
  e.preventDefault();

  numbers.length = 0;

  textarea.innerHTML = "";
  buoni.innerHTML = "";
});
