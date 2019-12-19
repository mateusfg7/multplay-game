export default function renderScreen(screen, game, requestAnimationFrame, currenctPlayerId) {
    const context = screen.getContext('2d')
    context.fillStyle = 'white'
    context.clearRect(0,0,10,10)

    for (const playerId in game.state.players) {
        const player = game.state.players[playerId]
        context.fillStyle = 'black'
        context.fillRect(player.x, player.y, 1, 1)
    }

    for (const fruitId in game.state.fruits) {
        const fruit = game.state.fruits[fruitId]
        context.fillStyle = 'green'
        context.fillRect(fruit.x, fruit.y, 1, 1)
    }

    const currenctPlayer = game.state.players[currenctPlayerId]

    if (currenctPlayer) {
        context.fillStyle = '#F0DB4F'
        context.fillRect(currenctPlayer.x, currenctPlayer.y, 1, 1)
    }

    requestAnimationFrame(() => {
        renderScreen(screen, game, requestAnimationFrame, currenctPlayerId)
    })
}