// Callstack 
// Aquí JavaScript pone las tareas que puede hacer ahora mismo, una por una. 
// Si algo es rápido y directo, lo hace de inmediato.

function primero() {
    console.log("Primero!")
}

function segundo() {
    console.log("Segundo!")
}

function tercero() {
    console.log("Tercero!")
}

//primero()
//segundo()
//tercero()

// Web API 
/* Son cosas que JavaScript le pide al navegador que maneje, 
como esperar que un tiempo se cumpla o que lleguen datos de Internet.
Esto se hace al margen para no detener otras tareas. */

//console.log("Iniciar el procesamiento de mi JS")

/*setTimeout(()=>{
    console.log("Lamando un recurso externo detras de babalinas (webAPI)")
},10000)

console.log("Viva méxico")?*

// Callback Queue
/* Una vez que los ayudantes han terminado, las tareas que necesitan seguir se alinean aquí,
 esperando que el Call Stack esté libre para continuar. */

setTimeout(()=>{
    console.log("Tarea 3 de Fulano")
},3000)
setTimeout(()=>{
    console.log("Tarea 2 de Daniel")
},3000)
setTimeout(()=>{
    console.log("Tarea 3 de Daniel")
},3000)
setTimeout(()=>{
    console.log("Tarea 2 de Fulano")
},3000)



console.log('Tarea 1 de Cola Fulano')
console.log('Tarea 1 de Cola Daniel')

function f1() {
    console.log('Tarea 1 de Cola Fulano')
    f2()
}

function f2() {
    setTimeout(()=>{
        console.log("Tarea 2 de Fulano")
    },2100)
    f3()
}

function f3() {
    setTimeout(()=>{
        console.log("Tarea 3 de Fulano")
    },4100)
}
// ejecuto mi Callback Queue de Fulano
//f1()


//Microtask Queue

/*console.log('Inicio');

tercero()

Promise.resolve().then(() => {
  console.log('Manejado por la Microtask Queue');
});

console.log('Fin');*/
