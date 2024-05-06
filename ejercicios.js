
function edad(){
    let edad = prompt("Ingrese su edad",0);
    edad > 18 ? (alert("OK, puedes continuar")):(alert("Eres menor de edad"));
}
function notafinal(){
    let carnet = prompt("Ingrese el numero de carnet del alumno");
    // console.log(carnet);
    let nombre = prompt("Ingrese el nombre del alumno");
    //console.log(nombre);
    let nExamenes = prompt("Ingrese nota de examenes",0);
    nExamenes = (nExamenes*0.20);
    //console.log(nExamenes);
    let nTareas = prompt("Ingrese nota de las tareas",0);
    nTareas = (nTareas*0.40);
    //console.log(nTareas);
    let asistencia = prompt("Ingrese asistencia 1 ó 0",0);
    asistencia=(asistencia*0.1);
    ///console.log(asistencia);
    let investigacion = prompt("Ingrese nota de investigacion", 0);
    investigacion=(investigacion*0.3);
    let nFinal = parseInt(nExamenes+nTareas+asistencia+investigacion);
    alert("El alumno "+nombre+" con numero de Carnet: "+carnet+" Tiene una nota final de: "+nFinal+".");
}
function aumentoSalarial(){
    let nombreEmpleado = prompt("Ingrese el nombre del empleado");
    //console.log(nombreEmpleado);
    let salarioActual = prompt("Ingrese el salario actual del empleado", 0);
   // console.log(salarioActual);
    let categoriaEmpleado = prompt("Ingrese la categoria del empleado");
    //console.log(categoriaEmpleado);
    let SalarioAumento = 0;
    let salarioAumentado = 0;
    switch (categoriaEmpleado) {
        case "A":
          //Declaraciones ejecutadas cuando el resultado de expresión coincide con el valor1
          SalarioAumento = parseInt(salarioActual*0.15);
          alert("El empleado "+ nombreEmpleado +" Actualmente tiene un salario de: "+ salarioActual +" Se le ralizara un aumento del 15% equivalente a: "+SalarioAumento+" .");
          break;
        case "B":
            SalarioAumento = parseInt(salarioActual*0.3)
            alert("El empleado "+ nombreEmpleado +" Actualmente tiene un salario de : "+ salarioActual +" Se le ralizara un aumento del 30% equivalente a: "+SalarioAumento+" .");
            break;
        case "C":
                SalarioAumento = parseInt(salarioActual*0.1)
                alert("El empleado "+ nombreEmpleado +" Actualmente tiene un salario de : "+ salarioActual +" Se le ralizara un aumento del 10% equivalente a: "+SalarioAumento+" .");
                break;
        case "D":
            SalarioAumento = parseInt(salarioActual*0.2)
            alert("El empleado "+ nombreEmpleado +" Actualmente tiene un salario de : "+ salarioActual +" Se le ralizara un aumento del 20% equivalente a: "+SalarioAumento+" .");
            break;
        default:
          alert("no tenemos ese dato intentelo de nuevo")
          break;
      }
}
function numeromayor(){
    let Numero1 = prompt("Ingrese el primer numero",0);
    console.log(Numero1);
    let Numero2 = prompt("Ingrese el segundo numero", 0);
    console.log(Numero2);
    Numero1 > Numero2 ? (alert("El numero "+ Numero1 +" es mayor que el " +Numero2+"")):(alert("El numero "+Numero2+" es mayor que el numero " + Numero1 + ""));
} 

async function descuentoCoche(){
    const inputOptions = new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            "5% de descuento": "Ford Fiesta",
            "10% de descuento": "Ford Focus",
            "20% de descuento": "Ford Escape"
          });
        }, 1000);
      });
      const { value: color } = await Swal.fire({
        title: "Seleccionar coche",
        input: "radio",
        inputOptions,
        inputValidator: (value) => {
          if (!value) {
            return "Necesitas seleccionar un coche";
          }
        }
      });
      if (color) {
        Swal.fire({ html: `Seleccionaste: ${color}` });
      }


}

// Se realiza la carga de 10 valores enteros
//  por teclado. Se desea conocer:
// • La cantidad de valores negativos ingresados.
// • La cantidad de valores positivos ingresados.
// • La cantidad de múltiplos de 15.
// • El valor acumulado de los números ingresados 
// que son pares.

