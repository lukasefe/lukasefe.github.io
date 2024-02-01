
//con esta variable seleccionamos los elementos del formulario
const perdidas = document.getElementById("perdidas");

//agregamos un eventos que se activa al enviar los datos con el boton calcular
perdidas.addEventListener("submit", function(e){
    e.preventDefault();  //evitamos que la pagina se recargue cada vez

    //OBTENEMOS TODOS LOS DATOS DE LOS ELEMENTOS EN VARIABLES
    let peso = document.getElementById("peso").value;
    console.log(peso);
    let calcular = document.querySelector(".calculo");
    console.log(calcular);
    let resultado = document.querySelector(".respuesta");
    console.log(resultado);
    let difol = document.querySelector(".texto__respuesta");
    console.log(difol);
    let borrar = document.querySelector(".borrar");
    console.log(borrar);
    
    let pagina__original = resultado.innerHTML;
    console.log(pagina__original);
    let peso__indicado = Number(peso);

     let calculo_superficie_1= (peso__indicado*4) + 7;
     let  calculo_superficie_2= peso__indicado + 90;
     let resultado__total = (calculo_superficie_1 / calculo_superficie_2).toFixed(2);
     console.log(resultado__total)
     


        difol.remove();
        calcular.style.display = "none";
        borrar.style.display = "initial";

if (resultado__total >= 0.10 && resultado__total <= 0.13){
         
        let perdida = 40;
        let en12hs = perdida / 2;
        let en8hs = (perdida / 3).toFixed(2);
        let en4hs = (perdida / 6).toFixed(2);
        let en2hs = (perdida / 12).toFixed(2);
        let en1hs = (perdida / 24).toFixed(2);

        let info = 
            '<div class="operacion__contenedor">\
                <p class="valor">La Superficie Corporal cm2 es de: <b class="color">'+resultado__total+'</b>.</p>\
                <p class="valor">Las perdidas insensibles de la paciente:</p>\
                <p class="valor">En 24hs es de: <b class="color">'+perdida+'</b>.</p>\
                <p class="valor">En 12hs es de: <b class="color">'+en12hs+'</b>.</p>\
                <p class="valor">En 08hs es de: <b class="color">'+en8hs+'</b>.</p>\
                <p class="valor">En 04hs es de: <b class="color">'+en4hs+'</b>.</p>\
                <p class="valor">En 02hs es de: <b class="color">'+en2hs+'</b>.</p>\
                <p class="valor">En 01hs es de: <b class="color">'+en1hs+'</b>.</p>\
            </div>'
            resultado.innerHTML += info;
            //OBTENEMOS EL ELEMENTO DEL BOTON BORRAR Y LO VISUALIZAMOS EN CONSOLA
            //EVENTO AL HACER CLICK EN EL BOTON BORRAR RESTABLECE EL ELEMENTO <P> ORGINAL.
            borrar.addEventListener('click', function(e){
                window.location.reload();
            });
    } else if (resultado__total >= 0.14 && resultado__total <= 0.18){
        let perdida = 60;
        let en12hs = perdida / 2;
        let en8hs = perdida / 3;
        let en4hs = perdida / 6;
        let en2hs = perdida / 12;
        let en1hs = perdida / 24;
        

        let info = 
            '<div class="operacion__contenedor">\
                 <p class="valor">La Superficie Corporal cm2 es de: <b class="color">'+resultado__total+'</b>.</p>\
                 <p class="valor">Las perdidas insensibles de la paciente:</p>\
                 <p class="valor">En 24hs es de: <b class="color">'+perdida+'</b>.</p>\
                 <p class="valor">En 12hs es de: <b class="color">'+en12hs+'</b>.</p>\
                 <p class="valor">En 08hs es de: <b class="color">'+en8hs+'</b>.</p>\
                 <p class="valor">En 04hs es de: <b class="color">'+en4hs+'</b>.</p>\
                 <p class="valor">En 02hs es de: <b class="color">'+en2hs+'</b>.</p>\
                 <p class="valor">En 01hs es de: <b class="color">'+en1hs+'</b>.</p>\
            </div>'
            resultado.innerHTML += info;
            //OBTENEMOS EL ELEMENTO DEL BOTON BORRAR Y LO VISUALIZAMOS EN CONSOLA
            //EVENTO AL HACER CLICK EN EL BOTON BORRAR RESTABLECE EL ELEMENTO <P> ORGINAL.
            borrar.addEventListener('click', function(e){
                window.location.reload();
            });
    } else if (resultado__total >= 0.19 && resultado__total <= 0.23){
        let perdida = 80;
        let en12hs = perdida / 2;
        let en8hs = (perdida / 3).toFixed(2);
        let en4hs = (perdida / 6).toFixed(2);
        let en2hs = (perdida / 12).toFixed(2);
        let en1hs = (perdida / 24).toFixed(2);
        

        let info = 
            '<div class="operacion__contenedor">\
                 <p class="valor">La Superficie Corporal cm2 es de: <b class="color">'+resultado__total+'</b>.</p>\
                 <p class="valor">Las perdidas insensibles de la paciente:</p>\
                 <p class="valor">En 24hs es de: <b class="color">'+perdida+'</b>.</p>\
                 <p class="valor">En 12hs es de: <b class="color">'+en12hs+'</b>.</p>\
                 <p class="valor">En 08hs es de: <b class="color">'+en8hs+'</b>.</p>\
                 <p class="valor">En 04hs es de: <b class="color">'+en4hs+'</b>.</p>\
                 <p class="valor">En 02hs es de: <b class="color">'+en2hs+'</b>.</p>\
                 <p class="valor">En 01hs es de: <b class="color">'+en1hs+'</b>.</p>\
            </div>'
            resultado.innerHTML += info;
            //OBTENEMOS EL ELEMENTO DEL BOTON BORRAR Y LO VISUALIZAMOS EN CONSOLA
            //EVENTO AL HACER CLICK EN EL BOTON BORRAR RESTABLECE EL ELEMENTO <P> ORGINAL.
            borrar.addEventListener('click', function(e){
                window.location.reload();
            });
    } else if (resultado__total >= 0.24 && resultado__total <= 0.28){
        let perdida = 100;
        let en12hs = perdida / 2;
        let en8hs = (perdida / 3).toFixed(2);
        let en4hs = (perdida / 6).toFixed(2);
        let en2hs = (perdida / 12).toFixed(2);
        let en1hs = (perdida / 24).toFixed(2);
        

        let info = 
            '<div class="operacion__contenedor">\
                 <p class="valor">La Superficie Corporal cm2 es de: <b class="color">'+resultado__total+'</b>.</p>\
                 <p class="valor">Las perdidas insensibles de la paciente:</p>\
                 <p class="valor">En 24hs es de: <b class="color">'+perdida+'</b>.</p>\
                 <p class="valor">En 12hs es de: <b class="color">'+en12hs+'</b>.</p>\
                 <p class="valor">En 08hs es de: <b class="color">'+en8hs+'</b>.</p>\
                 <p class="valor">En 04hs es de: <b class="color">'+en4hs+'</b>.</p>\
                 <p class="valor">En 02hs es de: <b class="color">'+en2hs+'</b>.</p>\
                 <p class="valor">En 01hs es de: <b class="color">'+en1hs+'</b>.</p>\
            </div>'
            resultado.innerHTML += info;
            //OBTENEMOS EL ELEMENTO DEL BOTON BORRAR Y LO VISUALIZAMOS EN CONSOLA
            //EVENTO AL HACER CLICK EN EL BOTON BORRAR RESTABLECE EL ELEMENTO <P> ORGINAL.
            borrar.addEventListener('click', function(e){
                window.location.reload();
            });
    } else if (resultado__total >= 0.29 && resultado__total <= 0.33){
        let perdida = 120;
        let en12hs = perdida / 2;
        let en8hs = perdida / 3;
        let en4hs = perdida / 6;
        let en2hs = perdida / 12;
        let en1hs = perdida / 24;
        

        let info = 
            '<div class="operacion__contenedor">\
                 <p class="valor">La Superficie Corporal cm2 es de: <b class="color">'+resultado__total+'</b>.</p>\
                 <p class="valor">Las perdidas insensibles de la paciente:</p>\
                 <p class="valor">En 24hs es de: <b class="color">'+perdida+'</b>.</p>\
                 <p class="valor">En 12hs es de: <b class="color">'+en12hs+'</b>.</p>\
                 <p class="valor">En 08hs es de: <b class="color">'+en8hs+'</b>.</p>\
                 <p class="valor">En 04hs es de: <b class="color">'+en4hs+'</b>.</p>\
                 <p class="valor">En 02hs es de: <b class="color">'+en2hs+'</b>.</p>\
                 <p class="valor">En 01hs es de: <b class="color">'+en1hs+'</b>.</p>\
            </div>'
            resultado.innerHTML += info;
            //OBTENEMOS EL ELEMENTO DEL BOTON BORRAR Y LO VISUALIZAMOS EN CONSOLA
            //EVENTO AL HACER CLICK EN EL BOTON BORRAR RESTABLECE EL ELEMENTO <P> ORGINAL.
            borrar.addEventListener('click', function(e){
                window.location.reload();
            });
    } else if (resultado__total >= 0.34 && resultado__total <= 0.38){
        let perdida = 140;
        let en12hs = perdida / 2;
        let en8hs = (perdida / 3).toFixed(2);
        let en4hs = (perdida / 6).toFixed(2);
        let en2hs = (perdida / 12).toFixed(2);
        let en1hs = (perdida / 24).toFixed(2);
        

        let info = 
            '<div class="operacion__contenedor">\
                 <p class="valor">La Superficie Corporal cm2 es de: <b class="color">'+resultado__total+'</b>.</p>\
                 <p class="valor">Las perdidas insensibles de la paciente:</p>\
                 <p class="valor">En 24hs es de: <b class="color">'+perdida+'</b>.</p>\
                 <p class="valor">En 12hs es de: <b class="color">'+en12hs+'</b>.</p>\
                 <p class="valor">En 08hs es de: <b class="color">'+en8hs+'</b>.</p>\
                 <p class="valor">En 04hs es de: <b class="color">'+en4hs+'</b>.</p>\
                 <p class="valor">En 02hs es de: <b class="color">'+en2hs+'</b>.</p>\
                 <p class="valor">En 01hs es de: <b class="color">'+en1hs+'</b>.</p>\
            </div>'
            resultado.innerHTML += info;
            //OBTENEMOS EL ELEMENTO DEL BOTON BORRAR Y LO VISUALIZAMOS EN CONSOLA
            //EVENTO AL HACER CLICK EN EL BOTON BORRAR RESTABLECE EL ELEMENTO <P> ORGINAL.
            borrar.addEventListener('click', function(e){
                window.location.reload();
            });
    } else if (resultado__total >= 0.39 && resultado__total <= 0.43){
        let perdida = 160;
        let en12hs = perdida / 2;
        let en8hs = (perdida / 3).toFixed(2);
        let en4hs = (perdida / 6).toFixed(2);
        let en2hs = (perdida / 12).toFixed(2);
        let en1hs = (perdida / 24).toFixed(2);
        

        let info = 
            '<div class="operacion__contenedor">\
                 <p class="valor">La Superficie Corporal cm2 es de: <b class="color">'+resultado__total+'</b>.</p>\
                 <p class="valor">Las perdidas insensibles de la paciente:</p>\
                 <p class="valor">En 24hs es de: <b class="color">'+perdida+'</b>.</p>\
                 <p class="valor">En 12hs es de: <b class="color">'+en12hs+'</b>.</p>\
                 <p class="valor">En 08hs es de: <b class="color">'+en8hs+'</b>.</p>\
                 <p class="valor">En 04hs es de: <b class="color">'+en4hs+'</b>.</p>\
                 <p class="valor">En 02hs es de: <b class="color">'+en2hs+'</b>.</p>\
                 <p class="valor">En 01hs es de: <b class="color">'+en1hs+'</b>.</p>\
            </div>'
            resultado.innerHTML += info;
            //OBTENEMOS EL ELEMENTO DEL BOTON BORRAR Y LO VISUALIZAMOS EN CONSOLA
            //EVENTO AL HACER CLICK EN EL BOTON BORRAR RESTABLECE EL ELEMENTO <P> ORGINAL.
            borrar.addEventListener('click', function(e){
                window.location.reload();
            });
    } else if (resultado__total >= 0.44 && resultado__total <= 0.48){
        let perdida = 180;
        let en12hs = perdida / 2;
        let en8hs = (perdida / 3).toFixed(2);
        let en4hs = (perdida / 6).toFixed(2);
        let en2hs = (perdida / 12).toFixed(2);
        let en1hs = (perdida / 24).toFixed(2);
        

        let info = 
            '<div class="operacion__contenedor">\
                 <p class="valor">La Superficie Corporal cm2 es de: <b class="color">'+resultado__total+'</b>.</p>\
                 <p class="valor">Las perdidas insensibles de la paciente:</p>\
                 <p class="valor">En 24hs es de: <b class="color">'+perdida+'</b>.</p>\
                 <p class="valor">En 12hs es de: <b class="color">'+en12hs+'</b>.</p>\
                 <p class="valor">En 08hs es de: <b class="color">'+en8hs+'</b>.</p>\
                 <p class="valor">En 04hs es de: <b class="color">'+en4hs+'</b>.</p>\
                 <p class="valor">En 02hs es de: <b class="color">'+en2hs+'</b>.</p>\
                 <p class="valor">En 01hs es de: <b class="color">'+en1hs+'</b>.</p>\
            </div>'
            resultado.innerHTML += info;
            //OBTENEMOS EL ELEMENTO DEL BOTON BORRAR Y LO VISUALIZAMOS EN CONSOLA
            //EVENTO AL HACER CLICK EN EL BOTON BORRAR RESTABLECE EL ELEMENTO <P> ORGINAL.
            borrar.addEventListener('click', function(e){
                window.location.reload();
            });
    } else if (resultado__total >= 0.49 && resultado__total <= 0.53){
        let perdida = 200;
        let en12hs = perdida / 2;
        let en8hs = (perdida / 3).toFixed(2);
        let en4hs = (perdida / 6).toFixed(2);
        let en2hs = (perdida / 12).toFixed(2);
        let en1hs = (perdida / 24).toFixed(2);
        

        let info = 
            '<div class="operacion__contenedor">\
                 <p class="valor">La Superficie Corporal cm2 es de: <b class="color">'+resultado__total+'</b>.</p>\
                 <p class="valor">Las perdidas insensibles de la paciente:</p>\
                 <p class="valor">En 24hs es de: <b class="color">'+perdida+'</b>.</p>\
                 <p class="valor">En 12hs es de: <b class="color">'+en12hs+'</b>.</p>\
                 <p class="valor">En 08hs es de: <b class="color">'+en8hs+'</b>.</p>\
                 <p class="valor">En 04hs es de: <b class="color">'+en4hs+'</b>.</p>\
                 <p class="valor">En 02hs es de: <b class="color">'+en2hs+'</b>.</p>\
                 <p class="valor">En 01hs es de: <b class="color">'+en1hs+'</b>.</p>\
            </div>'
            resultado.innerHTML += info;
            //OBTENEMOS EL ELEMENTO DEL BOTON BORRAR Y LO VISUALIZAMOS EN CONSOLA
            //EVENTO AL HACER CLICK EN EL BOTON BORRAR RESTABLECE EL ELEMENTO <P> ORGINAL.
            borrar.addEventListener('click', function(e){
                window.location.reload();
            });
    } else if (resultado__total >= 0.54 && resultado__total <= 0.58){
        let perdida = 220;
        let en12hs = perdida / 2;
        let en8hs = (perdida / 3).toFixed(2);
        let en4hs = (perdida / 6).toFixed(2);
        let en2hs = (perdida / 12).toFixed(2);
        let en1hs = (perdida / 24).toFixed(2);
        

        let info = 
            '<div class="operacion__contenedor">\
                 <p class="valor">La Superficie Corporal cm2 es de: <b class="color">'+resultado__total+'</b>.</p>\
                 <p class="valor">Las perdidas insensibles de la paciente:</p>\
                 <p class="valor">En 24hs es de: <b class="color">'+perdida+'</b>.</p>\
                 <p class="valor">En 12hs es de: <b class="color">'+en12hs+'</b>.</p>\
                 <p class="valor">En 08hs es de: <b class="color">'+en8hs+'</b>.</p>\
                 <p class="valor">En 04hs es de: <b class="color">'+en4hs+'</b>.</p>\
                 <p class="valor">En 02hs es de: <b class="color">'+en2hs+'</b>.</p>\
                 <p class="valor">En 01hs es de: <b class="color">'+en1hs+'</b>.</p>\
            </div>'
            resultado.innerHTML += info;
            //OBTENEMOS EL ELEMENTO DEL BOTON BORRAR Y LO VISUALIZAMOS EN CONSOLA
            //EVENTO AL HACER CLICK EN EL BOTON BORRAR RESTABLECE EL ELEMENTO <P> ORGINAL.
            borrar.addEventListener('click', function(e){
                window.location.reload();
            });
    } else if (resultado__total >= 0.59 && resultado__total <= 0.63){
        let perdida = 240;
        let en12hs = perdida / 2;
        let en8hs = perdida / 3;
        let en4hs = perdida / 6;
        let en2hs = perdida / 12;
        let en1hs = perdida / 24;
        

        let info = 
            '<div class="operacion__contenedor">\
                 <p class="valor">La Superficie Corporal cm2 es de: <b class="color">'+resultado__total+'</b>.</p>\
                 <p class="valor">Las perdidas insensibles de la paciente:</p>\
                 <p class="valor">En 24hs es de: <b class="color">'+perdida+'</b>.</p>\
                 <p class="valor">En 12hs es de: <b class="color">'+en12hs+'</b>.</p>\
                 <p class="valor">En 08hs es de: <b class="color">'+en8hs+'</b>.</p>\
                 <p class="valor">En 04hs es de: <b class="color">'+en4hs+'</b>.</p>\
                 <p class="valor">En 02hs es de: <b class="color">'+en2hs+'</b>.</p>\
                 <p class="valor">En 01hs es de: <b class="color">'+en1hs+'</b>.</p>\
            </div>'
            resultado.innerHTML += info;
            //OBTENEMOS EL ELEMENTO DEL BOTON BORRAR Y LO VISUALIZAMOS EN CONSOLA
            //EVENTO AL HACER CLICK EN EL BOTON BORRAR RESTABLECE EL ELEMENTO <P> ORGINAL.
            borrar.addEventListener('click', function(e){
                window.location.reload();
            });
    } else if (resultado__total >= 0.64 && resultado__total <= 0.68){
        let perdida = 260;
        let en12hs = perdida / 2;
        let en8hs = (perdida / 3).toFixed(2);
        let en4hs = (perdida / 6).toFixed(2);
        let en2hs = (perdida / 12).toFixed(2);
        let en1hs = (perdida / 24).toFixed(2);
        

        let info = 
            '<div class="operacion__contenedor">\
                 <p class="valor">La Superficie Corporal cm2 es de: <b class="color">'+resultado__total+'</b>.</p>\
                 <p class="valor">Las perdidas insensibles de la paciente:</p>\
                 <p class="valor">En 24hs es de: <b class="color">'+perdida+'</b>.</p>\
                 <p class="valor">En 12hs es de: <b class="color">'+en12hs+'</b>.</p>\
                 <p class="valor">En 08hs es de: <b class="color">'+en8hs+'</b>.</p>\
                 <p class="valor">En 04hs es de: <b class="color">'+en4hs+'</b>.</p>\
                 <p class="valor">En 02hs es de: <b class="color">'+en2hs+'</b>.</p>\
                 <p class="valor">En 01hs es de: <b class="color">'+en1hs+'</b>.</p>\
            </div>'
            resultado.innerHTML += info;
            //OBTENEMOS EL ELEMENTO DEL BOTON BORRAR Y LO VISUALIZAMOS EN CONSOLA
            //EVENTO AL HACER CLICK EN EL BOTON BORRAR RESTABLECE EL ELEMENTO <P> ORGINAL.
            borrar.addEventListener('click', function(e){
                window.location.reload();
            });
    } else if (resultado__total >= 0.69 && resultado__total <= 0.73){
        let perdida = 280;
        let en12hs = perdida / 2;
        let en8hs = (perdida / 3).toFixed(2);
        let en4hs = (perdida / 6).toFixed(2);
        let en2hs = (perdida / 12).toFixed(2);
        let en1hs = (perdida / 24).toFixed(2);
        

        let info = 
            '<div class="operacion__contenedor">\
                 <p class="valor">La Superficie Corporal cm2 es de: <b class="color">'+resultado__total+'</b>.</p>\
                 <p class="valor">Las perdidas insensibles de la paciente:</p>\
                 <p class="valor">En 24hs es de: <b class="color">'+perdida+'</b>.</p>\
                 <p class="valor">En 12hs es de: <b class="color">'+en12hs+'</b>.</p>\
                 <p class="valor">En 08hs es de: <b class="color">'+en8hs+'</b>.</p>\
                 <p class="valor">En 04hs es de: <b class="color">'+en4hs+'</b>.</p>\
                 <p class="valor">En 02hs es de: <b class="color">'+en2hs+'</b>.</p>\
                 <p class="valor">En 01hs es de: <b class="color">'+en1hs+'</b>.</p>\
            </div>'
            resultado.innerHTML += info;
            //OBTENEMOS EL ELEMENTO DEL BOTON BORRAR Y LO VISUALIZAMOS EN CONSOLA
            //EVENTO AL HACER CLICK EN EL BOTON BORRAR RESTABLECE EL ELEMENTO <P> ORGINAL.
            borrar.addEventListener('click', function(e){
                window.location.reload();
            });
    } else if (resultado__total >= 0.74 && resultado__total <= 0.78){
        let perdida = 300;
        let en12hs = perdida / 2;
        let en8hs = perdida / 3;
        let en4hs = perdida / 6;
        let en2hs = perdida / 12;
        let en1hs = (perdida / 24).toFixed(2);
        

        let info = 
            '<div class="operacion__contenedor">\
                 <p class="valor">La Superficie Corporal cm2 es de: <b class="color">'+resultado__total+'</b>.</p>\
                 <p class="valor">Las perdidas insensibles de la paciente:</p>\
                 <p class="valor">En 24hs es de: <b class="color">'+perdida+'</b>.</p>\
                 <p class="valor">En 12hs es de: <b class="color">'+en12hs+'</b>.</p>\
                 <p class="valor">En 08hs es de: <b class="color">'+en8hs+'</b>.</p>\
                 <p class="valor">En 04hs es de: <b class="color">'+en4hs+'</b>.</p>\
                 <p class="valor">En 02hs es de: <b class="color">'+en2hs+'</b>.</p>\
                 <p class="valor">En 01hs es de: <b class="color">'+en1hs+'</b>.</p>\
            </div>'
            resultado.innerHTML += info;
            //OBTENEMOS EL ELEMENTO DEL BOTON BORRAR Y LO VISUALIZAMOS EN CONSOLA
            //EVENTO AL HACER CLICK EN EL BOTON BORRAR RESTABLECE EL ELEMENTO <P> ORGINAL.
            borrar.addEventListener('click', function(e){
                window.location.reload();
            });
    } else if (resultado__total >= 0.79 && resultado__total <= 0.83){
        let perdida = 320;
        let en12hs = perdida / 2;
        let en8hs = (perdida / 3).toFixed(2);
        let en4hs = (perdida / 6).toFixed(2);
        let en2hs = (perdida / 12).toFixed(2);
        let en1hs = (perdida / 24).toFixed(2);
        

        let info = 
            '<div class="operacion__contenedor">\
                 <p class="valor">La Superficie Corporal cm2 es de: <b class="color">'+resultado__total+'</b>.</p>\
                 <p class="valor">Las perdidas insensibles de la paciente:</p>\
                 <p class="valor">En 24hs es de: <b class="color">'+perdida+'</b>.</p>\
                 <p class="valor">En 12hs es de: <b class="color">'+en12hs+'</b>.</p>\
                 <p class="valor">En 08hs es de: <b class="color">'+en8hs+'</b>.</p>\
                 <p class="valor">En 04hs es de: <b class="color">'+en4hs+'</b>.</p>\
                 <p class="valor">En 02hs es de: <b class="color">'+en2hs+'</b>.</p>\
                 <p class="valor">En 01hs es de: <b class="color">'+en1hs+'</b>.</p>\
            </div>'
            resultado.innerHTML += info;
            //OBTENEMOS EL ELEMENTO DEL BOTON BORRAR Y LO VISUALIZAMOS EN CONSOLA
            //EVENTO AL HACER CLICK EN EL BOTON BORRAR RESTABLECE EL ELEMENTO <P> ORGINAL.
            borrar.addEventListener('click', function(e){
                window.location.reload();
            });
    } else if (resultado__total >= 0.84 && resultado__total <= 0.88){
        let perdida = 340;
        let en12hs = perdida / 2;
        let en8hs = (perdida / 3).toFixed(2);
        let en4hs = (perdida / 6).toFixed(2);
        let en2hs = (perdida / 12).toFixed(2);
        let en1hs = (perdida / 24).toFixed(2);
        

        let info = 
            '<div class="operacion__contenedor">\
                 <p class="valor">La Superficie Corporal cm2 es de: <b class="color">'+resultado__total+'</b>.</p>\
                 <p class="valor">Las perdidas insensibles de la paciente:</p>\
                 <p class="valor">En 24hs es de: <b class="color">'+perdida+'</b>.</p>\
                 <p class="valor">En 12hs es de: <b class="color">'+en12hs+'</b>.</p>\
                 <p class="valor">En 08hs es de: <b class="color">'+en8hs+'</b>.</p>\
                 <p class="valor">En 04hs es de: <b class="color">'+en4hs+'</b>.</p>\
                 <p class="valor">En 02hs es de: <b class="color">'+en2hs+'</b>.</p>\
                 <p class="valor">En 01hs es de: <b class="color">'+en1hs+'</b>.</p>\
            </div>'
            resultado.innerHTML += info;
            //OBTENEMOS EL ELEMENTO DEL BOTON BORRAR Y LO VISUALIZAMOS EN CONSOLA
            //EVENTO AL HACER CLICK EN EL BOTON BORRAR RESTABLECE EL ELEMENTO <P> ORGINAL.
            borrar.addEventListener('click', function(e){
                window.location.reload();
            });
    } else if (resultado__total >= 0.89 && resultado__total <= 0.93){
        let perdida = 360;
        let en12hs = perdida / 2;
        let en8hs = perdida / 3;
        let en4hs = perdida / 6;
        let en2hs = perdida / 12;
        let en1hs = perdida / 24;
        

        let info = 
            '<div class="operacion__contenedor">\
                 <p class="valor">La Superficie Corporal cm2 es de: <b class="color">'+resultado__total+'</b>.</p>\
                 <p class="valor">Las perdidas insensibles de la paciente:</p>\
                 <p class="valor">En 24hs es de: <b class="color">'+perdida+'</b>.</p>\
                 <p class="valor">En 12hs es de: <b class="color">'+en12hs+'</b>.</p>\
                 <p class="valor">En 08hs es de: <b class="color">'+en8hs+'</b>.</p>\
                 <p class="valor">En 04hs es de: <b class="color">'+en4hs+'</b>.</p>\
                 <p class="valor">En 02hs es de: <b class="color">'+en2hs+'</b>.</p>\
                 <p class="valor">En 01hs es de: <b class="color">'+en1hs+'</b>.</p>\
            </div>'
            resultado.innerHTML += info;
            //OBTENEMOS EL ELEMENTO DEL BOTON BORRAR Y LO VISUALIZAMOS EN CONSOLA
            //EVENTO AL HACER CLICK EN EL BOTON BORRAR RESTABLECE EL ELEMENTO <P> ORGINAL.
            borrar.addEventListener('click', function(e){
                window.location.reload();
            });
    } else if (resultado__total >= 0.94 && resultado__total <= 0.98){
        let perdida = 380;
        let en12hs = perdida / 2;
        let en8hs = (perdida / 3).toFixed(2);
        let en4hs = (perdida / 6).toFixed(2);
        let en2hs = (perdida / 12).toFixed(2);
        let en1hs = (perdida / 24).toFixed(2);
        

        let info = 
            '<div class="operacion__contenedor">\
                 <p class="valor">La Superficie Corporal cm2 es de: <b class="color">'+resultado__total+'</b>.</p>\
                 <p class="valor">Las perdidas insensibles de la paciente:</p>\
                 <p class="valor">En 24hs es de: <b class="color">'+perdida+'</b>.</p>\
                 <p class="valor">En 12hs es de: <b class="color">'+en12hs+'</b>.</p>\
                 <p class="valor">En 08hs es de: <b class="color">'+en8hs+'</b>.</p>\
                 <p class="valor">En 04hs es de: <b class="color">'+en4hs+'</b>.</p>\
                 <p class="valor">En 02hs es de: <b class="color">'+en2hs+'</b>.</p>\
                 <p class="valor">En 01hs es de: <b class="color">'+en1hs+'</b>.</p>\
            </div>'
            resultado.innerHTML += info;
            //OBTENEMOS EL ELEMENTO DEL BOTON BORRAR Y LO VISUALIZAMOS EN CONSOLA
            //EVENTO AL HACER CLICK EN EL BOTON BORRAR RESTABLECE EL ELEMENTO <P> ORGINAL.
            borrar.addEventListener('click', function(e){
                window.location.reload();
            });
    } else if (resultado__total >= 0.99 && resultado__total <= 1.03){
        let perdida = 400;
        let en12hs = perdida / 2;
        let en8hs = (perdida / 3).toFixed(2);
        let en4hs = (perdida / 6).toFixed(2);
        let en2hs = (perdida / 12).toFixed(2);
        let en1hs = (perdida / 24).toFixed(2);
        

        let info = 
            '<div class="operacion__contenedor">\
                 <p class="valor">La Superficie Corporal cm2 es de: <b class="color">'+resultado__total+'</b>.</p>\
                 <p class="valor">Las perdidas insensibles de la paciente:</p>\
                 <p class="valor">En 24hs es de: <b class="color">'+perdida+'</b>.</p>\
                 <p class="valor">En 12hs es de: <b class="color">'+en12hs+'</b>.</p>\
                 <p class="valor">En 08hs es de: <b class="color">'+en8hs+'</b>.</p>\
                 <p class="valor">En 04hs es de: <b class="color">'+en4hs+'</b>.</p>\
                 <p class="valor">En 02hs es de: <b class="color">'+en2hs+'</b>.</p>\
                 <p class="valor">En 01hs es de: <b class="color">'+en1hs+'</b>.</p>\
            </div>'
            resultado.innerHTML += info;
            //OBTENEMOS EL ELEMENTO DEL BOTON BORRAR Y LO VISUALIZAMOS EN CONSOLA
            //EVENTO AL HACER CLICK EN EL BOTON BORRAR RESTABLECE EL ELEMENTO <P> ORGINAL.
            borrar.addEventListener('click', function(e){
                window.location.reload();
            });
    } else if (resultado__total >= 1.04 && resultado__total <= 1.12){
        let perdida = 420;
        let en12hs = perdida / 2;
        let en8hs = perdida / 3;
        let en4hs = perdida / 6;
        let en2hs = perdida / 12;
        let en1hs = (perdida / 24).toFixed(2);
        

        let info = 
            '<div class="operacion__contenedor">\
                 <p class="valor">La Superficie Corporal cm2 es de: <b class="color">'+resultado__total+'</b>.</p>\
                 <p class="valor">Las perdidas insensibles de la paciente:</p>\
                 <p class="valor">En 24hs es de: <b class="color">'+perdida+'</b>.</p>\
                 <p class="valor">En 12hs es de: <b class="color">'+en12hs+'</b>.</p>\
                 <p class="valor">En 08hs es de: <b class="color">'+en8hs+'</b>.</p>\
                 <p class="valor">En 04hs es de: <b class="color">'+en4hs+'</b>.</p>\
                 <p class="valor">En 02hs es de: <b class="color">'+en2hs+'</b>.</p>\
                 <p class="valor">En 01hs es de: <b class="color">'+en1hs+'</b>.</p>\
            </div>'
            resultado.innerHTML += info;
            //OBTENEMOS EL ELEMENTO DEL BOTON BORRAR Y LO VISUALIZAMOS EN CONSOLA
            //EVENTO AL HACER CLICK EN EL BOTON BORRAR RESTABLECE EL ELEMENTO <P> ORGINAL.
            borrar.addEventListener('click', function(e){
                window.location.reload();
            });
    } else if (resultado__total >= 1.13 && resultado__total <= 1.18){
        let perdida = 440;
        let en12hs = perdida / 2;
        let en8hs = (perdida / 3).toFixed(2);
        let en4hs = (perdida / 6).toFixed(2);
        let en2hs = (perdida / 12).toFixed(2);
        let en1hs = (perdida / 24).toFixed(2);
        

        let info = 
            '<div class="operacion__contenedor">\
                 <p class="valor">La Superficie Corporal cm2 es de: <b class="color">'+resultado__total+'</b>.</p>\
                 <p class="valor">Las perdidas insensibles de la paciente:</p>\
                 <p class="valor">En 24hs es de: <b class="color">'+perdida+'</b>.</p>\
                 <p class="valor">En 12hs es de: <b class="color">'+en12hs+'</b>.</p>\
                 <p class="valor">En 08hs es de: <b class="color">'+en8hs+'</b>.</p>\
                 <p class="valor">En 04hs es de: <b class="color">'+en4hs+'</b>.</p>\
                 <p class="valor">En 02hs es de: <b class="color">'+en2hs+'</b>.</p>\
                 <p class="valor">En 01hs es de: <b class="color">'+en1hs+'</b>.</p>\
            </div>'
            resultado.innerHTML += info;
            //OBTENEMOS EL ELEMENTO DEL BOTON BORRAR Y LO VISUALIZAMOS EN CONSOLA
            //EVENTO AL HACER CLICK EN EL BOTON BORRAR RESTABLECE EL ELEMENTO <P> ORGINAL.
            borrar.addEventListener('click', function(e){
                window.location.reload();
            });
    } else if (resultado__total >= 1.19 && resultado__total <= 1.23){
        let perdida = 460;
        let en12hs = perdida / 2;
        let en8hs = (perdida / 3).toFixed(2);
        let en4hs = (perdida / 6).toFixed(2);
        let en2hs = (perdida / 12).toFixed(2);
        let en1hs = (perdida / 24).toFixed(2);
        

        let info = 
            '<div class="operacion__contenedor">\
                 <p class="valor">La Superficie Corporal cm2 es de: <b class="color">'+resultado__total+'</b>.</p>\
                 <p class="valor">Las perdidas insensibles de la paciente:</p>\
                 <p class="valor">En 24hs es de: <b class="color">'+perdida+'</b>.</p>\
                 <p class="valor">En 12hs es de: <b class="color">'+en12hs+'</b>.</p>\
                 <p class="valor">En 08hs es de: <b class="color">'+en8hs+'</b>.</p>\
                 <p class="valor">En 04hs es de: <b class="color">'+en4hs+'</b>.</p>\
                 <p class="valor">En 02hs es de: <b class="color">'+en2hs+'</b>.</p>\
                 <p class="valor">En 01hs es de: <b class="color">'+en1hs+'</b>.</p>\
            </div>'
            resultado.innerHTML += info;
            //OBTENEMOS EL ELEMENTO DEL BOTON BORRAR Y LO VISUALIZAMOS EN CONSOLA
            //EVENTO AL HACER CLICK EN EL BOTON BORRAR RESTABLECE EL ELEMENTO <P> ORGINAL.
            borrar.addEventListener('click', function(e){
                window.location.reload();
            });
    } else if (resultado__total >= 1.24 && resultado__total <= 1.28){
        let perdida = 480;
        let en12hs = perdida / 2;
        let en8hs = perdida / 3;
        let en4hs = perdida / 6;
        let en2hs = perdida / 12;
        let en1hs = perdida / 24;
        

        let info = 
            '<div class="operacion__contenedor">\
                 <p class="valor">La Superficie Corporal cm2 es de: <b class="color">'+resultado__total+'</b>.</p>\
                 <p class="valor">Las perdidas insensibles de la paciente:</p>\
                 <p class="valor">En 24hs es de: <b class="color">'+perdida+'</b>.</p>\
                 <p class="valor">En 12hs es de: <b class="color">'+en12hs+'</b>.</p>\
                 <p class="valor">En 08hs es de: <b class="color">'+en8hs+'</b>.</p>\
                 <p class="valor">En 04hs es de: <b class="color">'+en4hs+'</b>.</p>\
                 <p class="valor">En 02hs es de: <b class="color">'+en2hs+'</b>.</p>\
                 <p class="valor">En 01hs es de: <b class="color">'+en1hs+'</b>.</p>\
            </div>'
            resultado.innerHTML += info;
            //OBTENEMOS EL ELEMENTO DEL BOTON BORRAR Y LO VISUALIZAMOS EN CONSOLA
            //EVENTO AL HACER CLICK EN EL BOTON BORRAR RESTABLECE EL ELEMENTO <P> ORGINAL.
            borrar.addEventListener('click', function(e){
                window.location.reload();
            });
    } else if (resultado__total >= 1.29 && resultado__total <= 1.33){
        let perdida = 500;
        let en12hs = perdida / 2;
        let en8hs = (perdida / 3).toFixed(2);
        let en4hs = (perdida / 6).toFixed(2);
        let en2hs = (perdida / 12).toFixed(2);
        let en1hs = (perdida / 24).toFixed(2);
        

        let info = 
            '<div class="operacion__contenedor">\
                 <p class="valor">La Superficie Corporal cm2 es de: <b class="color">'+resultado__total+'</b>.</p>\
                 <p class="valor">Las perdidas insensibles de la paciente:</p>\
                 <p class="valor">En 24hs es de: <b class="color">'+perdida+'</b>.</p>\
                 <p class="valor">En 12hs es de: <b class="color">'+en12hs+'</b>.</p>\
                 <p class="valor">En 08hs es de: <b class="color">'+en8hs+'</b>.</p>\
                 <p class="valor">En 04hs es de: <b class="color">'+en4hs+'</b>.</p>\
                 <p class="valor">En 02hs es de: <b class="color">'+en2hs+'</b>.</p>\
                 <p class="valor">En 01hs es de: <b class="color">'+en1hs+'</b>.</p>\
            </div>'
            resultado.innerHTML += info;
            //OBTENEMOS EL ELEMENTO DEL BOTON BORRAR Y LO VISUALIZAMOS EN CONSOLA
            //EVENTO AL HACER CLICK EN EL BOTON BORRAR RESTABLECE EL ELEMENTO <P> ORGINAL.
            borrar.addEventListener('click', function(e){
                window.location.reload();
            });
    } else if (resultado__total >= 1.34 && resultado__total <= 1.38){
        let perdida = 520;
        let en12hs = perdida / 2;
        let en8hs = (perdida / 3).toFixed(2);
        let en4hs = (perdida / 6).toFixed(2);
        let en2hs = (perdida / 12).toFixed(2);
        let en1hs = (perdida / 24).toFixed(2);
        

        let info = 
            '<div class="operacion__contenedor">\
                 <p class="valor">La Superficie Corporal cm2 es de: <b class="color">'+resultado__total+'</b>.</p>\
                 <p class="valor">Las perdidas insensibles de la paciente:</p>\
                 <p class="valor">En 24hs es de: <b class="color">'+perdida+'</b>.</p>\
                 <p class="valor">En 12hs es de: <b class="color">'+en12hs+'</b>.</p>\
                 <p class="valor">En 08hs es de: <b class="color">'+en8hs+'</b>.</p>\
                 <p class="valor">En 04hs es de: <b class="color">'+en4hs+'</b>.</p>\
                 <p class="valor">En 02hs es de: <b class="color">'+en2hs+'</b>.</p>\
                 <p class="valor">En 01hs es de: <b class="color">'+en1hs+'</b>.</p>\
            </div>'
            resultado.innerHTML += info;
            //OBTENEMOS EL ELEMENTO DEL BOTON BORRAR Y LO VISUALIZAMOS EN CONSOLA
            //EVENTO AL HACER CLICK EN EL BOTON BORRAR RESTABLECE EL ELEMENTO <P> ORGINAL.
            borrar.addEventListener('click', function(e){
                window.location.reload();
            });
    } else if (resultado__total >= 1.39 && resultado__total <= 1.43){
        let perdida = 540;
        let en12hs = perdida / 2;
        let en8hs = perdida / 3;
        let en4hs = perdida / 6;
        let en2hs = perdida / 12;
        let en1hs = perdida / 24;
        

        let info = 
            '<div class="operacion__contenedor">\
                 <p class="valor">La Superficie Corporal cm2 es de: <b class="color">'+resultado__total+'</b>.</p>\
                 <p class="valor">Las perdidas insensibles de la paciente:</p>\
                 <p class="valor">En 24hs es de: <b class="color">'+perdida+'</b>.</p>\
                 <p class="valor">En 12hs es de: <b class="color">'+en12hs+'</b>.</p>\
                 <p class="valor">En 08hs es de: <b class="color">'+en8hs+'</b>.</p>\
                 <p class="valor">En 04hs es de: <b class="color">'+en4hs+'</b>.</p>\
                 <p class="valor">En 02hs es de: <b class="color">'+en2hs+'</b>.</p>\
                 <p class="valor">En 01hs es de: <b class="color">'+en1hs+'</b>.</p>\
            </div>'
            resultado.innerHTML += info;
            //OBTENEMOS EL ELEMENTO DEL BOTON BORRAR Y LO VISUALIZAMOS EN CONSOLA
            //EVENTO AL HACER CLICK EN EL BOTON BORRAR RESTABLECE EL ELEMENTO <P> ORGINAL.
            borrar.addEventListener('click', function(e){
                window.location.reload();
            });
    } else if (resultado__total >= 1.44 && resultado__total <= 1.48){
        let perdida = 560;
        let en12hs = perdida / 2;
        let en8hs = (perdida / 3).toFixed(2);
        let en4hs = (perdida / 6).toFixed(2);
        let en2hs = (perdida / 12).toFixed(2);
        let en1hs = (perdida / 24).toFixed(2);
        

        let info = 
            '<div class="operacion__contenedor">\
                 <p class="valor">La Superficie Corporal cm2 es de: <b class="color">'+resultado__total+'</b>.</p>\
                 <p class="valor">Las perdidas insensibles de la paciente:</p>\
                 <p class="valor">En 24hs es de: <b class="color">'+perdida+'</b>.</p>\
                 <p class="valor">En 12hs es de: <b class="color">'+en12hs+'</b>.</p>\
                 <p class="valor">En 08hs es de: <b class="color">'+en8hs+'</b>.</p>\
                 <p class="valor">En 04hs es de: <b class="color">'+en4hs+'</b>.</p>\
                 <p class="valor">En 02hs es de: <b class="color">'+en2hs+'</b>.</p>\
                 <p class="valor">En 01hs es de: <b class="color">'+en1hs+'</b>.</p>\
            </div>'
            resultado.innerHTML += info;
            //OBTENEMOS EL ELEMENTO DEL BOTON BORRAR Y LO VISUALIZAMOS EN CONSOLA
            //EVENTO AL HACER CLICK EN EL BOTON BORRAR RESTABLECE EL ELEMENTO <P> ORGINAL.
            borrar.addEventListener('click', function(e){
                window.location.reload();
            });
    } else if (resultado__total >= 1.49 && resultado__total <= 1.53){
        let perdida = 580;
        let en12hs = perdida / 2;
        let en8hs = (perdida / 3).toFixed(2);
        let en4hs = (perdida / 6).toFixed(2);
        let en2hs = (perdida / 12).toFixed(2);
        let en1hs = (perdida / 24).toFixed(2);
        

        let info = 
            '<div class="operacion__contenedor">\
                 <p class="valor">La Superficie Corporal cm2 es de: <b class="color">'+resultado__total+'</b>.</p>\
                 <p class="valor">Las perdidas insensibles de la paciente:</p>\
                 <p class="valor">En 24hs es de: <b class="color">'+perdida+'</b>.</p>\
                 <p class="valor">En 12hs es de: <b class="color">'+en12hs+'</b>.</p>\
                 <p class="valor">En 08hs es de: <b class="color">'+en8hs+'</b>.</p>\
                 <p class="valor">En 04hs es de: <b class="color">'+en4hs+'</b>.</p>\
                 <p class="valor">En 02hs es de: <b class="color">'+en2hs+'</b>.</p>\
                 <p class="valor">En 01hs es de: <b class="color">'+en1hs+'</b>.</p>\
            </div>'
            resultado.innerHTML += info;
            //OBTENEMOS EL ELEMENTO DEL BOTON BORRAR Y LO VISUALIZAMOS EN CONSOLA
            //EVENTO AL HACER CLICK EN EL BOTON BORRAR RESTABLECE EL ELEMENTO <P> ORGINAL.
            borrar.addEventListener('click', function(e){
                window.location.reload();
            });
    } else if (resultado__total >= 1.54 && resultado__total <= 1.58){
        let perdida = 600;
        let en12hs = perdida / 2;
        let en8hs = perdida / 3;
        let en4hs = perdida / 6;
        let en2hs = perdida / 12;
        let en1hs = perdida / 24;
        

        let info = 
            '<div class="operacion__contenedor">\
                 <p class="valor">La Superficie Corporal cm2 es de: <b class="color">'+resultado__total+'</b>.</p>\
                 <p class="valor">Las perdidas insensibles de la paciente:</p>\
                 <p class="valor">En 24hs es de: <b class="color">'+perdida+'</b>.</p>\
                 <p class="valor">En 12hs es de: <b class="color">'+en12hs+'</b>.</p>\
                 <p class="valor">En 08hs es de: <b class="color">'+en8hs+'</b>.</p>\
                 <p class="valor">En 04hs es de: <b class="color">'+en4hs+'</b>.</p>\
                 <p class="valor">En 02hs es de: <b class="color">'+en2hs+'</b>.</p>\
                 <p class="valor">En 01hs es de: <b class="color">'+en1hs+'</b>.</p>\
            </div>'
            resultado.innerHTML += info;
            //OBTENEMOS EL ELEMENTO DEL BOTON BORRAR Y LO VISUALIZAMOS EN CONSOLA
            //EVENTO AL HACER CLICK EN EL BOTON BORRAR RESTABLECE EL ELEMENTO <P> ORGINAL.
            borrar.addEventListener('click', function(e){
                window.location.reload();
            });
    } else if (resultado__total >= 1.59){
        let perdida = 620;
        let en12hs = perdida / 2;
        let en8hs = (perdida / 3).toFixed(2);
        let en4hs = (perdida / 6).toFixed(2);
        let en2hs = (perdida / 12).toFixed(2);
        let en1hs = (perdida / 24).toFixed(2);
        

        let info = 
            '<div class="operacion__contenedor">\
                 <p class="valor">La Superficie Corporal cm2 es de: <b class="color">'+resultado__total+'</b>.</p>\
                 <p class="valor">Las perdidas insensibles de la paciente:</p>\
                 <p class="valor">En 24hs es de: <b class="color">'+perdida+'</b>.</p>\
                 <p class="valor">En 12hs es de: <b class="color">'+en12hs+'</b>.</p>\
                 <p class="valor">En 08hs es de: <b class="color">'+en8hs+'</b>.</p>\
                 <p class="valor">En 04hs es de: <b class="color">'+en4hs+'</b>.</p>\
                 <p class="valor">En 02hs es de: <b class="color">'+en2hs+'</b>.</p>\
                 <p class="valor">En 01hs es de: <b class="color">'+en1hs+'</b>.</p>\
            </div>'
            resultado.innerHTML += info;
            //OBTENEMOS EL ELEMENTO DEL BOTON BORRAR Y LO VISUALIZAMOS EN CONSOLA
            //EVENTO AL HACER CLICK EN EL BOTON BORRAR RESTABLECE EL ELEMENTO <P> ORGINAL.
            borrar.addEventListener('click', function(e){
                window.location.reload();
            });
    } else {
        let info = 
            '<div class="operacion__contenedor">\
                 <p class="color">Ingrese un valor valido!! recuerdo no usar la "," para separar decimales.</p>\
            </div>'
            resultado.innerHTML += info;
            //OBTENEMOS EL ELEMENTO DEL BOTON BORRAR Y LO VISUALIZAMOS EN CONSOLA
            //EVENTO AL HACER CLICK EN EL BOTON BORRAR RESTABLECE EL ELEMENTO <P> ORGINAL.
            borrar.addEventListener('click', function(e){
                window.location.reload();
            });
    }
})


