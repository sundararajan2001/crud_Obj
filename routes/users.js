const express = require('express');
const router = express.Router();
const UserService = require("../service/user");
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

module.exports = router;