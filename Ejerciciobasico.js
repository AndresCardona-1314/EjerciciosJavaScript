import inquirer from 'inquirer';

console.log('Clasificador de Temperatura');
const answers = await inquirer.prompt([
        {type:'input',
        name: 'Temperature',
        message: 'Ingresa la temperatura actual en grados Celsius: ',
    
    
    }
    ])
    
        const{Temperature} = answers; 
        if(isNaN(Temperature)){
            console.log("Error, no ingresaste un valor numérico");
        }
        else if (Temperature<10){ 
            console.log("Hace frío, lleva chaqueta");
        }
        else if (Temperature>=10 && Temperature<=24){
            console.log("Clima templado");
        }
        else if (Temperature>=25){
            console.log("Hace calor, hidrátate");
        }
        


    