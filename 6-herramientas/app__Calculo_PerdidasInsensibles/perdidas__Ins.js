//Fernandez Lucas Eduardo
//Lic. en enfermeria - Web Developer
//Enero de 2024
//todos los derechos reservados.
//CALCULADORA SIMPLE DE PERDIDAS INSENSIBLES.
//Tel: +54(0351) - 15 - 6207238
//Wsp: 351 - 6207238
//Email: Lukasfernandez22@gmail.com
//Realizado para el servicio de enfermeria del HIM, ciudad de Cordoba, Cordoba, Argentina.


//con esta variable seleccionamos los elementos del formulario
const perdidas = document.getElementById("perdidas");

//agregamos un eventos que se activa al enviar los datos con el boton calcular
perdidas.addEventListener("submit", function(e){
    e.preventDefault();  //evitamos que la pagina se recargue cada vez

    //OBTENEMOS TODOS LOS DATOS DE LOS ELEMENTOS EN VARIABLES
    let peso = document.getElementById("peso").value;//dato del input de el peso del paciente
    console.log(peso);
    let horas = document.getElementById("hs").value;//dato del input de las horas que requerimos
    console.log(hs);
    let calcular = document.querySelector(".calculo");//valor del boton de calculo para realizar la operacion y gatillar la funcion
    console.log(calcular);
    let resultado = document.querySelector(".respuesta");//valores de la estructura HTML que vamos a sobreescribir
    console.log(resultado);
    let difol = document.querySelector(".texto__respuesta");//valor de la estrutura HTML por defecto que tenemos
    console.log(difol);
    let borrar = document.querySelector(".borrar");//valor del boton de borra y actualizar pagina despues de realizar la funcion de calculadora.
    console.log(borrar);
    
    let peso__indicado = Number(peso);//convierte el valor de el label en un valor tipo numerico

     let calculo_superficie_1= (peso__indicado*4) + 7;// primer paso del calculo de las perdidas insensibles
     let  calculo_superficie_2= peso__indicado + 90;//segundo paso del calculo de las perdidas insensibles
     let resultado__total = calculo_superficie_1 / calculo_superficie_2 // calculo final de las perdidas insensibles
     console.log(resultado__total)//imprimir en consola el valor
     let cal = (resultado__total).toFixed(2)// con esto disminuimos a 2 decimales el valor de las perdidas insensibles
     let total = resultado__total * 400 // multiplicamos el valor de las perdidas por 400 para llegar al resultado real
     console.log(total)// imprimimos en consola el valor del calculo real de las perdidas insensibles
    

        difol.remove(); //remueve el valor de <p> para sobreescribirlo
        calcular.style.display = "none";//Con esto se esconde el boton de calculo una vez ejecutada la funcion
        borrar.style.display = "initial";//Con esto se visualiza el boton de borrar una vez realizada la funcion

        function calculadora(){
            let en1hs = (total / 24).toFixed(2); // divide las perdidas totales en 24hs para llegar a un valor horario
            let calculo = en1hs * horas;//multiplica la perdida insensible por las horas necesarias ingresadas
            let info = //imprime en pantalla los resultados
            '<div class="operacion__contenedor">\
                 <p class="valor">La Superficie Corporal cm2 es de: <b class="color">'+cal+'</b>.</p>\
                 <p class="valor">Las perdidas insensibles del/la paciente:</p>\
                 <p class="valor">En '+horas+'hs es de: <b class="color">'+Math.round(calculo)+'</b>.</p>\
            </div>'
            resultado.innerHTML += info;//sobreescribimos <p> con el valor anterior para visualizar los resultados
            //OBTENEMOS EL ELEMENTO DEL BOTON BORRAR Y LO VISUALIZAMOS EN CONSOLA
            //EVENTO AL HACER CLICK EN EL BOTON BORRAR RESTABLECE EL ELEMENTO <P> ORGINAL.
            borrar.addEventListener('click', function(e){
                window.location.reload();//recargamos pagina cuando le damos click al boton borrar.
            });

        }

        calculadora();//mandamos a llamar a la funcion para que inicie

})


