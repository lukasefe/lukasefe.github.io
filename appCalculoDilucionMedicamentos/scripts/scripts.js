



//con esta variable seleccionamos los elementos del formulario
const formulario = document.getElementById("medicamentos");

//agregamos un eventos que se activa al enviar los datos con el boton calcular
formulario.addEventListener("submit", function(e){

    e.preventDefault();//esta funcion previene que se borren los datos al enviarlos a las funciones

    //OBTENEMOS TODOS LOS DATOS DE LOS ELEMENTOS EN VARIABLES
    let nombreMedicamento = document.getElementById("seleccion").value;
    let dosiscadena = document.getElementById("dosis").value;//AQUI CAMBIE YA QUE EL TYPE NUMBER NO ACEPTABA VALORES DECIMALES CON .
    let informacion = document.querySelector(".resultado");
    let borrarP = document.querySelector(".resp");
    let btn1 = document.querySelector(".boton1");
    let btn = document.querySelector(".boton");
    let informaacionOriginal = informacion.innerHTML;//ESTA VARIABLE ALMACENA EL VALOR ORIGINAL DEL DIV INFORMACION PARA QUE AL SE ESTABLESCA LA FUNCION DE BORRAR.    
   
    let dosis = Number(dosiscadena);//AQUI CONVIERTO EL STRING DEL VALOR DEL INPUT TEXT PARA LAS OPERACIONES

    //IMPRMIMOS LOS DATOS DE LAS VARIABLES EN CONSOLA PARA ESTAR SEGUROS DE QUE SON LOS DATOS CORRECTOS
    console.log(nombreMedicamento);
    console.log(dosis);
    console.log(informacion);
    console.log(borrarP);

    let miligramos 
    let frascoTotal
                
                
    let entero = Number.isInteger(dosis);// VARIABLE PARA COMPARACION


    //FUNCION DE COMPARACION DE LA DOSIS
    function calculo(){
        if (dosis === entero){//COMPARA QUE LA DOSIS SEA UN ENTERO Y LO MANTIENE
                        let reconstitucion = (dosis*frascoTotal)/miligramos;
                        console.log(reconstitucion);
                        return reconstitucion;//IMPRIME EL VALOR ENTERO
        } else if(dosis !== entero){//COMPARA QUE LA DOSIS NO SEA UN VALOR ENTERO Y LO CONVIERTE A FLOTANTE
                        let reconstitucion = (dosis*frascoTotal)/miligramos;
                         redondeo1 = (reconstitucion.toFixed(1));//MUESTRA SOLAMENTE LOS 2 DECIMALES DESPUES DE LA COMA DEL FLOTANTE
                         console.log(redondeo1);
                         return redondeo1;//IMPRIME EL FLOTANTE
                    }               
    };

    function ampollas(){
                    if (dosis === entero){
                        let ampollas = dosis/miligramos;
                        console.log(ampollas);
                        if (ampollas === 1){
                            return;
                        } else if (ampollas !== 1){
                            return ampollas;
                        };
                } else if(dosis !== entero){
                    let ampollas = dosis/miligramos;
                    redondeo2 = (ampollas.toFixed(2));
                    console.log(redondeo2);
                    if (ampollas === 1.00){
                        ampollas = parseInt(ampollas);
                        return;
                    }
                    return Math.ceil(redondeo2);
                }
    }

    //BORRA EL ELEMENTO P PARA IMPRMIR ARRIBA LA FUNCION DEL CALCULO
    borrarP.remove();
    btn1.style.display = 'none';

if(nombreMedicamento === "ampicilina" || nombreMedicamento === "Ampicilina" || nombreMedicamento === "AMPICILINA" ){//AMPICILINA
            
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
            dilucion6 = parseInt((dosis*3.5)/1000);
            console.log(dilucion6);

            let entero = Number.isInteger(dosis);// VARIABLE PARA COMPARACION

            //RECONSTITUCIÓN FRASCO DE 500MG
            function reconstitucion500(){
                if (dosis === entero){//COMPARA QUE LA DOSIS SEA UN ENTERO Y LO MANTIENE
                    let reconstitucion = (dosis*5)/500;
                    console.log(reconstitucion);
                    return reconstitucion;//IMPRIME EL VALOR ENTERO
                } else if(dosis !== entero){//COMPARA QUE LA DOSIS NO SEA UN VALOR ENTERO Y LO CONVIERTE A FLOTANTE
                    let reconstitucion = (dosis*5)/500;
                     redondeo1 = (reconstitucion.toFixed(1));//MUESTRA SOLAMENTE LOS 2 DECIMALES DESPUES DE LA COMA DEL FLOTANTE
                     console.log(redondeo1);
                     return redondeo1;//IMPRIME EL FLOTANTE
                }               
            };

            //RECONSTITUCIÓN FRASCO DE 1000MG
            function reconstitucion1000(){
                if (dosis === entero){//COMPARA QUE LA DOSIS SEA UN ENTERO Y LO MANTIENE
                    let reconstitucion = (dosis*10)/1000;
                    console.log(reconstitucion);
                    return reconstitucion;//IMPRIME EL VALOR ENTERO
                } else if(dosis !== entero){//COMPARA QUE LA DOSIS NO SEA UN VALOR ENTERO Y LO CONVIERTE A FLOTANTE
                    let reconstitucion = (dosis*10)/1000;
                     redondeo1 = (reconstitucion.toFixed(1));//MUESTRA SOLAMENTE LOS 2 DECIMALES DESPUES DE LA COMA DEL FLOTANTE
                     console.log(redondeo1);
                     return redondeo1;//IMPRIME EL FLOTANTE
                }               
            };

            //FUNCION DE FRASCOS DE 500 A UTILIZAR
            function frasco500(){
                if (dosis === entero){
                    let frasco = dosis/500;
                    console.log(frasco);
                    return frasco;
            } else if(dosis !== entero){
                let frascos = dosis/500;
                redondeo2 = (frascos.toFixed(2));
                console.log(redondeo2);
                return Math.ceil(redondeo2);
            }
            };

            //FUNCION DE FRASCOS DE 10000 A UTILIZAR
            function frasco1000(){
                if (dosis === entero){
                    let frasco = dosis/1000;
                    console.log(frasco);
                        return frasco;
                    
            } else if(dosis !== entero){
                let frascos = dosis/1000;
                redondeo2 = (frascos.toFixed(2));
                console.log(redondeo2);
                return Math.ceil(redondeo2);
            }
            };

            reconstitucion500(dosis);
            reconstitucion1000(dosis);
            frasco500(dosis);

            let fondo = document.querySelector('.contenedor');
            console.log(fondo);
            fondo.style.backgroundColor = '#1357a6';

            let info = 
            '<div class="contenedor__Grilla">\
            <div class="contenedor__Titulo">\
                <h3 class="nombre__Farmaco">Ampicilina</h3>\
            </div>\
            <div class="contenedor__Info">\
                <div class="contenedor__Presentacion">\
                    <div class="titulo__Presentacion">\
                        <h4 class="presentacion">Frasco/Ampolla 500mg</h4>\
                    </div>\
                    <div class="info__Presentacion">\
                        <div class="info__Uno">\
                            <div class="reconstitucion">\
                                <h4>Reconstitución</h4>\
                            </div>\
                            <div class="datos">\
                                <p>En 5ml de agua destilada, obteniendo 100mg/ml.</p>\
                            </div>\
                        </div>\
                    </div>\
                    <div class="info__Presentacion">\
                        <div class="info__Uno">\
                            <div class="reconstitucion">\
                                <h4>Según dosis indicada</h4>\
                            </div>\
                            <div class="datos">\
                                <p>Retirar del FA '+reconstitucion500()+' ml.</p>\
                            </div>\
                        </div>\
                    </div>\
                    <div class="info__Presentacion">\
                        <div class="info__Uno">\
                            <div class="reconstitucion">\
                                <h4>Cantidad a utilizar</h4>\
                            </div>\
                            <div class="datos">\
                                <p>para la dosis indicada se debe utlizar '+frasco500()+' frasco/os</p>\
                            </div>\
                        </div>\
                    </div>\
                </div>\
                <div class="contenedor__Presentacion">\
                    <div class="titulo__Presentacion">\
                        <h4 class="presentacion">Frasco/Ampolla 1000mg</h4>\
                    </div>\
                    <div class="info__Presentacion">\
                        <div class="info__Uno">\
                            <div class="reconstitucion">\
                                <h4>Reconstitución</h4>\
                            </div>\
                            <div class="datos">\
                                <p>En 10ml de agua destilada, obteniendo 100mg/ml.</p>\
                            </div>\
                        </div>\
                    </div>\
                    <div class="info__Presentacion">\
                        <div class="info__Uno">\
                            <div class="reconstitucion">\
                                <h4>Según dosis indicada</h4>\
                            </div>\
                            <div class="datos">\
                                <p>Retirar del FA '+reconstitucion1000()+' ml</p>\
                            </div>\
                        </div>\
                    </div>\
                    <div class="info__Presentacion">\
                        <div class="info__Uno">\
                            <div class="reconstitucion">\
                                <h4>Cantidad a utilizar</h4>\
                            </div>\
                            <div class="datos">\
                                <p>para la dosis indicada se debe utlizar '+frasco1000()+' frasco/os</p>\
                            </div>\
                        </div>\
                    </div>\
                </div>\
                <h3 class="estabilidad">Estabilidad y observaciones</h3>\
                <div class="contenedor__Estabilidad">\
                    <p class="texto__Estabilidad">Una vez reconstituida dura <b class="texto__Blanco">1 hs a temperatura ambiente y 2 hs refrigerada</b>, luego de este tiempo desechar.</p>\
                    <p class="texto__Observaciones">El tiempo de preparacion y administracion del medicamento no debe exceder 1 hora.</p>\
                    <p class="texto__Observaciones">Observar signos anafilaxia durante los primeros minutos tras la administración.</p>\
                    <p class="texto__Observaciones">No usar DX 5% acelera su hidrolisis.</p>\
                    <p class="texto__Observaciones">No mezclar con soluciones que contengan aminoácidos.</p>\
                </div>\
                <h4 class="texto1">En base a la dosis indicada y la forma de administración elegida:</h4>\
                <h3 class="administracion">IntraVenosa Directa (IVD) --[PUSH]--</h3>\
                <div class="contenedor__Presentacion">\
                    <div class="info__Presentacion">\
                        <div class="info__Uno">\
                            <div class="reconstitucion">\
                                <h4>Diluyente</h4>\
                            </div>\
                            <div class="datos">\
                                <p>Sol. Fisiologica.</p>\
                            </div>\
                        </div>\
                    </div>\
                    <div class="info__Presentacion">\
                        <div class="info__Uno">\
                            <div class="reconstitucion">\
                                <h4>Recomendada</h4>\
                            </div>\
                            <div class="datos">\
                                <p>Llevar a <b>'+dilucion1+'ml de S.F.</b> por via periferica.</p>\
                            </div>\
                        </div>\
                    </div>\
                    <div class="info__Presentacion">\
                        <div class="info__Uno">\
                            <div class="reconstitucion">\
                                <h4>Máxima:</h4>\
                            </div>\
                            <div class="datos">\
                                <p>Llevar a <b>'+dilucion2+'ml de S.F. por via central.</p>\
                            </div>\
                        </div>\
                    </div>\
                    <div class="info__Presentacion">\
                        <div class="info__Uno">\
                            <div class="reconstitucion">\
                                <h4>Infusión</h4>\
                            </div>\
                            <div class="datos">\
                                <p>Entre 5 a 10 minutos.</p>\
                            </div>\
                        </div>\
                    </div>\
                </div>\
                <h3 class="administracion">IntraVenosa Intermitente (IVI) --[2° CANAL]--</h3>\
                <div class="contenedor__Presentacion">\
                    <div class="info__Presentacion">\
                        <div class="info__Uno">\
                            <div class="reconstitucion">\
                                <h4>Diluyente</h4>\
                            </div>\
                            <div class="datos">\
                                <p>Sol. Fisiologica.</p>\
                            </div>\
                        </div>\
                    </div>\
                    <div class="info__Presentacion">\
                        <div class="info__Uno">\
                            <div class="reconstitucion">\
                                <h4>Recomendada</h4>\
                            </div>\
                            <div class="datos">\
                                <p>Llevar a <b>'+dilucion3+'ml de S.F.</b> por via periferica.</p>\
                            </div>\
                        </div>\
                    </div>\
                    <div class="info__Presentacion">\
                        <div class="info__Uno">\
                            <div class="reconstitucion">\
                                <h4>Recomendada Máxima</h4>\
                            </div>\
                            <div class="datos">\
                                <p>Llevar a <b>'+dilucion4+'ml de S.F.</b> por via periferica.</p>\
                            </div>\
                        </div>\
                    </div>\
                    <div class="info__Presentacion">\
                        <div class="info__Uno">\
                            <div class="reconstitucion">\
                                <h4>Máxima</h4>\
                            </div>\
                            <div class="datos">\
                                <p>Llevar a <b>'+dilucion5+'ml de S.F. por via central.</p>\
                            </div>\
                        </div>\
                    </div>\
                    <div class="info__Presentacion">\
                        <div class="info__Uno">\
                            <div class="reconstitucion">\
                                <h4>Infusión</h4>\
                            </div>\
                            <div class="datos">\
                                <p>Entre 15 a 30 minutos, preparar y administrar inmediatamente.</p>\
                            </div>\
                        </div>\
                    </div>\
                </div>\
                <h3 class="administracion">IntraMuscular (IM)</h3>\
                <div class="contenedor__Presentacion">\
                    <div class="info__Presentacion">\
                        <div class="info__Uno">\
                            <div class="reconstitucion">\
                                <h4>Reconstituir</h4>\
                            </div>\
                            <div class="datos">\
                                <p>Con 3,5ml de agua estéril o lidocaina al 1%.</p>\
                            </div>\
                        </div>\
                    </div>\
                    <div class="info__Presentacion">\
                        <div class="info__Uno">\
                            <div class="reconstitucion">\
                                <h4>Dosis</h4>\
                            </div>\
                            <div class="datos">\
                                <p>'+dilucion6+'ml de la reconstitución del FA.</p>\
                            </div>\
                        </div>\
                    </div>\
                </div>\
            </div>\
           </div>'
            informacion.innerHTML += info;
            //OBTENEMOS EL ELEMENTO DEL BOTON BORRAR Y LO VISUALIZAMOS EN CONSOLA
            console.log(btn);
            //EVENTO AL HACER CLICK EN EL BOTON BORRAR RESTABLECE EL ELEMENTO <P> ORGINAL.
            btn.addEventListener('click', function(e){
                informacion.innerHTML = informaacionOriginal;
                fondo.style.backgroundColor = '#318CE7';
                btn1.style.display = 'block';
            });

            } 
            //ACICLOVIR
            else if(nombreMedicamento === "aciclovir" || nombreMedicamento === "Aciclovir" || nombreMedicamento === "ACICLOVIR"){

                dilucion = dosis/2.5;
                console.log(dilucion);
                dilucion2 = parseInt(dosis/5);
                console.log(dilucion2);
                dilucion3 = parseInt(dosis/7);
                console.log(dilucion3);

                let entero = Number.isInteger(dosis);// VARIABLE PARA COMPARACION

                 //RECONSTITUCIÓN FRASCO DE 500MG
                function reconstitucion500(){
                    if (dosis === entero){//COMPARA QUE LA DOSIS SEA UN ENTERO Y LO MANTIENE
                        let reconstitucion = (dosis*10)/500;
                        console.log(reconstitucion);
                        return reconstitucion;//IMPRIME EL VALOR ENTERO
                    } else if(dosis !== entero){//COMPARA QUE LA DOSIS NO SEA UN VALOR ENTERO Y LO CONVIERTE A FLOTANTE
                        let reconstitucion = (dosis*10)/500;
                        redondeo1 = (reconstitucion.toFixed(1));//MUESTRA SOLAMENTE LOS 2 DECIMALES DESPUES DE LA COMA DEL FLOTANTE
                        console.log(redondeo1);
                        return redondeo1;//IMPRIME EL FLOTANTE
                    }               
                };

                //FUNCION DE FRASCOS DE 500 A UTILIZAR
                function frasco500(){
                    if (dosis === entero){
                        let frasco = dosis/500;
                        console.log(frasco);
                        return frasco;
                } else if(dosis !== entero){
                    let frascos = dosis/500;
                    redondeo2 = (frascos.toFixed(2));
                    console.log(redondeo2);
                    return Math.ceil(redondeo2);
                }
                };


                let fondo = document.querySelector('.contenedor');
                console.log(fondo);
                fondo.style.backgroundColor = '#1357a6';

                let info = '<div class="contenedor__Grilla">\
                <div class="contenedor__Titulo">\
                    <h3 class="nombre__Farmaco">Aciclovir</h3>\
                </div>\
                <div class="contenedor__Info">\
                    <div class="contenedor__Presentacion">\
                        <div class="titulo__Presentacion">\
                            <h4 class="presentacion">Frasco/Ampolla 500mg.</h4>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion">\
                                    <h4>Reconstitución</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>En 10ml de agua destilada, obteniendo 50mg/ml.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion">\
                                    <h4>Según dosis indicada</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Retirar del FA '+reconstitucion500()+'ml. </p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion">\
                                    <h4>Cantidad a utilizar</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>para la dosis indicada se debe utlizar '+frasco500()+' frasco/os.</p>\
                                </div>\
                            </div>\
                        </div>\
                    </div>\
                    <div class="contenedor__Presentacion">\
                        <div class="titulo__Presentacion">\
                            <h4 class="presentacion">Jarabe 100mg/5ml</h4>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion">\
                                    <h4>Según dosis indicada</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Retirar del FA </p>\
                                </div>\
                            </div>\
                        </div>\
                    </div>\
                    <div class="contenedor__Presentacion">\
                        <div class="titulo__Presentacion">\
                            <h4 class="presentacion2">Comprimidos 200mg, 400mg, 800mg.</h4>\
                        </div>\
                        <div class="titulo__Presentacion">\
                            <h4 class="presentacion2">Oftalmico 5mg/ml.</h4>\
                        </div>\
                        <div class="titulo__Presentacion">\
                            <h4 class="presentacion2">Tópico/Ünguento al 5% 15mg, 10mg.</h4>\
                        </div>\
                        <div class="titulo__Presentacion">\
                            <h4 class="presentacion2">Spray Bucal + lidocaina 50ml</h4>\
                        </div>\
                    </div>\
                    <h3 class="estabilidad">Estabilidad y observaciones</h3>\
                    <div class="contenedor__Estabilidad">\
                        <p class="texto__Estabilidad">Una vez reconstituida dura <b class="texto__Blanco">12 hs a temperatura ambiente, no refrigerar por riesgo a precipitación</b>, luego de este tiempo desechar.</p>\
                        <p class="texto__Observaciones">Riesgo de flebitis o inflamación en el sitio punción en altas concetraciones.</p>\
                    </div>\
                    <h4 class="texto1">En base a la dosis indicada y la forma de administración elegida:</h4>\
                    <h3 class="administracion">IntraVenosa Directa (IVD) --[PUSH]--</h3>\
                    <div class="contenedor__Presentacion">\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion__NO">\
                                    <h4>NO</h4>\
                                </div>\
                            </div>\
                        </div>\
                    </div>\
                    <h3 class="administracion">IntraVenosa Intermitente (IVI) --[2° CANAL]--</h3>\
                    <div class="contenedor__Presentacion">\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion">\
                                    <h4>Diluyente</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Sol. Fisiologica o DX 5%.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion">\
                                    <h4>Minima</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Llevar a <b>'+dilucion+'ml</b> por via periferica.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion">\
                                    <h4>Recomendada</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Llevar a <b>'+dilucion2+'ml</b> por via periferica.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion">\
                                    <h4>Máxima</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Llevar a <b>'+dilucion3+'ml por via central.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion">\
                                    <h4>Infusión</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>En 60 minutos.</p>\
                                </div>\
                            </div>\
                        </div>\
                    </div>\
                </div>\
               </div>'
                informacion.innerHTML += info;
                //OBTENEMOS EL ELEMENTO DEL BOTON BORRAR Y LO VISUALIZAMOS EN CONSOLA
                console.log(btn);
                //EVENTO AL HACER CLICK EN EL BOTON BORRAR RESTABLECE EL ELEMENTO <P> ORGINAL.
                btn.addEventListener('click', function(e){
                    informacion.innerHTML = informaacionOriginal;
                    fondo.style.backgroundColor = '#318CE7';
                    btn1.style.display = 'block';
                });
            } 
            //ADENOSINA
            else if(nombreMedicamento === "adenosina"   || nombreMedicamento ==="ADENOSINA" || nombreMedicamento === "Adenosina" ){
                
                 let entero = Number.isInteger(dosis);// VARIABLE PARA COMPARACION


                //FUNCION DE COMPARACION DE LA DOSIS
                function calculo(){
                    if (dosis === entero){//COMPARA QUE LA DOSIS SEA UN ENTERO Y LO MANTIENE
                        let reconstitucion = (dosis*2)/6;
                        console.log(reconstitucion);
                        return reconstitucion;//IMPRIME EL VALOR ENTERO
                    } else if(dosis !== entero){//COMPARA QUE LA DOSIS NO SEA UN VALOR ENTERO Y LO CONVIERTE A FLOTANTE
                        let reconstitucion = (dosis*2)/6;
                         redondeo1 = (reconstitucion.toFixed(1));//MUESTRA SOLAMENTE LOS 2 DECIMALES DESPUES DE LA COMA DEL FLOTANTE
                         console.log(redondeo1);
                         return redondeo1;//IMPRIME EL FLOTANTE
                    }               
                };
                
                calculo(dosis);
                
                function ampollas(){
                    if (dosis === entero){
                        let ampollas = dosis/6;
                        console.log(ampollas);
                        if (ampollas === 1){
                            return "1 ampolla.";
                        } else if (ampollas !== 1){
                            return ampollas + " ampollas.";
                        };
                } else if(dosis !== entero){
                    let ampollas = dosis/6;
                    redondeo2 = (ampollas.toFixed(2));
                    console.log(redondeo2);
                    if (ampollas === 1.00){
                        ampollas = parseInt(ampollas);
                        return "1 ampolla.";
                    }
                    return Math.ceil(redondeo2) + " ampollas.";
                }
                }
                ampollas(dosis);

                dilucion1 = parseInt(dosis/1);
                console.log(dilucion1);
                dilucion2 = parseInt(dosis/2);
                console.log(dilucion2);
                dilucion3 = parseInt(dosis/3);
                console.log(dilucion3);
    
                let fondo = document.querySelector('.contenedor');
                console.log(fondo);
                fondo.style.backgroundColor = '#B71C1C';
    
                let info = 
                '<div class="contenedor__Grilla">\
                <div class="contenedor__Titulo">\
                    <h3 class="nombre__Farmaco2">Adenosina</h3>\
                </div>\
                <div class="contenedor__Info">\
                    <div class="contenedor__Presentacion">\
                        <div class="titulo__Presentacion2">\
                            <h4 class="presentacion">Ampolla 6mg/2ml</h4>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion2">\
                                    <h4>Según dosis indicada</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Retirar de la ampolla '+calculo()+' ml.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion2">\
                                    <h4>Cantidad a utilizar</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>para la dosis indicada se debe utlizar '+ampollas()+'</p>\
                                </div>\
                            </div>\
                        </div>\
                    </div>\
                    <h3 class="estabilidad2">Estabilidad y observaciones</h3>\
                    <div class="contenedor__Estabilidad">\
                        <p class="texto__Estabilidad"><b class="texto__Blanco">No refrigerar</b> una vez diluido, puede precipitar.</p>\
                        <p class="texto__Observaciones">Utilizar la via mas cercana al corazón.</p>\
                        <p class="texto__Observaciones">Una vez reconstituida y preparada la solución, administrar inmediatamente.</p>\
                    </div>\
                    <h4 class="texto1">En base a la dosis indicada y la forma de administración elegida:</h4>\
                    <h3 class="administracion2">IntraVenosa Directa (IVD) --[PUSH]--</h3>\
                    <div class="contenedor__Presentacion">\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion2">\
                                    <h4>Diluyente</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Sol. Fisiologica.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion2">\
                                    <h4>Minima</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Llevar a <b>'+dilucion1+' ml</b> por via periferica.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion2">\
                                    <h4>Recomendada</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Llevar a <b>'+dilucion2+' ml</b> por via periferica.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion2">\
                                    <h4>Máxima:</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Llevar a <b>'+dilucion3+' ml</b> por via central.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion2">\
                                    <h4>Infusión</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Se debe administrar de manera rápida de 1 a 2 segundos y lavar inmediatamente con 5-10 ml de solución fisiológica.</p>\
                                </div>\
                            </div>\
                        </div>\
                    </div>\
                    <h3 class="administracion2">IntraVenosa Intermitente (IVI) --[2° CANAL]--</h3>\
                    <div class="contenedor__Presentacion">\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion2">\
                                    <h4>Contraindicada</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Se inactiva al ponerse en contacto con los glóbulos rojos.</p>\
                                </div>\
                            </div>\
                        </div>\
                    </div>\
                </div>\
               </div>'
                informacion.innerHTML += info;
                //OBTENEMOS EL ELEMENTO DEL BOTON BORRAR Y LO VISUALIZAMOS EN CONSOLA
                console.log(btn);
                //EVENTO AL HACER CLICK EN EL BOTON BORRAR RESTABLECE EL ELEMENTO <P> ORGINAL.
                btn.addEventListener('click', function(e){
                    informacion.innerHTML = informaacionOriginal;
                    fondo.style.backgroundColor = '#318CE7';
                    btn1.style.display = 'block';
                });
            }
            //ADRENALINA
            else if(nombreMedicamento === "adrenalina" || nombreMedicamento === "Adrenalina" || nombreMedicamento === "ADRENALINA"){
                

                let retirar = dosis/1;
                
                dilucion1 = Number(dosis) + 100;
                console.log(dilucion1);
                dilucion2 = parseInt(dosis/2);
                console.log(dilucion2);
                dilucion3 = parseInt(dosis/3);
                console.log(dilucion3);
                
                


                let fondo = document.querySelector('.contenedor');
                console.log(fondo);
                fondo.style.backgroundColor = '#B71C1C';
    
                let info = 
                '<div class="contenedor__Grilla">\
                <div class="contenedor__Titulo">\
                    <h3 class="nombre__Farmaco2">Adrenalina</h3>\
                </div>\
                <div class="contenedor__Info">\
                    <div class="contenedor__Presentacion">\
                        <div class="titulo__Presentacion2">\
                            <h4 class="presentacion2">Ampolla de 1mg/1ml (equivalencia 1:1000).</h4>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion2">\
                                    <h4>Según dosis indicada</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Retirar de la ampolla '+retirar+'ml .</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion2">\
                                    <h4>Cantidad a utilizar</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>para la dosis indicada se debe utlizar '+retirar+' ampolla/as.</p>\
                                </div>\
                            </div>\
                        </div>\
                    </div>\
                    <h3 class="estabilidad2">Estabilidad y observaciones</h3>\
                    <div class="contenedor__Estabilidad">\
                        <p class="texto__Estabilidad"><b class="texto__Blanco">Proteger de la luz, estabilidad de 24hs a temperatura ambiente.</b></p>\
                    </div>\
                    <h4 class="texto1">En base a la dosis indicada y la forma de administración elegida:</h4>\
                    <h3 class="administracion2">IntraVenosa Directa (IVD) --[PUSH]--</h3>\
                    <div class="contenedor__Presentacion">\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion2">\
                                    <h4>Preparar</h4>\
                                </div>\
                                <div class="datos">\
                                    <p><b>1ml de adrenalina en 9ml de S.F. o Agua Destilada.</b></p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion2">\
                                    <h4>Concentración</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>1:10.000.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion2">\
                                    <h4>Dosis</h4>\
                                </div>\
                                <div class="datos">\
                                    <p><b>0.1ml/kg.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion2">\
                                    <h4>Infusión</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>De forma lenta, lavando con bolos de 3-5ml; repetir hasta 3 veces.</p>\
                                </div>\
                            </div>\
                        </div>\
                    </div>\
                    <h3 class="administracion2">IntraVenosa Intermitente (IVI) --[2° CANAL]--</h3>\
                    <div class="contenedor__Presentacion">\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion2">\
                                    <h4>NO.</h4>\
                                </div>\
                            </div>\
                        </div>\
                    </div>\
                    <h3 class="administracion2">IntraVenosa Continua (IVC) --[GOTEO]--</h3>\
                    <div class="contenedor__Presentacion">\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion2">\
                                    <h4>Dilución</h4>\
                                </div>\
                                <div class="datos">\
                                    <p><b>Dosis indicada + 100 ml de S. DX5%..</b></p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion2">\
                                    <h4>El plan debe ser</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Adrenalina_____'+dosis+'ml<br>\
                                    DX5%_____100ml<br>\
                                    Total_____'+dilucion1+'ml</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion2">\
                                    <h4>Purgar en</h4>\
                                </div>\
                                <div class="datos__Fotosensible">\
                                    <p><b>Perfus Fotosensible.</b></p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion2">\
                                    <h4>Identificar con</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Cinta de color rojo el perfus y rotulo de color rojo en la solución.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion2">\
                                    <h4>Sachet</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Cambiar cada 24hs, cubrir para proteger de la luz.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion2">\
                                    <h4>Duración del Perfus Fotosensible</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>7 días para el recambio</p>\
                                </div>\
                            </div>\
                        </div>\
                    </div>\
                    <h3 class="administracion2">IntraMuscular (IM) o Subcutanea (SC)</h3>\
                    <div class="contenedor__Presentacion">\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion2">\
                                    <h4>En casos de anafilaxia</h4>\
                                </div>\
                                <div class="datos">\
                                    <p><b>Repetir dosis cada 5-15 minutos, hasta un total de  3 veces.</b></p>\
                                </div>\
                            </div>\
                        </div>\
                    </div>\
                    <h3 class="administracion2">Nebulización (NBZ)</h3>\
                    <div class="contenedor__Presentacion">\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="datos">\
                                    <p><b>3 - 5 mg + 4ml de S.F. con oxigeno a bajo flujo 4-6L/min. Siempre asociado a coticoides.</b></p>\
                                </div>\
                            </div>\
                        </div>\
                    </div>\
                    <h3 class="administracion2">Endotraqueal (EDT)</h3>\
                    <div class="contenedor__Presentacion">\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion2">\
                                    <h4>Dosis</h4>\
                                </div>\
                                <div class="datos">\
                                    <p><b>0.1mg/kg.</b></p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion2">\
                                    <h4>Dosis Máxima</h4>\
                                </div>\
                                <div class="datos">\
                                    <p><b>2.5mg/kg.</b></p>\
                                </div>\
                                <div class="datos">\
                                    <p><b>Lavar con 2.5 a 5 ml de S.F.</b></p>\
                                </div>\
                            </div>\
                        </div>\
                    </div>\
                </div>\
                </div>'
                informacion.innerHTML += info;
                //OBTENEMOS EL ELEMENTO DEL BOTON BORRAR Y LO VISUALIZAMOS EN CONSOLA
                console.log(btn);
                //EVENTO AL HACER CLICK EN EL BOTON BORRAR RESTABLECE EL ELEMENTO <P> ORGINAL.
                btn.addEventListener('click', function(e){
                    informacion.innerHTML = informaacionOriginal;
                    fondo.style.backgroundColor = '#318CE7';
                    btn1.style.display = 'block';
                });   
            }
            //AMIKACINA
            else if(nombreMedicamento === "Amikacina" || nombreMedicamento === "amikacina" || nombreMedicamento === "AMIKACINA"){

                let entero = Number.isInteger(dosis);// VARIABLE PARA COMPARACION


                //FUNCION DE COMPARACION DE LA DOSIS
                function calculo(){
                    if (dosis === entero){//COMPARA QUE LA DOSIS SEA UN ENTERO Y LO MANTIENE
                        let reconstitucion = (dosis*2)/500;
                        console.log(reconstitucion);
                        return reconstitucion;//IMPRIME EL VALOR ENTERO
                    } else if(dosis !== entero){//COMPARA QUE LA DOSIS NO SEA UN VALOR ENTERO Y LO CONVIERTE A FLOTANTE
                        let reconstitucion = (dosis*2)/500;
                         redondeo1 = (reconstitucion.toFixed(1));//MUESTRA SOLAMENTE LOS 2 DECIMALES DESPUES DE LA COMA DEL FLOTANTE
                         console.log(redondeo1);
                         return redondeo1;//IMPRIME EL FLOTANTE
                    }               
                };

                function ampollas(){
                    if (dosis === entero){
                        let ampollas = dosis/500;
                        console.log(ampollas);
                        if (ampollas === 1){
                            return "1 ampolla.";
                        } else if (ampollas !== 1){
                            return ampollas + " ampollas.";
                        };
                } else if(dosis !== entero){
                    let ampollas = dosis/500;
                    redondeo2 = (ampollas.toFixed(2));
                    console.log(redondeo2);
                    if (ampollas === 1.00){
                        ampollas = parseInt(ampollas);
                        return "1 ampolla.";
                    }
                    return Math.ceil(redondeo2) + " ampollas.";
                }
                }

                minima = (dosis*2)/2;
                recomendada = (dosis*2)/5;
                maxima = (dosis*2)/10;

                let fondo = document.querySelector('.contenedor');
                console.log(fondo);
                fondo.style.backgroundColor = '#1357a6';

                let info = 
                '<div class="contenedor__Grilla">\
                <div class="contenedor__Titulo">\
                    <h3 class="nombre__Farmaco">Amikacina</h3>\
                </div>\
                <div class="contenedor__Info">\
                    <div class="contenedor__Presentacion">\
                        <div class="titulo__Presentacion">\
                            <h4 class="presentacion">Ampolla de 500mg/2ml (250mg/ml).</h4>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion">\
                                    <h4>Según dosis indicada</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Retirar de la ampolla '+calculo()+' ml.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion">\
                                    <h4>Cantidad a utilizar</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Para la dosis indicada se debe utlizar '+ampollas()+'.</p>\
                                </div>\
                            </div>\
                        </div>\
                    </div>\
                    <h3 class="estabilidad">Estabilidad y observaciones</h3>\
                    <div class="contenedor__Estabilidad">\
                        <p class="texto__Estabilidad"><b class="texto__Blanco">Vial exclusivo de un solo uso!, por inestabilidad microbiológica se recomienda desechar una vez abierto.</b></p>\
                        <p class="texto__Observaciones"><b class="texto__Blanco">Administrar céfalosporinas o penicilinas 1 hora antes o despues.</b></p>\
                    </div>\
                    <h4 class="texto1">En base a la dosis indicada y la forma de administración elegida.</h4>\
                    <h3 class="administracion">IntraVenosa Directa (IVD) --[PUSH]--</h3>\
                    <div class="contenedor__Presentacion">\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion">\
                                    <h4>NO.</h4>\
                                </div>\
                            </div>\
                        </div>\
                    </div>\
                    <h3 class="administracion">IntraVenosa Intermitente (IVI) --[2° CANAL]--</h3>\
                    <div class="contenedor__Presentacion">\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion">\
                                    <h4>Diluyente</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Con S.F. o DX5%.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                        <div class="info__Uno">\
                                <div class="reconstitucion">\
                                    <h4>Dilución Minima</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Llevar a '+minima+' de solucion por via periferica.</p>\
                                </div>\
                        </div>\
                        </div>\
                        <div class="info__Presentacion">\
                                <div class="info__Uno">\
                                    <div class="reconstitucion">\
                                        <h4>Dilución Recomendada</h4>\
                                    </div>\
                                    <div class="datos">\
                                        <p>Llevar a '+recomendada+' de solucion por via periferica.</p>\
                                    </div>\
                                </div>\
                        </div>\
                        <div class="info__Presentacion">\
                                <div class="info__Uno">\
                                    <div class="reconstitucion">\
                                        <h4>Dilución Máxima</h4>\
                                    </div>\
                                    <div class="datos">\
                                        <p>Llevar a '+maxima+' de solucion por via central.</p>\
                                    </div>\
                                </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion">\
                                    <h4>Infusión</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>En 60 minutos a 2hs.</p>\
                                </div>\
                            </div>\
                    </div>\
                    </div>\
                    <h3 class="administracion">IntraVenosa Continua (IVC) --[GOTEO]--</h3>\
                    <div class="contenedor__Presentacion">\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion">\
                                    <h4>NO.</h4>\
                                </div>\
                            </div>\
                        </div>\
                    </div>\
                    <h3 class="administracion">IntraMuscular (IM)</h3>\
                    <div class="contenedor__Presentacion">\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion">\
                                    <h4>Administración profunda directa sin diluir.</h4>\
                                </div>\
                            </div>\
                        </div>\
                    </div>\
                </div>\
                </div>'
                informacion.innerHTML += info;
                //OBTENEMOS EL ELEMENTO DEL BOTON BORRAR Y LO VISUALIZAMOS EN CONSOLA
                console.log(btn);
                //EVENTO AL HACER CLICK EN EL BOTON BORRAR RESTABLECE EL ELEMENTO <P> ORGINAL.
                btn.addEventListener('click', function(e){
                    informacion.innerHTML = informaacionOriginal;
                    fondo.style.backgroundColor = '#318CE7';
                    btn1.style.display = 'block';
                });
            }
            //AMINOFILINA
            else if(nombreMedicamento === "Aminofilina" || nombreMedicamento === "aminofilina" || nombreMedicamento === "AMINOFILINA"){

                miligramos = 240;
                frascoTotal = 10;
                recomendada =dosis/1;
                maxima = dosis/5;
                concentracion = dosis/2;

                let fondo = document.querySelector('.contenedor');
                console.log(fondo);
                fondo.style.backgroundColor = '#B71C1C';

                let info = 
                '<div class="contenedor__Grilla">\
                <div class="contenedor__Titulo">\
                    <h3 class="nombre__Farmaco2">Aminofilina</h3>\
                </div>\
                <div class="contenedor__Info">\
                    <div class="contenedor__Presentacion">\
                        <div class="titulo__Presentacion2">\
                            <h4 class="presentacion">Ampolla de 10ml (24mg/ml).</h4>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion2">\
                                    <h4>Según dosis indicada</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Retirar de la ampolla '+calculo()+' .</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion2">\
                                    <h4>Cantidad a utilizar</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Para la dosis indicada se debe utlizar '+ampollas()+'</p>\
                                </div>\
                            </div>\
                        </div>\
                    </div>\
                    <h3 class="estabilidad2">Estabilidad y observaciones</h3>\
                    <div class="contenedor__Estabilidad">\
                        <p class="texto__Estabilidad"><b class="texto__Blanco">Proteger de la luz durante su admnisitración.</b></p>\
                    </div>\
                    <h4 class="texto1">En base a la dosis indicada y la forma de administración elegida:</h4>\
                    <h3 class="administracion2">IntraVenosa Directa (IVD) --[PUSH]--</h3>\
                    <div class="contenedor__Presentacion">\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion2">\
                                    <h4>Administrar 25mg/ml (poco recomendado en pediatría).</h4>\
                                </div>\
                            </div>\
                        </div>\
                    </div>\
                    <h3 class="administracion2">IntraVenosa Intermitente (IVI) --[2° CANAL]--</h3>\
                    <div class="contenedor__Presentacion">\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion2">\
                                    <h4>Diluyente</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Con S.F. (preferentemente) o DX5%.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                                <div class="info__Uno">\
                                    <div class="reconstitucion2">\
                                        <h4>Dilución Recomendada</h4>\
                                    </div>\
                                    <div class="datos">\
                                        <p>Llevar a '+recomendada+' de solucion por via periferica.</p>\
                                    </div>\
                                </div>\
                        </div>\
                        <div class="info__Presentacion">\
                                <div class="info__Uno">\
                                    <div class="reconstitucion2">\
                                        <h4>Dilución Máxima</h4>\
                                    </div>\
                                    <div class="datos">\
                                        <p>Llevar a '+maxima+' de solucion por via central.</p>\
                                    </div>\
                                </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion2">\
                                    <h4>Infusión</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>En 20-30 minutos.</p>\
                                </div>\
                            </div>\
                        </div>\
                    </div>\
                    <h3 class="administracion2">IntraVenosa Continua (IVC) --[GOTEO]--</h3>\
                    <div class="contenedor__Presentacion">\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion2">\
                                    <h4>Diluir en</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>S.F. o DX 5%.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion2">\
                                    <h4>Concentración</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Llevar a '+concentracion+' ml.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion2">\
                                    <h4>Infusión</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>0,1-1mg/kg/h (según edad).</p>\
                                </div>\
                            </div>\
                        </div>\
                    </div>\
                </div>\
                </div>'
                informacion.innerHTML += info;
                //OBTENEMOS EL ELEMENTO DEL BOTON BORRAR Y LO VISUALIZAMOS EN CONSOLA
                console.log(btn);
                //EVENTO AL HACER CLICK EN EL BOTON BORRAR RESTABLECE EL ELEMENTO <P> ORGINAL.
                btn.addEventListener('click', function(e){
                    informacion.innerHTML = informaacionOriginal;
                    fondo.style.backgroundColor = '#318CE7';
                    btn1.style.display = 'block';
                });
                

            }
            //AMIODARONA
            else if(nombreMedicamento === "Amiodarona" || nombreMedicamento === "amiodarona" || nombreMedicamento === "AMIODARONA"){

                miligramos = 150;
                frascoTotal = 3;
                minima = dosis/1;sss
                recomendada =dosis/5;
                maxima = parseInt(dosis/6);
                concentracion = parseInt(dosis/15);

                let fondo = document.querySelector('.contenedor');
                console.log(fondo);
                fondo.style.backgroundColor = '#B71C1C';

                let info = 
                '<div class="contenedor__Grilla">\
                <div class="contenedor__Titulo">\
                    <h3 class="nombre__Farmaco2">Amiodarona</h3>\
                </div>\
                <div class="contenedor__Info">\
                    <div class="contenedor__Presentacion">\
                        <div class="titulo__Presentacion2">\
                            <h4 class="presentacion">Frasco/Ampolla de 3ml (50mg/ml).</h4>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion2">\
                                    <h4>Según dosis indicada</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Retirar de la ampolla '+calculo()+' .</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion2">\
                                    <h4>Cantidad a utilizar</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Para la dosis indicada se debe utlizar '+ampollas()+'</p>\
                                </div>\
                            </div>\
                        </div>\
                    </div>\
                    <div class="contenedor__Presentacion">\
                        <div class="titulo__Presentacion2">\
                            <h4 class="presentacion">Comprimidos 200mg.</h4>\
                        </div>\
                    </div>\
                    <h3 class="estabilidad2">Estabilidad y observaciones</h3>\
                    <div class="contenedor__Estabilidad">\
                        <p class="texto__Estabilidad"><b class="texto__Blanco">Proteger de la luz durante su admnisitración.</b></p>\
                        <p class="texto__Estabilidad"><b class="texto__Blanco">Duración 24hs a T° ambiente.</b></p>\
                    </div>\
                    <h4 class="texto1">En base a la dosis indicada y la forma de administración elegida:</h4>\
                    <h3 class="administracion2">IntraVenosa Directa (IVD) --[PUSH]--</h3>\
                    <div class="contenedor__Presentacion">\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion2">\
                                    <h4>Poco recomendado en pediatría (PRD).</h4>\
                                </div>\
                            </div>\
                        </div>\
                    </div>\
                    <h3 class="administracion2">IntraVenosa Intermitente (IVI) --[2° CANAL]--</h3>\
                    <div class="contenedor__Presentacion">\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion2">\
                                    <h4>Diluyente</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>DX5%.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion2">\
                                    <h4>Dilución Minima</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Llevar a '+minima+' ml de solucion.</p>\
                                </div>\
                            </div>\
                    </div>\
                        <div class="info__Presentacion">\
                                <div class="info__Uno">\
                                    <div class="reconstitucion2">\
                                        <h4>Dilución Recomendada</h4>\
                                    </div>\
                                    <div class="datos">\
                                        <p>Llevar a '+recomendada+' ml de solucion.</p>\
                                    </div>\
                                </div>\
                        </div>\
                        <div class="info__Presentacion">\
                                <div class="info__Uno">\
                                    <div class="reconstitucion2">\
                                        <h4>Dilución Máxima</h4>\
                                    </div>\
                                    <div class="datos">\
                                        <p>Llevar a '+maxima+' ml de solucion.</p>\
                                    </div>\
                                </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion2">\
                                    <h4>Infusión</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>en 60 minutos.</p>\
                                </div>\
                                <div class="datos">\
                                    <p>Concentraciones mayores a 2mg/ml infundir por mas de 1hs por via central.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion2">\
                                    <h4>Dosis de carga</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Infundir en 30 minutos.</p>\
                                </div>\
                            </div>\
                        </div>\
                    </div>\
                    <h3 class="administracion2">IntraVenosa Continua (IVC) --[GOTEO]--</h3>\
                    <div class="contenedor__Presentacion">\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion2">\
                                    <h4>Diluir en</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>DX 5%.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion2">\
                                    <h4>Purgar en</h4>\
                                </div>\
                                <div class="datos__Fotosensible">\
                                    <p>Perfus fotosensible.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion2">\
                                    <h4>Sachet</h4>\
                                </div>\
                                <div class="datos__Fotosensible">\
                                    <p>Cambiar cada 24hs, cubrir para proteger de la luz.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion2">\
                                    <h4>Identificar con</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Cinta de color rojo el perfus y rotulo de color rojo en la solución.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion2">\
                                    <h4>Infusión</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>5mg/kg/h (según edad).</p>\
                                </div>\
                            </div>\
                        </div>\
                    </div>\
                    <h3 class="administracion2">En emergencia</h3>\
                    <div class="contenedor__Presentacion">\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion2">\
                                    <h4>Diluir en</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>DX 5%.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion2">\
                                    <h4>Dilucion</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Llevar a '+concentracion+' ml.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion2">\
                                    <h4>Infusión</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Entre 30 minutos a 2hs.</p>\
                                </div>\
                            </div>\
                        </div>\
                    </div>\
                </div>\
                </div>'
                informacion.innerHTML += info;
                //OBTENEMOS EL ELEMENTO DEL BOTON BORRAR Y LO VISUALIZAMOS EN CONSOLA
                console.log(btn);
                //EVENTO AL HACER CLICK EN EL BOTON BORRAR RESTABLECE EL ELEMENTO <P> ORGINAL.
                btn.addEventListener('click', function(e){
                    informacion.innerHTML = informaacionOriginal;
                    fondo.style.backgroundColor = '#318CE7';
                    btn1.style.display = 'block';
                });
                

            }
            //AMPICILINA SULBACTAM
            else if(nombreMedicamento === "Ampicilina Sulbactam" || nombreMedicamento === "ampicilina sulbactam" || nombreMedicamento === "AMPICILINA SULBACTAM"){

                let miligramos1 = 750;
                let miligramos2 = 1500;
                let frascoTotal1 = 1.6;
                let frascoTotal2 = 3.2;

                function calculo1(){
                    if (dosis === entero){//COMPARA QUE LA DOSIS SEA UN ENTERO Y LO MANTIENE
                                    let reconstitucion = (dosis*frascoTotal1)/miligramos1;
                                    console.log(reconstitucion);
                                    return reconstitucion;//IMPRIME EL VALOR ENTERO
                    } else if(dosis !== entero){//COMPARA QUE LA DOSIS NO SEA UN VALOR ENTERO Y LO CONVIERTE A FLOTANTE
                                    let reconstitucion = (dosis*frascoTotal1)/miligramos1;
                                     redondeo1 = (reconstitucion.toFixed(1));//MUESTRA SOLAMENTE LOS 2 DECIMALES DESPUES DE LA COMA DEL FLOTANTE
                                     console.log(redondeo1);
                                     return redondeo1;//IMPRIME EL FLOTANTE
                                }               
                };
            
                function ampollas1(){
                                if (dosis === entero){
                                    let ampollas = dosis/miligramos1;
                                    console.log(ampollas);
                                    if (ampollas === 1){
                                        return;
                                    } else if (ampollas !== 1){
                                        return ampollas ;
                                    };
                            } else if(dosis !== entero){
                                let ampollas = dosis/miligramos1;
                                redondeo2 = (ampollas.toFixed(2));
                                console.log(redondeo2);
                                if (ampollas === 1.00){
                                    ampollas = parseInt(ampollas);
                                    return;
                                }
                                return Math.ceil(redondeo2);
                            }
                }

                function calculo2(){
                    if (dosis === entero){//COMPARA QUE LA DOSIS SEA UN ENTERO Y LO MANTIENE
                                    let reconstitucion = (dosis*frascoTotal2)/miligramos2;
                                    console.log(reconstitucion);
                                    return reconstitucion;//IMPRIME EL VALOR ENTERO
                    } else if(dosis !== entero){//COMPARA QUE LA DOSIS NO SEA UN VALOR ENTERO Y LO CONVIERTE A FLOTANTE
                                    let reconstitucion = (dosis*frascoTotal2)/miligramos2;
                                     redondeo1 = (reconstitucion.toFixed(1));//MUESTRA SOLAMENTE LOS 2 DECIMALES DESPUES DE LA COMA DEL FLOTANTE
                                     console.log(redondeo1);
                                     return redondeo1;//IMPRIME EL FLOTANTE
                                }               
                };
            
                function ampollas2(){
                                if (dosis === entero){
                                    let ampollas = dosis/miligramos2;
                                    console.log(ampollas);
                                    if (ampollas === 1){
                                        return;
                                    } else if (ampollas !== 1){
                                        return ampollas;
                                    };
                            } else if(dosis !== entero){
                                let ampollas = dosis/miligramos2;
                                redondeo2 = (ampollas.toFixed(2));
                                console.log(redondeo2);
                                if (ampollas === 1.00){
                                    ampollas = parseInt(ampollas);
                                    return;
                                }
                                return Math.ceil(redondeo2);
                            }
                }

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
                dilucion6 = parseInt((dosis*3.5)/1000);
                console.log(dilucion6);
    
    
                let fondo = document.querySelector('.contenedor');
                console.log(fondo);
                fondo.style.backgroundColor = '#1357a6';
    
                let info = 
                '<div class="contenedor__Grilla">\
                <div class="contenedor__Titulo">\
                    <h3 class="nombre__Farmaco">Ampicilina + Sulbactam</h3>\
                </div>\
                <div class="contenedor__Info">\
                    <div class="contenedor__Presentacion">\
                        <div class="titulo__Presentacion">\
                            <h4 class="presentacion">Frasco/Ampolla 750mg</h4>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion">\
                                    <h4>Reconstitución</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>En 1,6ml de agua destilada, obteniendo 250mg/ml.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion">\
                                    <h4>Según dosis indicada</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Retirar del FA '+calculo1()+' ml.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion">\
                                    <h4>Cantidad a utilizar</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Para la dosis indicada se debe utlizar '+ampollas1()+' frasco/os</p>\
                                </div>\
                            </div>\
                        </div>\
                    </div>\
                    <div class="contenedor__Presentacion">\
                        <div class="titulo__Presentacion">\
                            <h4 class="presentacion">Frasco/Ampolla 1500mg</h4>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion">\
                                    <h4>Reconstitución</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>En 3,2ml de agua destilada, obteniendo 250mg/ml.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion">\
                                    <h4>Según dosis indicada</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Retirar del FA '+calculo2()+' ml</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion">\
                                    <h4>Cantidad a utilizar</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Para la dosis indicada se debe utlizar '+ampollas2()+' frasco/os</p>\
                                </div>\
                            </div>\
                        </div>\
                    </div>\
                    <h3 class="estabilidad">Estabilidad y observaciones</h3>\
                    <div class="contenedor__Estabilidad">\
                        <p class="texto__Estabilidad">Una vez reconstituida dura <b class="texto__Blanco">1 hs a temperatura ambiente y 2 hs refrigerada</b>, luego de este tiempo desechar.</p>\
                        <p class="texto__Observaciones">El tiempo de preparacion y administracion del medicamento no debe exceder 1 hora.</p>\
                        <p class="texto__Observaciones">Observar signos anafilaxia durante los primeros minutos tras la administración.</p>\
                        <p class="texto__Observaciones">No usar DX 5% acelera su hidrolisis.</p>\
                        <p class="texto__Observaciones">No mezclar con soluciones que contengan aminoácidos.</p>\
                    </div>\
                    <h4 class="texto1">En base a la dosis indicada y la forma de administración elegida:</h4>\
                    <h3 class="administracion">IntraVenosa Directa (IVD) --[PUSH]--</h3>\
                    <div class="contenedor__Presentacion">\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion">\
                                    <h4>Diluyente</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Sol. Fisiologica.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion">\
                                    <h4>Recomendada</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Llevar a <b>'+dilucion1+'ml de S.F.</b> por via periferica.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion">\
                                    <h4>Máxima:</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Llevar a <b>'+dilucion2+'ml de S.F. por via central.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion">\
                                    <h4>Infusión</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Entre 5 a 10 minutos.</p>\
                                </div>\
                            </div>\
                        </div>\
                    </div>\
                    <h3 class="administracion">IntraVenosa Intermitente (IVI) --[2° CANAL]--</h3>\
                    <div class="contenedor__Presentacion">\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion">\
                                    <h4>Diluyente</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Sol. Fisiologica.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion">\
                                    <h4>Recomendada</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Llevar a <b>'+dilucion3+'ml de S.F.</b> por via periferica.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion">\
                                    <h4>Recomendada Máxima</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Llevar a <b>'+dilucion4+'ml de S.F.</b> por via periferica.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion">\
                                    <h4>Máxima</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Llevar a <b>'+dilucion5+'ml de S.F. por via central.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion">\
                                    <h4>Infusión</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Entre 15 a 30 minutos, preparar y administrar inmediatamente.</p>\
                                </div>\
                            </div>\
                        </div>\
                    </div>\
                    <h3 class="administracion">IntraMuscular (IM)</h3>\
                    <div class="contenedor__Presentacion">\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion">\
                                    <h4>Reconstituir</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Con 3,5ml de agua estéril o lidocaina al 1%.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion">\
                                    <h4>Dosis</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>'+dilucion6+'ml de la reconstitución del FA.</p>\
                                </div>\
                            </div>\
                        </div>\
                    </div>\
                </div>\
               </div>'
                informacion.innerHTML += info;
                //OBTENEMOS EL ELEMENTO DEL BOTON BORRAR Y LO VISUALIZAMOS EN CONSOLA
                console.log(btn);
                //EVENTO AL HACER CLICK EN EL BOTON BORRAR RESTABLECE EL ELEMENTO <P> ORGINAL.
                btn.addEventListener('click', function(e){
                    informacion.innerHTML = informaacionOriginal;
                    fondo.style.backgroundColor = '#318CE7';
                    btn1.style.display = 'block';
                });

            }
            //ANFOTERICINA B
            else if(nombreMedicamento === "Anfotericina B" || nombreMedicamento === "anfotericina b" || nombreMedicamento === "ANFOTERICINA B"){

                miligramos = 50;
                frascoTotal = 10;
                
                dilucion1 = parseInt(dosis/0.1);
                console.log(dilucion1);
                dilucion2 = parseInt(dosis/0.5);
                console.log(dilucion2);
    
                let fondo = document.querySelector('.contenedor');
                console.log(fondo);
                fondo.style.backgroundColor = '#1357a6';
    
                let info = 
                '<div class="contenedor__Grilla">\
                <div class="contenedor__Titulo">\
                    <h3 class="nombre__Farmaco">Anfotericina B</h3>\
                </div>\
                <div class="contenedor__Info">\
                    <div class="contenedor__Presentacion">\
                        <div class="titulo__Presentacion">\
                            <h4 class="presentacion">Frasco/Ampolla 50mg</h4>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion">\
                                    <h4>Reconstitución</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>En 10ml de agua destilada, obteniendo 5mg/ml.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion">\
                                    <h4>Según dosis indicada</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Retirar del FA '+calculo()+' ml.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion">\
                                    <h4>Cantidad a utilizar</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Para la dosis indicada se debe utlizar '+ampollas()+' frasco/os</p>\
                                </div>\
                            </div>\
                        </div>\
                    </div>\
                    <h3 class="estabilidad">Estabilidad y observaciones</h3>\
                    <div class="contenedor__Estabilidad">\
                        <p class="texto__Estabilidad">Una vez reconstituida dura <b class="texto__Blanco">24 hs a temperatura ambiente y 48 hs refrigerada</b>, luego de este tiempo desechar.</p>\
                        <p class="texto__Estabilidad">Proteger de la luz durante su conservación y administración.</p>\
                    </div>\
                    <h4 class="texto1">En base a la dosis indicada y la forma de administración elegida:</h4>\
                    <h3 class="administracion">IntraVenosa Directa (IVD) --[PUSH]--</h3>\
                    <div class="contenedor__Presentacion">\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion">\
                                    <h4>NO</h4>\
                                </div>\
                            </div>\
                        </div>\
                    </div>\
                    <h3 class="administracion">IntraVenosa Intermitente (IVI) --[2° CANAL]--</h3>\
                    <div class="contenedor__Presentacion">\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion">\
                                    <h4>Diluyente</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>DX5%.</p>\
                                </div>\
                                <div class="datos">\
                                    <p>No usar S.F. se solidifica.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion">\
                                    <h4>Recomendada</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Llevar a <b>'+dilucion1+'ml de S.F.</b> por via periferica.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion">\
                                    <h4>Máxima</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Llevar a '+dilucion2+'ml de S.F. por via central.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion">\
                                    <h4>Infusión</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Entre 4 a 6 horas, usar acceso venoso exclusivo, no utilizar con otras soluciones.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion">\
                                    <h4>Purgar en</h4>\
                                </div>\
                                <div class="datos__Fotosensible">\
                                    <p>Perfus fotosensible</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion">\
                                    <h4>Identificar con</h4>\
                                </div>\
                                <div class="datos__Fotosensible">\
                                    <p>Cinta amarilla el perfus y rotulo amarillo el sachet.</p>\
                                </div>\
                            </div>\
                        </div>\
                    </div>\
                </div>\
               </div>'
                informacion.innerHTML += info;
                //OBTENEMOS EL ELEMENTO DEL BOTON BORRAR Y LO VISUALIZAMOS EN CONSOLA
                console.log(btn);
                //EVENTO AL HACER CLICK EN EL BOTON BORRAR RESTABLECE EL ELEMENTO <P> ORGINAL.
                btn.addEventListener('click', function(e){
                    informacion.innerHTML = informaacionOriginal;
                    fondo.style.backgroundColor = '#318CE7';
                    btn1.style.display = 'block';
                });

            }
            //ANFOTERICINA LIPOSOMAL
            else if(nombreMedicamento === "Anfotericina Liposomal" || nombreMedicamento === "anfotericina liposomal" || nombreMedicamento === "ANFOTERICINA LIPOSOMAL"){

                miligramos = 50;
                frascoTotal = 10;
                
                dilucion1 = parseInt(dosis/0.2);
                console.log(dilucion1);
                dilucion2 = parseInt(dosis/0.5);
                console.log(dilucion2);
                dilucion3 = parseInt(dosis/2);
                console.log(dilucion3);
    
                let fondo = document.querySelector('.contenedor');
                console.log(fondo);
                fondo.style.backgroundColor = '#1357a6';
    
                let info = 
                '<div class="contenedor__Grilla">\
                <div class="contenedor__Titulo">\
                    <h3 class="nombre__Farmaco">Anfotericina Liposomal</h3>\
                </div>\
                <div class="contenedor__Info">\
                    <div class="contenedor__Presentacion">\
                        <div class="titulo__Presentacion">\
                            <h4 class="presentacion">Frasco/Ampolla 50mg</h4>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion">\
                                    <h4>Reconstitución</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>En 10ml de agua destilada, obteniendo 5mg/ml.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion">\
                                    <h4>Según dosis indicada</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Retirar del FA '+calculo()+' ml.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion">\
                                    <h4>Cantidad a utilizar</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Para la dosis indicada se debe utlizar '+ampollas()+' frasco/os</p>\
                                </div>\
                            </div>\
                        </div>\
                    </div>\
                    <h3 class="estabilidad">Estabilidad y observaciones</h3>\
                    <div class="contenedor__Estabilidad">\
                        <p class="texto__Estabilidad">Una vez reconstituida dura <b class="texto__Blanco">24 hs a temperatura ambiente y 48 hs refrigerada</b>, luego de este tiempo desechar.</p>\
                        <p class="texto__Estabilidad">Proteger de la luz durante su conservación y administración.</p>\
                        <p class="texto__Observaciones">No es necesario premedicar con difenhidramina o hidrocortisona.</p>\
                        <p class="texto__Observaciones">Lavar la vía con DX 5% antes y despues de su administración.</p>\
                        <p class="texto__Observaciones">No administrar con soluciones que contengan electrolitos.</p>\
                    </div>\
                    <h4 class="texto1">En base a la dosis indicada y la forma de administración elegida:</h4>\
                    <h3 class="administracion">IntraVenosa Directa (IVD) --[PUSH]--</h3>\
                    <div class="contenedor__Presentacion">\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion">\
                                    <h4>NO</h4>\
                                </div>\
                            </div>\
                        </div>\
                    </div>\
                    <h3 class="administracion">IntraVenosa Intermitente (IVI) --[2° CANAL]--</h3>\
                    <div class="contenedor__Presentacion">\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion">\
                                    <h4>Diluyente</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>DX5%.</p>\
                                </div>\
                                <div class="datos">\
                                    <p>No usar S.F. se solidifica.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion">\
                                    <h4>Minima</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Llevar a <b>'+dilucion1+'ml de S.F.</b> por via periferica.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion">\
                                    <h4>Recomendada</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Llevar a <b>'+dilucion2+'ml de S.F.</b> por via periferica.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion">\
                                    <h4>Máxima</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Llevar a '+dilucion3+'ml de S.F. por via central.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion">\
                                    <h4>Infusión</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Entre 60 minutos a 2 horas, usar acceso venoso exclusivo, no utilizar con otras soluciones.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion">\
                                    <h4>Purgar en</h4>\
                                </div>\
                                <div class="datos__Fotosensible">\
                                    <p>Perfus fotosensible</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion">\
                                    <h4>Identificar con</h4>\
                                </div>\
                                <div class="datos__Fotosensible">\
                                    <p>Cinta amarilla el perfus y rotulo amarillo el sachet.</p>\
                                </div>\
                            </div>\
                        </div>\
                    </div>\
                </div>\
               </div>'
                informacion.innerHTML += info;
                //OBTENEMOS EL ELEMENTO DEL BOTON BORRAR Y LO VISUALIZAMOS EN CONSOLA
                console.log(btn);
                //EVENTO AL HACER CLICK EN EL BOTON BORRAR RESTABLECE EL ELEMENTO <P> ORGINAL.
                btn.addEventListener('click', function(e){
                    informacion.innerHTML = informaacionOriginal;
                    fondo.style.backgroundColor = '#318CE7';
                    btn1.style.display = 'block';
                });

            }
            //CEFALOTINA
            else if(nombreMedicamento === "Cefalotina" || nombreMedicamento === "cefalotina" || nombreMedicamento === "CEFALOTINA"){

                miligramos = 1000;
                frascoTotal = 10;
                
                dilucion1 = parseInt(dosis/50);
                console.log(dilucion1);
                dilucion2 = parseInt(dosis/100);
                console.log(dilucion2);
                dilucion3 = parseInt(dosis/20);
                console.log(dilucion3);
                dilucion4 = parseInt(dosis/50);
                console.log(dilucion4);
                let miligramosim = 900;
                let frascoim = 4;

                function IM(){
                    if (dosis === entero){//COMPARA QUE LA DOSIS SEA UN ENTERO Y LO MANTIENE
                                    let reconstitucion = (dosis*frascoim)/miligramosim;
                                    console.log(reconstitucion);
                                    return reconstitucion;//IMPRIME EL VALOR ENTERO
                    } else if(dosis !== entero){//COMPARA QUE LA DOSIS NO SEA UN VALOR ENTERO Y LO CONVIERTE A FLOTANTE
                                    let reconstitucion = (dosis*frascoim)/miligramosim;
                                     redondeo1 = (reconstitucion.toFixed(1));//MUESTRA SOLAMENTE LOS 2 DECIMALES DESPUES DE LA COMA DEL FLOTANTE
                                     console.log(redondeo1);
                                     return redondeo1;//IMPRIME EL FLOTANTE
                                }               
                };
    
                let fondo = document.querySelector('.contenedor');
                console.log(fondo);
                fondo.style.backgroundColor = '#1357a6';
    
                let info = 
                '<div class="contenedor__Grilla">\
                <div class="contenedor__Titulo">\
                    <h3 class="nombre__Farmaco">Cefalotina</h3>\
                </div>\
                <div class="contenedor__Info">\
                    <div class="contenedor__Presentacion">\
                        <div class="titulo__Presentacion">\
                            <h4 class="presentacion">Frasco/Ampolla 50mg</h4>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion">\
                                    <h4>Reconstitución</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>En 10ml de agua destilada, obteniendo 100mg/ml.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion">\
                                    <h4>Según dosis indicada</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Retirar del FA '+calculo()+' ml.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion">\
                                    <h4>Cantidad a utilizar</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Para la dosis indicada se debe utlizar '+ampollas()+' frasco/os</p>\
                                </div>\
                            </div>\
                        </div>\
                    </div>\
                    <h3 class="estabilidad">Estabilidad y observaciones</h3>\
                    <div class="contenedor__Estabilidad">\
                        <p class="texto__Estabilidad">Una vez reconstituida dura <b class="texto__Blanco">12 hs a temperatura ambiente y 24 hs refrigerada</b>, luego de este tiempo desechar.</p>\
                        <p class="texto__Observaciones">El cambio de color no indica inactividad.</p>\
                    </div>\
                    <h4 class="texto1">En base a la dosis indicada y la forma de administración elegida:</h4>\
                    <h3 class="administracion">IntraVenosa Directa (IVD) --[PUSH]--</h3>\
                    <div class="contenedor__Presentacion">\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion">\
                                    <h4>Diluyente</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>S.F. o DX5%.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion">\
                                    <h4>Recomendada</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Llevar a <b>'+dilucion1+'ml de S.F.</b> por via periferica.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion">\
                                    <h4>Máxima</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Llevar a '+dilucion2+'ml de S.F. por via central.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion">\
                                    <h4>Infusión</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>De 3 a 5 minutos.</p>\
                                </div>\
                            </div>\
                        </div>\
                    </div>\
                    <h3 class="administracion">IntraVenosa Intermitente (IVI) --[2° CANAL]--</h3>\
                    <div class="contenedor__Presentacion">\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion">\
                                    <h4>Diluyente</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>S.F. o DX5%.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion">\
                                    <h4>Recomendada</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Llevar a <b>'+dilucion3+'ml de S.F.</b> por via periferica.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion">\
                                    <h4>Máxima</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Llevar a '+dilucion4+'ml de S.F. por via central.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion">\
                                    <h4>Infusión</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>En 30 minutos.</p>\
                                </div>\
                            </div>\
                        </div>\
                    </div>\
                    <h3 class="administracion">IntraMuscular (IM)</h3>\
                    <div class="contenedor__Presentacion">\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion">\
                                    <h4>Reconstitución</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>En 4ml de lidocaina al 1%</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion">\
                                    <h4>Concentración</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>225mg/ml.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion">\
                                    <h4>Dosis Indicada</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Debe retirar '+IM()+'ml del Frasco/Ampolla.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion">\
                                    <h4>No reconstituir con S.F.</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Porque su administración IM es muy dolorosa.</p>\
                                </div>\
                            </div>\
                        </div>\
                    </div>\
                </div>\
               </div>'
                informacion.innerHTML += info;
                //OBTENEMOS EL ELEMENTO DEL BOTON BORRAR Y LO VISUALIZAMOS EN CONSOLA
                console.log(btn);
                //EVENTO AL HACER CLICK EN EL BOTON BORRAR RESTABLECE EL ELEMENTO <P> ORGINAL.
                btn.addEventListener('click', function(e){
                    informacion.innerHTML = informaacionOriginal;
                    fondo.style.backgroundColor = '#318CE7';
                    btn1.style.display = 'block';
                });

            }
            //CEFAZOLINA
            else if(nombreMedicamento === "Cefazolina" || nombreMedicamento === "cefazolina" || nombreMedicamento === "CEFAZOLINA"){

                miligramos = 1000;
                frascoTotal = 10;
                
                dilucion1 = parseInt(dosis/50);
                console.log(dilucion1);
                dilucion2 = parseInt(dosis/100);
                console.log(dilucion2);
                dilucion3 = parseInt(dosis/20);
                console.log(dilucion3);
                dilucion4 = parseInt(dosis/50);
                console.log(dilucion4);
                
                let miligramosim = 900;
                let frascoim = 4;

                function IM(){
                    if (dosis === entero){//COMPARA QUE LA DOSIS SEA UN ENTERO Y LO MANTIENE
                                    let reconstitucion = (dosis*frascoim)/miligramosim;
                                    console.log(reconstitucion);
                                    return reconstitucion;//IMPRIME EL VALOR ENTERO
                    } else if(dosis !== entero){//COMPARA QUE LA DOSIS NO SEA UN VALOR ENTERO Y LO CONVIERTE A FLOTANTE
                                    let reconstitucion = (dosis*frascoim)/miligramosim;
                                     redondeo1 = (reconstitucion.toFixed(1));//MUESTRA SOLAMENTE LOS 2 DECIMALES DESPUES DE LA COMA DEL FLOTANTE
                                     console.log(redondeo1);
                                     return redondeo1;//IMPRIME EL FLOTANTE
                                }               
                };
    
                let fondo = document.querySelector('.contenedor');
                console.log(fondo);
                fondo.style.backgroundColor = '#1357a6';
    
                let info = 
                '<div class="contenedor__Grilla">\
                <div class="contenedor__Titulo">\
                    <h3 class="nombre__Farmaco">Cefazolina</h3>\
                </div>\
                <div class="contenedor__Info">\
                    <div class="contenedor__Presentacion">\
                        <div class="titulo__Presentacion">\
                            <h4 class="presentacion">Frasco/Ampolla 50mg</h4>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion">\
                                    <h4>Reconstitución</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>En 10ml de agua destilada, obteniendo 100mg/ml.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion">\
                                    <h4>Según dosis indicada</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Retirar del FA '+calculo()+' ml.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion">\
                                    <h4>Cantidad a utilizar</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Para la dosis indicada se debe utlizar '+ampollas()+' frasco/os</p>\
                                </div>\
                            </div>\
                        </div>\
                    </div>\
                    <h3 class="estabilidad">Estabilidad y observaciones</h3>\
                    <div class="contenedor__Estabilidad">\
                        <p class="texto__Estabilidad">Una vez reconstituida dura <b class="texto__Blanco">12 hs a temperatura ambiente y 24 hs refrigerada</b>, luego de este tiempo desechar.</p>\
                        <p class="texto__Observaciones">El cambio de color no indica inactividad.</p>\
                    </div>\
                    <h4 class="texto1">En base a la dosis indicada y la forma de administración elegida:</h4>\
                    <h3 class="administracion">IntraVenosa Directa (IVD) --[PUSH]--</h3>\
                    <div class="contenedor__Presentacion">\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion">\
                                    <h4>Diluyente</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>S.F. o DX5%.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion">\
                                    <h4>Recomendada</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Llevar a <b>'+dilucion1+'ml de S.F.</b> por via periferica.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion">\
                                    <h4>Máxima</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Llevar a '+dilucion2+'ml de S.F. por via central.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion">\
                                    <h4>Infusión</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>De 3 a 5 minutos.</p>\
                                </div>\
                            </div>\
                        </div>\
                    </div>\
                    <h3 class="administracion">IntraVenosa Intermitente (IVI) --[2° CANAL]--</h3>\
                    <div class="contenedor__Presentacion">\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion">\
                                    <h4>Diluyente</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>S.F. o DX5%.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion">\
                                    <h4>Recomendada</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Llevar a <b>'+dilucion3+'ml de S.F.</b> por via periferica.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion">\
                                    <h4>Máxima</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Llevar a '+dilucion4+'ml de S.F. por via central.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion">\
                                    <h4>Infusión</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>En 30 minutos.</p>\
                                </div>\
                            </div>\
                        </div>\
                    </div>\
                    <h3 class="administracion">IntraMuscular (IM)</h3>\
                    <div class="contenedor__Presentacion">\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion">\
                                    <h4>Reconstitución</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>En 4ml de lidocaina al 1%</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion">\
                                    <h4>Concentración</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>225mg/ml.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion">\
                                    <h4>Dosis Indicada</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Debe retirar '+IM()+'ml del Frasco/Ampolla.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion">\
                                    <h4>No reconstituir con S.F.</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Porque su administración IM es muy dolorosa.</p>\
                                </div>\
                            </div>\
                        </div>\
                    </div>\
                </div>\
               </div>'
                informacion.innerHTML += info;
                //OBTENEMOS EL ELEMENTO DEL BOTON BORRAR Y LO VISUALIZAMOS EN CONSOLA
                console.log(btn);
                //EVENTO AL HACER CLICK EN EL BOTON BORRAR RESTABLECE EL ELEMENTO <P> ORGINAL.
                btn.addEventListener('click', function(e){
                    informacion.innerHTML = informaacionOriginal;
                    fondo.style.backgroundColor = '#318CE7';
                    btn1.style.display = 'block';
                });

            }
            else{
                let fondo = document.querySelector('.contenedor');
                console.log(fondo);
                fondo.style.backgroundColor = '#e61919';

                let info ='<h2> Agrege un nombre de medicamento valido</h2>'
                informacion.innerHTML += info;
                //EVENTO AL HACER CLICK EN EL BOTON BORRAR RESTABLECE EL ELEMENTO <P> ORGINAL.
                btn.addEventListener('click', function(e){
                    informacion.innerHTML = informaacionOriginal;
                    fondo.style.backgroundColor = '#318CE7';
                });
            };

})


