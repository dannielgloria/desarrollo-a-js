let tortilla = {
    grosor: 10,
    tipo_maiz: "Maiz Azul",
    marca: "Mazeca",
    direccion_plata :{
        pais: "Mexico",
        cp: "0100",
        calle: "Benito juarez"
    }
}

// Convertir objeto a texto
let jsonTexto = JSON.stringify(tortilla);
console.log(typeof jsonTexto, ":", jsonTexto);
console.log(typeof tortilla, ":",tortilla);

// Convertir texto a objeto
let sombreroTexto = '{"material":"telas alfonso", "color":"Blanco", "radio":"fm", "tamaño": "M"}'

let sombreroJSON = JSON.parse(sombreroTexto)

console.log(typeof sombreroTexto, ":", sombreroTexto);
console.log(typeof sombreroJSON, ":",sombreroJSON);

const colorSombrero = sombreroJSON.color
console.log("Color: ",colorSombrero)
