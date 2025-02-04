//Manejo del escritorio

document.addEventListener("DOMContentLoaded", function () {
  const botonInicio = document.getElementById("inicio");
  const menu = document.getElementById("contenedorIconos");

  if (botonInicio && menu) {
    botonInicio.addEventListener("click", function (event) {
      event.stopPropagation(); // Evita que el clic se propague al documento
      menu.classList.toggle("contenedorIconosVisible");
    });

    document.addEventListener("click", function () {
      if (menu.classList.contains("contenedorIconosVisible")) {
        menu.classList.remove("contenedorIconosVisible");
      }
    });

    // Evitar que los clics dentro del menú lo cierren
    menu.addEventListener("click", function (event) {
      event.stopPropagation();
    });
  } else {
    console.error("Elementos no encontrados");
  }
});

// Lista de Algoritmos
// 1  -  Escribir  una  función  que  determine  si  un  número  es  par  o impar.
function openEvenSteven() {
  return `
  <div class="encabezado">
      <div class="titulo">
        <p>1 - Determinadora de numeros pares o impares</p>
      </div>
      <div class="botonera">
        <button class="botoncito" id="cerrar">x</button>
      </div>
    </div>
    <div class="cuerpo">
      <form id="parImparForm">
        <label for="inputOne"></label>
        <input
          type="text"
          id="inputOne"
          name="numero"
          placeholder="Ingrese un número"
        />
        <button type="submit" id="botonEnviar">Enviar</button>
      </form>
      <p id="respuesta"></p>
    </div>`;
}

document.addEventListener("DOMContentLoaded", function () {
  const menu = document.getElementById("contenedorIconos");
  const ventana = document.getElementById("ventana");
  manejadora();

  function manejadora() {
    let iconos = document.getElementsByClassName("icono");
    for (let i = 0; i < iconos.length; i++) {
      iconos[i].addEventListener("click", function () {
        menu.classList.remove("contenedorIconosVisible");
        menu.classList.add("contenedorIconos");
        ventana.innerHTML = openEvenSteven(); //¿Como hago para que el bombre de "nombrePrograma" sea el de la función que ejecuta?
        document
          .getElementById("cerrar")
          .addEventListener("click", function () {
            ventana.innerHTML = "";
          });
        let nombrePrograma = this.id;
        console.log(nombrePrograma);
      });
    }
  }

  document
    .getElementById("parImparForm")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      let valor = document.getElementById("inputOne").value;
      let respuesta = document.getElementById("respuesta");
      respuesta.innerHTML = parImpar(valor);
    });
  function parImpar(numero) {
    if (numero % 2 === 0) {
      return `El numero ${numero} es par`;
    } else {
      return `El numero ${numero} 
    no es par`;
    }
  }
});
// 2 - Crear un algoritmo que invierta un string.
//Función que pinta en el HTML
function openReverseWizard() {
  return `
  <div class="encabezado">
      <div class="titulo">
        <p>Reverse Wizard</p>
      </div>
      <div class="botonera">
        <button class="botoncito" id="cerrar">x</button>
      </div>
    </div>
    <div class="cuerpo">
      <form id="parImparForm">
        <label for="inputOne"></label>
        <input
          type="text"
          id="inputOne"
          name="numero"
          placeholder="Ingrese un número"
        />
        <button type="submit" id="botonEnviar">Enviar</button>
      </form>
      <p id="respuesta"></p>
    </div>`;
}
//Codigo que maneja la ventana, los clicks y esas movidas
document.addEventListener("DOMContentLoaded", function () {
  const reverseWizard = document.getElementById("ReverseWizard-Boton");
  const menu = document.getElementById("contenedorIconos");
  const ventana = document.getElementById("ventana");

  reverseWizard.addEventListener("click", function () {
    menu.classList.remove("contenedorIconosVisible");
    menu.classList.add("contenedorIconos");
    ventana.innerHTML = openEvenSteven();

    // Ahora añadimos los event listeners después de crear el contenido
    document.getElementById("cerrar").addEventListener("click", function () {
      ventana.innerHTML = "";
    });

    document
      .getElementById("parImparForm")
      .addEventListener("submit", function (event) {
        event.preventDefault();
        let valor = document.getElementById("inputOne").value;
        let respuesta = document.getElementById("respuesta");
        respuesta.innerHTML = parImpar(valor);
      });
  });
});
//El algoritmo
function delReves(string) {
  let invertericion = string.split("").reverse().join("");
  return invertericion;

  //hay un metodo que convierte string en array: split()
  //hay un metodo que invierte el orden de un array: reverse()
  //hay un metodo que convierte array en string: join()
}

