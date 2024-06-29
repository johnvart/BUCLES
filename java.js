// 1. Realizar un programa que permita el ingreso de un numero y muestre su tabla de
// multiplicar (Los primeros 10 multiplos).

let valorNumero = 5;
for (let i = 1; i <= 10; i++) {
  console.log(`${valorNumero} x ${i} = ${valorNumero * i}`);
}

// 2. Realizar un programa que permita el ingreso de numeros los cuales se tienen que ir
// acumulando. El ingreso de datos terminara cuando el usuario ingrese un valor 0.

let entrada = 0;
let numero;

do {
  numero = parseInt(prompt("Ingrese un valor"));
  ingreso += numero;
} while (numero !== 0);

console.log(`el resultado de La suma de  es: ${entrada}`);

// 3. Realizar en juego de adivinar el numero del los ejercicios del tema anterior

let adivinarNumero = Math.floor(Math.random() * 100) + 1;
console.log(adivinarNumero);
let intentos = 0;
let nuemroIncorporado;
do {
  nuemroIncorporado = parseInt(prompt("colocar un nuero del 1 al 100"));
  intentos++;
  if (nuemroIncorporado > adivinarNumero) {
    console.log("El numero colocado es mayor porfavor vuelve a intentarlo");
  } else if (nuemroIncorporado < adivinarNumero) {
    console.log("El numero colocado es menor porfavor  intenta de nuevo");
  }
} while (nuemroIncorporado !== adivinarNumero);
console.log(`Ganaste, felicidades  ${intentos}`);

// 4. Realizar un programa que permita decir si un numero es primo.

function esPrimo(numerop) {
  if (numerop <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.floor(numerop / 2); i++) {
    if (numerop % i === 0) {
      return false;
    }
  }
  return true;
}
console.log(esPrimo(29)); // Output: true
console.log(esPrimo(50)); // Output: fals

// 5. Realizar un programa que permita dado un numero, mostrar todos sus divisores.

function verDivisores(numerop) {
  if (numerop <= 1) {
    return false;
  }
  console.log(`Divisores ${numerop}`);
  for (let i = 1; i <= numerop; i++) {
    if (numerop % i === 0) {
      console.log(i);
    }
  }
}
console.log(verDivisores(50));

// 6. Dado un array de 10 elementos, realizar un programa que recorra ese array y
// muestre un mensaje por consola con cada uno de los elementos del array.

let arreglo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function conteo(arregl) {
  for (let inicio = 0; inicio < arregl.length; inicio++) {
    console.log(arregl[inicio]);
  }
}
conteo(arreglo);

// 7. Dado un array de 10 numeros, realizar un programa que muestre por consola el
// doble de cada uno de los elementos.

let arregloOne = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function condoble(arre) {
  for (let inicio = 0; inicio < arre.length; inicio++) {
    console.log(arre[inicio] * 2);
  }
}
condoble(arregloOne);

// 8. Dado un array con al menos 5 objetos comprendidos por un grupo familiar

let famvargas = [
  {
    Nombre: "john",
    Apellidos: "vargasTorres",
    Edad: "38",
    Ocupacion: "domiciliario",
  },
  {
    Nombre: "adela",
    Apellidos: "torres",
    Edad: "64",
    Ocupacion: "amaDeCasa",
  },
  {
    Nombre: "orlando",
    Apellidos: "vargas",
    Edad: "70",
    Ocupacion: "construccion",
  },
  {
    Nombre: "sandra",
    Apellidos: "vargas",
    Edad: "42",
    Ocupacion: "callCenter",
  },
  {
    Nombre: "liz",
    Apellidos: "vargas",
    Edad: "40",
    Ocupacion: "secretaria",
  },
];
function Familia(famvargas) {
  console.log("mi familia:");

  // ejecutar el arreglo de los familiares
  for (let persona of famvargas) {
    console.log(
      `Hola, soy ${persona.Nombre}, tengo ${persona.Edad} años, y trabajo como ${persona.Ocupacion}.`
    );
  }
}
datosDeFamili(famvargas);

