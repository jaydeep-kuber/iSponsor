const router = require('express').Router()
// const bodyParser = require('body-parser')
const {handleRegister } = require('../controllers/Auth')
const { route } = require('./user')


// router.post('/login' , handleLogin)
router.post('/', handleRegister)
// router.post('/signin' ,  handleSignin)




module.exports = router