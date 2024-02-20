const user = { id: 1};

user.name = "nicolas";
user.guardar = function () {
    console.log("guardando", user.name);

}

user.guardar();
