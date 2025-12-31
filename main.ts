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
    export function readPin(pin: DigitalPin): number {
        return pins.digitalReadPin(pin);
    }
}
