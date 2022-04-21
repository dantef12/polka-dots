input.onButtonPressed(Button.A, function () {
    for (let index = 0; index <= 4; index++) {
        led.plot(index + 1, index)
        led.plot(index + 3, index)
        led.plot(index, index + 1)
        led.plot(index, index + 3)
        basic.pause(300)
    }
})
basic.forever(function () {
	
})
