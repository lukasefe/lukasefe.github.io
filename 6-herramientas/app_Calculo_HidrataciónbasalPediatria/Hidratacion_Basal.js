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
    let calcular = document.querySelector(".calculo");//valor del boton de calculo para realizar la operacion y gatillar la funcion
    console.log(calcular);
    let resultado = document.querySelector(".respuesta");//valores de la estructura HTML que vamos a sobreescribir
    console.log(resultado);
    let difol = document.querySelector(".texto__respuesta");//valor de la estrutura HTML por defecto que tenemos
    console.log(difol);
    let borrar = document.querySelector(".borrar");//valor del boton de borra y actualizar pagina despues de realizar la funcion de calculadora.
    console.log(borrar);
    
     let peso__indicado = Number(peso);//convierte el valor de el label en un valor tipo numerico



        difol.remove(); //remueve el valor de <p> para sobreescribirlo
        calcular.style.display = "none";//Con esto se esconde el boton de calculo una vez ejecutada la funcion
        borrar.style.display = "initial";//Con esto se visualiza el boton de borrar una vez realizada la funcion

    
        if (peso__indicado <= 10){
            let formula1 = peso__indicado * 100;
            let perfusion = formula1 / 24
            function hasta10kg(){
                let info = //imprime en pantalla los resultados
            '<div class="operacion__contenedor">\
                 <p class="valor">El requerimiento Hidrico del paciente en 24hs es de: <b class="color">'+formula1+'</b>.</p>\
                 <p class="valor">Con una perfusión de: '+perfusion+' ml/hs</p>\
            </div>'
            resultado.innerHTML += info;//sobreescribimos <p> con el valor anterior para visualizar los resultados
            //OBTENEMOS EL ELEMENTO DEL BOTON BORRAR Y LO VISUALIZAMOS EN CONSOLA
            //EVENTO AL HACER CLICK EN EL BOTON BORRAR RESTABLECE EL ELEMENTO <P> ORGINAL.
            borrar.addEventListener('click', function(e){
                window.location.reload();//recargamos pagina cuando le damos click al boton borrar.
            });
            }
            hasta10kg();
        } else if(peso__indicado > 10){
            
            function pesos (){
                if (peso__indicado >= 11 && peso__indicado < 12){
                    let kg11 = 1050;
                    return kg11
                } else if (peso__indicado >= 12 && peso__indicado < 13){
                    let kg12 = 1100;
                    return kg12;
                } else if (peso__indicado >= 13 && peso__indicado < 14){
                    let kg12 = 1150;
                    return kg12;
                } else if (peso__indicado >= 14 && peso__indicado < 15){
                    let kg12 = 1200;
                    return kg12;
                } else if (peso__indicado >= 15 && peso__indicado < 16){
                    let kg12 = 1250;
                    return kg12;
                } else if (peso__indicado >= 16 && peso__indicado < 17){
                    let kg12 = 1300;
                    return kg12;
                } else if (peso__indicado >= 17 && peso__indicado < 18){
                    let kg12 = 1350;
                    return kg12;
                } else if (peso__indicado >= 18 && peso__indicado < 19){
                    let kg12 = 1400;
                    return kg12;
                } else if (peso__indicado >= 19 && peso__indicado < 20){
                    let kg12 = 1450;
                    return kg12;
                } else if (peso__indicado >= 20 && peso__indicado < 21){
                    let kg12 = 1500;
                    return kg12;
                } else if (peso__indicado >= 21 && peso__indicado < 22){
                    let kg = 1520;
                    return kg;
                } else if (peso__indicado >= 22 && peso__indicado < 23){
                    let kg = 1540;
                    return kg;
                } else if (peso__indicado >= 23 && peso__indicado < 24){
                    let kg = 1560;
                    return kg;
                } else if (peso__indicado >= 24 && peso__indicado < 25){
                    let kg = 1580;
                    return kg;
                } else if (peso__indicado >= 25 && peso__indicado < 26){
                    let kg = 1600;
                    return kg;
                } else if (peso__indicado >= 26 && peso__indicado < 27){
                    let kg = 1620;
                    return kg;
                } else if (peso__indicado >= 27 && peso__indicado < 28){
                    let kg = 1640;
                    return kg;
                } else if (peso__indicado >= 28 && peso__indicado < 29){
                    let kg = 1660;
                    return kg;
                } else if (peso__indicado >= 29 && peso__indicado < 30){
                    let kg = 1680;
                    return kg;
                } else if (peso__indicado = 30){
                    let kg = 1700;
                    return kg;
                } else {
                    let calculo_superficie_1= (peso__indicado*4) + 7;// primer paso del calculo de las perdidas insensibles
                    let calculo_superficie_2= peso__indicado + 90;//segundo paso del calculo de las perdidas insensibles
                    let resultado__total = calculo_superficie_1 / calculo_superficie_2 // calculo final de las perdidas insensibles
                    console.log(resultado__total)//imprimir en consola el valor
                    let total = resultado__total * 400 // multiplicamos el valor de las perdidas por 400 para llegar al resultado real
                    console.log(total)// imprimimos en consola el valor del calculo real de las perdidas insensibles
                    return total
                }
            }
            let mililitros = pesos()
            console.log(mililitros)
            let perfusion = mililitros / 24
            console.log(perfusion)

            function resultadofinal(){
                let info = //imprime en pantalla los resultados
            '<div class="operacion__contenedor">\
                 <p class="valor">El requerimiento Hidrico del paciente en 24hs es de: <b class="color">'+pesos()+'ml</b>.</p>\
                 <p class="valor">Con una perfusión de: '+(perfusion).toFixed(2)+' ml/hs</p>\
            </div>'
            resultado.innerHTML += info;//sobreescribimos <p> con el valor anterior para visualizar los resultados
            //OBTENEMOS EL ELEMENTO DEL BOTON BORRAR Y LO VISUALIZAMOS EN CONSOLA
            //EVENTO AL HACER CLICK EN EL BOTON BORRAR RESTABLECE EL ELEMENTO <P> ORGINAL.
            borrar.addEventListener('click', function(e){
                window.location.reload();//recargamos pagina cuando le damos click al boton borrar.
            });
            }
            resultadofinal();
        
    }
})


