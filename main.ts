input.onButtonPressed(Button.A, function () {
    galleta.move(-1)
})
function comegalletas () {
    coco = game.createSprite(randint(0, 4), 0)
    for (let index = 0; index < 4; index++) {
        basic.pause(500)
        coco.change(LedSpriteProperty.Y, 1)
    }
}
function comegalletas2 () {
    coco = game.createSprite(randint(0, 4), 0)
    for (let index = 0; index < 4; index++) {
        basic.pause(500)
        coco.change(LedSpriteProperty.Y, 1)
    }
}
input.onButtonPressed(Button.B, function () {
    galleta.move(1)
})
let coco: game.LedSprite = null
let galleta: game.LedSprite = null
galleta = game.createSprite(2, 4)
comegalletas()
game.setScore(0)
basic.forever(function () {
    for (let index = 0; index < 4; index++) {
        if (coco.isTouching(galleta)) {
            basic.showIcon(IconNames.Sad)
            game.gameOver()
        }
        if (coco.isTouchingEdge()) {
            coco.delete()
            game.addScore(1)
            comegalletas()
        }
    }
    if (coco.isTouching(galleta)) {
        basic.showIcon(IconNames.Sad)
        game.gameOver()
    }
    if (coco.isTouchingEdge()) {
        coco.delete()
        game.addScore(1)
        comegalletas()
        comegalletas2()
    }
})
