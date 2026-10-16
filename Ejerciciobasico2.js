import inquire from 'inquirer';

console.log("Cobro de Parqueadero");
const answers = await inquire.prompt([
    {
        type:'input',
        name: 'Horas', 
        message: 'Ingresa el número de horas que estuvo tu vehiculo en el parqueadero: ',
    },
    {
        type: 'select',
        name: 'EstudianteRiwi',
        message: '¿Eres estudiante de Riwi?',
        choices: ['Sí', 'No'],
    }
])

const {Horas, EstudianteRiwi} = answers;
let Total;
let TotalaPagar;
if(isNaN(Horas)){
    console.log("Error, no ingresaste un valor numérico");
} 
else {
    if (Horas == 1 && EstudianteRiwi == 'Sí') {
        Total = 3000;
        if (Total < 20000) {
            TotalaPagar = Total * 0.85;
            console.log("El total a pagar es: " + TotalaPagar);
        }
         else {
            TotalaPagar = 20000*0.85;
            console.log("El total a pagar es: " + TotalaPagar);
        }
        
    }
    else if (Horas >1 && EstudianteRiwi == 'Sí') {
        Total = (3000 + (Horas-1)*2000);
        if (Total < 20000) {
            TotalaPagar = Total * 0.85;
            console.log("El total a pagar es: " + TotalaPagar);
        }
        else {
            TotalaPagar = 20000*0.85;
            console.log("El total a pagar es: " + TotalaPagar);
        }
    }
    else if (Horas == 1 && EstudianteRiwi == 'No') {
        Total = 3000;
        if (Total < 20000) {
            TotalaPagar = Total;
            console.log("El total a pagar es: " + TotalaPagar);
        }
        else {
            TotalaPagar = 20000;
            console.log("El total a pagar es: " + TotalaPagar);
        }
        
    }
    else if (Horas > 1 && EstudianteRiwi == 'No') {
        Total = 3000 + (Horas - 1) * 2000;
        if (Total < 20000) {
            TotalaPagar = Total;
            console.log("El total a pagar es: " + TotalaPagar);
        }
        else {
            TotalaPagar = 20000;
            console.log("El total a pagar es: " + TotalaPagar);
        }
    }
}