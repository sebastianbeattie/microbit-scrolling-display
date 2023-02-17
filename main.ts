input.onButtonPressed(Button.A, function () {
    radio.sendString("display")
    showTheMessage()
})
function showTheMessage () {
    basic.clearScreen()
    basic.pause(display_order * 800)
    while (true) {
        for (let index = 0; index <= message.length; index++) {
            basic.showString(message.charAt(index))
        }
        basic.pause(1000)
    }
}
radio.onReceivedString(function (receivedString) {
    if (receivedString == "order_increment" && order_set == 0) {
        display_order += 1
        basic.showNumber(display_order)
    }
    if (receivedString == "display") {
        showTheMessage()
    }
    if (receivedString.includes("new_message_")) {
        message = receivedString.substr(0, 11)
        basic.clearScreen()
    }
})
input.onButtonPressed(Button.B, function () {
    if (order_set == 0) {
        radio.sendString("order_increment")
        order_set = 1
        images.iconImage(IconNames.Yes).showImage(0)
    }
})
let order_set = 0
let display_order = 0
let message = ""
message = "Microbit Epicness"
display_order = 0
order_set = 0
radio.setGroup(123)
radio.sendString("conn_establish")
basic.showNumber(display_order)
