const router = require('express').Router()

const streamRouter = require('./stream.router')

router.use('/stream', streamRouter)

module.exports = router