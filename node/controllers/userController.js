
const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("../config/config");
const User = require('../models/user');

const validateRegisterData = require("../validation/register");

const user_login = (req, res) => {
    res.send("proso");
}


const user_register = (req, res) => {
    
    const {errors, isValid} = validateRegisterData(req.body);
    
    if (!isValid) {
        return res.status(400).json({errors: errors, success: isValid});
    }

    

    User.findOne({email: req.body.email})
        .then(user => {
                if (user) {
                    return res.status(400).json({errors: [{text: `User with email ${req.body.email} already exists`}], success: false})
                } else {

                    let data = {...req.body};
                    delete data.passwordRepeat;
                

                    let newUser = new User(data);

                    bcrypt.genSalt(10, (err, salt) => {
                        bcrypt.hash(newUser.password, salt, (err, hash) => {
                            if (err) throw err;
                            newUser.password = hash;
                            newUser.save()
                                .then(user => res.status(200).json({user: user, success: true}))
                                .catch(err => res.status(400).json({errors: [{text: `Couldn't register. This is a server issue!`}], success: false}))
                        })
                    });
                }           

                
        })
}


const user_logout = (req, res) => {

}


module.exports  = {
    user_login,
    user_register,
    user_logout
}