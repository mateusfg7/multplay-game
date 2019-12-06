import createGame from './game.js'
import createKeyboardListener from './keyboard-listenner.js'
import renderscreen from './render-screen.js'

const game = createGame()
const keyboardListener = createKeyboardListener(document)
keyboardListener.subscribe(game.movePlayer)

const screen = document.getElementById('screen')
renderscreen(screen, game, requestAnimationFrame)

game.addPlayer({playerId: 'player1', playerX: 5, playerY: 5})
game.addFruit({fruitId: 'fruit1', fruitX: 9, fruitY: 9})