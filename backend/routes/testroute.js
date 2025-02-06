const express = require('express')
const { testusercontroller } = require('../Controllers/testControllers')

const router = express.Router()
 
// router get |POST| UPDATE |DELETE



// routers

router.get('/test-users', testusercontroller)


 module.exports =router