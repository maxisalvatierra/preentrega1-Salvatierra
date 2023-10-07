let edad = prompt("Ingrese su edad");

//Declarar la edad para ingresar al sitio//

while(edad < 18) {
    alert("Eres menor de edad no puedes ingresar");
     
    edad = prompt("Ingrese su edad");
}

//Saludo al ingresar al sitio//

let nombre = prompt("Ingrese su nombre");

function saludar() {
    alert(`Bienvenido ${nombre} a la Vinoteca`);

}

saludar();

//Declarar las variedad de productos mediante variables//

let vinos = "1-Variedad de Vinos";
let cervezas = "2-Variedad de Cervezas";
let espumantes = "3-Variedad de Espumantes";

function mostrarVariedades (){
    alert("Elegi que variedad quieres ver");

    alert(`
    ${vinos}
    ${cervezas}
    ${espumantes}
    `);
 
}

//iniciar la funcion para mostrar los productos//

mostrarVariedades();

//Declarar las variedades de cervezas// 

let cervezaUno = "Golden";
let cervezaDos = "Negra";
let cervezaTres = "Amber";

//Declarar las variedades de vinos//

let vinoUno = "Tintos";
let vinoDos = "Blancos";
let vinoTres = "Rosado";

//Declarar las variedades de espumantes//

let espumanteUno = "Brut";
let espumanteDos = "Extra Brut";
let espumanteTres = "Dulce";


function mostrarCervezas(){
    alert(`
    ${cervezaUno}
    ${cervezaDos}
    ${cervezaTres}`);

}

function mostrarVinos(){
    alert(`
    ${vinoUno}
    ${vinoDos}
    ${vinoTres}`
    );
}

function mostrarEspumante(){
    alert(`
    ${espumanteUno}
    ${espumanteDos}
    ${espumanteTres}`
    );
}
let eleccion = parseInt(prompt(`
Ingrese el número correspondiente a la pizza que desea comprar:
1. Vinos
2. Cervezas
3. Espumantes`));


while(eleccion != "ESC"){
switch(eleccion){

    case 1:
        mostrarVinos()
        alert("Gracias por su visita, esperamos vuelva pronto")
    break;

    case 2:
        mostrarCervezas()
        alert("Gracias por su visita, esperamos vuelva pronto") 
    break;

    case 3:
        mostrarEspumante()
        alert("Gracias por su visita, esperamos vuelva pronto")
    break;

    default:
        alert("Ingresó una opción incorrecta, vuelva a recargar la pagina.")
        break;

}


break;
}


