let input = document.querySelectorAll('input');
let button = document.querySelector('button');
let show = document.querySelector('span');
let result = document.querySelector("#result");


button.addEventListener('click', calculateBMI);

function calculateBMI() {
    let weight = Number(input[0].value);
    let height = Number(input[1].value);
    let bmi = (weight / ((height * height))).toFixed(2);
    show.innerHTML = bmi;
    if (bmi < 18.6) result.innerHTML =
        `Under Weight : <span>${bmi}</span>`;

    else if (bmi >= 18.6 && bmi < 24.9)
        result.innerHTML =
            `Normal : <span>${bmi}</span>`;

    else result.innerHTML =
        `Over Weight : <span>${bmi}</span>`;
}