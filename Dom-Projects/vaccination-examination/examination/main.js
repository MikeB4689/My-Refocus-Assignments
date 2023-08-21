const form = document.forms.QuizOne;
const firstQuestion = form.capital;
const secondQuestion = form.mathquestion;
const submit = form.submit;
const scnQuestion = document.querySelectorAll('.radio-question')
const thrdQeustion = document.querySelectorAll('.checkAnswer')
const rest = document.getElementById('reset')

submit.addEventListener('click', e => {
    e.preventDefault();


    if (!firstQuestion.value) {

        ErrorMsg(firstQuestion, "Please answer!")
    } else {
        const answer = "Manila"
        let count = firstQuestion.value
        let text = count[0].toUpperCase() + count.slice(1)

        if (text !== answer) {
            ErrorMsg(firstQuestion, "Its Wrong!")
        } else {
            correctMsg(firstQuestion, "Correct✅")
        }
    }
    scnQuestion.forEach((element) => {

        let qName = element;
        if (!array[0]) {
            ErrorMsg(qName, "Please choose option")
        } else if (+array[0] !== 25) {
            ErrorMsg(qName, "It's Wrong ❌")
        } else {
            correctMsg(qName, "Correct✅")
        }


    })

    thrdQeustion.forEach((element) => {
        const asnwerBirds = ["parrot", "eagle", "crow"]

        let qName = element;
        if (!birdsArray[0]) {
            ErrorMsg(qName, "Please choose option")
        } else if (birdsArray.length !== 3) {
            ErrorMsg(qName, "It's Wrong ❌")
        } else if (birdsArray.toString() !== asnwerBirds.toString()) {
            ErrorMsg(qName, "It's Wrong ❌")
        } else {
            correctMsg(qName, "Correct✅")
        }


    })


})



rest.addEventListener('click', e => {
    e.preventDefault();
    clearInputs();
})

const clearInputs = () => {
    const bar = document.getElementById('send')
    const inputs = document.querySelectorAll('input')
    const message = document.querySelectorAll('.error')

    inputs.forEach((element) => {
        element.value = ""
        element.checked = false
    })

    message.forEach((e) => {
        e.innerHTML = ""
    })

    bar.style.backgroundColor = "white"

}



const array = []
const birdsArray = []


scnQuestion.forEach((element) => {
    element.addEventListener('click', () => {
        return array.push(element.value)
    })

})


thrdQeustion.forEach((element) => {
    element.addEventListener('click', () => {
        return birdsArray.push(element.value)
    })

})









const ErrorMsg = (field, error) => {
    const bar = document.getElementById('send')
    document.getElementById('error-' + field.name).innerHTML = error
    bar.style.backgroundColor = "red"

}
const correctMsg = (field, error) => {
    const bar = document.getElementById('send')
    let mesg = document.getElementById('error-' + field.name)
    mesg.classList.remove('error');
    mesg.classList.add('correct')
    mesg.innerHTML = error
    bar.style.backgroundColor = "green"
}



const countAnswer = () => {
    const chekAnswer = document.querySelectorAll('.checkAnswer')
    chekAnswer.forEach((element) => {
        element.addEventListener('click', () => {

        })
    })
}


