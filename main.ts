input.onButtonPressed(Button.A, function () {
    for (let index = 0; index <= 5; index++) {
        led.plot(index, index)
    }
})
basic.forever(function () {
	
})
