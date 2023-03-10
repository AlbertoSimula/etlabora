const [max, min, number] = document.querySelectorAll('input[name="max"], input[name="min"] , input[name="valore"]');

const numbers = [];

document.querySelector('.btn-send').addEventListener('click', (e) => {

    numbers.push(number.value);

    textarea.innerHTML += "\r\n".concat(
            number.value
        )
});

document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(numbers);

    if(number <= max && number >= min){
        
    }
});