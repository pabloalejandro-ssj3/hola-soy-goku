input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 4; index++) {
        basic.showIcon(IconNames.Duck)
        basic.pause(100)
        basic.showLeds(`
            . # # . .
            # # # . .
            . # # # .
            . # # # .
            . . . . .
            `)
        basic.pause(5000)
        basic.showLeds(`
            # # . . .
            # # . . .
            . # # . .
            . . # # #
            . . # . #
            `)
        basic.pause(100)
        basic.showLeds(`
            . . # . .
            . # # . .
            . . # . .
            . . # # #
            . . # . #
            `)
    }
})
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index < 4; index++) {
        basic.showIcon(IconNames.Snake)
        basic.pause(100)
        basic.showLeds(`
            . . . . .
            . . . # #
            # # . # .
            # # # # .
            . . . . .
            `)
        basic.pause(5000)
        basic.showLeds(`
            . . . . .
            . . . . .
            . # # . .
            . . . . .
            . # . . .
            `)
        basic.pause(100)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
})
