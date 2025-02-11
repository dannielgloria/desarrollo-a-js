
let carro = {
    matricula: "911",
    marca: "BMW",
    color: "chiclamino",
    anio: 1990
}

// Convertir objeto a texto
let jsonTexto = JSON.stringify(carro);

//console.log(jsonTexto)
//console.log(carro)


// Convertir texto a objeto
let jsonCarroTexto = '{"matricula":"199","marca":"VOLKSWAGEN","color":"Azul","anio":2025}'

let json = JSON.parse(jsonCarroTexto)

console.log(jsonCarroTexto)
console.log(json)