// 3  -  Escribir  una  función  que  encuentre  el  número  mayor  en  un array.
function openMaxFinder() {
  return `
  <div class="encabezado">
      <div class="titulo">
        <p>MaxFinder</p>
      </div>
      <div class="botonera">
        <button class="botoncito" id="cerrar">x</button>
      </div>
    </div>
    <div class="cuerpo">
      <form id="parImparForm">
        <label for="inputOne"></label>
        <input
          type="text"
          id="inputOne"
          name="numero"
          placeholder="Ingrese un número"
        />
        <button type="submit" id="botonEnviar">Enviar</button>
      </form>
      <p id="respuesta"></p>
    </div>`;
}
//Codigo que maneja la ventana, los clicks y esas movidas
document.addEventListener("DOMContentLoaded", function () {
  const icono = document.getElementById("MaxFinder-Boton");
  const menu = document.getElementById("contenedorIconos");
  const ventana = document.getElementById("ventana");

  icono.addEventListener("click", function () {
    menu.classList.remove("contenedorIconosVisible");
    menu.classList.add("contenedorIconos");
    ventana.innerHTML = openMaxFinder();

    // Ahora añadimos los event listeners después de crear el contenido
    document.getElementById("cerrar").addEventListener("click", function () {
      ventana.innerHTML = "";
    });

    document
      .getElementById("parImparForm")
      .addEventListener("submit", function (event) {
        event.preventDefault();
        let valor = document.getElementById("inputOne").value;
        let respuesta = document.getElementById("respuesta");
        respuesta.innerHTML = parImpar(valor);
      });
  });
});

// 4 - Crear un algoritmo que devuelva el factorial de un número.
function openFactorialFactory() {
  return `
  <div class="encabezado">
      <div class="titulo">
        <p>FactorialFactory</p>
      </div>
      <div class="botonera">
        <button class="botoncito" id="cerrar">x</button>
      </div>
    </div>
    <div class="cuerpo">
      <form id="parImparForm">
        <label for="inputOne"></label>
        <input
          type="text"
          id="inputOne"
          name="numero"
          placeholder="Ingrese un número"
        />
        <button type="submit" id="botonEnviar">Enviar</button>
      </form>
      <p id="respuesta"></p>
    </div>`;
}
//Codigo que maneja la ventana, los clicks y esas movidas
document.addEventListener("DOMContentLoaded", function () {
  const icono = document.getElementById("FactorialFactory-Boton");
  const menu = document.getElementById("contenedorIconos");
  const ventana = document.getElementById("ventana");

  icono.addEventListener("click", function () {
    menu.classList.remove("contenedorIconosVisible");
    menu.classList.add("contenedorIconos");
    ventana.innerHTML = openFactorialFactory();

    // Ahora añadimos los event listeners después de crear el contenido
    document.getElementById("cerrar").addEventListener("click", function () {
      ventana.innerHTML = "";
    });

    document
      .getElementById("parImparForm")
      .addEventListener("submit", function (event) {
        event.preventDefault();
        let valor = document.getElementById("inputOne").value;
        let respuesta = document.getElementById("respuesta");
        respuesta.innerHTML = parImpar(valor);
      });
  });
});
// 5 - Determinar si una palabra es un palíndromo.

