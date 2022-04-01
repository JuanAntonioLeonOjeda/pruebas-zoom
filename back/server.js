process.stdout.write('\x1B[2J\x1B[0f')
require('dotenv').config()

const cors = require('cors')
const express = require('express')
const { createServer } = require('http')
const { Server } = require('socket.io')
const ExpressPeerServer = require('peer').ExpressPeerServer

const app = express()
const httpServer = createServer(app)
const io = new Server(httpServer, {
  cors: {
    origin: `http://localhost:3000`
  }
})
const peerServer = ExpressPeerServer( httpServer, { debug: true })

io.on('connection', (socket) => {
  socket.on('join-room', (roomId) => {
    socket.join(roomId)
    socket.to(roomId).emit(`user-connected`)
  })
})

try {
  app
    .use(cors())
    .use(express.static('public'))
    .use('/peerjs', peerServer)
    .use ('/api', require('./api/routes'))  

  httpServer.listen(process.env.PORT , () => {
    console.info('Project 3 Server Live')
    console.info(`PORT: http://localhost:${process.env.PORT}`)
  })
} catch (error) {
  throw new Error (`Unable to start Express: ${error}`)
}
