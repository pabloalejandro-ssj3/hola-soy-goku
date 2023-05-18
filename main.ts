let tool = 0
radio.onReceivedNumber(function (receivedNumber) {
    if (0 == 0) {
    	
    } else if (false) {
    	
    } else {
    	
    }
})
input.onButtonPressed(Button.A, function () {
    let mi_jugada = 0
    basic.showIcon(IconNames.Scissors)
    if (mi_jugada == 1) {
        radio.sendNumber(1)
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
