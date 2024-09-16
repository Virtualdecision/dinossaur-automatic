let limiar = 500 // Ajuste este valor conforme a sensibilidade desejada do LDR
let posicao_servo_baixo = 0
let posicao_servo_cima = 90

basic.forever(function () {
    // Lê o valor do LDR no pino P0
    let valorLDR = pins.analogReadPin(AnalogPin.P0)

    // Se o valor lido for menor que o limiar (cacto detectado), faz o pulo
    if (valorLDR < limiar) {
        // Move o servo para fazer o "pulo"
        pins.servoWritePin(AnalogPin.P1, posicao_servo_cima)
        basic.pause(500)  // Aguarda o "pulo"

        // Retorna o servo à posição inicial
        pins.servoWritePin(AnalogPin.P1, posicao_servo_baixo)
    }

    // Pequeno delay para evitar leituras muito rápidas
    basic.pause(100)
})