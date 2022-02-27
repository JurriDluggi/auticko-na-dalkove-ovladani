radio.onReceivedValue(function (name, value) {
    if (name == "x") {
        xValue = value
    }
    if (name == "y") {
        yValue = value
    }
})
let yValue = 0
let xValue = 0
radio.setGroup(1)
wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S0, 90)
basic.forever(function () {
    wuKong.setMotorSpeed(wuKong.MotorList.M1, yValue)
    wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S0, xValue)
})
