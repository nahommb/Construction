const router = require('express').Router();
const registerController = require('../controller/registerController')

router.post('/register',registerController)

module.exports = router;