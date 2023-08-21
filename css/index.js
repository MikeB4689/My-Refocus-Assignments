

const calculate = document.querySelector('.calculte')



calculate.addEventListener('click', e => {
    e.preventDefault();
    const message = document.querySelector('.message')
    const kg = document.querySelector('#weight')
    const heigth = document.querySelector('#heigth')
    let heigtTotal = heigth.value * heigth.value;
    let total = kg.value / heigtTotal * 703;

    if (+total < 18.5) {
        message.innerHTML = `Your body weight is ${total} is underweight`
    }
    else if (+total > 18.5 && +total <= 24.9) {
        message.innerHTML = `Your body weight is ${total.toFixed(2)} is Normal`
    } else if (+total > 25 && +total <= 29.9) {
        message.innerHTML = `Your body weight is ${total.toFixed(2)} is Overweight`
    } else {
        message.innerHTML = `Your body weight is ${total.toFixed(2)} is Obesity`
    }


})      