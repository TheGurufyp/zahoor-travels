const express = require('express')
const router = express.Router()
const User = require("../../database/Models/UserModel");
const userAlreadyExists = require("../../middleware/user/userAlreadyExist")
const bcrypt = require('bcrypt');

router.post("/", userAlreadyExists, async (req, res) => {

    if (req.userAlreadyExists == false) { // create new User

        if (req.body.password) // password is defined in body
        {
            const { username, password } = req.body;
            const hashPassword = bcrypt.hashSync(password, 10);

            const newUser = new User({
                username: username,
                password: hashPassword
            });

            newUser.save().then(() => {
                res.send({ success: true, payload: "New User Created Successfully" });
            }).catch((error) => {
                res.send({ success: false, payload: "Can't save in database" })
            });


        }
        else { // password is undefined
            res.send({ success: false, payload: "password is undefined" });
        }



    }
    else {

        res.send({ success: false, payload: "username already exists" });

    }



});










module.exports = router