function valoresEnteros(){
    let valores = [];
    let positivos = 0;
    let negativos = 0;
    let multiplos15 = 0;
    let acumuladopares=0;
    let valor=0;
    for (let i=0; i<=9; i++){
        valor = prompt("Por favor digite el dato "+ [i] +": del arreglo");
        valores.push(parseInt(valor));
        }
    }
function tablaMultiplicar(){
    let numero = prompt("Ingrese el numero del cual desea saber la tabla de multiplicar",0);
    for (let i = 0; i<=12; i++)
        {
            console.log(""+numero+"x"+[i]+"="+numero*[i]);
        }
}
function temperatura(){
    let gradosCe = prompt("Digite la cantidad de grados a convertir",0);
    console.log(gradosCe);
    let gradosFe = (gradosCe*1.8+32);
    if(gradosFe>=32 && gradosFe<=68){
        alert("La temperatura es baja "+gradosFe+" °F");
    }
    else if (gradosFe>=68.1 && gradosFe<96){
        alert("La temperatura es adecuada "+gradosFe+" °F");
    }
    else if (gradosFe>=96.1){
        alert("La temperatura es alta"+gradosFe+" °F");
    }
    else{
        alert("Temperatura desconocida");
    }
}
 
//Se cuenta con la siguiente información:
// • Las edades de 5 estudiantes del turno mañana.
// • Las edades de 6 estudiantes del turno tarde.
// • Las edades de 11 estudiantes del turno noche.
// Nota: Las edades de cada estudiante se deberán 
// ingresar por la web.
// Lo que queremos devolver:
// • Obtener el promedio de las edades de cada 
// turno (tres promedios).
// • Imprimir dichos promedios (promedio de cada turno).
// • Mostrar por pantalla un mensaje que indique cuál 
// de los tres turnos tiene un
// promedio de edades mayor.
function edadesPromedio(){
    let turnoMatutino = [];
    let promedioM = 0;
    let edad = 0;
    let promedioMayor = 0;
    for (let i =0; i<=4;i++){
        edad = prompt("Por favor digite la edad del estudiante " + [i] + ": del turno matutino");
        turnoMatutino.push(parseInt(edad));
        for (let i = 0; i <=turnoMatutino.length; i++){
            promedioM += turnoMatutino.length/5;
        }
    }

    let tunrnoVespertino = [];
    let promedioV = 0;
    for (i=0; i <=5; i++){
        edad = prompt("Por favor digite la edad del estudiante "+ [i] + ": del turno Vespertino");
        tunrnoVespertino.push(parseInt(edad));
        for (let i = 0; i <=tunrnoVespertino.length; i++){
            promedioV += tunrnoVespertino.length/6;
        }
    }
    
    let turnoNocturno = [];
    let promedioN = 0;
    for (i=0; i<=10; i++){
        edad = prompt("Por favor digite la edad del estudiante "+ [i] +": del turno nocturno");
        turnoNocturno.push(parseInt(edad));
        for (let i = 0; i <=turnoMatutino.length; i++){
            promedioN += turnoNocturno.length/11;
        }
    }
    
    if (promedioM>promedioV)
        {
            if (promedioM>promedioN){
                //console.log("quien tiene el mayor promedio de edades es el turno matutino");
                promedioMayor=promedioM;
                console.log(promedioMayor);
            }
            else if (promedioN>promedioM)
                //console.log("Quien tiene el mayor promedio es el turno nocturno");
                promedioMayor=promedioN;
                console.log(promedioMayor);
        }else if(promedioV>promedioN){
            if(promedioV>promedioM){
                //console.log("Quien tiene el mayor promedio es el turno vespertino");
                promedioMayor=promedioV;
                console.log(promedioMayor)
            }
        }
    //console.log("El promedio del tercer grupo es "+ promedioN +" ");
    alert("El promedio para el turno matutino es: "+promedioM+"\n\ El promedio para el turno Vespertino es: "+promedioV+"\n\ El promedio para el turno nocturno es: "+promedioN+"\n\ El turno con mayor promedio es: "+promedioMayor+"");

}

