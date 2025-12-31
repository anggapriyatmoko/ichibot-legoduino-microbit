/**
 * microbit-digital-read
 * Extension untuk membaca data digital pada micro:bit
 */
//% weight=100 color=#0fbc11 icon=""
namespace digitalread {
    /**
     * Membaca nilai digital dari pin yang dipilih
     * @param pin pin yang akan dibaca, eg: DigitalPin.P0
     */
    //% block="baca digital %pin"
    //% blockId=digitalread_readPin
    //% pin.fieldEditor="gridpicker"
    //% pin.fieldOptions.columns=3
    //% pin.defl=DigitalPin.P0
    //% pin.shadow="digitalPin"
    //% pin.shadowOptions="{\"pins\":[\"P0\",\"P1\",\"P2\"]}"
    export function readPin(pin: DigitalPin): number {
        return pins.digitalReadPin(pin);
    }
}
