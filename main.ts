let tool = 0
radio.onReceivedNumber(function (receivedNumber) {
    let mi_jugada = 0
    if (receivedNumber == 1) {
        if (mi_jugada == 1) {
            basic.showString("empate")
        } else if (mi_jugada == 2) {
            basic.showString("gano")
        } else if (mi_jugada == 3) {
            basic.showString("perder")
        }
    }
    if (receivedNumber == 2) {
        if (mi_jugada == 1) {
            basic.showString("perder")
        } else if (mi_jugada == 3) {
            basic.showString("ganar")
        } else if (mi_jugada == 2) {
            basic.showString("empate")
        }
    }
    if (receivedNumber == 3) {
        if (mi_jugada == 1) {
            basic.showString("perder")
        } else if (mi_jugada == 2) {
            basic.showString("gano")
        } else if (mi_jugada == 3) {
            basic.showString("empate")
        }
    }
})
input.onGesture(Gesture.Shake, function () {
    tool = randint(0, 2)
    if (tool == 0) {
        basic.showIcon(IconNames.SmallSquare)
    } else if (tool == 1) {
        basic.showIcon(IconNames.Square)
    } else {
        basic.showIcon(IconNames.Scissors)
    }
})
basic.forever(function () {
    radio.setGroup(97)
})
