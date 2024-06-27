const router = require('express').Router();
const loginController = require('../controller/loginController');
const registerController = require('../controller/registerController')


router.post('/register',registerController)
.post('/login',loginController)

module.exports = router;