const { v4: uuidv4 } = require('uuid')

function createRoom(req, res) {
    const id = uuidv4()
    res.status(200).send(id)
    // res.redirect(`/api/stream/${id}`)
}

function accessRoom(req, res) {
  res.render('room', { roomId: req.params.id})
}

module.exports = {
  createRoom,
  accessRoom
}