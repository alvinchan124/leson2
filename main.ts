input.onButtonPressed(Button.A, function () {
    if (input.lightLevel() < 100) {
        basic.showString("night")
    } else {
        basic.showString("day")
    }
})
input.onButtonPressed(Button.B, function () {
    if (input.temperature() > 26) {
        basic.showString("hot")
    } else {
        basic.showString("cold")
    }
})
