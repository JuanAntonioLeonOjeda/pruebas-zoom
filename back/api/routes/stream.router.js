const router = require('express').Router()

const {
  createRoom,
  accessRoom
} = require('../controllers/room.controller')

router
  .get('/', createRoom)
  .get('/:id', accessRoom)


module.exports = router