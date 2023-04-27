input.onGesture(Gesture.Shake, function () {
    basic.clearScreen()
    Número_aleatorio = randint(0, 3)
    if (Número_aleatorio == 2) {
        basic.showString("SI")
    } else if (Número_aleatorio == 1) {
        basic.showString("NO")
    } else {
        basic.showString("NO SE")
    }
    basic.showNumber(8)
})
let Número_aleatorio = 0
basic.showString("Haz una pregunta")
basic.showNumber(8)
