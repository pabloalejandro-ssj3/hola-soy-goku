radio.onReceivedNumber(function (receivedNumber) {
    if (true) {
    	
    }
})
input.onButtonPressed(Button.A, function () {
    mi_jugada = 1
    radio.sendNumber(1)
    basic.showLeds(`
        . . . . .
        . # # # .
        . # . # .
        . # # # .
        . . . . .
        `)
    basic.clearScreen()
})
input.onButtonPressed(Button.AB, function () {
    mi_jugada = 3
    radio.sendNumber(3)
    basic.showLeds(`
        # # . . #
        # # . # .
        . . # . .
        # # . # .
        # # . . #
        `)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    mi_jugada = 2
    radio.sendNumber(2)
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
    basic.clearScreen()
})
input.onGesture(Gesture.Shake, function () {
    basic.clearScreen()
    mi_jugada = 0
})
let mi_jugada = 0
radio.setGroup(134)
