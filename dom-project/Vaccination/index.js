
const formLog = document.forms.SignUp;
const firstname = formLog.fname;
const lastname = formLog.lname;
const midname = formLog.midname;
const dateofbirth = formLog.dateofbirht;
const emailAddress = formLog.email;
const provincename = formLog.province;
const barangayname = formLog.barangay;
const streetname = formLog.street;
const gendername = formLog.answerGender;
const questionONe = formLog.answerQuestion;
const questionTwo = formLog.answerQuestion2;
const submitBtn = formLog.submit;
const resbtn = formLog.reset;
const regions = formLog.region;
const qst = document.querySelectorAll('.questionONe')
const disable = document.querySelectorAll('.questionTwo')
const vacLoc = document.querySelector('#vacccination_loc')
const remarks = formLog.remark

const screen = document.getElementById('regionAnswer')
const doseBrand = document.getElementById('Brands')

doseBrand.addEventListener('change', () => {

    const vacDate = document.getElementById('vacDate')
    const screen2 = document.getElementById('brandAnswer');
    screen2.value = doseBrand.value
    vacDate.value = new Date();
    vacDate.disabled = true
    screen2.disabled = true

})

regions.addEventListener('change', (e) => {

    screen.value = regions.value
    screen.disabled = true

})

qst.forEach((element) => {
    element.addEventListener('click', e => {
        let choose = e.target.value;
        if (choose !== 'Yes') {
            disable.forEach((element) => {
                element.disabled = true;
                qustionAnswer(element, "Disabled")
                vacLabel.innerHTML = "Vaccination Dose I"
            })
        } else {
            disable.forEach((element) => {
                element.disabled = false;
                qustionAnswer(element, "")
                vacLabel.innerHTML = "Vaccination Dose II"
                qustionAnswer(element, "PLease Proceed to answer")
            })
        }
    })
})

const vacLabel = document.querySelector('.Dose-label')


submitBtn.addEventListener('click', e => {
    e.preventDefault();


    if (!firstname.value) {
        errorMsg(firstname, `You must fill ${firstname.placeholder}`)


    } if (!lastname.value) {
        errorMsg(lastname, `You must fill ${lastname.placeholder}`)

    } if (!midname.value) {
        errorMsg(midname, `You must fill ${midname.placeholder}`)

    } if (!lastname.value) {
        errorMsg(lastname, `You must fill ${lastname.placeholder}`)

    } if (!dateofbirth.value) {
        errorMsg(dateofbirth, `You must fill ${dateofbirth.placeholder}`)

    } if (!emailAddress.value) {
        errorMsg(emailAddress, `You must fill ${emailAddress.placeholder}`)

    } if (!provincename.value) {
        errorMsg(provincename, `You must fill ${provincename.placeholder}`)

    } if (!barangayname.value) {
        errorMsg(barangayname, `You must fill ${barangayname.placeholder}`)

    } if (!streetname.value) {
        errorMsg(streetname, `You must fill ${streetname.placeholder}`)

    } if (!gendername.value) {
        genderError();

    } if (!questionONe.value) {
        qustionAnswer(questionONe, "Need to click");
    } if (regions.value === "") {
        qustionAnswer(regions, "Please Select")
    } else {


        console.log(firstname.value)
        console.log(midname.value)
        console.log(lastname.value)
        console.log(dateofbirth.value)
        console.log(emailAddress.value)
        console.log(provincename.value)
        console.log(gendername.value)
        console.log(barangayname.value)
        console.log(streetname.value)
        console.log(regions.value)
        console.log(vacLabel.innerHTML)
        console.log(doseBrand.value)
        console.log(vacDate.value)
        console.log(vacLoc.value)
        console.log(remarks.value)
        alert('Info has been sent')


    }

})





const qustionAnswer = (field, msg) => {
    document.getElementById('error-' + field.name).innerHTML = msg
}



const genderError = () => {
    let genderS = document.getElementById('error-answerGender')
    genderS.innerHTML = "Gender is required!"
}

const errorMsg = (field, msg) => {
    field.style.borderColor = "red";
    document.getElementById('error-' + field.name).innerHTML = msg
}




const clear = () => {
    const textfield = document.querySelectorAll('input')
    textfield.forEach((element) => {

        element.style.borderColor = "black"
        element.innerHTML = "";
        document.getElementById('error-' + element.name).innerHTML = "";
    })



}

resbtn.addEventListener('click', function (e) {

    radio()
    clear();
})


const radio = () => {
    let check = document.querySelectorAll('.gender')
    check.forEach((element) => {
        element.checked = false;

    })

}





