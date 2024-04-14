const suma = (num1, num2) => num1 + num2;

const resta = (num1, num2) => num1 - num2;

const multiplicacion = (num1, num2) => num1 * num2;

const division = (num1, num2) => {
  if (num2 === 0) {
    return "Error: No se puede dividir por cero";
  } else {
    return num1 / num2;
  }
}

const esNumero = valor => !isNaN(parseFloat(valor)) && isFinite(valor);

const obtenerOperacion = () => {
  let opcion;
  while (true) {
    opcion = prompt("Ingrese el número de la operación deseada: 1 para suma, 2 para resta, 3 para multiplicacion o 4 para division");
    if (opcion === "1" || opcion === "2" || opcion === "3" || opcion === "4") {
      break;
    } else {
      alert("Opción inválida. Por favor, ingrese una opción válida.");
    }
  }
  return opcion;
}

const obtenerNumero = (mensaje) => {
  let numero;
  while (true) {
    numero = prompt(mensaje);
    if (esNumero(numero)) {
      break;
    } else {
      alert("Error: Por favor, ingrese un número válido.");
    }
  }
  return parseFloat(numero);
}

const calculadora = () => {
  let realizarOtraOperacion = true;

  while (realizarOtraOperacion) {
    const operacion = obtenerOperacion();
    const num1 = obtenerNumero("Ingrese el primer número:");
    const num2 = obtenerNumero("Ingrese el segundo número:");

    let resultado;
    switch (operacion) {
      case "1":
        resultado = suma(num1, num2);
        break;
      case "2":
        resultado = resta(num1, num2);
        break;
      case "3":
        resultado = multiplicacion(num1, num2);
        break;
      case "4":
        resultado = division(num1, num2);
        break;
    }

    alert("El resultado de la operación es: " + resultado);

    const continuar = confirm("¿Desea realizar otra operación?");
    if (!continuar) {
      realizarOtraOperacion = false;
      alert("Gracias por usar mi calculadora hecha con amor");
    }
  }
}

calculadora();