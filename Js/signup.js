const menu =document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar_menu')
const navLogo = document.querySelector('#navbar_logo')
const body = document.querySelector('bdoy')

// dispay mobelie menu

const mobileMenu = () => {
    menu.classList.toggle('is-active')
    menuLinks.classList.toggle('active')
    body.classList.toggle('active')

}

menu.addEventListener('click',mobileMenu)

// animantion //


// resgi  //
const rForm = document.querySelector("#r-form")
const fName = document.querySelector("#r-first-name");
const lName = document.querySelector("#r-last-name");
const email = document.querySelector("#r-email");
const eConfirm = document.querySelector("#r-email-confirm");
const phone = document.querySelector("#r-phone");
const age = document.querySelector("#r-age");
const studYes = document.querySelector("#r-student-yes");
const studNo = document.querySelector("#r-student-no");
const disAge = document.querySelector("#dis-age");
const sBtn = document.querySelector("#s-btn");
const employed = document.querySelector("#r-employed");
const unemployed = document.querySelector("#r-unemployed");

// resgi alert //

const fNameAlert = document.querySelector("#f-name-alert");
const lNameAlert = document.querySelector("#l-name-alert");
const eAlert = document.querySelector("#e-alert");
const eConfirmAlert = document.querySelector("#e-confirm-alert");
const pAlert = document.querySelector("#p-alert");
//const studentStatusNameAlert = document.querySelector("#student-status-alert");


// resgi req //
const fNameRequired = document.querySelector("#f-name-required");
const lNameRequired = document.querySelector("#l-name-required");
const eRequired = document.querySelector("#e-required");
const eConfirmRequired = document.querySelector("#e-confirm-required");
const pRequired = document.querySelector("#p-required");
const aRequired = document.querySelector("#a-required");
const studStatusRequired = document.querySelector("#s-status-required");
const empRequired = document.querySelector("#emp-required");

const ePattern = /^[A-Za-z\d]+([A-Za-z\d!#$%&'*+-\=.?^_`{|]+)?@[A-Za-z\d]+.[A-Za-z\d].?[A-Za-z\d]?$/;
const nPattern = /[A-Za-z/d ]+/;
const pPattern = /^(\+61|0)4\d{8}/;

const textbox = document.querySelectorAll(".textbox");

age.addEventListener("input", () => {
    disAge.textContent = `${age.value}`;
}
)

// check for pattern

const checkPattern = (text, pattern, alert) => {
    if (text.value.match(pattern)) {
        alert.classList.remove("show");
        return true;
    } else {
        alert.classList.add("show");
        return false;
    }
}

const emailConfirmation = () => {
    if (eConfirm.value != email.value) {
        eConfirmAlert.classList.add("show");
        return false;
    } else {
        eConfirmAlert.classList.remove("show");
        return true;
    }
}

// check for required

const checkRequired = (text, alert) => {
    if (text.value == "") {
        alert.classList.add("show");
        return false;
    } else { 
        alert.classList.remove("show");
        return true;
    }
}

const checkSelected = (text, alert) => {
    if (!text.checked) {
        alert.classList.add("show");
        return false;
    } else {
        alert.classList.remove("show");
        return true;
    }
}

const checkDragged = (text, alert) => {
    if (text.value == 100) {
        alert.classList.add("show");
        return false;
    } else {
        alert.classList.remove("show");
        return true;
    }
}

textbox.forEach(box => {
    box.addEventListener("focusout", () => {
        if (box.value == "") {
            box.focus();
        }
    })
})

fName.addEventListener("focusout", () => {
    checkRequired(fName, fNameRequired);
    checkPattern(fName, nPattern, fNameAlert);
})

lName.addEventListener("focusout", () => {
    checkRequired(lName, lNameRequired);
    checkPattern(lName, nPattern, lNameAlert);
})

email.addEventListener("focusout", () => {
    checkRequired(email, eRequired);
    checkPattern(email, ePattern, eAlert);
})

eConfirm.addEventListener("focusout", () => {
    checkRequired(eConfirm, eConfirmRequired);
    emailConfirmation();
})

phone.addEventListener("focusout", () => {
    checkRequired(phone, pRequired);
    checkPattern(phone, pPattern, pAlert);
})

sBtn.addEventListener("click", event => {
    event.preventDefault();
    checkRequired(fName, fNameRequired);
    checkPattern(fName, nPattern, fNameAlert);
    checkRequired(lName, lNameRequired);
    checkPattern(lName, nPattern, lNameAlert);
    checkRequired(email, eRequired);
    checkPattern(email, ePattern, eAlert);
    emailConfirmation();
    checkPattern(eConfirm, ePattern, eConfirmAlert);
    checkRequired(phone, pRequired);
    checkPattern(phone, pPattern, pAlert);
    checkRequired(age, aRequired);

    if (
        checkRequired(fName, fNameRequired) && 
        checkPattern(fName, nPattern, fNameAlert) && 
        checkRequired(lName, lNameRequired) && 
        checkPattern(lName, nPattern, lNameAlert) && 
        checkRequired(email, eRequired) && 
        checkPattern(email, ePattern, eAlert) && 
        checkRequired(eConfirm, eConfirmRequired) && 
        emailConfirmation() && checkRequired(phone, pRequired) && 
        checkPattern(phone, pPattern, pAlert) && 
        checkDragged(age, aRequired) && 
        (checkSelected(studNo, studStatusRequired) || 
        checkSelected(studYes, studStatusRequired)) &&
        (checkSelected(employed, empRequired) ||
        checkSelected(unemployed, empRequired))
        ) {
        registrationForm.submit();
        document.querySelector("#blocker").classList.add("show");
        formPopup.classList.add("completed");
    } else {
        console.log("no");
    }
})


// annual fee calculator

const annualFee = document.querySelector("#a-fee");

// function
    // $10/m = $120.0 
    // disc = 1
    // disc if age{(16-20y/o)} = 10 
    // disc if stud {yes} = 5
    // no dist if stud {no} =0
    // disc if uneemp{yes} = 40
    // no dict if emp{no}= 0
const calculateFee= () => {
    let result = 120;
    let discount = 0;
    if (age.value >= 16 && age.value <= 20) {
        discount += 10;
    }
    if (studYes.checked) {
        discount += 5;
        if (studNo.checked) {
            discount -= 5;
        }
    }
    if (unemployed.checked) {
        discount += 40;
    }
    if (discount == 0) {
        return 120.00.toFixed(2);
    } 
    else {  
    result *= (1 - discount/100);
    result = result.toFixed(2);
    return result;

    }
}

// when user changes age, display changed fee
age.addEventListener("input", () => {
    annualFee.textContent = `$${calculateFee()}`;
})

studYes.addEventListener("click", () => {
    annualFee.textContent = `$${calculateFee()}`;
})

studNo.addEventListener("click", () => {
    annualFee.textContent = `$${calculateFee()}`;
})

employed.addEventListener("click", () => {
    annualFee.textContent = `$${calculateFee()}`;
})
unemployed.addEventListener("click", () => {
    annualFee.textContent = `$${calculateFee()}`;
})