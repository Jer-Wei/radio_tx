let temperature = 0
basic.showString("Radio TX")
radio.setGroup(200)
serial.redirectToUSB()
basic.forever(function () {
    temperature = input.temperature()
    radio.sendValue("temperature", temperature)
    basic.showString("" + (temperature))
    basic.pause(1000)
})
