const validator = require("validator");
const isEmpty = require("is-empty");

const fields = {
    password: {required: true, msg: "Please fill in your password!"},
    email: {required: true, msg: "Email is mandatory!"},
};

module.exports = function validateLoginData (data) {
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


    return {
        errors: errors,
        isValid: isEmpty(errors)
    };
}