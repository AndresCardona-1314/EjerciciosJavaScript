import inquirer from 'inquirer'

console.log("Ejercicio FizzBuzz");

const answers = await inquirer.prompt([
    {
        type:'input',
        name: 'Numero', 
        message: 'Ingresa un número: ',
    }

])

const {Numero} = answers;

if(isNaN(Numero)){
    console.log("Error, no ingresaste un valor numérico");
}
else{
    for(let i = 1; i <= Numero;i++){
        if(i%3 === 0 && i%5===0){
            console.log(i + " " + "RiwiCoder");
        }
        else if(i%3 === 0){
            console.log(i + " " + "Riwi");
        }
        else if(i%5 === 0){
            console.log(i + " " + "Coder");
        }
        else{
            console.log(i);
        }

    }
}

