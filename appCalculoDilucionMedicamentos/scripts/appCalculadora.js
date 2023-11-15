



//con esta variable seleccionamos los elementos del formulario
const formulario = document.getElementById("medicamentos");

//agregamos un eventos que se activa al enviar los datos con el boton calcular
formulario.addEventListener("submit", function(e){

    e.preventDefault();//esta funcion previene que se borren los datos al enviarlos a las funciones

    //OBTENEMOS TODOS LOS DATOS DE LOS ELEMENTOS EN VARIABLES
    let nombreMedicamento = document.getElementById("seleccion").value;
    let dosis = document.getElementById("dosis").value;
    let informacion = document.querySelector(".resultado");
    let borrarP = document.querySelector(".resp");
    let btn = document.querySelector(".boton");
    let informaacionOriginal = informacion.innerHTML;//ESTA VARIABLE ALMACENA EL VALOR ORIGINAL DEL DIV INFORMACION PARA QUE AL SE ESTABLESCA LA FUNCION DE BORRAR.    
   
    //IMPRMIMOS LOS DATOS DE LAS VARIABLES EN CONSOLA PARA ESTAR SEGUROS DE QUE SON LOS DATOS CORRECTOS
    console.log(nombreMedicamento);
    console.log(dosis);
    console.log(informacion);
    console.log(borrarP);

    //BORRA EL ELEMENTO P PARA IMPRMIR ARRIBA LA FUNCION DEL CALCULO
    borrarP.remove();
    
    let Ampicilina = "Ampicilina";
    let AMPICILINA = "AMPICILINA";
    let ampicilina = "ampicilina";

    if(nombreMedicamento === ampicilina || nombreMedicamento === Ampicilina || nombreMedicamento === AMPICILINA){//AMPICILINA
            
            dilucion1 = parseInt(dosis/50);
            console.log(dilucion1);
            dilucion2 = parseInt(dosis/100);
            console.log(dilucion2);
            dilucion3 = parseInt(dosis/10);
            console.log(dilucion3);
            dilucion4 = parseInt(dosis/20);
            console.log(dilucion4);
            dilucion5 = parseInt(dosis/30);
            console.log(dilucion5);
            dilucion6 = parseInt((dosis*3.5)/250);
            console.log(dilucion6);

            let fondo = document.querySelector('.contenedor');
            console.log(fondo);
            fondo.style.backgroundColor = '#1357a6';

            let info = '<div class="infoContainer">\
            <h2 class="tituloMedicamento">Ampicilina</h2>\
           <h3 class="tituloReconstitucion tt">Reconstitución</h3>\
           <p><b class="tituloReconstitucion">Frasco-Ampolla de 500mg: </b> en 5ml de agua destilada, obteniendo 100mg/ml.</p>\
           <p><b class="tituloReconstitucion">Frasco-Ampolla de 1000mg: </b> en 10ml de agua destilada, obteniendo 100mg/ml.</p><br>\
            <h3>En base a la dosis Ingresada usted deberia diluir:</h3>\
           <h4 class="tituloReconstitucion">Intravenosa Directa (IVD)--[PUSH]--</h4>\
           <p><b class="tituloReconstitucion">Recomendada: </b> Diluir en <b>'+dilucion1+'ml de S.F.</b> por via periferica.</p>\
            <p><b class="tituloReconstitucion">máxima: </b> Diluir en '+dilucion2+'ml de S.F. por via central.</p>\
            <p><b class="tituloReconstitucion">Infundir: </b>entre 5 a 10 minutos.</p><br>\
           <h4 class="tituloReconstitucion">Intravenosa Intermitente (IVI)--[2° CANAL]--</h4>\
           <p><b class="tituloReconstitucion">Recomendada: </b> Diluir en '+dilucion3+'ml de S.F. por via periferica.</p>\
            <p><b class="tituloReconstitucion">Recomendada máxima: </b> Diluir en '+dilucion4+'ml de S.F. por via periferica.</p>\
            <p><b class="tituloReconstitucion">máxima: </b> Diluir en '+dilucion5+'ml de S.F. por via central.</p>\
            <p><b class="tituloReconstitucion">Infundir: </b>entre 15 a 30 minutos, preparar y administrar inmediatamente.</p><br>\
            <h4 class="tituloReconstitucion">IntraMuscular (IM)</h4>\
           <p><b class="tituloReconstitucion">Reconstituir: </b> con 3,5ml de agua estéril o lidocaina al 1%.</p>\
            <p><b class="tituloReconstitucion">dosis: </b> su dosis es '+dilucion5+'ml de la reconstitución del FA.</p><br>\
            <h3 class="tituloReconstitucion tt">Estabilidad</h3>\
            <p>Una vez reconstituida dura <b class="advertencia">1 hs a temperatura ambiente y 2 hs refrigerada</b>, luego de este tiempo desechar.</p><br>\
            <h3 class="tituloReconstitucion tt">Obervaciones</h3>\
            <p>El tiempo de preparacion y administracion del medicamento no debe exceder 1 hora.</p>\
            <p>Observar signos anafilaxia durante los primeros minutos tras la administración.</p>\
            <p>No usar DX 5% acelera su hidrolisis.</p>\
            <p>No mezclar con soluciones que contengan aminoácidos.</p><br>\
            </div>'
            informacion.innerHTML += info;
            //OBTENEMOS EL ELEMENTO DEL BOTON BORRAR Y LO VISUALIZAMOS EN CONSOLA
            console.log(btn);
            //EVENTO AL HACER CLICK EN EL BOTON BORRAR RESTABLECE EL ELEMENTO <P> ORGINAL.
            btn.addEventListener('click', function(e){
                informacion.innerHTML = informaacionOriginal;
                fondo.style.backgroundColor = '#318CE7';
            });

            } else {
                let fondo = document.querySelector('.contenedor');
                console.log(fondo);
                fondo.style.backgroundColor = '#e61919';

                let info ='<h2> Agrege un valor valido </h2>'
                informacion.innerHTML += info;
                //EVENTO AL HACER CLICK EN EL BOTON BORRAR RESTABLECE EL ELEMENTO <P> ORGINAL.
                btn.addEventListener('click', function(e){
                    informacion.innerHTML = informaacionOriginal;
                    fondo.style.backgroundColor = '#318CE7';
                });
            };

            
})