function openPalindromePal() {
  return `
  <div class="encabezado">
      <div class="titulo">
        <p>PalindromePal</p>
      </div>
      <div class="botonera">
        <button class="botoncito" id="cerrar">x</button>
      </div>
    </div>
    <div class="cuerpo">
      <form id="parImparForm">
        <label for="inputOne"></label>
        <input
          type="text"
          id="inputOne"
          name="numero"
          placeholder="Ingrese un número"
        />
        <button type="submit" id="botonEnviar">Enviar</button>
      </form>
      <p id="respuesta"></p>
    </div>`;
}
//Codigo que maneja la ventana, los clicks y esas movidas
document.addEventListener("DOMContentLoaded", function () {
  const icono = document.getElementById("PalindromePal-Boton");
  const menu = document.getElementById("contenedorIconos");
  const ventana = document.getElementById("ventana");

  icono.addEventListener("click", function () {
    menu.classList.remove("contenedorIconosVisible");
    menu.classList.add("contenedorIconos");
    ventana.innerHTML = openPalindromePal();

    // Ahora añadimos los event listeners después de crear el contenido
    document.getElementById("cerrar").addEventListener("click", function () {
      ventana.innerHTML = "";
    });

    document
      .getElementById("parImparForm")
      .addEventListener("submit", function (event) {
        event.preventDefault();
        let valor = document.getElementById("inputOne").value;
        let respuesta = document.getElementById("respuesta");
        respuesta.innerHTML = parImpar(valor);
      });
  });
});

function esPalindromo(palabra) {
  if (palabra === palabra.split("").reverse()) {
    return "Es palindromo";
  } else {
    return "No es palindromo";
  }
}

// 6  -  Crear  un  programa  que  calcule  el  número  Fibonacci  en  la posición (n).
function openFiboGen() {
  return `
  <div class="encabezado">
      <div class="titulo">
        <p>FiboGen</p>
      </div>
      <div class="botonera">
        <button class="botoncito" id="cerrar">x</button>
      </div>
    </div>
    <div class="cuerpo">
      <form id="parImparForm">
        <label for="inputOne"></label>
        <input
          type="text"
          id="inputOne"
          name="numero"
          placeholder="Ingrese un número"
        />
        <button type="submit" id="botonEnviar">Enviar</button>
      </form>
      <p id="respuesta"></p>
    </div>`;
}
//Codigo que maneja la ventana, los clicks y esas movidas
document.addEventListener("DOMContentLoaded", function () {
  const icono = document.getElementById("FiboGen-Boton");
  const menu = document.getElementById("contenedorIconos");
  const ventana = document.getElementById("ventana");

  icono.addEventListener("click", function () {
    menu.classList.remove("contenedorIconosVisible");
    menu.classList.add("contenedorIconos");
    ventana.innerHTML = openFiboGen();

    // Ahora añadimos los event listeners después de crear el contenido
    document.getElementById("cerrar").addEventListener("click", function () {
      ventana.innerHTML = "";
    });

    document
      .getElementById("parImparForm")
      .addEventListener("submit", function (event) {
        event.preventDefault();
        let valor = document.getElementById("inputOne").value;
        let respuesta = document.getElementById("respuesta");
        respuesta.innerHTML = parImpar(valor);
      });
  });
});

