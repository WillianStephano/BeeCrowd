
var lines = '3.0 4.0 5.2'


lines = lines.split(' ')

const A = parseFloat(lines.shift())
const B = parseFloat(lines.shift())
const C = parseFloat(lines.shift())

const pi = 3.14159 

let areaTrianRetang = (A * C) / 2
let areaCirculo = pi * C ** 2
let areaTrapezio = ((A + B) * C) / 2
let areaQuadrado = B * B
let areaRetang = A * B

console.log(`TRIANGULO: ${areaTrianRetang.toFixed(3)}`)
console.log(`CIRCULO: ${areaCirculo.toFixed(3)}`)
console.log(`TRAPEZIO: ${areaTrapezio.toFixed(3)}`)
console.log(`QUADRADO: ${areaQuadrado.toFixed(3)}`)
console.log(`RETANGULO: ${areaRetang.toFixed(3)}`)