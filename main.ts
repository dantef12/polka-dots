input.onButtonPressed(Button.A, function () {
    for (let index = 0; index <= 5; index++) {
        led.plot(index + 1, index)
        led.plot(0 + 0, 0)
    }
})
basic.forever(function () {
	
})
