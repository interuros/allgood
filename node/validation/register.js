const validator = require("validator");
const isEmpty = require("is-empty");

const fields = {
    firstName: {required: true, msg: "Please fill in your first name!"},
    lastName: {required: true, msg: "Please fill in your last name!"},
    password: {required: true, msg: "Please fill in your password!"},
    passwordRepeat: {required: true, msg: "Please repeat your password!"},
    job: {required: false},
    email: {required: true, msg: "Please fill in your email!"},
};

module.exports = function validateRegisterData (data) {
    let errors = [];

    for (let key in data) {
        if (data.hasOwnProperty(key)) {
            if (validator.isEmpty(data[key]) && fields[key].required === true) {
                errors.push({text: fields[key].msg});
            }
        }
    }

    
    
    if (!validator.isEmail(data.email)) {
        errors.push({text: "Your email is not valid. Please enter a valid email!"});
    }

    if (!validator.isLength(data.password, {min: 4, max: 10})) {
        errors.push({text: "Your password must be between 4 and 10 characters!"});
    }

    if (!validator.equals(data.password, data.passwordRepeat)) {
        errors.push({text: "Passwords must be equal!"})
    }

    return {
        errors: errors,
        isValid: isEmpty(errors)
    };
}