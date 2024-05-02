const router = require('express').Router()
const { model } = require("mongoose");

router.get('/', (req, res) => {
    res.send("you are in sponsor page")
})

module.exports = router
