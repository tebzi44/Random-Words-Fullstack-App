const router = require('express').Router()
const wordsRoutes = require('./wordsRoutes')

router.use('/words',wordsRoutes)

module.exports = router
