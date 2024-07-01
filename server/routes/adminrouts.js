const AddPreviousWorkController = require('../controller/addPreviousWorkController');

const router = require('express').Router();



router.post('/addpreviouswork',AddPreviousWorkController)

 module.exports = router