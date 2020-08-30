let Direction2 = 0
let magnetic = 0
let temperature = 0
basic.showString("Radio TX")
radio.setGroup(200)
input.calibrateCompass()
basic.forever(function () {
    temperature = input.temperature()
    radio.sendValue("Tem", temperature)
    led.toggle(0, 0)
    basic.pause(100)
    magnetic = input.magneticForce(Dimension.Strength)
    radio.sendValue("Mag", magnetic)
    led.toggle(2, 2)
    basic.pause(100)
    Direction2 = input.compassHeading()
    radio.sendValue("Dir", Direction2)
    led.toggle(2, 2)
    basic.pause(100)
})
