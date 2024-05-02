const router = require('express').Router()
// const bodyParser = require('body-parser')
const {handleLogin , handleRegister } = require('../controllers/Auth')
const { route } = require('./user')


// router.post('/login' , handleLogin)
router.post('/login' , handleLogin)
router.post('/register', handleRegister)
// router.post('/signin' ,  handleSignin)




module.exports = router