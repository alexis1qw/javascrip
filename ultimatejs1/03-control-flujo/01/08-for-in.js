let user {
    id: 1,
    name: "alexis",
    age: 19,
};

for (let prop in user) {
    console.log(prop, user[prop]);
}

let animales = ["perro", "gato", "caballo"];
for( let indice in animales) {
    console.log(indice, animales[indice]);
}