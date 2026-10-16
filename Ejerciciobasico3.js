import inquirer from 'inquirer' 

console.log("Cuenta regresiva de lanzamiento");

const answers = await inquirer.prompt([
    {
        type:'input',
        name: 'Numero', 
        message: 'Ingresa un número para iniciar la cuenta regresiva: ',
    }

])

const {Numero} = answers;
let i;
if(isNaN(Numero)){
    console.log("Error, no ingresaste un valor numérico");
}
else if(Numero <= 0){
    console.log("Número no válido");
}
else{
    for(i=Numero;i > 0;i--){
        console.log(i);
    }
    console.log("¡Despegue!");
    
}