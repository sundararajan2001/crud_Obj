const express = require('express');
const router = express.Router();
const UserService = require("../Controller/user");
const service = new UserService();


router.get('/homepage', (req, res) => {
    console.log({ "success": "Welcome on the home page" });
    res.send({ "message": "Welcome on the home page" })
});

router.post('/signup', async(req, res) => {
    console.log(req.body);
    await service.create(req.body).then((data) => {
        console.log("Signup successfully....");
        console.log("User", data);
        res.send({ "message": "Signup successfully...." });
    }).catch((err) => {
        console.log(err)
        res.send(err)
    })
});


router.post('/login', async(req, res) => {
    const userdata = await service.emailChecking(req.body.email);
    if (userdata) {
        const passCheck = await service.PassChecking(userdata, req.body.password);
        if (passCheck) {
            console.log({ "Message": "Login successfully" })
            res.send({ "Message": "Login successfully" });
        } else {
            res.send({ "sorry": "wrong password! " });
        }
    } else {
        res.send({ "sorry": "This email not exist!" });
    }
})

module.exports = router;