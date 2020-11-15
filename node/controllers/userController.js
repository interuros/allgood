const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("../config/config");
const User = require('../models/user');

const validateRegisterData = require("../validation/register");
const validateLoginData = require("../validation/login");

const user_login = (req, res) => {
    
    const {errors, isValid} = validateLoginData(req.body);

    if (!isValid) {
        return res.status(400).json({errors: errors, success: isValid});
    }

    const email = req.body.email;
    const password = req.body.password;

    User.findOne({ email }).then(user => {

        if (!user) {
            return res.status(400).json({errors: [{text: `User with email ${email} does not exist!`}] , success: false});
        }

        

        bcrypt.compare(password, user.password).then(isMatch => {
            if (isMatch) {

                const payload = {
                    id: user.id,
                    name: user.email
                };

                jwt.sign(
                    payload,
                    config.secretOrKey,
                    { expiresIn: 15778476 },
                    (err, token) => {
                        delete user.password;
                        res.json({
                            success: true,
                            token: "Bearer " + token,
                            user: user
                        });
                    }
                );
            } else {
                return res.status(404).json({errors: [{text: `Password is incorrect!`}] , success: false});
            }
        });
    });
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
                                .then(user => {
                                    const payload = {
                                        id: newUser.id,
                                        name: newUser.email
                                    };
                    
                                    jwt.sign(
                                        payload,
                                        config.secretOrKey,
                                        { expiresIn: 15778476 },
                                        (err, token) => {
                                            delete newUser.password;
                                            res.json({
                                                success: true,
                                                token: "Bearer " + token,
                                                user: newUser
                                            });
                                        }
                                    );
                                })
                                .catch(err => res.status(400).json({errors: [{text: `Couldn't register. This is a server issue!`}], success: false}))
                        })
                    });
                }           

                
        })
}


const user_get = (req, res) => {
    const authorization = req.headers["authorization"];
    let token = "";

    if (authorization != "null") {
        let arr = authorization.split(" ");
        token = arr[1];
    }

    jwt.verify(token, config.secretOrKey, (err, authData) => {
        if (err) {
            res.sendStatus(403);
        } else {
            let email = authData.name;

            User.findOne({email})
            .then(user => {
                delete user.password;
                res.json({user: user});
            })
        }
    })
}

module.exports  = {
    user_login,
    user_register,
    user_get
}