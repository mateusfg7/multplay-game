import express from 'express'
import http from 'http'
import createGame from './public/game.js'
import socketio from 'socket.io'
import { Socket } from 'dgram'

const app = express()
const server = http.createServer(app)
const sockets = socketio(server)

app.use(express.static('public'))

const game = createGame()
game.addPlayer({playerId: 'player1', playerX: 5, playerY: 5})
game.addFruit({fruitId: 'fruit1', fruitX: 9, fruitY: 9})
game.addFruit({fruitId: 'fruit2', fruitX: 4, fruitY: 4})

console.log(game.state)

sockets.on('connect', (socket) => {
    const playerId = socket.id
    console.log(`> Player connected on Server with id: ${playerId}`)

    socket.emit('setup', game.state)
})

server.listen(3000, () => {
    console.log('> server listening on port: 3000')
})