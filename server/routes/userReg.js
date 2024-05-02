const rout = require('express').Router();
const { handleReg } = require('../controllers/Auth')

// post 

rout.post('/', handleReg)


module.exports = {
    rout
}