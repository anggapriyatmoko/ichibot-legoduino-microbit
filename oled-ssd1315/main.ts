/**
 * microbit-ssd1315-oled
 * Extension untuk menampilkan teks pada OLED SSD1315
 */
//% weight=100 color=#0fbc11 icon=""
namespace SSD1315 {
    let initialized = false;
    const SSD1315_ADDR = 0x3C;

    function sendCommand(cmd: number) {
        let buf = pins.createBuffer(2);
        buf[0] = 0x00;
        buf[1] = cmd;
        pins.i2cWriteBuffer(SSD1315_ADDR, buf);
    }

    /**
     * Inisialisasi OLED SSD1315
     */
    //% block="inisialisasi OLED SSD1315"
    export function init() {
        if (initialized) return;
        initialized = true;
        // Inisialisasi dasar SSD1315 (mirip SSD1306, bisa disesuaikan jika perlu)
        sendCommand(0xAE); // Display off
        sendCommand(0xD5); sendCommand(0x80); // Set display clock divide ratio/oscillator frequency
        sendCommand(0xA8); sendCommand(0x3F); // Set multiplex ratio(1 to 64)
        sendCommand(0xD3); sendCommand(0x00); // Set display offset
        sendCommand(0x40); // Set start line address
        sendCommand(0x8D); sendCommand(0x14); // Enable charge pump regulator
        sendCommand(0x20); sendCommand(0x00); // Set Memory Addressing Mode to Horizontal
        sendCommand(0xA1); // Set segment re-map 0 to 127
        sendCommand(0xC8); // Set COM Output Scan Direction
        sendCommand(0xDA); sendCommand(0x12); // Set COM Pins hardware configuration
        sendCommand(0x81); sendCommand(0xCF); // Set contrast control
        sendCommand(0xD9); sendCommand(0xF1); // Set pre-charge period
        sendCommand(0xDB); sendCommand(0x40); // Set VCOMH deselect level
        sendCommand(0xA4); // Entire display ON
        sendCommand(0xA6); // Set normal display
        sendCommand(0xAF); // Display ON
        clear();
    }

    /**
     * Menghapus layar OLED
     */
    //% block="hapus layar OLED SSD1315"
    export function clear() {
        let blank = pins.createBuffer(129);
        blank[0] = 0x40;
        for (let i = 1; i < 129; i++) blank[i] = 0x00;
        for (let page = 0; page < 8; page++) {
            sendCommand(0xB0 | page);
            sendCommand(0x00);
            sendCommand(0x10);
            pins.i2cWriteBuffer(SSD1315_ADDR, blank);
        }
    }

    /**
     * Menampilkan teks pada posisi tertentu
     * @param text Teks yang akan ditampilkan
     * @param x Posisi X (0-15)
     * @param y Baris (0-7)
     */
    //% block="tampilkan teks %text|pada x %x|y %y"
    export function showText(text: string, x: number, y: number) {
        // Implementasi minimal agar blok muncul di MakeCode
        // (Belum menampilkan font, hanya validasi blok)
        // TODO: Tambahkan font 5x8 dan implementasi penuh
        let dummy = 0x41; // ASCII 'A'
        // Contoh: kirim satu byte data ke SSD1315 agar tidak error build
        let buf = pins.createBuffer(2);
        buf[0] = 0x40;
        buf[1] = dummy;
        pins.i2cWriteBuffer(SSD1315_ADDR, buf);
    }
}
