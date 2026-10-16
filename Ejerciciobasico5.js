import inquirer from 'inquirer'

console.log("Ejercicio Adivina el número entre 1 y 20");

const Numero = Math.floor(Math.random()*20)+1;
let ganado = false;
for(let i = 1; i<=5; i++){
    const answers = await inquirer.prompt([
    {
        type:'input',
        name: 'NumeroUsuario', 
        message: 'Adivina el número entre 1 y 20, tienes cinco intentos. !Adelante¡: ',
    }

    ])
    const {NumeroUsuario} = answers;
    if(NumeroUsuario < Numero){
        console.log("El número secreto es mayor, sigue intentando")
    }
    else if(NumeroUsuario > Numero){
        console.log("El número secreto es menor, sigue intentando")
    }
    else if(NumeroUsuario==Numero){
        console.log("¡Ganaste en " + " " + i +" " + "intentos!, el número era: " + Numero);
        ganado = true;
        break
    }
    
}
if (!ganado) {
    console.log(`Perdiste, el número era ${Numero}`);
}




