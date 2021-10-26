const router = require('express').Router();

let user = require('../Models/UserSignUp');

router.route('/add').post((req,res)=>{
    const username = req.body.username;
    const password = req.body.password;
    const email = req.body.email;

    const newUser = new user({username,password,email});

    newUser.save()
    .then(()=>res.json('user added'))
    .catch(err=>res.status(400).json('Error: '+err));
})

module.exports = router;