// 7 - Ordenar un array de números en orden ascendente (sin usar sort).
function openSortItOut() {
  return `
  <div class="encabezado">
      <div class="titulo">
        <p>SortItOut</p>
      </div>
      <div class="botonera">
        <button class="botoncito" id="cerrar">x</button>
      </div>
    </div>
    <div class="cuerpo">
      <form id="parImparForm">
        <label for="inputOne"></label>
        <input
          type="text"
          id="inputOne"
          name="numero"
          placeholder="Ingrese un número"
        />
        <button type="submit" id="botonEnviar">Enviar</button>
      </form>
      <p id="respuesta"></p>
    </div>`;
}
//Codigo que maneja la ventana, los clicks y esas movidas
document.addEventListener("DOMContentLoaded", function () {
  const icono = document.getElementById("SortItOut-Boton");
  const menu = document.getElementById("contenedorIconos");
  const ventana = document.getElementById("ventana");

  icono.addEventListener("click", function () {
    menu.classList.remove("contenedorIconosVisible");
    menu.classList.add("contenedorIconos");
    ventana.innerHTML = openSortItOut();

    // Ahora añadimos los event listeners después de crear el contenido
    document.getElementById("cerrar").addEventListener("click", function () {
      ventana.innerHTML = "";
    });

    document
      .getElementById("parImparForm")
      .addEventListener("submit", function (event) {
        event.preventDefault();
        let valor = document.getElementById("inputOne").value;
        let respuesta = document.getElementById("respuesta");
        respuesta.innerHTML = parImpar(valor);
      });
  });
});
// 8
function openCharCounter() {
  return `
  <div class="encabezado">
      <div class="titulo">
        <p>CharCounter</p>
      </div>
      <div class="botonera">
        <button class="botoncito" id="cerrar">x</button>
      </div>
    </div>
    <div class="cuerpo">
      <form id="parImparForm">
        <label for="inputOne"></label>
        <input
          type="text"
          id="inputOne"
          name="numero"
          placeholder="Ingrese un número"
        />
        <button type="submit" id="botonEnviar">Enviar</button>
      </form>
      <p id="respuesta"></p>
    </div>`;
}
// 8  -  Crear  una  función  que  cuente  cuántas  veces  aparece  un carácter en un string.
function openLeapYearChecker() {
  return `
  <div class="encabezado">
      <div class="titulo">
        <p>LeapYearChecker</p>
      </div>
      <div class="botonera">
        <button class="botoncito" id="cerrar">x</button>
      </div>
    </div>
    <div class="cuerpo">
      <form id="parImparForm">
        <label for="inputOne"></label>
        <input
          type="text"
          id="inputOne"
          name="numero"
          placeholder="Ingrese un número"
        />
        <button type="submit" id="botonEnviar">Enviar</button>
      </form>
      <p id="respuesta"></p>
    </div>`;
}
// 9 - Escribir un algoritmo que determine si un año es bisiesto.
function openTempSwitch() {
  return `
  <div class="encabezado">
      <div class="titulo">
        <p>TempSwitch</p>
      </div>
      <div class="botonera">
        <button class="botoncito" id="cerrar">x</button>
      </div>
    </div>
    <div class="cuerpo">
      <form id="parImparForm">
        <label for="inputOne"></label>
        <input
          type="text"
          id="inputOne"
          name="numero"
          placeholder="Ingrese un número"
        />
        <button type="submit" id="botonEnviar">Enviar</button>
      </form>
      <p id="respuesta"></p>
    </div>`;
}
// 10 - Crear un programa que convierta grados Celsius a Fahrenheit y viceversa.
function openSecondBest() {
  return `
  <div class="encabezado">
      <div class="titulo">
        <p>SecondBest</p>
      </div>
      <div class="botonera">
        <button class="botoncito" id="cerrar">x</button>
      </div>
    </div>
    <div class="cuerpo">
      <form id="parImparForm">
        <label for="inputOne"></label>
        <input
          type="text"
          id="inputOne"
          name="numero"
          placeholder="Ingrese un número"
        />
        <button type="submit" id="botonEnviar">Enviar</button>
      </form>
      <p id="respuesta"></p>
    </div>`;
}
// 11 - Encontrar el segundo número más grande en un array.
function openDuplicateDestroyer() {
  return `
  <div class="encabezado">
      <div class="titulo">
        <p>DuplicateDestroyer</p>
      </div>
      <div class="botonera">
        <button class="botoncito" id="cerrar">x</button>
      </div>
    </div>
    <div class="cuerpo">
      <form id="parImparForm">
        <label for="inputOne"></label>
        <input
          type="text"
          id="inputOne"
          name="numero"
          placeholder="Ingrese un número"
        />
        <button type="submit" id="botonEnviar">Enviar</button>
      </form>
      <p id="respuesta"></p>
    </div>`;
}
// 12 - Escribir una función que elimine los elementos duplicados de un array.
function openArrayAdder() {
  return `
  <div class="encabezado">
      <div class="titulo">
        <p>ArrayAdder</p>
      </div>
      <div class="botonera">
        <button class="botoncito" id="cerrar">x</button>
      </div>
    </div>
    <div class="cuerpo">
      <form id="parImparForm">
        <label for="inputOne"></label>
        <input
          type="text"
          id="inputOne"
          name="numero"
          placeholder="Ingrese un número"
        />
        <button type="submit" id="botonEnviar">Enviar</button>
      </form>
      <p id="respuesta"></p>
    </div>`;
}
// 13 - Crear un algoritmo que sume todos los números de un array. 14  -  Escribir  un  programa  que  verifique  si  dos  strings  son anagramas.
function openAnagramAnalyzer() {
  return `
  <div class="encabezado">
      <div class="titulo">
        <p>AnagramAnalyzer</p>
      </div>
      <div class="botonera">
        <button class="botoncito" id="cerrar">x</button>
      </div>
    </div>
    <div class="cuerpo">
      <form id="parImparForm">
        <label for="inputOne"></label>
        <input
          type="text"
          id="inputOne"
          name="numero"
          placeholder="Ingrese un número"
        />
        <button type="submit" id="botonEnviar">Enviar</button>
      </form>
      <p id="respuesta"></p>
    </div>`;
}
// 15 - Crear un programa que devuelva los números primos hasta el número (n).
function openPrimeTime() {
  return `
  <div class="encabezado">
      <div class="titulo">
        <p>PrimeTime</p>
      </div>
      <div class="botonera">
        <button class="botoncito" id="cerrar">x</button>
      </div>
    </div>
    <div class="cuerpo">
      <form id="parImparForm">
        <label for="inputOne"></label>
        <input
          type="text"
          id="inputOne"
          name="numero"
          placeholder="Ingrese un número"
        />
        <button type="submit" id="botonEnviar">Enviar</button>
      </form>
      <p id="respuesta"></p>
    </div>`;
}
// 16  -  Escribir  una  función  que  convierta  un  número  romano  a número arábigo.
function openRomanToArabic() {
  return `
  <div class="encabezado">
      <div class="titulo">
        <p>RomanToArabic</p>
      </div>
      <div class="botonera">
        <button class="botoncito" id="cerrar">x</button>
      </div>
    </div>
    <div class="cuerpo">
      <form id="parImparForm">
        <label for="inputOne"></label>
        <input
          type="text"
          id="inputOne"
          name="numero"
          placeholder="Ingrese un número"
        />
        <button type="submit" id="botonEnviar">Enviar</button>
      </form>
      <p id="respuesta"></p>
    </div>`;
}
// 17  -  Crear  un  algoritmo  que  valide  si  un  string  tiene  paréntesis balanceados.
function openBalancedBrackets() {
  return `
  <div class="encabezado">
      <div class="titulo">
        <p>BalancedBrackets</p>
      </div>
      <div class="botonera">
        <button class="botoncito" id="cerrar">x</button>
      </div>
    </div>
    <div class="cuerpo">
      <form id="parImparForm">
        <label for="inputOne"></label>
        <input
          type="text"
          id="inputOne"
          name="numero"
          placeholder="Ingrese un número"
        />
        <button type="submit" id="botonEnviar">Enviar</button>
      </form>
      <p id="respuesta"></p>
    </div>`;
}
// 18  -  Crear  un  programa  que  transforme  una  frase  en  "notación hacker" (leet speak).
function openLeetify() {
  return `
  <div class="encabezado">
      <div class="titulo">
        <p>Leetify</p>
      </div>
      <div class="botonera">
        <button class="botoncito" id="cerrar">x</button>
      </div>
    </div>
    <div class="cuerpo">
      <form id="parImparForm">
        <label for="inputOne"></label>
        <input
          type="text"
          id="inputOne"
          name="numero"
          placeholder="Ingrese un número"
        />
        <button type="submit" id="botonEnviar">Enviar</button>
      </form>
      <p id="respuesta"></p>
    </div>`;
}
// 19 - Dado un año como parámetro (número), devuelve el número del siglo al que pertenece.
function openCenturyCalculator() {
  return `
  <div class="encabezado">
      <div class="titulo">
        <p>CenturyCalculator</p>
      </div>
      <div class="botonera">
        <button class="botoncito" id="cerrar">x</button>
      </div>
    </div>
    <div class="cuerpo">
      <form id="parImparForm">
        <label for="inputOne"></label>
        <input
          type="text"
          id="inputOne"
          name="numero"
          placeholder="Ingrese un número"
        />
        <button type="submit" id="botonEnviar">Enviar</button>
      </form>
      <p id="respuesta"></p>
    </div>`;
}
// 20 - Un reloj muestra:
// -> la hora (0 <= h <= 23)
// -> los minutos (0 <= m <= 59)
// -> y los segundos (0 <= s <= 59).
// Escribe una funcion que calcule los millisegundos que han pasadodesde  media  noche  00:00:00  hasta  la  hora  actual  teniendo  en cuenta que:
// –  Hay 1000 millisegundos en un segundo
// –    Podemos obtener la hora, minutos y segundos con la función "getTime"
