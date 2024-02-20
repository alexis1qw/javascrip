//personaje de tv
let nombre = "marcelo";
let anime = "naruto";
let edad = 16;

let personaje = {
    nombre : "marcelo",
    anime : "naruto",
    edad : "16"
};
console.log(personaje);
console.log(personaje.nombre);
console.log(personaje["anime"])

personaje.edad = 13;

delete personaje.anime;
console.log(personaje);