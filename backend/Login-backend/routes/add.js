const router = require('express').Router();
const userAdd = require('../Models/user');

router.route('/add').post((req,res)=>{
    const username = req.body.username;

    const newUser = new userAdd({username});

    newUser.save()
    .then(()=>res.send("user added"))
    .catch(err=>res.status(400).json('error'+err))
});

module.exports = router;