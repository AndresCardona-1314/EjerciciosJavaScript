import inquirer from 'inquirer'

console.log("Ejercicio contraseña segura");

const answers = await inquirer.prompt([
        {type:'password',
        name: 'Password',
        message: 'Ingresa la contraseña: ',
        mask: '*'    
    
    }
    ])




let numeros = 0;
let mayusculas = 0;
const contrasena = answers.Password;

// Recorrer la contraseña carácter por carácter
for (let i = 0; i < contrasena.length; i++) {
    let caracter = contrasena[i];

    // Verificar si es un número
    if (caracter >= "0" && caracter <= "9") {
        numeros++;
    }

    // Verificar si es una letra mayúscula
    if (caracter >= "A" && caracter <= "Z") {
        mayusculas++;
    }
}

// Validar las reglas de seguridad
if (contrasena.length >= 8 && numeros > 0 && mayusculas > 0) {
    console.log("Contraseña segura");
} else {
    console.log("La contraseña no es segura");

    if (contrasena.length < 8) {
        console.log("Debe tener mínimo 8 caracteres");
    }

    if (numeros == 0) {
        console.log("Debe tener al menos un número");
    }

    if (mayusculas == 0) {
        console.log("Debe tener al menos una letra mayúscula");
    }
}