// 9. Dado un array de 10 numeros, realizar un programa que recorra el array y solo
// muestre los numeros impares.

let arregloTwo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function contimp(arg) {
  for (let inicio = 0; inicio < ar.length; inicio++) {
    if (arg[inicio] % 2 !== 0) {
      console.log(arg[inicio]);
    }
  }
}
contimp(arregloTwo);

// 10. Realizar un programa que permita la entrada de numeros y calcule la suma de los
// numeros pares por un lado y los impares por otro, el ingreso de dato finaliza cuando
// el usuario ingresa un 0.

function calsumas() {
  let sumpares = 0;
  let sumimpares = 0;
  while (true) {
    let numero1 = parseInt(prompt("Ingrese su numero"));

    if (numero1 === 0) {
      break;
    }
    if (numero1 % 2 === 0) {
      sumpares += numero1;
    } else {
      sumimpares += numero1;
    }
    console.log(`Suma de valores pares: ${sumpares}`);
    console.log(`Suma de valores impares: ${sumimpares}`);
  }
}
calsumas();

// 11. Dado un array de 10 numeros, realizar un programa que imprima por pantalla el
// numero mas grande.

let arreglothree = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function maximo(argl) {
  let maxnum = argl[0];
  for (let inicio = 1; inicio < arreglothree.length; inicio++) {
    if (arg[inicio] > maxnum) {
      maxnum = argl[inicio];
    }
  }
  console.log(`El numero mayor es: ${maxnum}`);
}
maximo(arreglothree);

// 12. Dado un array de 10 numeros, realizar un programa que imprima por pantalla el
// numero mas chico.

let arreglofour = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function minimo(args) {
  let minnum = args[0];
  for (let inicio = 1; inicio < arreglofour.length; inicio++) {
    if (args[inicio] < minnum) {
      minnum = args[inicio];
    }
  }
  console.log(`El  menor numero es: ${minnum}`);
}
minimo(arreglofour);

// 13. Realizar un programa que permita jugar a piedra papel o tijeras, se debera poder
// ingresar los nombres de 2 jugadores.

function ajugar() {
  let jugador1 = prompt(" Jugador 1 ingresa tu nombre");
  let jugador2 = prompt(" Jugador 2 ingrese tu nombre");
  console.log(`inicia el juego j1vsj2 ${jugador1} y ${jugador2}!\n`);
  while (true) {
    let jugada1 = prompt(`${jugador1}, elige Piedra, Papel o Tijeras:`);
    let jugada2 = prompt(`${jugador2}, elige Piedra, Papel o Tijeras:`);

    if (jugada1 === jugada2) {
      console.log("Empate");
      continue;
    } else if (
      (jugada1 === "Piedra" && jugada2 === "Tijeras") ||
      (jugada1 === "Papel" && jugada2 === "Piedra") ||
      (jugada1 === "Tijeras" && jugada2 === "Papel")
    ) {
      console.log(`¡${jugador1} es el ganador del juego`);
      break;
    } else {
      console.log(`¡${jugador2} es el ganador del juego`);
      break;
    }
  }
}
ajugar();

// 14. Realizar un programa que imprima por consola un triangulo de 5 asteriscos de lado

let lado = 5;

for (let inicio = 1; inicio <= lado; inicio++) {
  let linea = "";

  for (let j1 = 1; j1 <= lado - inicio; j1++) {
    linea += " ";
  }
  for (let j2 = 1; j2 <= inicio * 2 - 1; j2++) {
    linea += "*";
  }
  console.log(linea);
}

// 15. Realizar un programa que imprima por consola un triangulo de 5 asteriscos de lado
// pero invertido.

let lado1 = 5;

for (let inicio = ladoOne; inicio >= 1; inicio--) {
  let lineaOne = "";

  for (let j1 = 1; j1 <= ladoOne - inicio; j1++) {
    lineaOne += " ";
  }
  for (let j2 = 1; j2 <= inicio * 2 - 1; j2++) {
    lineaOne += "*";
  }
  console.log(lineaOne);
}