function clearErrors() {
    let errors = document.getElementsByClassName('formerror');
    for (let item of errors) {
        item.innerHTML = "";
    }
}

function seterror(id, error) {
    let element = document.getElementById(id);
    element.getElementsByClassName('formerror')[0].innerHTML = error;
}

function validateForm() {
    var returnval = true;
    clearErrors();

    var email = document.forms['myForm']["femail"].value;
    if (email.length > 40) {
        seterror("email", "*Email length is too long");
        returnval = false;
    }

    var phone = document.forms['myForm']["fphone"].value;
    if (phone.length != 10) {
        seterror("phone", "*Phone number should be of 10 digits");
        returnval = false;
    }

    var password = document.forms['myForm']["fpass"].value;
    if (password.length < 6) {
        seterror("pass", "*Password should be at least 6 characters long");
        returnval = false;
    } else if (!/[a-z]/.test(password) || !/[A-Z]/.test(password) || !/[0-9]/.test(password) || !/[!@#$%^&*]/.test(password)) {
        seterror("pass", "*Password should include a mix of letters, numbers, and special characters");
        returnval = false;
    }

    var feedback = document.forms['myForm']["ffeed"].value;
    if (feedback.length < 10) {
        seterror("feedback", "*Feedback should be at least 10 characters long");
        returnval = false;
    }

    return returnval;
}