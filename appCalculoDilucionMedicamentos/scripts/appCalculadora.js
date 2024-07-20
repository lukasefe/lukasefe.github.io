



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
        if (Number.isInteger(dosis)){//COMPARA QUE LA DOSIS SEA UN ENTERO Y LO MANTIENE
                        let reconstitucion = (dosis*frascoTotal)/miligramos;
                        console.log(reconstitucion);
                        if (reconstitucion === Number.isInteger){
                            return reconstitucion;//IMPRIME EL VALOR ENTERO
                        } else {
                            return reconstitucion.toFixed(1);
                        }
                        
        } else {//COMPARA QUE LA DOSIS NO SEA UN VALOR ENTERO Y LO CONVIERTE A FLOTANTE
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
                        return ampollas;
                } else if(dosis !== entero){
                    let ampollas = dosis/miligramos;
                    redondeo2 = (ampollas.toFixed(2));
                    console.log(redondeo2);
                    if (ampollas === 1.00){
                        redondeo2 = parseInt(ampollas);
                        return Math.ceil(redondeo2);
                    }
                    return Math.ceil(redondeo2);
                }
    }

    //BORRA EL ELEMENTO P PARA IMPRMIR ARRIBA LA FUNCION DEL CALCULO
    borrarP.remove();
    btn1.style.display = 'none';
    btn.style.display = 'block';

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
                btn.style.display = 'none';
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
                                    <h4>PH</h4>\
                                </div>\
                                <div class="datos bg-danger text-white">\
                                    <p><b>11 (irritante)</br>Adm. por vía central unicamente.</b></p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion">\
                                    <h4>Máxima (5mg/ml)</h4>\
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
               </div>\
               <div class="contenedor__ficha">\
                <a href="ASSETS/FICHAS/ACICLOVIR.webp" target="_blank"><img src="ASSETS/FICHAS/ACICLOVIR.webp" alt="Fichas del aciclovir"></a>\
               </div>'
                informacion.innerHTML += info;
                //OBTENEMOS EL ELEMENTO DEL BOTON BORRAR Y LO VISUALIZAMOS EN CONSOLA
                console.log(btn);
                //EVENTO AL HACER CLICK EN EL BOTON BORRAR RESTABLECE EL ELEMENTO <P> ORGINAL.
                btn.addEventListener('click', function(e){
                    informacion.innerHTML = informaacionOriginal;
                    fondo.style.backgroundColor = '#318CE7';
                    btn1.style.display = 'block';
                    btn.style.display = 'none';
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
                    btn.style.display = 'none';
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
                    btn.style.display = 'none';
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
                    btn.style.display = 'none';
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
                    btn.style.display = 'none';
                });
                

            }
            //AMIODARONA
            else if(nombreMedicamento === "Amiodarona" || nombreMedicamento === "amiodarona" || nombreMedicamento === "AMIODARONA"){

                miligramos = 150;
                frascoTotal = 3;
                minima = dosis/1;
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
                    btn.style.display = 'none';
                });
                

            }
            //AMPICILINA SULBACTAM
            else if(nombreMedicamento === "Ampicilina Sulbactam" || nombreMedicamento === "ampicilina sulbactam" || nombreMedicamento === "AMPICILINA SULBACTAM"){

                let miligramos1 = 750;
                let miligramos2 = 1000;
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
                    btn.style.display = 'none';
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
                    btn.style.display = 'none';
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
                    btn.style.display = 'none';
                });

            }
            //CARNITINA O L-CARNITINA
            else if(nombreMedicamento === "Carnitina" || nombreMedicamento === "carnitina" || nombreMedicamento === "CARNITINA"|| nombreMedicamento === "L-carnitina" || nombreMedicamento === "l-carnitina" || nombreMedicamento === "L-CARNITINA"){

                miligramos = 1000;
                frascoTotal = 10;
                let dilucion = dosis/0.5;
                let dilucion2 = dosis/8;    

                function redondeo(){
                    if  (Number.isInteger(dilucion)){
                        console.log(dilucion);
                        return dilucion;
                    } else{
                        return dilucion.toFixed(2);
                    }
                }
                function redondeo1(){
                    if  (dilucion2 === Number.isInteger){
                        console.log(dilucion2);
                        return dilucion2;
                    } else{
                        return dilucion2.toFixed(2);
                    }
                }


                let fondo = document.querySelector('.contenedor');
                console.log(fondo);
                fondo.style.backgroundColor = '#e47200';
    
                let info = 
                '<div class="contenedor__Grilla">\
                <div class="contenedor__Titulo">\
                    <h3 class="nombre__Farmaco4">Carnitina o L-Carnitina</h3>\
                </div>\
                <div class="contenedor__Info">\
                    <div class="contenedor__Presentacion">\
                        <div class="titulo__Presentacion4">\
                            <h4 class="presentacion">Frasco/Ampolla Bebible de 10ml (100mg/ml).</h4>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion4">\
                                    <h4>Reconstitución</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>No requiere.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion4">\
                                    <h4>Según dosis indicada</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Retirar del FA '+calculo()+' ml.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion4">\
                                    <h4>Cantidad a utilizar</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Para la dosis indicada se debe utlizar '+ampollas()+' frasco/os</p>\
                                </div>\
                            </div>\
                        </div>\
                    </div>\
                    <h3 class="estabilidad4">Estabilidad y observaciones</h3>\
                    <div class="contenedor__Estabilidad">\
                        <p class="texto__Estabilidad"><b class="texto__Blanco">Mantener refrigerada.</b></p>\
                        <p class="texto__Observaciones">Vía oral: Diluir con bebidas o alimentos líquidos y beber lentamente para aumentar la tolerancia.</p>\
                    </div>\
                    <h4 class="texto1">En base a la dosis indicada y la forma de administración elegida:</h4>\
                    <h3 class="administracion4">IntraVenosa Directa (IVD) --[PUSH]--</h3>\
                    <div class="contenedor__Presentacion">\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion4">\
                                    <h4>Diluyente</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>SF o DX5%.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion4">\
                                    <h4>Recomendada por vía périferica o central (0,5mg/ml)</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Llevar a '+redondeo()+'ml.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion4">\
                                    <h4>Máxima por vía périferica o central (8mg/ml)</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Llevar a '+redondeo1()+'ml.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion4">\
                                    <h4>Infusión</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>De 2 a 3 minutos.</p>\
                                </div>\
                            </div>\
                        </div>\
                    </div>\
                    <h3 class="administracion4">IntraVenosa Intermitente (IVI) --[2° CANAL]--</h3>\
                    <div class="contenedor__Presentacion">\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion4">\
                                    <h4>Dilución:</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>NO.</p>\
                                </div>\
                            </div>\
                        </div>\
                    </div>\
                    <h3 class="administracion4">IntraVenosa (IVC)--[GOTEO]--</h3>\
                    <div class="contenedor__Presentacion">\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion4">\
                                    <h4>NO</h4>\
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
                    btn.style.display = 'none';
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
                    btn.style.display = 'none';
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
                    btn.style.display = 'none';
                });

            }
            //CEFTAZIDIMA
            else if(nombreMedicamento === "Ceftazidima" || nombreMedicamento === "ceftazidima" || nombreMedicamento === "CEFTAZIDIMA"){

                miligramos = 1000;
                frascoTotal = 10;
                
                dilucion1 = parseInt(dosis/40);
                console.log(dilucion1);
                dilucion2 = parseInt(dosis/100);
                console.log(dilucion2);
                dilucion3 = parseInt(dosis/20);
                console.log(dilucion3);
                dilucion4 = parseInt(dosis/40);
                console.log(dilucion4);
                
                let miligramosim = 700;
                let frascoim = 2.5;

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
                    <h3 class="nombre__Farmaco">Ceftazidima</h3>\
                </div>\
                <div class="contenedor__Info">\
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
                        <p class="texto__Estabilidad">Una vez reconstituida dura <b class="texto__Blanco">8 hs a temperatura ambiente y 24 hs refrigerada</b>, luego de este tiempo desechar.</p>\
                        <p class="texto__Estabilidad">Una vez reconstituida con lidocaina dura 6hs a temperatura ambiente, luego de este tiempo desechar.</p>\
                        <p class="texto__Observaciones">El uso prolongado de ceftazidima puede provocar el sobrecrecimiento de microorganismos no sensibles (Entercocci, Candida spp).</p>\
                        <p class="texto__Observaciones">Las soluciones pueden adquirir un color amarillento, no afecta su potencia.</p>\
                        <p class="texto__Observaciones">El F/A reconstituido puede contener burbujas de dióxido de carbono, que deben eliminarse por completo antes de la administración.</p>\
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
                                    <p>Llevar a '+dilucion1+'ml de la solucion por via periferica.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion">\
                                    <h4>Máxima</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Llevar a '+dilucion2+'ml de la solucion por via central.</p>\
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
                                    <p>Llevar a '+dilucion3+'ml de la solucion por via periferica.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion">\
                                    <h4>Máxima</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Llevar a '+dilucion4+'ml de la solucion por via central.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion">\
                                    <h4>Infusión</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Entre 15-30 minutos.</p>\
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
                                    <p>En 2,5ml de lidocaina al 1%</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion">\
                                    <h4>Concentración</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>280mg/ml.</p>\
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
                    btn.style.display = 'none';
                });

            }
            //CEFTRIAXONA
            else if(nombreMedicamento === "Ceftriaxona" || nombreMedicamento === "ceftriaxona" || nombreMedicamento === "CEFTRIAXONA"){

                miligramos = 1000;
                frascoTotal = 10;
                
                dilucion1 = parseInt(dosis/40);
                console.log(dilucion1);
                dilucion2 = parseInt(dosis/100);
                console.log(dilucion2);
                dilucion3 = parseInt(dosis/20);
                console.log(dilucion3);
                dilucion4 = parseInt(dosis/40);
                console.log(dilucion4);
                
                let miligramosim = 700;
                let frascoim = 2.5;

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
                    <h3 class="nombre__Farmaco">Ceftriaxona</h3>\
                </div>\
                <div class="contenedor__Info">\
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
                        <p class="texto__Estabilidad">Una vez reconstituida dura <b class="texto__Blanco">6 hs a temperatura ambiente y 24 hs refrigerada</b>, luego de este tiempo desechar.</p>\
                        <p class="texto__Observaciones">No administrar ceftriaxona simultáneamente (y dentro de las 48 h de intervalo) con soluciones intravenosas que contienen calcio.</p>\
                        <p class="texto__Observaciones">Dolor en el sitio de inyección.</p>\
                        <p class="texto__Observaciones">Probenecid disminuye la excreción renal. Con aminoglucósidos incrementan el potencial de nefrotoxicidad.</p>\
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
                                    <p>Llevar a '+dilucion1+'ml de la solucion por via periferica.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion">\
                                    <h4>Máxima</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Llevar a '+dilucion2+'ml de la solucion por via central.</p>\
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
                                    <p>Llevar a '+dilucion3+'ml de la solucion por via periferica.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion">\
                                    <h4>Máxima</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Llevar a '+dilucion4+'ml de la solucion por via central.</p>\
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
                                    <p>En 2,5ml de lidocaina al 1%</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion">\
                                    <h4>Concentración</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>280mg/ml.</p>\
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
                                <div class="datos">\
                                    <p>Inyectar en un musculo grande de forma lenta.</p>\
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
                    btn.style.display = 'none';
                });

            }
            //CEFUROXIMA
            else if(nombreMedicamento === "Cefuroxima" || nombreMedicamento === "cefuroxima" || nombreMedicamento === "CEFUROXIMA"){

                miligramos = 750;
                frascoTotal = 6;
                
                dilucion1 = parseInt(dosis/30);
                console.log(dilucion1);
                dilucion2 = parseInt(dosis/50);
                console.log(dilucion2);
                restriccionH = parseInt(dosis/100);
                console.log(restriccionH);
                dilucion3 = parseInt(dosis/10);
                console.log(dilucion3);
                dilucion4 = parseInt(dosis/15);
                console.log(dilucion4);
                
                let miligramosim = 700;
                let frascoim = 3;

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
                    <h3 class="nombre__Farmaco">Cefuroxima</h3>\
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
                                    <p>En 10ml de agua destilada, obteniendo 116mg/ml. El resultado de la reconstitución se incrementa por el valor del desplazamiento del fármaco.</p>\
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
                        <p class="texto__Estabilidad">Una vez reconstituida dura <b class="texto__Blanco">5 hs a temperatura ambiente y 48 hs refrigerada</b>, luego de este tiempo desechar.</p>\
                        <p class="texto__Observaciones">Ajustar dosis en insuficiencia renal.</p>\
                        <p class="texto__Observaciones">El cambio de color del vial reconstituido no implica inestabilidad.</p>\
                        <p class="texto__Observaciones">Probenecid disminuye la excreción renal. Con aminoglucósidos incrementan el potencial de nefrotoxicidad.</p>\
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
                                    <p>Llevar a '+dilucion1+'ml de la solucion por via periferica.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion">\
                                    <h4>Máxima</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Llevar a '+dilucion2+'ml de la solucion por via central.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion">\
                                    <h4>Restricción Hidrica</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Llevar a '+restriccionH+'ml de la solucion por via central.</p>\
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
                                    <h4>Minima</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Llevar a '+dilucion3+'ml de la solucion por via periferica.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion">\
                                    <h4>Recomendada</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Llevar a '+dilucion4+'ml de la solucion por via periferica.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion">\
                                    <h4>Máxima</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Llevar a '+dilucion1+'ml de la solucion por via central.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion">\
                                    <h4>Restricción Hidrica</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Llevar a '+restriccionH+'ml de la solucion por via central.</p>\
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
                                    <p>En 3ml de agua destilada</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion">\
                                    <h4>Concentración</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>216mg/ml.</p>\
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
                    btn.style.display = 'none';
                });

            }
            //CICLOSPORINA
            else if(nombreMedicamento === "Ciclosporina" || nombreMedicamento === "ciclosporina" || nombreMedicamento === "CICLOSPORINA"){

                miligramos = 50;
                frascoTotal = 1;
                dilucion = dosis/5;
                dilucion2 = dosis/1;

                let fondo = document.querySelector('.contenedor');
                console.log(fondo);
                fondo.style.backgroundColor = '#1357a6';
    
                let info = 
                '<div class="contenedor__Grilla">\
                <div class="contenedor__Titulo">\
                    <h3 class="nombre__Farmaco">Ciclosporina</h3>\
                </div>\
                <div class="contenedor__Info">\
                    <div class="contenedor__Presentacion">\
                        <div class="titulo__Presentacion">\
                            <h4 class="presentacion">Ampolla 5ml (50mg/ml)</h4>\
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
                    <div class="contenedor__Presentacion">\
                        <div class="titulo__Presentacion">\
                            <h4 class="presentacion">Ampolla 1ml (50mg/ml)</h4>\
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
                        <p class="texto__Estabilidad"><b class="texto__Blanco">No refrigerar. Conservar a temperatura ambiente (inferior a 30 °C). Proteger de la luz.</b></p>\
                        <p class="texto__Observaciones"><b>Solución: no refrigerar. Conservar entre 15-30 °C, preferiblemente no por debajo de 20 °C durante periodos prolongados, porque los componentes oleosos pueden solidificar. Debe utilizarse durante los 2 meses después de abierto el envase.</b></p>\
                        <p class="texto__Observaciones"><b>Monitorizar regularmente la presión arterial. Si se desarrolla hipertensión asociada al tratamiento, puede ser necesario establecer un tratamiento antihipertensivo adecuado.</b></p>\
                        <p class="texto__Observaciones"><b>La dosis total diaria se administrará repartida en 2 dosis, cada 12 horas.</b></p>\
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
                                    <p>DX5% o SF.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion">\
                                    <h4>Minima(5mg/ml)</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Llevar a '+dilucion+'ml.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion">\
                                    <h4>Máxima (1mg/ml)</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Llevar a '+dilucion2+'ml.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion">\
                                    <h4>Infusión</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Entre 60 minutos a 2 horas.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion">\
                                    <h4>Fotosensible</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Utilizar perfus fotosensible y cubrir el sachet para protegerlo de la luz.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion">\
                                    <h4>Recipiente Especial</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>La solución para infusión diluida debe desecharse al cabo de 48 hs. Utilizar frasco de vidrio o envases semirrígidos. No se debe preparar la mezcla intravenosa en sachets de PVC (polivinilcloruro) debido a que la ampolla posee un vehículo en su formulación (aceite de castor polioxietilado) que solubiliza el plastificante (ftalato) del PVC cediéndolo a la preparación.</p>\
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
                    btn.style.display = 'none';
                });

            }
            //CIPROFLOXACINA
            else if(nombreMedicamento === "Ciprofloxacina" || nombreMedicamento === "ciprofloxacina" || nombreMedicamento === "CIPROFLOXACINA"){

                miligramos = 200;
                frascoTotal = 100;

                let fondo = document.querySelector('.contenedor');
                console.log(fondo);
                fondo.style.backgroundColor = '#1357a6';
    
                let info = 
                '<div class="contenedor__Grilla">\
                <div class="contenedor__Titulo">\
                    <h3 class="nombre__Farmaco">Ciprofloxacina</h3>\
                </div>\
                <div class="contenedor__Info">\
                    <div class="contenedor__Presentacion">\
                        <div class="titulo__Presentacion">\
                            <h4 class="presentacion">Sachet 200mg/100ml (2mg/ml)</h4>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion">\
                                    <h4>Reconstitución</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>No requiere.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion">\
                                    <h4>Según dosis indicada</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Retirar del sachet '+calculo()+' ml.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion">\
                                    <h4>Cantidad a utilizar</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Para la dosis indicada se debe utlizar '+ampollas()+' sachet/s</p>\
                                </div>\
                            </div>\
                        </div>\
                    </div>\
                    <div class="contenedor__Presentacion">\
                        <div class="titulo__Presentacion">\
                            <h4 class="presentacion">Comprimidos 500mg</h4>\
                        </div>\
                    </div>\
                    <h3 class="estabilidad">Estabilidad y observaciones</h3>\
                    <div class="contenedor__Estabilidad">\
                        <p class="texto__Estabilidad"><b class="texto__Blanco">Proteger de la luz el sachet o jeringa (baja fotosensibilidad),</b> el perfus no requiere protección.</p>\
                        <p class="texto__Estabilidad"><b class="texto__Blanco">Una vez abierto, si el sachet es RIGIDO, desechar (inestabilidad microbiana); si es FLEX conservar 24hs.</b></p>\
                        <p class="texto__Observaciones">Se aconseja su uso en pediatría sólo en situaciones especiales.</p>\
                        <p class="texto__Observaciones">Administrar lejos de las comidas.</p>\
                        <p class="texto__Observaciones">Los antiácidos (que contengan calcio, magnesio o aluminio) y el sucralfato disminuyen la absorción de la ciprofloxacina si se lo administra concomitantemente.</p>\
                        <p class="texto__Observaciones">Aumenta riesgo de nefrotoxicidad con ciclosporina.</p>\
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
                                    <p>En dosis bajas se puede diluir en DX5% o SF a una concentración de 1mg/ml.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion">\
                                    <h4>Infusión</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Por via central o periferica en 60 minutos.</p>\
                                </div>\
                            </div>\
                        </div>\
                    </div>\
                    <h3 class="administracion">Vía Oral (VO)</h3>\
                    <div class="contenedor__Presentacion">\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="datos">\
                                    <p>Administrar 2hs después de las comidas, preferentemente en ayunas.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="datos">\
                                    <p>Ingerir los comprimidos enteros sin masticar y con un vaso de agua, adicionar varios vasos de agua a lo largo del día.</p>\
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
                    btn.style.display = 'none';
                });

            }
            //CLARITROMICINA
            else if(nombreMedicamento === "Claritromicina" || nombreMedicamento === "claritromicina" || nombreMedicamento === "CLARITROMICINA"){

                miligramos = 500;
                frascoTotal = 10;

                mgsuspencion = 3000;
                frascojarabe = 60;

                dilucion = dosis/2;
                console.log(dilucion);

                function jarabe(){
                    if (dosis === entero){//COMPARA QUE LA DOSIS SEA UN ENTERO Y LO MANTIENE
                                    let reconstitucion = (dosis*frascojarabe)/mgsuspencion;
                                    console.log(reconstitucion);
                                    return reconstitucion;//IMPRIME EL VALOR ENTERO
                    } else if(dosis !== entero){//COMPARA QUE LA DOSIS NO SEA UN VALOR ENTERO Y LO CONVIERTE A FLOTANTE
                                    let reconstitucion = (dosis*frascojarabe)/mgsuspencion;
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
                    <h3 class="nombre__Farmaco">Claritromicina</h3>\
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
                                    <p>10ml de agua destilada, con una concentracion de 50mg/ml.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion">\
                                    <h4>Según dosis indicada</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Retirar del frasco '+calculo()+' ml.</p>\
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
                    <div class="contenedor__Presentacion">\
                        <div class="titulo__Presentacion">\
                            <h4 class="presentacion">Suspención 25mg/ml</h4>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion">\
                                    <h4>Reconstitución</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>agua destilada llenar hasta la marca del frasco.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion">\
                                    <h4>Según dosis indicada</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Retirar del frasco '+jarabe()+' ml.</p>\
                                </div>\
                            </div>\
                        </div>\
                    </div>\
                    <div class="contenedor__Presentacion">\
                        <div class="titulo__Presentacion">\
                            <h4 class="presentacion">Comprimidos 250mg</h4>\
                        </div>\
                    </div>\
                    <h3 class="estabilidad">Estabilidad y observaciones</h3>\
                    <div class="contenedor__Estabilidad">\
                        <p class="texto__Estabilidad"><b class="texto__Blanco">Una vez reconsituido el FA, es estable 24 hs a temperatura ambiente y 48 hs refrigerada.</b></p>\
                        <p class="texto__Estabilidad"><b class="texto__Blanco">La suspensión una vez diluida tiene una caducidad de 14 días, NO REFRIGERAR.</b></p>\
                        <p class="texto__Observaciones">Precipita con otros solventes.</p>\
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
                                    <p>en DX5% o SF.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion">\
                                    <h4>Por via CENTRAL o PERIFERICA</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Llevar a '+dilucion+'ml de la solucion.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion">\
                                    <h4>Infusión</h4>\
                                </div>\
                                <div class="datos">\
                                    <p> en 60 minutos.</p>\
                                </div>\
                            </div>\
                        </div>\
                    </div>\
                    <h3 class="administracion">Vía Oral (VO)</h3>\
                    <div class="contenedor__Presentacion">\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="datos">\
                                    <p>Administrar con alimentos.</p>\
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
                    btn.style.display = 'none';
                });

            }
            //CLINDAMICINA
            else if(nombreMedicamento === "Clindamicina" || nombreMedicamento === "clindamicina" || nombreMedicamento === "CLINDAMICINA"){

                miligramos = 600;
                frascoTotal = 4;

                mgsuspencion = 100;
                frascojarabe = 1;

                let dilucion = dosis/6;
                console.log(dilucion);
                let dilucion2 = dosis/12;
                console.log(dilucion2)

                function dilucion1(){
                    if (dilucion === entero){
                        return dilucion;
                    } else if (dilucion !== entero){
                        conversion = (dilucion.toFixed(1));
                        return conversion;
                        
                    }
                }

                function diluciondos(){
                    if (dilucion2 === entero){
                        return dilucion2;
                    } else if (dilucion2 !== entero){
                        conversion = (dilucion2.toFixed(1));
                            return conversion;
                    } 
                }
                

                function jarabe(){
                    if (dosis === entero){//COMPARA QUE LA DOSIS SEA UN ENTERO Y LO MANTIENE
                                    let reconstitucion = (dosis*frascojarabe)/mgsuspencion;
                                    console.log(reconstitucion);
                                    return reconstitucion;//IMPRIME EL VALOR ENTERO
                    } else if(dosis !== entero){//COMPARA QUE LA DOSIS NO SEA UN VALOR ENTERO Y LO CONVIERTE A FLOTANTE
                                    let reconstitucion = (dosis*frascojarabe)/mgsuspencion;
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
                    <h3 class="nombre__Farmaco">Clindamicina</h3>\
                </div>\
                <div class="contenedor__Info">\
                    <div class="contenedor__Presentacion">\
                        <div class="titulo__Presentacion">\
                            <h4 class="presentacion">Ampolla 600mg/4ml (150mg/ml).</h4>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion">\
                                    <h4>Reconstitución</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>No requiere.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion">\
                                    <h4>Según dosis indicada</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Retirar del frasco '+calculo()+' ml.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion">\
                                    <h4>Cantidad a utilizar</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Para la dosis indicada se debe utlizar '+ampollas()+' ampolla/as</p>\
                                </div>\
                            </div>\
                        </div>\
                    </div>\
                    <div class="contenedor__Presentacion">\
                        <div class="titulo__Presentacion">\
                            <h4 class="presentacion">Preparado Magistral 100mg/ml</h4>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion">\
                                    <h4>Reconstitución</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>No requiere.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion">\
                                    <h4>Según dosis indicada</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Retirar del frasco '+jarabe()+' ml.</p>\
                                </div>\
                            </div>\
                        </div>\
                    </div>\
                    <div class="contenedor__Presentacion">\
                        <div class="titulo__Presentacion">\
                            <h4 class="presentacion">Capsulas 300mg</h4>\
                        </div>\
                    </div>\
                    <h3 class="estabilidad">Estabilidad y observaciones</h3>\
                    <div class="contenedor__Estabilidad">\
                        <p class="texto__Estabilidad"><b class="texto__Blanco">El vial una vez abierto desechar por inestabilidad microbiológica.</b></p>\
                        <p class="texto__Observaciones">Kaolina disminuye la absorción de la clindamicina.</p>\
                        <p class="texto__Observaciones">Los bloqueantes musculares, baclofeno y diazepam aumenta la frecuencia y la duración de la parálisis respiratoria.</p>\
                        <p class="texto__Observaciones">Eritromicina produce antagonismo.</p>\
                    </div>\
                    <h4 class="texto1">En base a la dosis indicada y la forma de administración elegida:</h4>\
                    <h3 class="administracion">IntraVenosa Intermitente (IVI) --[2° CANAL]--</h3>\
                    <div class="contenedor__Presentacion">\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion">\
                                    <h4>Diluyente</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>en DX5% o SF.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion">\
                                    <h4>Recomendación</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Llevar a '+dilucion1()+' ml de la solucion por vía periferica.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion">\
                                    <h4>Máxima</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Llevar a '+diluciondos()+'ml de la solucion por vía central.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion">\
                                    <h4>Infusión</h4>\
                                </div>\
                                <div class="datos">\
                                    <p> en 60 minutos.</p>\
                                </div>\
                            </div>\
                        </div>\
                    </div>\
                    <h3 class="administracion">IntraMuscular (IM)</h3>\
                    <div class="contenedor__Presentacion">\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="datos">\
                                    <p>No se recomienda la Administración de más de 600 mg.</p>\
                                </div>\
                            </div>\
                        </div>\
                    </div>\
                    <h3 class="administracion">Vía Oral (VO)</h3>\
                    <div class="contenedor__Presentacion">\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="datos">\
                                    <p>Administrar con un vaso de agua para prevenir la irritación esofágica.</p>\
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
                    btn.style.display = 'none';
                });

            }
            //CLONIDINA
            else if(nombreMedicamento === "Clonidina" || nombreMedicamento === "clonidina" || nombreMedicamento === "CLONIDINA"){

                miligramos = 150;
                frascoTotal = 1;
                
                let calculo = (dosis*frascoTotal)/miligramos;
                let usarampollas = dosis/miligramos;
                let dilucion = calculo * 2;

                function calculo1(){
                    if (Number.isInteger(calculo)){//COMPARA QUE LA DOSIS SEA UN ENTERO Y LO MANTIENE             
                                    console.log(calculo);
                                    return calculo;//IMPRIME EL VALOR ENTERO
                    } else{//COMPARA QUE LA DOSIS NO SEA UN VALOR ENTERO Y LO CONVIERTE A FLOTANTE
                                     redondeo1 = (calculo.toFixed(2));//MUESTRA SOLAMENTE LOS 2 DECIMALES DESPUES DE LA COMA DEL FLOTANTE
                                     console.log(redondeo1);
                                     return redondeo1;//IMPRIME EL FLOTANTE
                                }               
                };
                function ampollas(){
                    if (Number.isInteger(usarampollas)){
                        console.log(usarampollas);
                        return usarampollas;
                } else{
                    let redondeo2 = (usarampollas.toFixed(2));
                    console.log(redondeo2);
                    if (usarampollas === 1.00){
                        redondeo2 = parseInt(usarampollas);
                        return Math.ceil(redondeo2);
                    }
                    return Math.ceil(redondeo2);
                }
    }

                let fondo = document.querySelector('.contenedor');
                console.log(fondo);
                fondo.style.backgroundColor = '#089c41';
    
                let info = 
                '<div class="contenedor__Grilla">\
                <div class="contenedor__Titulo">\
                    <h3 class="nombre__Farmaco3">Clonidina</h3>\
                </div>\
                <div class="contenedor__Info">\
                    <div class="contenedor__Presentacion">\
                        <div class="titulo__Presentacion3">\
                            <h4 class="presentacion">Ampolla de 1ml (150mcg/ml).</h4>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion3">\
                                    <h4>Reconstitución</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>No requiere.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion3">\
                                    <h4>Según dosis indicada</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Retirar de la ampolla '+calculo1()+' ml.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion3">\
                                    <h4>Cantidad a utilizar</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Para la dosis indicada se debe utlizar '+ampollas()+' ampolla/as</p>\
                                </div>\
                            </div>\
                        </div>\
                    </div>\
                    <h3 class="estabilidad3">Estabilidad y observaciones</h3>\
                    <div class="contenedor__Estabilidad">\
                        <p class="texto__Estabilidad"><b class="texto__Blanco">Ampollas y viales: una vez abiertos, utilizar inmediatamente y desechar el contenido no usado</b></p>\
                    </div>\
                    <h4 class="texto1">En base a la dosis indicada y la forma de administración elegida:</h4>\
                    <h3 class="administracion3">IntraVenosa Directa (IVD) --[PUSH]--</h3>\
                    <div class="contenedor__Presentacion">\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion3">\
                                    <h4>Dilución</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Sol. Fisiologica o DX5%.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion3">\
                                    <h4>Concentración en via periferica o central (igual a dosis indicada)</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Llevar a '+dilucion+'ml.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion3">\
                                    <h4>Infusión</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Entre 15 a 20 minutos.</p>\
                                </div>\
                            </div>\
                        </div>\
                    </div>\
                    <h3 class="administracion3">IntraVenosa Intermitente (IVI) --[2° CANAL]--</h3>\
                    <div class="contenedor__Presentacion">\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion3">\
                                    <h4>NO.</h4>\
                                </div>\
                            </div>\
                        </div>\
                    </div>\
                    <h3 class="administracion3">IntraVenosa Continua (IVC) --[GOTEO]--</h3>\
                    <div class="contenedor__Presentacion">\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion3">\
                                    <h4>NO</h4>\
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
                    btn.style.display = 'none';
                });

            }
            //CLORPROMAZINA
            else if(nombreMedicamento === "Clorpromazina" || nombreMedicamento === "clorpromazina" || nombreMedicamento === "CLORPROMAZINA"){

                miligramos = 75;
                frascoTotal = 3;

                let dilucion =(dosis*3)/75;
                console.log(dilucion);
                let dilucion2 = dosis/5;
                console.log(dilucion2)
                let dilucion3 = dosis/1;

                function dilucion1(){
                    if (dilucion3 === entero){
                        return dilucion3;
                    } else if (dilucion3 !== entero){
                        conversion = (dilucion3.toFixed(1));
                        return conversion;
                        
                    }
                }

                function IM(){
                    if (dilucion === entero){
                        return dilucion;
                    } else if (dilucion !== entero){
                        conversion = (dilucion.toFixed(1));
                        return conversion;
                        
                    }
                }

                let fondo = document.querySelector('.contenedor');
                console.log(fondo);
                fondo.style.backgroundColor = '#089c41';
    
                let info = 
                '<div class="contenedor__Grilla">\
                <div class="contenedor__Titulo">\
                    <h3 class="nombre__Farmaco3">Clorpromazina</h3>\
                </div>\
                <div class="contenedor__Info">\
                    <div class="contenedor__Presentacion">\
                        <div class="titulo__Presentacion3">\
                            <h4 class="presentacion">Ampolla de 3ml (25mg/ml)</h4>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion3">\
                                    <h4>Reconstitución</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>No requiere.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion3">\
                                    <h4>Según dosis indicada</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Retirar de la ampolla '+calculo()+' ml.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion3">\
                                    <h4>Cantidad a utilizar</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Para la dosis indicada se debe utlizar '+ampollas()+' ampolla/as</p>\
                                </div>\
                            </div>\
                        </div>\
                    </div>\
                    <h3 class="estabilidad3">Estabilidad y observaciones</h3>\
                    <div class="contenedor__Estabilidad">\
                        <p class="texto__Estabilidad"><b class="texto__Blanco">Ampollas de un solo uso, desechar. No es necesario proteger de la luz durante su administración.</b></p>\
                        <p class="texto__Observaciones">Hipersensibilidad a la droga.</p>\
                        <p class="texto__Observaciones">Pacientes con glaucoma de ángulo agudo, supresión de medula ósea, ni enfermedades graves de hígado o corazón.</p>\
                    </div>\
                    <h4 class="texto1">En base a la dosis indicada y la forma de administración elegida:</h4>\
                    <h3 class="administracion3">IntraVenosa Directa (IVD) --[PUSH]--</h3>\
                    <div class="contenedor__Presentacion">\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion3">\
                                    <h4>Poco Recomendado en Pediatría (PRP)</h4>\
                                </div>\
                            </div>\
                        </div>\
                    </div>\
                    <h3 class="administracion3">IntraVenosa Intermitente (IVI) --[2° CANAL]--</h3>\
                    <div class="contenedor__Presentacion">\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion3">\
                                    <h4>Diluyente</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>SF para mayor estabilidad.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion3">\
                                    <h4>Concentración</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>1mg/ml.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion3">\
                                    <h4>Dilución</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Llevar a <b>'+dilucion1()+'ml de S.F.</b> por via periferica.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion3">\
                                    <h4>Infusión</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>En 30 minutos.</p>\
                                </div>\
                            </div>\
                        </div>\
                    </div>\
                    <h3 class="administracion3">IntraVenosa Continua (IVC) --[GOTEO]--</h3>\
                    <div class="contenedor__Presentacion">\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion2">\
                                    <h4>NO</h4>\
                                </div>\
                            </div>\
                        </div>\
                    </div>\
                    <h3 class="administracion3">IntraMuscular (IM)</h3>\
                    <div class="contenedor__Presentacion">\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion3">\
                                    <h4>Dosis</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>5mg/ml</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion3">\
                                    <h4>Según indicación medica</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Llevar a '+IM()+' ml.</p>\
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
                    btn.style.display = 'none';
                });

            }
            //CLORURO DE POTASIO
            else if(nombreMedicamento === "Cloruro de Potasio" || nombreMedicamento === "cloruro de potasio" || nombreMedicamento === "CLORURO DE POTASIO"){

                miligramos = 15;
                frascoTotal = 5;

                

                let dilucion = (dosis * 1000)/40;
                console.log(dilucion);
                let dilucion2 = (dosis * 1000)/60;
                console.log(dilucion2);
                let dilucion3 = (dosis * 1000)/80;
                console.log(dilucion3);
                let dilucion4 = (dosis * 1000)/200;
                console.log(dilucion4);
                
                function potasio(){
                    if (dosis === entero){//COMPARA QUE LA DOSIS SEA UN ENTERO Y LO MANTIENE
                                    let reconstitucion = (dosis*frascoTotal)/miligramos;
                                    console.log(reconstitucion.toFixed(2));
                                    return reconstitucion;//IMPRIME EL VALOR ENTERO
                    } else if(dosis !== entero){//COMPARA QUE LA DOSIS NO SEA UN VALOR ENTERO Y LO CONVIERTE A FLOTANTE
                                    let reconstitucion = (dosis*frascoTotal)/miligramos;
                                     redondeo1 = (reconstitucion.toFixed(1));//MUESTRA SOLAMENTE LOS 2 DECIMALES DESPUES DE LA COMA DEL FLOTANTE
                                     console.log(redondeo1);
                                     return redondeo1;//IMPRIME EL FLOTANTE
                                }               
                };

                
                //FUNCIONES PARA CALCULAR LAS DOSIS DE DILUCION Y VER SI SON NUMEROS ENTEROS O FLOTANTES Y DEJAR 2 DECIMALES
                function dosis1(){
                    if (Number.isInteger(dilucion)){
                        console.log(dilucion)
                        return dilucion
                    } else{
                        console.log(dilucion)
                        return dilucion.toFixed(2)
                    }
                }
                function dosis2(){
                    if (Number.isInteger(dilucion2)){
                        console.log(dilucion2)
                        return dilucion2
                    } else {
                        console.log(dilucion2)
                        return dilucion2.toFixed(2)
                    }
                }
                function dosis3(){
                    if (Number.isInteger(dilucion3)){
                        console.log(dilucion3)
                        return dilucion3
                    } else{
                        console.log(dilucion3)
                        return dilucion3.toFixed(2)
                    }
                }
                function dosis4(){
                    if (Number.isInteger(dilucion4)){
                        console.log(dilucion4)
                        return dilucion4
                    } else{
                        console.log(dilucion4)
                        return dilucion4.toFixed(2)
                    }
                }
                

                let fondo = document.querySelector('.contenedor');
                console.log(fondo);
                fondo.style.backgroundColor = '#e47200';
    
                let info = 
                '<div class="contenedor__Grilla">\
                <div class="contenedor__Titulo">\
                    <h3 class="nombre__Farmaco4">Cloruro de Potasio</h3>\
                </div>\
                <div class="contenedor__Info">\
                    <div class="contenedor__Presentacion">\
                        <div class="titulo__Presentacion4">\
                            <h4 class="presentacion">Ampolla 5ml (3mEq/ml=3mMol/ml).</h4>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion4">\
                                    <h4>Reconstitución</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>No requiere.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion4">\
                                    <h4>Según dosis indicada</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Retirar de la ampolla '+potasio()+' ml.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion4">\
                                    <h4>Cantidad a utilizar</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Para la dosis indicada se debe utlizar '+ampollas()+' ampollas/as</p>\
                                </div>\
                            </div>\
                        </div>\
                    </div>\
                    <h3 class="estabilidad4">Estabilidad y observaciones</h3>\
                    <div class="contenedor__Estabilidad">\
                        <p class="texto__Observaciones"><b class="texto__Blanco">Precaución en insuficiencia renal y suprarrenal.</p>\
                        <p class="texto__Observaciones">Realizar monitoreo cardíaco durante la infusión.</p>\
                        <p class="texto__Observaciones">No administrar directo en bolo.</p>\
                    </div>\
                    <h4 class="texto1">En base a la dosis indicada y la forma de administración elegida:</h4>\
                    <h3 class="administracion4">IntraVenosa Directa (IVD) --[PUSH]--</h3>\
                    <div class="contenedor__Presentacion">\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion4">\
                                    <h4>No</h4>\
                                </div>\
                            </div>\
                        </div>\
                    </div>\
                    <h3 class="administracion4">IntraVenosa Intermitente (IVI) --[2° CANAL]--</h3>\
                    <div class="contenedor__Presentacion">\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion4">\
                                    <h4>Dilución:</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>en S.F.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion4">\
                                    <h4>Recomendación por via périferica (40Meq/litro)</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Llevar a '+dosis1()+' ml de S.F.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion4">\
                                    <h4>Máxima por via périferica (60Meq/litro)</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Llevar a '+dosis2()+' ml de S.F.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion4">\
                                    <h4>Recomendación por via central (80Meq/litro)</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Llevar a '+dosis3()+' ml de S.F.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion4">\
                                    <h4>Máxima por via central (200Meq/litro)</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Llevar a '+dosis4()+' ml de S.F.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion4">\
                                    <h4>Infusión:</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>En 60 minutos.</p>\
                                </div>\
                            </div>\
                        </div>\
                    </div>\
                    <h3 class="administracion4">IntraVenosa (IVC)--[GOTEO]--</h3>\
                    <div class="contenedor__Presentacion">\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion4">\
                                    <h4>NO</h4>\
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
                    btn.style.display = 'none';
                });

            }
            //COLISTINA
            else if(nombreMedicamento === "Colistina" || nombreMedicamento === "colistina" || nombreMedicamento === "COLISTINA"){

                miligramos = 100;
                frascoTotal = 2;

                mgsuspencion = 100;
                frascojarabe = 1;

                let dilucion = dosis/6;
                console.log(dilucion);
                let dilucion2 = dosis/12;
                console.log(dilucion2)

                function dilucion1(){
                    if (dilucion === entero){
                        return dilucion;
                    } else if (dilucion !== entero){
                        conversion = (dilucion.toFixed(1));
                        return conversion;
                        
                    }
                }
                

                function jarabe(){
                    if (dosis === entero){//COMPARA QUE LA DOSIS SEA UN ENTERO Y LO MANTIENE
                                    let reconstitucion = (dosis*frascojarabe)/mgsuspencion;
                                    console.log(reconstitucion);
                                    return reconstitucion;//IMPRIME EL VALOR ENTERO
                    } else if(dosis !== entero){//COMPARA QUE LA DOSIS NO SEA UN VALOR ENTERO Y LO CONVIERTE A FLOTANTE
                                    let reconstitucion = (dosis*frascojarabe)/mgsuspencion;
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
                    <h3 class="nombre__Farmaco">Colistina</h3>\
                </div>\
                <div class="contenedor__Info">\
                    <div class="contenedor__Presentacion">\
                        <div class="titulo__Presentacion">\
                            <h4 class="presentacion">Ampolla 100mg.</h4>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion">\
                                    <h4>Reconstitución</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>con solvente de 2ml.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion">\
                                    <h4>Concentración</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>50mg/ml.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion">\
                                    <h4>Según dosis indicada</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Retirar del frasco '+calculo()+' ml.</p>\
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
                        <p class="texto__Estabilidad"><b class="texto__Blanco">El vial una vez reconstituido es estable por 72hs a T° ambiente o refrigerado</b></p>\
                    </div>\
                    <h4 class="texto1">En base a la dosis indicada y la forma de administración elegida:</h4>\
                    <h3 class="administracion">IntraVenosa Intermitente (IVI) --[2° CANAL]--</h3>\
                    <div class="contenedor__Presentacion">\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion">\
                                    <h4>Diluyente</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>en DX5% o SF.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                        <div class="info__Uno">\
                            <div class="reconstitucion">\
                                <h4>Misma concentración para vía periferico o central</h4>\
                            </div>\
                            <div class="datos">\
                                <p>2mg/ml.</p>\
                            </div>\
                        </div>\
                    </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion">\
                                    <h4>Llevar a</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>'+dilucion1()+' ml de la solucion.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion">\
                                    <h4>Infusión</h4>\
                                </div>\
                                <div class="datos">\
                                    <p> en 30 minutos.</p>\
                                </div>\
                            </div>\
                        </div>\
                    </div>\
                    <h3 class="administracion">IntraVenosa Continua (IVC)--[GOTEO]--</h3>\
                    <div class="contenedor__Presentacion">\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="datos">\
                                    <p>Administrar la mitad de la dosis total diaria durante 3-5minutos.</p>\
                                </div>\
                                <div class="datos">\
                                    <p>La segunda mitad de la dosis diluida en dext 5% o Solución fisiológica durante 22 o 23hs, comenzando 1-2hs después de la dosis inicial.</p>\
                                </div>\
                            </div>\
                        </div>\
                    </div>\
                    <h3 class="administracion">IntraMuscular (IM)</h3>\
                    <div class="contenedor__Presentacion">\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="datos">\
                                    <p>En pacientes con función renal normal la dosis es de 2,5-5mg/kg/día, dividida en 2 a 4 administraciones.</p>\
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
                    btn.style.display = 'none';
                });

            }
            //DESMOPRESINA
            else if(nombreMedicamento === "Desmopresina" || nombreMedicamento === "desmopresina" || nombreMedicamento === "DESMOPRESINA"){

                miligramos = 0.04;
                frascoTotal = 1;

                let dilucion = (dosis/0.5).toFixed(2);
                console.log(dilucion);
                let dilucion2 = (dosis/0.05).toFixed(2);
                console.log(dilucion2);
                let dilucion3 = (dosis/0.1).toFixed(2);
                console.log(dilucion3);
                
                function desmo(){
                    if (dosis === entero){//COMPARA QUE LA DOSIS SEA UN ENTERO Y LO MANTIENE
                                    let reconstitucion = (dosis*frascoTotal)/miligramos;
                                    console.log(reconstitucion.toFixed(2));
                                    return reconstitucion;//IMPRIME EL VALOR ENTERO
                    } else if(dosis !== entero){//COMPARA QUE LA DOSIS NO SEA UN VALOR ENTERO Y LO CONVIERTE A FLOTANTE
                                    let reconstitucion = (dosis*frascoTotal)/miligramos;
                                     redondeo1 = (reconstitucion.toFixed(1));//MUESTRA SOLAMENTE LOS 2 DECIMALES DESPUES DE LA COMA DEL FLOTANTE
                                     console.log(redondeo1);
                                     return redondeo1;//IMPRIME EL FLOTANTE
                                }               
                };
                

                let fondo = document.querySelector('.contenedor');
                console.log(fondo);
                fondo.style.backgroundColor = '#e47200';
    
                let info = 
                '<div class="contenedor__Grilla">\
                <div class="contenedor__Titulo">\
                    <h3 class="nombre__Farmaco4">Desmopresina</h3>\
                </div>\
                <div class="contenedor__Info">\
                    <div class="contenedor__Presentacion">\
                        <div class="titulo__Presentacion4">\
                            <h4 class="presentacion">Ampolla 4µg/ml.</h4>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion4">\
                                    <h4>Reconstitución</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>No requiere.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion4">\
                                    <h4>Según dosis indicada</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Retirar del FA '+desmo()+' ml.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion4">\
                                    <h4>Cantidad a utilizar</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Para la dosis indicada se debe utlizar '+ampollas()+' frasco/os</p>\
                                </div>\
                            </div>\
                        </div>\
                    </div>\
                    <div class="contenedor__Presentacion">\
                        <div class="titulo__Presentacion4">\
                            <h4 class="presentacion">Comprimidos 0,2mg</h4>\
                        </div>\
                        <div class="titulo__Presentacion4">\
                            <h4 class="presentacion">Sol. Nasal 0,1mg/ml (con una canula calibrada de 0,2ml).</h4>\
                        </div>\
                        <div class="titulo__Presentacion4">\
                            <h4 class="presentacion">Spray Nasal 0,1mg/ml.</h4>\
                        </div>\
                    </div>\
                    <h3 class="estabilidad4">Estabilidad y observaciones</h3>\
                    <div class="contenedor__Estabilidad">\
                        <p class="texto__Estabilidad"><b class="texto__Blanco">Las ampollas y solución nasal se conservan en la heladera entre 2-6°C.</b></p>\
                        <p class="texto__Observaciones">Se administra con canula nasal calibrada de 0,2ml, se absorbe en la región nasal anterior.</p>\
                        <p class="texto__Observaciones">La dosis se adecua a la respuesta clínica individual.</p>\
                    </div>\
                    <h4 class="texto1">En base a la dosis indicada y la forma de administración elegida:</h4>\
                    <h3 class="administracion4">IntraVenosa Directa (IVD) --[PUSH]--</h3>\
                    <div class="contenedor__Presentacion">\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion4">\
                                    <h4>No</h4>\
                                </div>\
                            </div>\
                        </div>\
                    </div>\
                    <h3 class="administracion4">IntraVenosa Intermitente (IVI) --[2° CANAL]--</h3>\
                    <div class="contenedor__Presentacion">\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion4">\
                                    <h4>Dilución:</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>en S.F.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion4">\
                                    <h4>Recomendación:</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>En niños menores de 10kg; diluir en 10ml de S.F.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion4">\
                                    <h4>Máxima 0,5 µg/ml:</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Llevar a '+dilucion+' ml de S.F.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion4">\
                                    <h4>Infusión:</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>En 15-30 minutos.</p>\
                                </div>\
                            </div>\
                        </div>\
                    </div>\
                    <h3 class="administracion4">IntraVenosa (IVC)--[GOTEO]--</h3>\
                    <div class="contenedor__Presentacion">\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion4">\
                                    <h4>NO</h4>\
                                </div>\
                            </div>\
                        </div>\
                    </div>\
                    <h3 class="administracion4">Intra Nasal (IN)</h3>\
                    <div class="contenedor__Presentacion">\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion4">\
                                    <h4>Recomendada 0,05ml/dosis</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>administrar '+dilucion2+'ml .</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion4">\
                                    <h4>Máxima 0,1ml/dosis</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>administrar '+dilucion3+'ml .</p>\
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
                    btn.style.display = 'none';
                });

            }
            //DEXAMETASONA
            else if(nombreMedicamento === "Dexametasona" || nombreMedicamento === "dexametasona" || nombreMedicamento === "DEXAMETASONA"){

                miligramos = 8;
                frascoTotal = 2;

                let dilucion = (dosis/1).toFixed(2);
                console.log(dilucion);
                let dilucion2 = (dosis/4).toFixed(2);
                console.log(dilucion2);
                let dilucion3 = (dosis/0.1).toFixed(2);
                console.log(dilucion3);
                
                function dexa(){
                    if (dosis === entero){//COMPARA QUE LA DOSIS SEA UN ENTERO Y LO MANTIENE
                                    let reconstitucion = (dosis*frascoTotal)/miligramos;
                                    console.log(reconstitucion);
                                    return reconstitucion;//IMPRIME EL VALOR ENTERO
                    } else if(dosis !== entero){//COMPARA QUE LA DOSIS NO SEA UN VALOR ENTERO Y LO CONVIERTE A FLOTANTE
                                    let reconstitucion = (dosis*frascoTotal)/miligramos;
                                     redondeo1 = (reconstitucion.toFixed(2));//MUESTRA SOLAMENTE LOS 2 DECIMALES DESPUES DE LA COMA DEL FLOTANTE
                                     console.log(redondeo1);
                                     return redondeo1;//IMPRIME EL FLOTANTE
                                }               
                };
                

                let fondo = document.querySelector('.contenedor');
                console.log(fondo);
                fondo.style.backgroundColor = '#e47200';
    
                let info = 
                '<div class="contenedor__Grilla">\
                <div class="contenedor__Titulo">\
                    <h3 class="nombre__Farmaco4">Dexametasona</h3>\
                </div>\
                <div class="contenedor__Info">\
                    <div class="contenedor__Presentacion">\
                        <div class="titulo__Presentacion4">\
                            <h4 class="presentacion">Ampolla 8/2ml.</h4>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion4">\
                                    <h4>Reconstitución</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>No requiere.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion4">\
                                    <h4>Según dosis indicada</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Retirar del FA '+dexa()+' ml.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion4">\
                                    <h4>Cantidad a utilizar</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Para la dosis indicada se debe utlizar '+ampollas()+' ampolla/as.</p>\
                                </div>\
                            </div>\
                        </div>\
                    </div>\
                    <div class="contenedor__Presentacion">\
                        <div class="titulo__Presentacion4">\
                            <h4 class="presentacion">Sol. Oftamilca Esteril 0.1%</h4>\
                        </div>\
                        <div class="titulo__Presentacion4">\
                            <h4 class="presentacion">Sol. Nasal 0,1mg/ml (con una canula calibrada de 0,2ml).</h4>\
                        </div>\
                        <div class="titulo__Presentacion4">\
                            <h4 class="presentacion">Spray Nasal 0,1mg/ml.</h4>\
                        </div>\
                    </div>\
                    <h3 class="estabilidad4">Estabilidad y observaciones</h3>\
                    <div class="contenedor__Estabilidad">\
                        <p class="texto__Estabilidad"><b>Diluida es estable 24 sh a T° ambiente.</b></p>\
                        <p class="texto__Estabilidad"><b>Ampolla de un solo uso, cualquier porción no utilizada debe desecharse.</b></p>\
                    </div>\
                    <h4 class="texto1">En base a la dosis indicada y la forma de administración elegida:</h4>\
                    <h3 class="administracion4">IntraVenosa Directa (IVD) --[PUSH]--</h3>\
                    <div class="contenedor__Presentacion">\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion4">\
                                    <h4>Dosis menores a 10mg.</h4>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion4">\
                                    <h4>Diluyente</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>en S.F.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion4">\
                                    <h4>Minima</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Llevar a '+dilucion+' ml.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion4">\
                                    <h4>Recomendada</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Llevar a '+dilucion2+' ml.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion4">\
                                    <h4>Infundir</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Entre 5 a 10 minutos.</p>\
                                </div>\
                            </div>\
                        </div>\
                    </div>\
                    <h3 class="administracion4">IntraVenosa Intermitente (IVI) --[2° CANAL]--</h3>\
                    <div class="contenedor__Presentacion">\
                    <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion4">\
                                    <h4>Dosis mayores a 10mg</h4>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion4">\
                                    <h4>Dilución:</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>en S.F. 0 DX5%</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion4">\
                                    <h4>Minima:</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Llevar a '+dilucion3+' ml.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion4">\
                                    <h4>Recomendada:</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Llevar a '+dilucion+' ml de S.F.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion4">\
                                    <h4>Infusión:</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>En 30-60 minutos.</p>\
                                </div>\
                            </div>\
                        </div>\
                    </div>\
                    <h3 class="administracion4">IntraVenosa (IVC)--[GOTEO]--</h3>\
                    <div class="contenedor__Presentacion">\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion4">\
                                    <h4>NO</h4>\
                                </div>\
                            </div>\
                        </div>\
                    </div>\
                    <h3 class="administracion4">IntraMuscular (IM)</h3>\
                    <div class="contenedor__Presentacion">\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion4">\
                                    <h4>SI</h4>\
                                </div>\
                            </div>\
                        </div>\
                    </div>\
                    <h3 class="administracion4">Vía Oral (VO)</h3>\
                    <div class="contenedor__Presentacion">\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="datos">\
                                    <p>Se puede ingerir con alimentos.</p>\
                                </div>\
                                <div class="datos">\
                                    <p>Si se administra una vez al día (mañana). Se puede triturar, administrar inmediatamente.</p>\
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
                    btn.style.display = 'none';
                });

            }
            //DEXMEDETOMIDINA PRECEDEX
            else if(nombreMedicamento === "Dexmedetomidina" || nombreMedicamento === "dexmedetomidina" || nombreMedicamento === "DEXMEDETOMIDINA" || nombreMedicamento === "Precedex" || nombreMedicamento === "precedex" || nombreMedicamento === "PRECEDEX"){

                miligramos = 200;
                frascoTotal = 2;
                let dosisml = (dosis*2)/200;
                let plantotal = dosisml + 48;
                

                let fondo = document.querySelector('.contenedor');
                console.log(fondo);
                fondo.style.backgroundColor = '#089c41';
    
                let info = 
                '<div class="contenedor__Grilla">\
                <div class="contenedor__Titulo">\
                    <h3 class="nombre__Farmaco3">Dexmedetomidina (PRECEDEX)</h3>\
                </div>\
                <div class="contenedor__Info">\
                    <div class="contenedor__Presentacion">\
                        <div class="titulo__Presentacion3">\
                            <h4 class="presentacion">Frasco/Ampolla de 1ml (100mcg/ml).<br>Frasco/Ampolla de 2ml (200mcg/2ml).<br>Frasco/Ampolla de 2ml (400mcg/2ml).</h4>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion3">\
                                    <h4>Reconstitución</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>No requiere.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion3">\
                                    <h4>Según dosis indicada</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Retirar de la ampolla '+calculo()+' ml.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion3">\
                                    <h4>Cantidad a utilizar</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Para la dosis indicada se debe utlizar '+ampollas()+' ampolla/as</p>\
                                </div>\
                            </div>\
                        </div>\
                    </div>\
                    <h3 class="estabilidad3">Estabilidad y observaciones</h3>\
                    <div class="contenedor__Estabilidad">\
                        <p class="texto__Estabilidad"><b class="texto__Blanco">Una vez diluido 24 a 48hs a T° ambiente.</b></p>\
                    </div>\
                    <h4 class="texto1">En base a la dosis indicada y la forma de administración elegida:</h4>\
                    <h3 class="administracion3">IntraVenosa Directa (IVD) --[PUSH]--</h3>\
                    <div class="contenedor__Presentacion">\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion3">\
                                    <h4>NO.</h4>\
                                </div>\
                            </div>\
                        </div>\
                    </div>\
                    <h3 class="administracion3">IntraVenosa Intermitente (IVI) --[2° CANAL]--</h3>\
                    <div class="contenedor__Presentacion">\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion3">\
                                    <h4>NO</h4>\
                                </div>\
                            </div>\
                        </div>\
                    </div>\
                    <h3 class="administracion3">IntraVenosa Continua (IVC) --[GOTEO]--</h3>\
                    <div class="contenedor__Presentacion">\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion3">\
                                    <h4>Dilución</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>200mcg/2ml en 48 ml de S.F.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion3">\
                                    <h4>Preparación</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Dexmedetomidina '+dosis+'MCG_____________'+calculo()+'ml.<br>\
                                        Sol. Fisiologica______________48ml.<br>\
                                        Total_____________________'+plantotal+'ml.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion3">\
                                    <h4>Identificación</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Perfus cinta color verde.<br>\
                                    Rotulo color verde.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion3">\
                                    <h4>Perfus</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Utilizar perfus común y cambiar el mismo cada 48hs.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion3">\
                                    <h4>Sachet</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Cambiar el mismo cada 48hs, no necesita proteger de la luz.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion3">\
                                    <h4>Sobredosis</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Detener la perfusión completamente.</p>\
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
                    btn.style.display = 'none';
                });

            }
            //DIGOXINA
            else if(nombreMedicamento === "Digoxina" || nombreMedicamento === "digoxina" || nombreMedicamento === "DIGOXINA"){

                miligramos = 250;
                frascoTotal = 1;
                let dilucion1 = dosis/50;
                let dilucion2 = dosis/100;
                

                let fondo = document.querySelector('.contenedor');
                console.log(fondo);
                fondo.style.backgroundColor = '#B71C1C';
    
                let info = 
                '<div class="contenedor__Grilla">\
                <div class="contenedor__Titulo">\
                    <h3 class="nombre__Farmaco2">Digoxina</h3>\
                </div>\
                <div class="contenedor__Info">\
                    <div class="contenedor__Presentacion">\
                        <div class="titulo__Presentacion2">\
                            <h4 class="presentacion">Ampolla de 1ml (0,25mg/ml).</h4>\
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
                                    <p>Para la dosis indicada se debe utlizar '+ampollas()+' ampolla/as.</p>\
                                </div>\
                            </div>\
                        </div>\
                    </div>\
                    <h3 class="estabilidad2">Estabilidad y observaciones</h3>\
                    <div class="contenedor__Estabilidad">\
                        <p class="texto__Estabilidad">Ampolla de un solo uso, cualquier porsción no utilizada debe desecharse.</p>\
                        <p class="texto__Observaciones">No administrar con preparados que contengan calcio.</p>\
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
                                    <p>DX5% o SF.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion2">\
                                    <h4>Recomendada 50mcg/ml (0\,05 mg/ml)</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Llevar a '+dilucion1+'ml.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion2">\
                                    <h4>Máxima 100mcg/ml (0,1mg/ml)</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Llevar a '+dilucion2+'ml.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                                <div class="info__Uno">\
                                    <div class="reconstitucion2">\
                                        <h4>Infundir</h4>\
                                    </div>\
                                    <div class="datos">\
                                        <p>En 5 minutos.</p>\
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
                                    <h4>NO</h4>\
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
                    btn.style.display = 'none';

                });

            }
            //ENALAPRILATO
            else if(nombreMedicamento === "Enalaprilato" || nombreMedicamento === "enalaprilato" || nombreMedicamento === "ENALAPRILATO" || nombreMedicamento === "Enalapril" || nombreMedicamento === "enalapril" || nombreMedicamento === "ENALAPRIL"){

                miligramos = 250;
                frascoTotal = 2;
                let dilucion1 = dosis/125;
                let dilucion2 = dosis/25;
                

                let fondo = document.querySelector('.contenedor');
                console.log(fondo);
                fondo.style.backgroundColor = '#B71C1C';
    
                let info = 
                '<div class="contenedor__Grilla">\
                <div class="contenedor__Titulo">\
                    <h3 class="nombre__Farmaco2">Enalaprilato</h3>\
                </div>\
                <div class="contenedor__Info">\
                    <div class="contenedor__Presentacion">\
                        <div class="titulo__Presentacion2">\
                            <h4 class="presentacion">Ampolla de 2ml (1,25mg/ml).</h4>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion2">\
                                    <h4>Según dosis indicada</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Retirar de la ampolla '+calculo()+'ml.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion2">\
                                    <h4>Cantidad a utilizar</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Para la dosis indicada se debe utlizar '+ampollas()+' ampolla/as.</p>\
                                </div>\
                            </div>\
                        </div>\
                    </div>\
                    <h3 class="estabilidad2">Estabilidad y observaciones</h3>\
                    <div class="contenedor__Estabilidad">\
                        <p class="texto__Estabilidad">Una vez abierto, se puede conservar 24hs a refrigerado.</p>\
                        <p class="texto__Observaciones">En pediatría se recomienda el uso IVI.</p>\
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
                                    <p>Sin diluir.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion2">\
                                    <h4>Recomendada 1,25/ml</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Llevar a '+dilucion1+'ml.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                                <div class="info__Uno">\
                                    <div class="reconstitucion2">\
                                        <h4>Infundir</h4>\
                                    </div>\
                                    <div class="datos">\
                                        <p>Entre 5-15 minutos.</p>\
                                    </div>\
                                </div>\
                        </div>\
                    </div>\
                    <h3 class="administracion2">IntraVenosa Intermitente (IVI) --[2° CANAL]--</h3>\
                    <div class="contenedor__Presentacion">\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion2">\
                                    <h4>Diluyente.</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>SF.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion2">\
                                    <h4>Por Périferica o central (0.025mg/ml).</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Llevar a '+dilucion2+'ml.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion2">\
                                    <h4>Infusión.</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>En 60 minutos.</p>\
                                </div>\
                            </div>\
                        </div>\
                    </div>\
                    <h3 class="administracion2">IntraVenosa Continua (IVC) --[GOTEO]--</h3>\
                    <div class="contenedor__Presentacion">\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion2">\
                                    <h4>NO</h4>\
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
                    btn.style.display = 'none';
                });

            }
            //ENOXAPARINA
            else if(nombreMedicamento === "Enoxaparina" || nombreMedicamento === "enoxaparina" || nombreMedicamento === "ENOXAPARINA"){

                miligramos = 20;
                frascoTotal = 0.20;

                miligramos2 = 40;
                frascoTotal2 = 0.40;

                miligramos3 = 60;
                frascoTotal3 = 0.60;

                jeringa = dosis/miligramos;

                jeringa2 = dosis/miligramos2;
                
                jeringa3 = dosis/miligramos3;

                let fondo = document.querySelector('.contenedor');
                console.log(fondo);
                fondo.style.backgroundColor = '#e47200';
    
                let info = 
                '<div class="contenedor__Grilla">\
                <div class="contenedor__Titulo">\
                    <h3 class="nombre__Farmaco4">Enoxaparina</h3>\
                </div>\
                <div class="contenedor__Info">\
                    <div class="contenedor__Presentacion">\
                        <div class="titulo__Presentacion4">\
                            <h4 class="presentacion">Jeringa Prellenada de 20mg(10mg/0.1ml).</h4>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion4">\
                                    <h4>Reconstitución</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>No requiere.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion4">\
                                    <h4>Según dosis indicada</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Retirar del FA '+calculo()+' ml.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion4">\
                                    <h4>Cantidad a utilizar</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Para la dosis indicada se debe utlizar '+jeringa+' jeringa/as.</p>\
                                </div>\
                            </div>\
                        </div>\
                    </div>\
                    <div class="contenedor__Info">\
                    <div class="contenedor__Presentacion">\
                        <div class="titulo__Presentacion4">\
                            <h4 class="presentacion">Jeringa Prellenada de 40mg(10mg/0.1ml).</h4>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion4">\
                                    <h4>Reconstitución</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>No requiere.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion4">\
                                    <h4>Según dosis indicada</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Retirar del FA '+calculo()+' ml.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion4">\
                                    <h4>Cantidad a utilizar</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Para la dosis indicada se debe utlizar '+jeringa2+' jeringa/as.</p>\
                                </div>\
                            </div>\
                        </div>\
                    </div>\
                    <div class="contenedor__Info">\
                    <div class="contenedor__Presentacion">\
                        <div class="titulo__Presentacion4">\
                            <h4 class="presentacion">Jeringa Prellenada de 60mg (10mg/0.1ml).</h4>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion4">\
                                    <h4>Reconstitución</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>No requiere.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion4">\
                                    <h4>Según dosis indicada</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Retirar del FA '+calculo()+' ml.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion4">\
                                    <h4>Cantidad a utilizar</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Para la dosis indicada se debe utlizar '+jeringa3+' jeringa/as.</p>\
                                </div>\
                            </div>\
                        </div>\
                    </div>\
                    <h3 class="estabilidad4">Estabilidad y observaciones</h3>\
                    <div class="contenedor__Estabilidad">\
                        <p class="texto__Estabilidad"><b class="texto__Blanco">Se puede conservar a T° ambiente. Desechar cualquier porción no utilizada.</b></p>\
                    </div>\
                    <h4 class="texto1">En base a la dosis indicada y la forma de administración elegida:</h4>\
                    <h3 class="administracion4">IntraVenosa Directa (IVD) --[PUSH]--</h3>\
                    <div class="contenedor__Presentacion">\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion4">\
                                    <h4>Diluyente</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>en S.F.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion4">\
                                    <h4>En bolo único</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Luego continuar con administración subcutanea, Lavar la vía antes y despues .</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion4">\
                                    <h4>Concentración</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Llevar a '+calculo()+'ml.</p>\
                                </div>\
                            </div>\
                        </div>\
                    </div>\
                    <h3 class="administracion4">IntraVenosa Intermitente (IVI) --[2° CANAL]--</h3>\
                    <div class="contenedor__Presentacion">\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion4">\
                                    <h4>NO.</h4>\
                                </div>\
                            </div>\
                        </div>\
                    </div>\
                    <h3 class="administracion4">IntraVenosa (IVC)--[GOTEO]--</h3>\
                    <div class="contenedor__Presentacion">\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion4">\
                                    <h4>NO</h4>\
                                </div>\
                            </div>\
                        </div>\
                    </div>\
                    <h3 class="administracion4">SubCutanea (SC)</h3>\
                    <div class="contenedor__Presentacion">\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion4">\
                                    <h4>Ir rotando la zona de punción.</h4>\
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
                    btn.style.display = 'none';
                });

            }
            //ESMOLOL
            else if(nombreMedicamento === "Esmolol" || nombreMedicamento === "esmolol" || nombreMedicamento === "ESMOLOL"){

                miligramos = 100;
                frascoTotal = 10;
                miligramosAmpolla = 2500;
                dilucion = dosis/10;

                function calculo1(){
                    if (dosis === entero){//COMPARA QUE LA DOSIS SEA UN ENTERO Y LO MANTIENE
                                    let reconstitucion = (dosis*frascoTotal)/miligramosAmpolla;
                                    console.log(reconstitucion);
                                    return reconstitucion;//IMPRIME EL VALOR ENTERO
                    } else if(dosis !== entero){//COMPARA QUE LA DOSIS NO SEA UN VALOR ENTERO Y LO CONVIERTE A FLOTANTE
                                    let reconstitucion = (dosis*frascoTotal)/miligramosAmpolla;
                                     redondeo1 = (reconstitucion.toFixed(1));//MUESTRA SOLAMENTE LOS 2 DECIMALES DESPUES DE LA COMA DEL FLOTANTE
                                     console.log(redondeo1);
                                     return redondeo1;//IMPRIME EL FLOTANTE
                                }               
                };
            
                function ampollas1(){
                                if (dosis === entero){
                                    let ampollas = dosis/miligramosAmpolla;
                                    console.log(ampollas);
                                    return ampollas;
                            } else if(dosis !== entero){
                                let ampollas = dosis/miligramosAmpolla;
                                redondeo2 = (ampollas.toFixed(2));
                                console.log(redondeo2);
                                if (ampollas === 1.00){
                                    redondeo2 = parseInt(ampollas);
                                    return Math.ceil(redondeo2);
                                }
                                return Math.ceil(redondeo2);
                            }
                }

                let fondo = document.querySelector('.contenedor');
                console.log(fondo);
                fondo.style.backgroundColor = '#B71C1C';
    
                let info = 
                '<div class="contenedor__Grilla">\
                <div class="contenedor__Titulo">\
                    <h3 class="nombre__Farmaco2">Esmolol</h3>\
                </div>\
                <div class="contenedor__Info">\
                    <div class="contenedor__Presentacion">\
                        <div class="titulo__Presentacion2">\
                            <h4 class="presentacion">Frasco/Ampolla de 10ml (10mg/ml).</h4>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion2">\
                                    <h4>Según dosis indicada</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Retirar del frasco/ampolla '+calculo()+'ml.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion2">\
                                    <h4>Cantidad a utilizar</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Para la dosis indicada se debe utlizar '+ampollas()+' frasco/ampolla.</p>\
                                </div>\
                            </div>\
                        </div>\
                    </div>\
                    <div class="contenedor__Presentacion">\
                        <div class="titulo__Presentacion2">\
                            <h4 class="presentacion">Ampolla de 10ml (250mg/ml).</h4>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion2">\
                                    <h4>Según dosis indicada</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Retirar de la ampolla '+calculo1()+'ml.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion2">\
                                    <h4>Cantidad a utilizar</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Para la dosis indicada se debe utlizar '+ampollas1()+' ampolla/as.</p>\
                                </div>\
                            </div>\
                        </div>\
                    </div>\
                    <h3 class="estabilidad2">Estabilidad y observaciones</h3>\
                    <div class="contenedor__Estabilidad">\
                        <p class="texto__Estabilidad">Una vez abierto, se puede conservar 24hs a T° ambiente (entre 2°C y 8°C). Una vez diluido, la solución es estable 48hs a T° ambiente.</p>\
                        <p class="texto__Observaciones">Puede causar dolor e irritación, vigilar extravasación.</p>\
                        <p class="texto__Observaciones">Finalizar la perfusión paulatinamente por posible riesgo de sufrir una taquicardia e hipertensión de rebote.</p>\
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
                                    <p>SF o DX5%.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion2">\
                                    <h4>Concentración 10mg/ml (central o periferica)</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Llevar a '+dilucion+'ml.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                                <div class="info__Uno">\
                                    <div class="reconstitucion2">\
                                        <h4>Infundir</h4>\
                                    </div>\
                                    <div class="datos">\
                                        <p>Entre 5-15 minutos.</p>\
                                    </div>\
                                </div>\
                        </div>\
                    </div>\
                    <h3 class="administracion2">IntraVenosa Intermitente (IVI) --[2° CANAL]--</h3>\
                    <div class="contenedor__Presentacion">\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion2">\
                                    <h4>NO</h4>\
                                </div>\
                            </div>\
                        </div>\
                    </div>\
                    <h3 class="administracion2">IntraVenosa Continua (IVC) --[GOTEO]--</h3>\
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
                                    <h4>Dilución</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Dosis indicada llevar a dosis de solución indicada, (si hay que purgar el perfus se prepara doble).</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion2">\
                                    <h4>Preparar en</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Perfus común. Duración de 7 días para su recambio.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion2">\
                                    <h4>Sachet</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Cambiar cada 48hs, no requiere cobertura fotosensible.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion2">\
                                    <h4>Identificar</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>El perfus con cinta color rojo.<br>El sachet con rotulo color rojo.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion2">\
                                    <h4>Vida media de eliminación</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>9 minutos.</p>\
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
                    btn.style.display = 'none';
                });

            }
            //FENITOINA
            else if(nombreMedicamento === "Fenitoina" || nombreMedicamento === "fenitoina" || nombreMedicamento === "FENITOINA"){

                miligramos = 100;
                frascoTotal = 2;
                jarabefrasco = 100;
                miligramosjarabe= 2500;
                dilucion = dosis/1;
                dilucion2 = dosis/5;
                dilucion3 = dosis/10;

                function calculo1(){
                    if (dosis === entero){//COMPARA QUE LA DOSIS SEA UN ENTERO Y LO MANTIENE
                                    let reconstitucion = (dosis*jarabefrasco)/miligramosjarabe;
                                    console.log(reconstitucion);
                                    return reconstitucion;//IMPRIME EL VALOR ENTERO
                    } else if(dosis !== entero){//COMPARA QUE LA DOSIS NO SEA UN VALOR ENTERO Y LO CONVIERTE A FLOTANTE
                                    let reconstitucion = (dosis*jarabefrasco)/miligramosjarabe;
                                     redondeo1 = (reconstitucion.toFixed(1));//MUESTRA SOLAMENTE LOS 2 DECIMALES DESPUES DE LA COMA DEL FLOTANTE
                                     console.log(redondeo1);
                                     return redondeo1;//IMPRIME EL FLOTANTE
                                }               
                };
            

                let fondo = document.querySelector('.contenedor');
                console.log(fondo);
                fondo.style.backgroundColor = '#e47200';
    
                let info = 
                '<div class="contenedor__Grilla">\
                <div class="contenedor__Titulo">\
                    <h3 class="nombre__Farmaco4">Fenitoina</h3>\
                </div>\
                <div class="contenedor__Info">\
                    <div class="contenedor__Presentacion">\
                        <div class="titulo__Presentacion4">\
                            <h4 class="presentacion">Ampolla 2ml(50mg/ml).</h4>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion4">\
                                    <h4>Reconstitución</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>No requiere.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion4">\
                                    <h4>Según dosis indicada</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Retirar del FA '+calculo()+' ml.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion4">\
                                    <h4>Cantidad a utilizar</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Para la dosis indicada se debe utlizar '+ampollas()+' ampolla/as</p>\
                                </div>\
                            </div>\
                        </div>\
                    </div>\
                    <div class="contenedor__Presentacion">\
                        <div class="titulo__Presentacion4">\
                            <h4 class="presentacion">Jarabe 25mg/ml</h4>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion4">\
                                    <h4>Según dosis indicada</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Retirar del FA '+calculo1()+' ml.</p>\
                                </div>\
                            </div>\
                        </div>\
                    </div>\
                    <div class="contenedor__Presentacion">\
                        <div class="titulo__Presentacion4">\
                            <h4 class="presentacion">comprimidos 100mg</h4>\
                        </div>\
                    </div>\
                    <h3 class="estabilidad4">Estabilidad y observaciones</h3>\
                    <div class="contenedor__Estabilidad">\
                        <p class="texto__Estabilidad"><b class="texto__Blanco">Una vez abierto, se puede conservar 2hs a T° ambiente, no refrigerar.</b></p>\
                        <p class="texto__Observaciones">Administrar S.F. antes y despues de su administración.</p>\
                    </div>\
                    <h4 class="texto1">En base a la dosis indicada y la forma de administración elegida:</h4>\
                    <h3 class="administracion4">IntraVenosa Directa (IVD) --[PUSH]--</h3>\
                    <div class="contenedor__Presentacion">\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion4">\
                                    <h4>Poco Recomendado en Pediatría (PRP)</h4>\
                                </div>\
                            </div>\
                        </div>\
                    </div>\
                    <h3 class="administracion4">IntraVenosa Intermitente (IVI) --[2° CANAL]--</h3>\
                    <div class="contenedor__Presentacion">\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion4">\
                                    <h4>Dilución:</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>en S.F.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion4">\
                                    <h4>Minima périferica (1mg/ml)</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Llevar a '+dilucion+'ml.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion4">\
                                    <h4>Recomendada périferica (5mg/ml)</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Llevar a '+dilucion2+'ml.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion4">\
                                    <h4>Máxima central (10mg/ml)</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Llevar a '+dilucion3+'ml.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion4">\
                                    <h4>Infundir</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>en 60 minutos.</p>\
                                </div>\
                            </div>\
                        </div>\
                    </div>\
                    <h3 class="administracion4">IntraVenosa (IVC)--[GOTEO]--</h3>\
                    <div class="contenedor__Presentacion">\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion4">\
                                    <h4>NO</h4>\
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
                    btn.style.display = 'none';
                });

            }
            //FENOBARBITAL
            else if(nombreMedicamento === "Fenobarbital" || nombreMedicamento === "fenobarbital" || nombreMedicamento === "FENOBARBITAL"){

                miligramos = 100;
                frascoTotal = 2;
                dilucion = dosis/50;
                dilucion2 = dosis/10;
                dilucion3 = dosis/25;
            

                let fondo = document.querySelector('.contenedor');
                console.log(fondo);
                fondo.style.backgroundColor = '#e47200';
    
                let info = 
                '<div class="contenedor__Grilla">\
                <div class="contenedor__Titulo">\
                    <h3 class="nombre__Farmaco4">Fenobarbital</h3>\
                </div>\
                <div class="contenedor__Info">\
                    <div class="contenedor__Presentacion">\
                        <div class="titulo__Presentacion4">\
                            <h4 class="presentacion">Ampolla 2ml(50mg/ml).</h4>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion4">\
                                    <h4>Reconstitución</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>No requiere.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion4">\
                                    <h4>Según dosis indicada</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Retirar del FA '+calculo()+' ml.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion4">\
                                    <h4>Cantidad a utilizar</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Para la dosis indicada se debe utlizar '+ampollas()+' ampolla/as</p>\
                                </div>\
                            </div>\
                        </div>\
                    </div>\
                    <h3 class="estabilidad4">Estabilidad y observaciones</h3>\
                    <div class="contenedor__Estabilidad">\
                        <p class="texto__Observaciones">Su extravasación puede provocar necrosis.</p>\
                    </div>\
                    <h4 class="texto1">En base a la dosis indicada y la forma de administración elegida:</h4>\
                    <h3 class="administracion4">IntraVenosa Directa (IVD) --[PUSH]--</h3>\
                    <div class="contenedor__Presentacion">\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion4">\
                                    <h4>Dilución:</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>en S.F.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion4">\
                                    <h4>Recomendada périferica</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Sin diluir.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion4">\
                                    <h4>Recomendada central (50mg/ml)</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Llevar a '+dilucion+'ml.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion4">\
                                    <h4>Máxima central (10mg/ml)</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Llevar a '+dilucion2+'ml.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion4">\
                                    <h4>Infundir</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>en 5-10 minutos.</p>\
                                </div>\
                            </div>\
                        </div>\
                    </div>\
                    <h3 class="administracion4">IntraVenosa Intermitente (IVI) --[2° CANAL]--</h3>\
                    <div class="contenedor__Presentacion">\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion4">\
                                    <h4>Dilución:</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>en S.F.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion4">\
                                    <h4>Recomendada périferica (10mg/ml)</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Llevar a '+dilucion2+'ml.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion4">\
                                    <h4>Recomendada central (25mg/ml)</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Llevar a '+dilucion3+'ml.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion4">\
                                    <h4>Infundir</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>en 15-30 minutos.</p>\
                                </div>\
                            </div>\
                        </div>\
                    </div>\
                    <h3 class="administracion4">IntraVenosa (IVC)--[GOTEO]--</h3>\
                    <div class="contenedor__Presentacion">\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion4">\
                                    <h4>NO</h4>\
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
                    btn.style.display = 'none';
                });

            }
            //FENTANILO
            else if(nombreMedicamento === "Fentanilo" || nombreMedicamento === "fentanilo" || nombreMedicamento === "FENTANILO"){

                miligramos = 250;
                frascoTotal = 5;
                let dosisml = 24 - calculo();
                let plantotal = Number(calculo()) + Number(dosisml);
                let dosisDoble = dosis * 2;
                let mlDoble = calculo() * 2;
                let dosismlDoble = dosisml * 2;
                let plantotalDoble = plantotal * 2;
                let ampollaDoble = ampollas() * 2;
                
                
                function plan(){
                    if (dosis >= 1200){
                        let planpuro ='Fentanilo '+dosis+'MCG_____'+calculo()+'ml.<br>\
                        Dosis Pura.<br>\
                        Total_________________________'+plantotal+'ml.';
                        return plan.innerHTML=planpuro;
                    } else {
                        let planparcial =
                        'Fentanilo '+dosis+'MCG_____'+calculo()+'ml.<br>\
                        DX5%_________________'+dosisml+'ml.<br>\
                        Total_________________________'+plantotal+'ml.';
                       return plan.innerHTML = planparcial;
                    };
                }
                function plan2(){
                    if (dosis >= 1200){
                        let planpuro ='Fentanilo '+dosisDoble+'MCG_____'+mlDoble+'ml.<br>\
                        Dosis Pura.<br>\
                        Total_________________________'+plantotalDoble+'ml.<br>\
                        Se debe utlizar '+ampollaDoble+' ampollas.';
                        return plan.innerHTML=planpuro;
                    } else {
                        let planparcial =
                        'Fentanilo '+dosisDoble+'MCG_____'+mlDoble+'ml.<br>\
                        DX5%_________________'+dosismlDoble+'ml.<br>\
                        Total_________________________'+plantotalDoble+'ml.<br>\
                        Se debe utlizar '+ampollaDoble+' ampollas.';
                       return plan.innerHTML = planparcial;
                    };
                }


                let fondo = document.querySelector('.contenedor');
                console.log(fondo);
                fondo.style.backgroundColor = '#089c41';
    
                let info = 
                '<div class="contenedor__Grilla">\
                <div class="contenedor__Titulo">\
                    <h3 class="nombre__Farmaco3">Fentanilo</h3>\
                </div>\
                <div class="contenedor__Info">\
                    <div class="contenedor__Presentacion">\
                        <div class="titulo__Presentacion3">\
                            <h4 class="presentacion">Ampolla de 0,250mcg/5ml (0,050mcg/ml).</h4>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion3">\
                                    <h4>Reconstitución</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>No requiere.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion3">\
                                    <h4>Según dosis indicada</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Retirar de la ampolla '+calculo()+' ml.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion3">\
                                    <h4>Cantidad a utilizar</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Para la dosis indicada se debe utlizar '+ampollas()+' ampolla/as</p>\
                                </div>\
                            </div>\
                        </div>\
                    </div>\
                    <h3 class="estabilidad3">Estabilidad y observaciones</h3>\
                    <div class="contenedor__Estabilidad">\
                        <p class="texto__Estabilidad"><b class="texto__Blanco">Proteger de la luz, 24hs de estabilidad a temperatura ambiente.</b></p>\
                        <p class="texto__Observaciones"><b class="texto__Blanco">Administrar de forma lenta, riesgo de torax leñoso en los pacientes.</b></p>\
                    </div>\
                    <h4 class="texto1">En base a la dosis indicada y la forma de administración elegida:</h4>\
                    <h3 class="administracion3">IntraVenosa Directa (IVD) --[PUSH]--</h3>\
                    <div class="contenedor__Presentacion">\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion3">\
                                    <h4>Diluyente</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>S.F. o DX5%</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion3">\
                                    <h4>Dilución</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Llevar a '+calculo()+'ml.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion3">\
                                    <h4>Infusión</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>En 3-5 minutos.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion2">\
                                    <h4>No administrar sin diluir</h4>\
                                </div>\
                            </div>\
                        </div>\
                    </div>\
                    <h3 class="administracion3">IntraVenosa Intermitente (IVI) --[2° CANAL]--</h3>\
                    <div class="contenedor__Presentacion">\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion3">\
                                    <h4>NO</h4>\
                                </div>\
                            </div>\
                        </div>\
                    </div>\
                    <h3 class="administracion3">IntraVenosa Continua (IVC) --[GOTEO]--</h3>\
                    <div class="contenedor__Presentacion">\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion3">\
                                    <h4>Dilución</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Dosis Indicada en ml llevar a 24ml de DX5%.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion3">\
                                    <h4>Preparación</h4>\
                                </div>\
                                <div class="datos">\
                                    <p class="plan1">'+plan()+'</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion3">\
                                    <h4>Si se prepara por primera vez o se debe cambiar el perfus PREPARAR DOBLE DOSIS</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>'+plan2()+'</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion3">\
                                    <h4>Identificación</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Perfus cinta color verde.<br>\
                                    Rotulo color verde.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion3">\
                                    <h4>Perfus fotosensible</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Utilizar perfus fotosensible y cambiar el mismo cada 7 días.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion3">\
                                    <h4>Sachet</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Cambiar el mismo cada 24hs, cubrir para proteger de la luz.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion3">\
                                    <h4>Sobredosis</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Se puede tratar con naloxona.</p>\
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
                    btn.style.display = 'none';
                });

            }
            //FLUCONAZOL
            else if(nombreMedicamento === "Fluconazol" || nombreMedicamento === "fluconazol" || nombreMedicamento === "FLUCONAZOL"){

                miligramos = 200;
                frascoTotal = 100;

                let fondo = document.querySelector('.contenedor');
                console.log(fondo);
                fondo.style.backgroundColor = '#1357a6';
    
                let info = 
                '<div class="contenedor__Grilla">\
                <div class="contenedor__Titulo">\
                    <h3 class="nombre__Farmaco">Fluconazol</h3>\
                </div>\
                <div class="contenedor__Info">\
                    <div class="contenedor__Presentacion">\
                        <div class="titulo__Presentacion">\
                            <h4 class="presentacion">Sachet 200mg/100ml.</h4>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion">\
                                    <h4>Reconstitución</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>No requiere.</p>\
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
                                    <p>Para la dosis indicada se debe utlizar '+ampollas()+' sachet.</p>\
                                </div>\
                            </div>\
                        </div>\
                    </div>\
                    <h3 class="estabilidad">Estabilidad y observaciones</h3>\
                    <div class="contenedor__Estabilidad">\
                        <p class="texto__Estabilidad"><b>Si el sachet es FLEX 24hs a T° ambiente. Si el sachet es rigido, desechar luego de retirar la dosis indicada.\
                            Medicacmento fotosensible.</b></p>\
                        <p class="texto__Observaciones"><b>En dosis mayores a 6mg infundir en 2hs.</b></p>\
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
                                    <h4>Concentración</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>2mg/ml.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion">\
                                    <h4>Dosis por central o périferica</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Retirar del sachet <b>'+calculo()+'ml.</b></p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion2">\
                                    <h4>Cubrir para proteger de la luz</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>El sachet o jeringa, utilizar perfus fotosensible en la bomba de administración.</p>\
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
                    btn.style.display = 'none';
                });

            }
            //FLUMAZENIL
            else if(nombreMedicamento === "Flumazenil" || nombreMedicamento === "flumazenil" || nombreMedicamento === "FLUMAZENIL"){

                miligramos = 500;
                frascoTotal = 5;
            

                let fondo = document.querySelector('.contenedor');
                console.log(fondo);
                fondo.style.backgroundColor = '#e47200';
    
                let info = 
                '<div class="contenedor__Grilla">\
                <div class="contenedor__Titulo">\
                    <h3 class="nombre__Farmaco4">Flumazenil</h3>\
                </div>\
                <div class="contenedor__Info">\
                    <div class="contenedor__Presentacion">\
                        <div class="titulo__Presentacion4">\
                            <h4 class="presentacion">Ampolla 5ml (0,1mg/ml).</h4>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion4">\
                                    <h4>Reconstitución</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>No requiere.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion4">\
                                    <h4>Según dosis indicada</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Retirar del FA '+calculo()+'ml.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion4">\
                                    <h4>Cantidad a utilizar</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Para la dosis indicada se debe utlizar '+ampollas()+' ampolla/as</p>\
                                </div>\
                            </div>\
                        </div>\
                    </div>\
                    <h4 class="texto1">En base a la dosis indicada y la forma de administración elegida:</h4>\
                    <h3 class="administracion4">IntraVenosa Directa (IVD) --[PUSH]--</h3>\
                    <div class="contenedor__Presentacion">\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion4">\
                                    <h4>diluyente</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>en SF o DX5%.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion4">\
                                    <h4>Esquema paso 1</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Revertir BDZ: 0,2mg en 15 segundos.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion4">\
                                    <h4>Esquema paso 2</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Repetir hasta un máximo de 1mg.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion4">\
                                    <h4>Infusión</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Si el paciente no responde esperar 20 minutos y repetir esquema.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion4">\
                                    <h4>Concentración máxima</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>3mg/hora.</p>\
                                </div>\
                            </div>\
                        </div>\
                    </div>\
                    <h3 class="administracion4">IntraVenosa Intermitente (IVI) --[2° CANAL]--</h3>\
                    <div class="contenedor__Presentacion">\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion4">\
                                    <h4>NO</h4>\
                                </div>\
                            </div>\
                        </div>\
                    </div>\
                    <h3 class="administracion4">IntraVenosa (IVC)--[GOTEO]--</h3>\
                    <div class="contenedor__Presentacion">\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion4">\
                                    <h4>NO</h4>\
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
                    btn.style.display = 'none';
                });

            }
            //FUROSEMIDA
            else if(nombreMedicamento === "Furosemida" || nombreMedicamento === "furosemida" || nombreMedicamento === "FUROSEMIDA"){

                miligramos = 20;
                frascoTotal = 2;
                let dosisml = 24 - calculo();
                let dosisDoble = dosis * 2;
                let mlDoble = calculo() * 2;
                let dosismlDoble = dosisml * 2;
                let plantotal = Number(calculo()) + Number(dosisml);
                let plantotalDoble = plantotal * 2;
                let ampollaDoble = ampollas() * 2;
                dilucion = dosis/1;
                dilucion2 = dosis/2;
                dilucion3 = dosis/10;
                
                function plan(){
                    if (dosis >= 240){
                        let planpuro ='Furosemida '+dosis+'MG_____'+calculo()+'ml.<br>\
                        Dosis Pura.<br>\
                        Total_________________________'+calculo()+'ml.';
                        return plan.innerHTML=planpuro;
                    } else {
                        let planparcial =
                        'Furosemida '+dosis+'MG_____'+calculo()+'ml.<br>\
                        SF_________________'+dosisml+'ml.<br>\
                        Total_________________________'+plantotal+'ml.';
                       return plan.innerHTML = planparcial;
                    };
                }
                function plan2(){
                    if (dosis >= 240){
                        let planpuro ='Furosemida '+dosisDoble+'MG_____'+mlDoble+'ml.<br>\
                        Dosis Pura.<br>\
                        Total_________________________'+mlDoble+'ml.<br>\
                        Se debe utlizar '+ampollaDoble+' ampollas.';
                        return plan.innerHTML=planpuro;
                    } else {
                        let planparcial =
                        'Furosemida '+dosisDoble+'MG_____'+mlDoble+'ml.<br>\
                        SF_________________'+dosismlDoble+'ml.<br>\
                        Total_________________________'+plantotalDoble+'ml.<br>\
                        Se debe utlizar '+ampollaDoble+' ampollas.';
                       return plan.innerHTML = planparcial;
                    };
                }

                let titulo = document.querySelector(".titulo");
                titulo.style.color = "black";
                let fondo = document.querySelector('.contenedor');
                console.log(fondo);
                fondo.style.backgroundColor = '#FFFF3D';
    
                let info = 
                '<div class="contenedor__Grilla">\
                <div class="contenedor__Titulo">\
                    <h3 class="nombre__Farmaco5">Furosemida</h3>\
                </div>\
                <div class="contenedor__Info">\
                    <div class="contenedor__Presentacion">\
                        <div class="titulo__Presentacion5">\
                            <h4 class="presentacion">Ampolla 2ml (1mg/0,1ml).</h4>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion5">\
                                    <h4>Reconstitución</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>No requiere.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion5">\
                                    <h4>Según dosis indicada</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Retirar del FA '+calculo()+'ml.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion5">\
                                    <h4>Cantidad a utilizar</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Para la dosis indicada se debe utlizar '+ampollas()+' ampolla/as</p>\
                                </div>\
                            </div>\
                        </div>\
                    </div>\
                    <h3 class="estabilidad5">Estabilidad y observaciones</h3>\
                    <div class="contenedor__Estabilidad">\
                        <p class="texto__Estabilidad"><b class="texto__Blanco">La dilucion IVC se debe Proteger de la luz y tiene una estabilidad de 24hs a temperatura ambiente.</b></p>\
                    </div>\
                    <h4 class="texto1">En base a la dosis indicada y la forma de administración elegida:</h4>\
                    <h3 class="administracion5">IntraVenosa Directa (IVD) --[PUSH]--</h3>\
                    <div class="contenedor__Presentacion">\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion5">\
                                    <h4>diluyente</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Sin diluir a una velocidad lenta.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion5">\
                                    <h4>Infusión</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>4mg/minuto.</p>\
                                </div>\
                            </div>\
                        </div>\
                    </div>\
                    <h3 class="administracion5">IntraVenosa Intermitente (IVI) --[2° CANAL]--</h3>\
                    <div class="contenedor__Presentacion">\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion5">\
                                    <h4>Diluyente</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>En SF.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion5">\
                                    <h4>Minima por périferica 1mg/ml.</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Llevar a '+dilucion+'ml.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion5">\
                                    <h4>Recomendada por périferica 2mg/ml.</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Llevar a '+dilucion2+'ml.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion5">\
                                    <h4>Máxima por Central 10mg/ml.</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Llevar a '+dilucion3+'ml.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion5">\
                                    <h4>Infusión</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>10-15 minutos.</p>\
                                </div>\
                            </div>\
                        </div>\
                    </div>\
                    <h3 class="administracion5">IntraVenosa (IVC)--[GOTEO]--</h3>\
                    <div class="contenedor__Presentacion">\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion5">\
                                    <h4>Dilución</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>llevar la dosis indicada a 24 ml de SF.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion5">\
                                    <h4>Preparación</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>'+plan()+'</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion5">\
                                    <h4>Si se prepara por primera vez o se debe cambiar el perfus PREPARAR DOBLE DOSIS</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>'+plan2()+'</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion5">\
                                    <h4>Preparar en Perfus Fotosensible</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Cambiar cada 24hs.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion5">\
                                    <h4>Sachet</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Cubrir para proteger de la luz, cambiar cada 24hs.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion5">\
                                    <h4>Identificar</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Perfus con cinta amarilla con fecha y medicamento.<br>Sachet con rotulo amarillo</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion5">\
                                    <h4>Infusión:</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Velocidad Máxima 4ml/minuto.</p>\
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
                    btn.style.display = 'none';
                    titulo.style.color = "#FFFFFF";
                });

            }
            //GANCICLOVIR
            else if(nombreMedicamento === "Ganciclovir" || nombreMedicamento === "ganciclovir" || nombreMedicamento === "GANCICLOVIR"){

                miligramos = 500;
                frascoTotal = 10;
                dilucion = dosis/5;
                dilucion2 = dosis/10;

                let fondo = document.querySelector('.contenedor');
                console.log(fondo);
                fondo.style.backgroundColor = '#1357a6';
    
                let info = 
                '<div class="contenedor__Grilla">\
                <div class="contenedor__Titulo">\
                    <h3 class="nombre__Farmaco">Ganciclovir</h3>\
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
                        <p class="texto__Estabilidad"><b class="texto__Blanco">Una vez reconstituido 12hs a T° ambiente.</b></p>\
                        <p class="texto__Observaciones"><b>Por sus propiedades cancerigenas, debe prepararse bajo flujo laminar, por el personal de Oncología.</b></p>\
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
                                    <p>DX5% o SF.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion">\
                                    <h4>Recomendada por périferica (5mg/ml)</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Llevar a '+dilucion+'ml.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion">\
                                    <h4>Máxima por central (10mg/ml)</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Llevar a '+dilucion2+'ml.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion">\
                                    <h4>Infusión</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Entre 60 a 2 horas.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion">\
                                    <h4>Fotosensible</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Utilizar perfus fotosensible y cubrir el sachet para protegerlo de la luz.</p>\
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
                    btn.style.display = 'none';
                });

            }
            //GENTAMICINA
            else if(nombreMedicamento === "Gentamicina" || nombreMedicamento === "gentamicina" || nombreMedicamento === "GENTAMICINA"){

                miligramos = 80;
                frascoTotal = 2;
                dilucion = dosis/3;
                dilucion2 = dosis/10;

                let fondo = document.querySelector('.contenedor');
                console.log(fondo);
                fondo.style.backgroundColor = '#1357a6';
    
                let info = 
                '<div class="contenedor__Grilla">\
                 <div class="contenedor__Titulo">\
                     <h3 class="nombre__Farmaco">Gentamicina</h3>\
                 </div>\
                 <div class="contenedor__Info">\
                     <div class="contenedor__Presentacion">\
                         <div class="titulo__Presentacion">\
                             <h4 class="presentacion">Ampolla 2ml (40mg/ml)</h4>\
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
                                     <p>Para la dosis indicada se debe utlizar '+ampollas()+' ampolla/as</p>\
                                 </div>\
                             </div>\
                         </div>\
                     </div>\
                     <h3 class="estabilidad">Estabilidad y observaciones</h3>\
                     <div class="contenedor__Estabilidad">\
                         <p class="texto__Estabilidad"><b class="texto__Blanco">Una vez abierto el vial desechar luego de su uso.</b></p>\
                         <p class="texto__Observaciones"><b>Si se administra con penicilinas o cefalosporinas, administrar al menos 1 hora antes o después de la administración de gentamicina.</b></p>\
                     </div>\
                     <h4 class="texto1">En base a la dosis indicada y la forma de administración elegida:</h4>\
                     <h3 class="administracion">IntraVenosa Directa (IVD) --[PUSH]--</h3>\
                     <div class="contenedor__Presentacion">\
                         <div class="info__Presentacion">\
                             <div class="info__Uno">\
                                 <div class="reconstitucion">\
                                     <h4>Poco Recomendada para Pediatría (PRP)</h4>\
                                 </div>\
                             </div>\
                         </div>\
                         <div class="info__Presentacion">\
                             <div class="info__Uno">\
                                 <div class="reconstitucion">\
                                     <h4>Diluyente</h4>\
                                 </div>\
                                 <div class="datos">\
                                     <p>DX5% o SF.</p>\
                                 </div>\
                             </div>\
                         </div>\
                         <div class="info__Presentacion">\
                             <div class="info__Uno">\
                                 <div class="reconstitucion">\
                                     <h4>Recomendada para périferica y central (10mg/ml)</h4>\
                                 </div>\
                                 <div class="datos">\
                                     <p>Llevar a '+dilucion+'ml.</p>\
                                 </div>\
                             </div>\
                         </div>\
                         <div class="info__Presentacion">\
                             <div class="info__Uno">\
                                 <div class="reconstitucion">\
                                     <h4>Infusión</h4>\
                                 </div>\
                                 <div class="datos">\
                                     <p>En 15 minutos.</p>\
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
                                     <p>DX5% o SF.</p>\
                                 </div>\
                             </div>\
                         </div>\
                         <div class="info__Presentacion">\
                             <div class="info__Uno">\
                                 <div class="reconstitucion">\
                                     <h4>Minima por périferica(3mg/ml)</h4>\
                                 </div>\
                                 <div class="datos">\
                                     <p>Llevar a '+dilucion+'ml.</p>\
                                 </div>\
                             </div>\
                         </div>\
                         <div class="info__Presentacion">\
                             <div class="info__Uno">\
                                 <div class="reconstitucion">\
                                     <h4>Máxima por central (10mg/ml)</h4>\
                                 </div>\
                                 <div class="datos">\
                                     <p>Llevar a '+dilucion2+'ml.</p>\
                                 </div>\
                             </div>\
                         </div>\
                         <div class="info__Presentacion">\
                             <div class="info__Uno">\
                                 <div class="reconstitucion">\
                                     <h4>Infusión</h4>\
                                 </div>\
                                 <div class="datos">\
                                     <p>En 30 a 60 minutos.</p>\
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
                    btn.style.display = 'none';
                });

            }
            //HIDROCORTISONA
            else if(nombreMedicamento === "Hidrocortisona" || nombreMedicamento === "hidrocortisona" || nombreMedicamento === "HIDROCORTISONA"){

                miligramos = 100;
                frascoTotal = 5;
                miligramos1 = 500;
                frascoTotal1 = 10;
                dilucion = dosis/50;
                dilucion2 = dosis/1;
                dilucion3 = dosis/5;
                dilucion4 = dosis/60;      

                function redondeo(){
                    if  (dilucion4 === Number.isInteger){
                        console.log(dilucion4);
                        return dilucion4;
                    } else{
                        return dilucion4.toFixed(2);
                    }
                }

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
                                    return ampollas;
                            } else if(dosis !== entero){
                                let ampollas = dosis/miligramos1;
                                redondeo2 = (ampollas.toFixed(2));
                                console.log(redondeo2);
                                if (ampollas === 1.00){
                                    redondeo2 = parseInt(ampollas);
                                    return Math.ceil(redondeo2);
                                }
                                return Math.ceil(redondeo2);
                            }
                }

                let fondo = document.querySelector('.contenedor');
                console.log(fondo);
                fondo.style.backgroundColor = '#e47200';
    
                let info = 
                '<div class="contenedor__Grilla">\
                <div class="contenedor__Titulo">\
                    <h3 class="nombre__Farmaco4">Hidrocortisona</h3>\
                </div>\
                <div class="contenedor__Info">\
                    <div class="contenedor__Presentacion">\
                        <div class="titulo__Presentacion4">\
                            <h4 class="presentacion">Frasco/Ampolla 100mg.</h4>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion4">\
                                    <h4>Reconstitución (20mg/ml)</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>5ml de agua destilada.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion4">\
                                    <h4>Según dosis indicada</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Retirar del FA '+calculo()+' ml.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion4">\
                                    <h4>Cantidad a utilizar</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Para la dosis indicada se debe utlizar '+ampollas()+' frasco/os</p>\
                                </div>\
                            </div>\
                        </div>\
                    </div>\
                    <div class="contenedor__Presentacion">\
                        <div class="titulo__Presentacion4">\
                            <h4 class="presentacion">Frasco/Ampolla 500mg.</h4>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion4">\
                                    <h4>Reconstitución (50mg/ml)</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>10ml de agua destilada.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion4">\
                                    <h4>Según dosis indicada</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Retirar del FA '+calculo1()+' ml.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion4">\
                                    <h4>Cantidad a utilizar</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Para la dosis indicada se debe utlizar '+ampollas1()+' frasco/os</p>\
                                </div>\
                            </div>\
                        </div>\
                    </div>\
                    <div class="contenedor__Presentacion">\
                        <div class="titulo__Presentacion4">\
                            <h4 class="presentacion">Suspención Oral 1mg/ml.</h4>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion4">\
                                    <h4>Según dosis indicada</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Retirar del frasco '+dosis+' ml.</p>\
                                </div>\
                            </div>\
                        </div>\
                    </div>\
                    <div class="contenedor__Presentacion">\
                        <div class="titulo__Presentacion4">\
                            <h4 class="presentacion">Comprimidos de 10mg.</h4>\
                        </div>\
                    </div>\
                    <h3 class="estabilidad4">Estabilidad y observaciones</h3>\
                    <div class="contenedor__Estabilidad">\
                        <p class="texto__Estabilidad"><b class="texto__Blanco">Una vez reconstituida tiene una durabilidad 72hs a T° ambiente y protegida de la luz.</b></p>\
                        <p class="texto__Observaciones">Vía oral: Administrar con alimentos, disminuye la intolerancia gastrica, se puede triturar.</p>\
                    </div>\
                    <h4 class="texto1">En base a la dosis indicada y la forma de administración elegida:</h4>\
                    <h3 class="administracion4">IntraVenosa Directa (IVD) --[PUSH]--</h3>\
                    <div class="contenedor__Presentacion">\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion4">\
                                    <h4>Diluyente</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>SF o DX5%.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion4">\
                                    <h4>Recomendada por vía périferica o central (50mg/ml)</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Llevar a '+dilucion+'ml.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion4">\
                                    <h4>Infusión</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>De 3 a 5 minutos.</p>\
                                </div>\
                            </div>\
                        </div>\
                    </div>\
                    <h3 class="administracion4">IntraVenosa Intermitente (IVI) --[2° CANAL]--</h3>\
                    <div class="contenedor__Presentacion">\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion4">\
                                    <h4>Dilución:</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>En SF o DX5%.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion4">\
                                    <h4>Recomendada por vía périferica (1mg/ml)</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Llevar a '+dilucion2+'ml.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion4">\
                                    <h4>Máxima por vía central (5mg/ml)</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Llevar a '+dilucion3+'ml.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion4">\
                                    <h4>Pacientes con Restricción Hidrica (60mg/ml)</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Llevar a '+redondeo()+'ml.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion4">\
                                    <h4>Infusión:</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>En 30-60 minutos.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion4">\
                                    <h4>Dosis mayores a 500mg</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Infundir por mas de 60 minutos.</p>\
                                </div>\
                            </div>\
                        </div>\
                    </div>\
                    <h3 class="administracion4">IntraVenosa (IVC)--[GOTEO]--</h3>\
                    <div class="contenedor__Presentacion">\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion4">\
                                    <h4>NO</h4>\
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
                    btn.style.display = 'none';
                });

            }
            //IBUPROFENO
            else if(nombreMedicamento === "Ibuprofeno" || nombreMedicamento === "ibuprofeno" || nombreMedicamento === "IBUPROFENO"){

                miligramos = 400;
                frascoTotal = 3;
                jarabe2dosis = 2000;
                jarabe3dosis = 4000;
                jarabetotal = 100;
                dilucion = dosis/2;
                dilucion2 = dosis/4;
                
                function calculo2(){
                    if (dosis === entero){//COMPARA QUE LA DOSIS SEA UN ENTERO Y LO MANTIENE
                                    let reconstitucion = (dosis*jarabetotal)/jarabe2dosis;
                                    console.log(reconstitucion);
                                    return reconstitucion;//IMPRIME EL VALOR ENTERO
                    } else if(dosis !== entero){//COMPARA QUE LA DOSIS NO SEA UN VALOR ENTERO Y LO CONVIERTE A FLOTANTE
                                    let reconstitucion = (dosis*jarabetotal)/jarabe2dosis;
                                     redondeo1 = (reconstitucion.toFixed(1));//MUESTRA SOLAMENTE LOS 2 DECIMALES DESPUES DE LA COMA DEL FLOTANTE
                                     console.log(redondeo1);
                                     return redondeo1;//IMPRIME EL FLOTANTE
                                }               
                };

                function calculo3(){
                    if (dosis === entero){//COMPARA QUE LA DOSIS SEA UN ENTERO Y LO MANTIENE
                                    let reconstitucion = (dosis*jarabetotal)/jarabe3dosis;
                                    console.log(reconstitucion);
                                    return reconstitucion;//IMPRIME EL VALOR ENTERO
                    } else if(dosis !== entero){//COMPARA QUE LA DOSIS NO SEA UN VALOR ENTERO Y LO CONVIERTE A FLOTANTE
                                    let reconstitucion = (dosis*jarabetotal)/jarabe3dosis;
                                     redondeo1 = (reconstitucion.toFixed(1));//MUESTRA SOLAMENTE LOS 2 DECIMALES DESPUES DE LA COMA DEL FLOTANTE
                                     console.log(redondeo1);
                                     return redondeo1;//IMPRIME EL FLOTANTE
                                }               
                };

                let fondo = document.querySelector('.contenedor');
                console.log(fondo);
                fondo.style.backgroundColor = '#089c41';
    
                let info = 
                '<div class="contenedor__Grilla">\
                <div class="contenedor__Titulo">\
                    <h3 class="nombre__Farmaco3">Ibuprofeno</h3>\
                </div>\
                <div class="contenedor__Info">\
                    <div class="contenedor__Presentacion">\
                        <div class="titulo__Presentacion3">\
                            <h4 class="presentacion">Ampolla de 400mg/3ml</h4>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion3">\
                                    <h4>Reconstitución</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>No requiere.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion3">\
                                    <h4>Según dosis indicada</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Retirar de la ampolla '+calculo()+' ml.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion3">\
                                    <h4>Cantidad a utilizar</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Para la dosis indicada se debe utlizar '+ampollas()+' ampolla/as</p>\
                                </div>\
                            </div>\
                        </div>\
                    </div>\
                    <div class="contenedor__Presentacion">\
                        <div class="titulo__Presentacion3">\
                            <h4 class="presentacion">Jarabe al 2% (2000mg/100ml)</h4>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion3">\
                                    <h4>Según dosis indicada</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Retirar del frasco '+calculo2()+' ml.</p>\
                                </div>\
                            </div>\
                        </div>\
                    </div>\
                    <div class="contenedor__Presentacion">\
                        <div class="titulo__Presentacion3">\
                            <h4 class="presentacion">Jarabe al 4% (4000mg/100ml)</h4>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion3">\
                                    <h4>Según dosis indicada</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Retirar del frasco '+calculo3()+' ml.</p>\
                                </div>\
                            </div>\
                        </div>\
                    </div>\
                    <div class="contenedor__Presentacion">\
                        <div class="titulo__Presentacion3">\
                            <h4 class="presentacion">Comprimidos de 400mg, 600mg.</h4>\
                        </div>\
                    </div>\
                    <h3 class="estabilidad3">Estabilidad y observaciones</h3>\
                    <div class="contenedor__Estabilidad">\
                        <p class="texto__Observaciones">Administrar con alimentos para disminuir la molestia gastrointestinal.</p>\
                        <p class="texto__Observaciones">Existen presentaciones comerciales con lidocaína de uso exclusivo I M.</p>\
                        <p class="texto__Observaciones">La extravasación puede provocar necrosis en los tejidos.</p>\
                    </div>\
                    <h4 class="texto1">En base a la dosis indicada y la forma de administración elegida:</h4>\
                    <h3 class="administracion3">IntraVenosa Directa (IVD) --[PUSH]--</h3>\
                    <div class="contenedor__Presentacion">\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion3">\
                                    <h4>NO</h4>\
                                </div>\
                            </div>\
                        </div>\
                    </div>\
                    <h3 class="administracion3">IntraVenosa Intermitente (IVI) --[2° CANAL]--</h3>\
                    <div class="contenedor__Presentacion">\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion3">\
                                    <h4>Diluyente</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>SF o DX5%.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion3">\
                                    <h4>Recomendada por vía Périferica (2mg/ml)</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Llevar a '+dilucion+'ml.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion3">\
                                    <h4>Máxima por vía Central (4mg/ml)</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Llevar a '+dilucion2+'ml.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion3">\
                                    <h4>Infusión</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Entre 30-60 minutos.</p>\
                                </div>\
                            </div>\
                        </div>\
                    </div>\
                    <h3 class="administracion3">IntraVenosa Continua (IVC) --[GOTEO]--</h3>\
                    <div class="contenedor__Presentacion">\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion3">\
                                    <h4>NO</h4>\
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
                    btn.style.display = 'none';
                });

            }
            //IMIPENEM
            else if(nombreMedicamento === "Imipenem" || nombreMedicamento === "imipenem" || nombreMedicamento === "IMIPENEM"){

                miligramos = 500;
                frascoTotal = 10;
                dilucion = dosis/5;
                dilucion2 = Math.round(dosis/7);

                let fondo = document.querySelector('.contenedor');
                console.log(fondo);
                fondo.style.backgroundColor = '#1357a6';
    
                let info = 
                '<div class="contenedor__Grilla">\
                <div class="contenedor__Titulo">\
                    <h3 class="nombre__Farmaco">Imipenem</h3>\
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
                                    <p>En 10ml de SF, obteniendo 50mg/ml.</p>\
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
                        <p class="texto__Estabilidad">Una vez Reconstituido tiene una durabilidad de 10 hs a T° ambiente y 48hs refrigerado.</p>\
                        <p class="texto__Observaciones">El tiempo de preparación y administración no debe exceder las 2hs.</p>\
                    </div>\
                    <h4 class="texto1">En base a la dosis indicada y la forma de administración elegida:</h4>\
                    <h3 class="administracion">IntraVenosa Directa (IVD) --[PUSH]--</h3>\
                    <div class="contenedor__Presentacion">\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion">\
                                    <h4>Poco Recomendada para Pediatría (PRP).</h4>\
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
                                    <p>DX5%. o SF</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion">\
                                    <h4>Recomendada por vía Périferica (5mg/ml)</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Llevar a '+dilucion+'ml.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion">\
                                    <h4>Máxima por vía Central (7mg/ml)</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Llevar a '+dilucion2+'ml.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion">\
                                    <h4>Infusión</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Dosis menores a 500mg en 30 minutos; Dosis mayores a 500mg en 60 minutos.</p>\
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
                    btn.style.display = 'none';
                });

            }
            //INSULINA
            else if(nombreMedicamento === "Insulina" || nombreMedicamento === "insulina" || nombreMedicamento === "INSULINA"){

                miligramos = 100;
                frascoTotal = 1;
                dilucion = dosis/0.2;

                function insulina(){
                    if (dosis === entero){//COMPARA QUE LA DOSIS SEA UN ENTERO Y LO MANTIENE
                                    let reconstitucion = (dosis*frascoTotal)/miligramos;
                                    console.log(reconstitucion);
                                    return reconstitucion;//IMPRIME EL VALOR ENTERO
                    } else if(dosis !== entero){//COMPARA QUE LA DOSIS NO SEA UN VALOR ENTERO Y LO CONVIERTE A FLOTANTE
                                    let reconstitucion = (dosis*frascoTotal)/miligramos;
                                     redondeo1 = (reconstitucion.toFixed(2));//MUESTRA SOLAMENTE LOS 2 DECIMALES DESPUES DE LA COMA DEL FLOTANTE
                                     console.log(redondeo1);
                                     return redondeo1;//IMPRIME EL FLOTANTE
                                }               
                };

                let titulo = document.querySelector(".titulo");
                titulo.style.color = "black";
                let fondo = document.querySelector('.contenedor');
                console.log(fondo);
                fondo.style.backgroundColor = '#FFFF3D';
    
                let info = 
                '<div class="contenedor__Grilla">\
                <div class="contenedor__Titulo">\
                    <h3 class="nombre__Farmaco5">Insulina Humana Corriente/Regular</h3>\
                </div>\
                <div class="contenedor__Info">\
                    <div class="contenedor__Presentacion">\
                        <div class="titulo__Presentacion5">\
                            <h4 class="presentacion">Frasco/Ampolla 10ml (100UI/ml).</h4>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion5">\
                                    <h4>Reconstitución</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>No requiere.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion5">\
                                    <h4>Según dosis indicada</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Retirar del FA '+insulina()+'ml.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion5">\
                                    <h4>Cantidad a utilizar</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Para la dosis indicada se debe utlizar '+ampollas()+' ampolla/as</p>\
                                </div>\
                            </div>\
                        </div>\
                    </div>\
                    <div class="contenedor__Presentacion">\
                        <div class="titulo__Presentacion5">\
                            <h4 class="presentacion">Lapiceras y Cartuchos 10ml (100UI/ml).</h4>\
                        </div>\
                    </div>\
                    <h3 class="estabilidad5">Estabilidad y observaciones</h3>\
                    <div class="contenedor__Estabilidad">\
                        <p class="texto__Estabilidad">Los viales, las plumas y cartuchos deben conservarse refrigerada. Una vez abiertos tienen una duración de 28 días.</p>\
                        <p class="texto__Observaciones">Puede desarrollarse hipoglucemia cuando la dosis de insulina excede la necesidad del paciente.</p>\
                        <p class="texto__Observaciones">En pacientes con retinopatía proliferativa, puede causar ceguera.</p>\
                        <p class="texto__Observaciones">Puede haber reacciones de hipersensibilidad locales en el lugar de aplicación.</p>\
                    </div>\
                    <h4 class="texto1">En base a la dosis indicada y la forma de administración elegida:</h4>\
                    <h3 class="administracion5">IntraVenosa Directa (IVD) --[PUSH]--</h3>\
                    <div class="contenedor__Presentacion">\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion5">\
                                    <h4>Administrar de forma rápida y lavar con SF</h4>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion5">\
                                    <h4>A dosis bajas se puede diluir a una concentración de 0,2UI/ml.</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Llevar a '+dilucion+'ml.</p>\
                                </div>\
                            </div>\
                        </div>\
                    </div>\
                    <h3 class="administracion5">IntraVenosa Intermitente (IVI) --[2° CANAL]--</h3>\
                    <div class="contenedor__Presentacion">\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion5">\
                                    <h4>NO</h4>\
                                </div>\
                            </div>\
                        </div>\
                    </div>\
                    <h3 class="administracion5">IntraVenosa (IVC)--[GOTEO]--</h3>\
                    <div class="contenedor__Presentacion">\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion5">\
                                    <h4>Preparar en</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Perfus común, cambiar cada 24hs.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion5">\
                                    <h4>Sachet</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>No requiere protección a la luz.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion5">\
                                    <h4>Identificar</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>perfus: con cinta color amarilla con fecha y medicamento.<br>Sachet: rotulo color amarillo.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion5">\
                                    <h4>Administrar</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>En solitario, Acceso venoso o lumen unicamente destinado a esta infusión. No administrar con otros mediacmentos.</p>\
                                </div>\
                            </div>\
                        </div>\
                    </div>\
                    <h3 class="administracion5">Purgado del set para saturar la adsorción de insulina y asegurar un aporte adecuado</h3>\
                    <div class="info__Presentacion">\
                        <div class="info__Uno">\
                            <div class="reconstitucion5">\
                                <h4>Deben seguirse los siguientes pasos:</h4>\
                            </div>\
                            <div class="datos__Insulina">\
                                <p><ol class="lista__Insulina">\
                                    <li><b>Preparar la dilución antes dicha, agitandola para asegurar una mezcla homogénea.</b></li>\
                                    <li><b>Purgar el set de bomba XL Plum A.</b></li>\
                                    <li><b>Dejar reposar 30 minutos.</b></li>\
                                    <li><b>Descartar el contenido del sachet.</b></li>\
                                    <li><b>Volver a prerarar la dilución.</b></li>\
                                    <li><b>Purgar el set nuevamente.</b></li>\
                                    <li><b>La solucion esta lista para su administración.</b></li>\
                                </ol></p>\
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
                    btn.style.display = 'none';
                    titulo.style.color = "#FFFFFF";
                });

            }
            //KETAMINA
            else if(nombreMedicamento === "Ketamina" || nombreMedicamento === "ketamina" || nombreMedicamento === "KETAMINA"){

                miligramos = 500;
                frascoTotal = 10;
                dilucion = calculo() * 2;
                let dosisml = 24 - calculo();
                let plantotal = Number(calculo()) + Number(dosisml);
                let dosisDoble = dosis * 2;
                let mlDoble = calculo() * 2;
                let dosismlDoble = dosisml * 2;
                let plantotalDoble = plantotal * 2;
                let ampollaDoble = ampollas() * 2;
                
                
                function plan(){
                    if (dosis >= 1200){
                        let planpuro ='Ketamina '+dosis+'MG_____'+calculo()+'ml.<br>\
                        Dosis Pura.<br>\
                        Total_________________________'+plantotal+'ml.';
                        return plan.innerHTML=planpuro;
                    } else {
                        let planparcial =
                        'Ketamina '+dosis+'MG_____'+calculo()+'ml.<br>\
                        DX5%_________________'+dosisml+'ml.<br>\
                        Total_________________________'+plantotal+'ml.';
                       return plan.innerHTML = planparcial;
                    };
                }
                function plan2(){
                    if (dosis >= 1200){
                        let planpuro ='Ketamina '+dosisDoble+'MG_____'+mlDoble+'ml.<br>\
                        Dosis Pura.<br>\
                        Total_________________________'+plantotalDoble+'ml.<br>\
                        Se debe utlizar '+ampollaDoble+' Frasco/ampollas.';
                        return plan.innerHTML=planpuro;
                    } else {
                        let planparcial =
                        'Ketamina '+dosisDoble+'MG_____'+mlDoble+'ml.<br>\
                        DX5%_________________'+dosismlDoble+'ml.<br>\
                        Total_________________________'+plantotalDoble+'ml.<br>\
                        Se debe utlizar '+ampollaDoble+' Frasco/ampollas.';
                       return plan.innerHTML = planparcial;
                    };
                }


                let fondo = document.querySelector('.contenedor');
                console.log(fondo);
                fondo.style.backgroundColor = '#089c41';
    
                let info = 
                '<div class="contenedor__Grilla">\
                <div class="contenedor__Titulo">\
                    <h3 class="nombre__Farmaco3">Ketamina</h3>\
                </div>\
                <div class="contenedor__Info">\
                    <div class="contenedor__Presentacion">\
                        <div class="titulo__Presentacion3">\
                            <h4 class="presentacion">Frasco/Ampolla de 500mg/10ml (50mg/ml).</h4>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion3">\
                                    <h4>Reconstitución</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>No requiere.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion3">\
                                    <h4>Según dosis indicada</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Retirar de la ampolla '+calculo()+' ml.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion3">\
                                    <h4>Cantidad a utilizar</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Para la dosis indicada se debe utlizar '+ampollas()+' ampolla/as</p>\
                                </div>\
                            </div>\
                        </div>\
                    </div>\
                    <h3 class="estabilidad3">Estabilidad y observaciones</h3>\
                    <div class="contenedor__Estabilidad">\
                        <p class="texto__Estabilidad"><b class="texto__Blanco">En goteo de infusión 24hs de estabilidad a temperatura ambiente.<br>Frasco/Ampolla conservar refrigerada.</b></p>\
                        <p class="texto__Observaciones"><b>Genera aumento de sialorrea y secreciones, alucinaciones visuales y auditivas, hipertensión, hipotensión, taquicardia, drogadependencia.</b></p>\
                    </div>\
                    <h4 class="texto1">En base a la dosis indicada y la forma de administración elegida:</h4>\
                    <h3 class="administracion3">IntraVenosa Directa (IVD) --[PUSH]--</h3>\
                    <div class="contenedor__Presentacion">\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion3">\
                                    <h4>Diluyente</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>SF o DX5%.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion3">\
                                    <h4>Concentración (misma dosis indicada)</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Llevar a '+dilucion+'ml.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion3">\
                                    <h4>Infusión</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>En 3 a 5 minutos.</p>\
                                </div>\
                            </div>\
                        </div>\
                    </div>\
                    <h3 class="administracion3">IntraVenosa Intermitente (IVI) --[2° CANAL]--</h3>\
                    <div class="contenedor__Presentacion">\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion3">\
                                    <h4>NO</h4>\
                                </div>\
                            </div>\
                        </div>\
                    </div>\
                    <h3 class="administracion3">IntraVenosa Continua (IVC) --[GOTEO]--</h3>\
                    <div class="contenedor__Presentacion">\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion3">\
                                    <h4>Dilución</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Dosis indicada llevar a 24 ml de DX5%.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion3">\
                                    <h4>Preparación</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>'+plan()+'</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion3">\
                                    <h4>Preparación</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>'+plan2()+'</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion3">\
                                    <h4>Identificación</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Perfus cinta color verde.<br>\
                                    Rotulo color verde.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion3">\
                                    <h4>Perfus</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Utilizar perfus común y cambiar el mismo cada 7 días.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion3">\
                                    <h4>Sachet</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Cambiar el mismo cada 24hs, no necesita proteger de la luz.</p>\
                                </div>\
                            </div>\
                        </div>\
                    </div>\
                    <h3 class="administracion3">IntraMuscular (IM)</h3>\
                    <div class="contenedor__Presentacion">\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion3">\
                                    <h4>Sin diluir</h4>\
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
                    btn.style.display = 'none';
                });

            }
            //LINEZOLID 
            else if(nombreMedicamento === "Linezolid" || nombreMedicamento === "linezolid" || nombreMedicamento === "LINEZOLID"){

                miligramos = 600;
                frascoTotal = 300;
                suspencionmg = 100;
                totalsuspencion = 5;
                dilucion = dosis/2;
                let reconstitucion = (dosis*totalsuspencion)/suspencionmg;

                function suspencion(){
                    if (Number.isInteger(reconstitucion)){//COMPARA QUE LA DOSIS SEA UN ENTERO Y LO MANTIENE
                                    console.log(reconstitucion);
                                    return reconstitucion;//IMPRIME EL VALOR ENTERO
                    } else{//COMPARA QUE LA DOSIS NO SEA UN VALOR ENTERO Y LO CONVIERTE A FLOTANTE
                                     redondeo1 = (reconstitucion.toFixed(1));//MUESTRA SOLAMENTE LOS 2 DECIMALES DESPUES DE LA COMA DEL FLOTANTE
                                     console.log(redondeo1);
                                     return redondeo1;//IMPRIME EL FLOTANTE
                                }               
                };
                
                let frascos = dosis/miligramos;
                function frascossuspencion(){
                                if (Number.isInteger(frascos)){
                                    console.log(ampollas);
                                    return frascos;
                            } else{
                                let redondeo2 = (frascos.toFixed(2));
                                console.log(redondeo2);
                                if (frascos === 1.00){
                                    redondeo2 = parseInt(frascos);
                                    return Math.ceil(redondeo2);
                                }
                                return Math.ceil(redondeo2);
                            }
                }

                let fondo = document.querySelector('.contenedor');
                console.log(fondo);
                fondo.style.backgroundColor = '#1357a6';
    
                let info = 
                '<div class="contenedor__Grilla">\
                <div class="contenedor__Titulo">\
                <h3 class="nombre__Farmaco">Linezolid</h3>\
                </div>\
                <div class="contenedor__Info">\
                    <div class="contenedor__Presentacion">\
                        <div class="titulo__Presentacion">\
                            <h4 class="presentacion">Sachet 600mg/300ml (2mg/ml)</h4>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion">\
                                    <h4>Reconstitución</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>No requiere.</p>\
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
                                    <p>Para la dosis indicada se debe utlizar '+ampollas()+' sachet/s</p>\
                                </div>\
                            </div>\
                        </div>\
                    </div>\
                    <div class="contenedor__Presentacion">\
                        <div class="titulo__Presentacion">\
                            <h4 class="presentacion">Granulado Suspención Oral (100mg/5ml)</h4>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion">\
                                    <h4>Reconstitución</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>123ml de agua.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion">\
                                    <h4>Según dosis indicada</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Retirar del frasco '+suspencion()+' ml.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion">\
                                    <h4>Cantidad a utilizar</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Para la dosis indicada se debe utlizar '+frascossuspencion()+' frasco/os</p>\
                                </div>\
                            </div>\
                        </div>\
                    </div>\
                    <div class="contenedor__Presentacion">\
                        <div class="titulo__Presentacion">\
                            <h4 class="presentacion">Comprimidos recubiertos: 600 mg</h4>\
                        </div>\
                    </div>\
                    <div class="contenedor__Info">\
                    <h3 class="estabilidad">Estabilidad y observaciones</h3>\
                    <div class="contenedor__Estabilidad">\
                        <p class="texto__Estabilidad"><b class="texto__Blanco">La solución intravenosa debe conservarse a temperatura ambiente y protegerse de la luz. Mantener en envoltura de aluminio hasta su uso. La solución puede volverse de color amarillo, que se intensifica con el paso del tiempo sin afectar su efectividad.</b></p>\
                        <p class="texto__Estabilidad">Granulado para suspensión oral: conservar a temperatura ambiente (la suspensión también puede conservarse en frigorífico). Una vez preparada, la suspensión debe utilizarse antes de transcurridos 21 días. Invertir varias veces antes de su uso. No agitar.</p>\
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
                                    <p>No requiere.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion">\
                                    <h4>Infusión</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Entre 30 a 120 minutos.</p>\
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
                    btn.style.display = 'none';
                });

            }
            //LEVETIRACETAM
            else if(nombreMedicamento === "Levetiracetam" || nombreMedicamento === "levetiracetam" || nombreMedicamento === "LEVETIRACETAM"){

                miligramos = 500;
                frascoTotal = 5;
                jarabefrasco = 1;
                miligramosjarabe= 100;

                function calculo1(){
                    if (dosis === entero){//COMPARA QUE LA DOSIS SEA UN ENTERO Y LO MANTIENE
                                    let reconstitucion = (dosis*jarabefrasco)/miligramosjarabe;
                                    console.log(reconstitucion);
                                    return reconstitucion;//IMPRIME EL VALOR ENTERO
                    } else if(dosis !== entero){//COMPARA QUE LA DOSIS NO SEA UN VALOR ENTERO Y LO CONVIERTE A FLOTANTE
                                    let reconstitucion = (dosis*jarabefrasco)/miligramosjarabe;
                                     redondeo1 = (reconstitucion.toFixed(1));//MUESTRA SOLAMENTE LOS 2 DECIMALES DESPUES DE LA COMA DEL FLOTANTE
                                     console.log(redondeo1);
                                     return redondeo1;//IMPRIME EL FLOTANTE
                                }               
                };
            

                let fondo = document.querySelector('.contenedor');
                console.log(fondo);
                fondo.style.backgroundColor = '#e47200';
    
                let info = 
                '<div class="contenedor__Grilla">\
                <div class="contenedor__Titulo">\
                    <h3 class="nombre__Farmaco4">Levetiracetam</h3>\
                </div>\
                <div class="contenedor__Info">\
                    <div class="contenedor__Presentacion">\
                        <div class="titulo__Presentacion4">\
                            <h4 class="presentacion">Frasco/Ampolla 500mg/5ml (100mg/ml).</h4>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion4">\
                                    <h4>Reconstitución</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>No requiere.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion4">\
                                    <h4>Según dosis indicada</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Retirar del FA '+calculo()+' ml.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion4">\
                                    <h4>Cantidad a utilizar</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Para la dosis indicada se debe utlizar '+ampollas()+' frasco/os</p>\
                                </div>\
                            </div>\
                        </div>\
                    </div>\
                    <div class="contenedor__Presentacion">\
                        <div class="titulo__Presentacion4">\
                            <h4 class="presentacion">Suspención 100mg/ml.</h4>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion4">\
                                    <h4>Reconstitución</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>No requiere.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion4">\
                                    <h4>Según dosis indicada</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Retirar de la Suspención '+calculo1()+' ml.</p>\
                                </div>\
                            </div>\
                        </div>\
                    </div>\
                    <div class="contenedor__Presentacion">\
                        <div class="titulo__Presentacion4">\
                            <h4 class="presentacion">Comprimidos 500mg y 100mg</h4>\
                        </div>\
                    </div>\
                    <h3 class="estabilidad4">Estabilidad y observaciones</h3>\
                    <div class="contenedor__Estabilidad">\
                        <p class="texto__Estabilidad"><b class="texto__Blanco">La suspención oral un vez abierta conservar a T° ambiente por 2 meses.</b></p>\
                        <p class="texto__Observaciones"><b>La administración vía oral Puede ser administrado con o sin alimentos.</b></p>\
                    </div>\
                    <h4 class="texto1">En base a la dosis indicada y la forma de administración elegida:</h4>\
                    <h3 class="administracion4">IntraVenosa Directa (IVD) --[PUSH]--</h3>\
                    <div class="contenedor__Presentacion">\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion4">\
                                    <h4>No</h4>\
                                </div>\
                            </div>\
                        </div>\
                    </div>\
                    <h3 class="administracion4">IntraVenosa Intermitente (IVI) --[2° CANAL]--</h3>\
                    <div class="contenedor__Presentacion">\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion4">\
                                    <h4>Diluyente</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>SF o DX5%.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion4">\
                                    <h4>Diluir la dosis en 100ml:</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>250mg en 100ml.<br>500mg en 100ml.<br>1000mg en 100ml.<br>1500mg en 100ml.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion4">\
                                    <h4>Infusión:</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>En 15 minutos.</p>\
                                </div>\
                            </div>\
                        </div>\
                    </div>\
                    <h3 class="administracion4">IntraVenosa (IVC)--[GOTEO]--</h3>\
                    <div class="contenedor__Presentacion">\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion4">\
                                    <h4>NO</h4>\
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
                    btn.style.display = 'none';
                });

            }
            //LEVOFLOXACINA
            else if(nombreMedicamento === "Levofloxacina" || nombreMedicamento === "levofloxacina" || nombreMedicamento === "LEVOFLOXACINA"){

                miligramos = 500;
                frascoTotal = 20;
                dilucion = dosis/5;


                let fondo = document.querySelector('.contenedor');
                console.log(fondo);
                fondo.style.backgroundColor = '#1357a6';
    
                let info = 
                '<div class="contenedor__Grilla">\
                <div class="contenedor__Titulo">\
                    <h3 class="nombre__Farmaco">Levofloxacina</h3>\
                </div>\
                <div class="contenedor__Info">\
                    <div class="contenedor__Presentacion">\
                        <div class="titulo__Presentacion">\
                            <h4 class="presentacion">Frasco/Ampolla 500mg/20ml</h4>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion">\
                                    <h4>Reconstitución</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>No requiere.</p>\
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
                        <p class="texto__Estabilidad">Sin usar <b class="texto__Blanco">Proteger de la luz</b>. Una vez abierto refrigerado tiene una duración de 24hs.</p>\
                        <p class="texto__Estabilidad"><b class="texto__Blanco">Durante la perfusión no requiere proteger de la luz</b>.</p>\
                        <p class="texto__Observaciones">Utilizar en las 3hs siguientes a la rotura del tapon de goma.</p>\
                        <p class="texto__Observaciones">Solución transparente de color amarillo-verdoso.</p>\
\
                    </div>\
                    <h4 class="texto1">En base a la dosis indicada y la forma de administración elegida:</h4>\
                    <h3 class="administracion">IntraVenosa Directa (IVD) --[PUSH]--</h3>\
                    <div class="contenedor__Presentacion">\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion">\
                                    <h4>No.</h4>\
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
                                    <h4>Unica 5mg/ml(Vía central o periferica)</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Llevar a <b>'+dilucion+'</b>ml de Solución</b>.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion">\
                                    <h4>Infusión</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>En 30 minutos dosis hasta 250mg.</p>\
                                    <p>En 60 minutos dosis hasta 500mg.</p>\
                                    <p>En 90 minutos dosis hasta 750mg o superior.</p>\
                                </div>\
                            </div>\
                        </div>\
                    </div>\
                    <h3 class="administracion">IntraVenosa Continua (IVC) --[GOTEO]--</h3>\
                    <div class="contenedor__Presentacion">\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion">\
                                    <h4>No.</h4>\
                                </div>\
                            </div>\
                        </div>\
                    </div>\
                    <h3 class="administracion">IntraMuscular (IM)</h3>\
                    <div class="contenedor__Presentacion">\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion">\
                                    <h4>No.</h4>\
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
                    btn.style.display = 'none';
                });

            }
            //LORAZEPAM
            else if(nombreMedicamento === "Lorazepam" || nombreMedicamento === "lorazepam" || nombreMedicamento === "LORAZEPAM"){

                miligramos = 4;
                frascoTotal = 1;
                dilucion = calculo1() * 2;
                
                function calculo1(){
                    if (dosis === entero){//COMPARA QUE LA DOSIS SEA UN ENTERO Y LO MANTIENE
                                    let reconstitucion = (dosis*frascoTotal)/miligramos;
                                    console.log(reconstitucion);
                                    return reconstitucion;//IMPRIME EL VALOR ENTERO
                    } else if(dosis !== entero){//COMPARA QUE LA DOSIS NO SEA UN VALOR ENTERO Y LO CONVIERTE A FLOTANTE
                                    let reconstitucion = (dosis*frascoTotal)/miligramos;
                                     redondeo1 = (reconstitucion.toFixed(2));//MUESTRA SOLAMENTE LOS 2 DECIMALES DESPUES DE LA COMA DEL FLOTANTE
                                     console.log(redondeo1);
                                     return redondeo1;//IMPRIME EL FLOTANTE
                                }               
                };

                let fondo = document.querySelector('.contenedor');
                console.log(fondo);
                fondo.style.backgroundColor = '#089c41';
    
                let info = 
                '<div class="contenedor__Grilla">\
                <div class="contenedor__Titulo">\
                    <h3 class="nombre__Farmaco3">Lorazepam</h3>\
                </div>\
                <div class="contenedor__Info">\
                    <div class="contenedor__Presentacion">\
                        <div class="titulo__Presentacion3">\
                            <h4 class="presentacion">Ampolla de 1ml (4mg/ml).</h4>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion3">\
                                    <h4>Reconstitución</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>No requiere.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion3">\
                                    <h4>Según dosis indicada</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Retirar de la ampolla '+calculo1()+' ml.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion3">\
                                    <h4>Cantidad a utilizar</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Para la dosis indicada se debe utlizar '+ampollas()+' ampolla/as</p>\
                                </div>\
                            </div>\
                        </div>\
                    </div>\
                    <h3 class="estabilidad3">Estabilidad y observaciones</h3>\
                    <div class="contenedor__Estabilidad">\
                        <p class="texto__Estabilidad"><b class="texto__Blanco">Conservar las ampollas Refrigeradas.</b></p>\
                    </div>\
                    <h4 class="texto1">En base a la dosis indicada y la forma de administración elegida:</h4>\
                    <h3 class="administracion3">IntraVenosa Directa (IVD) --[PUSH]--</h3>\
                    <div class="contenedor__Presentacion">\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion3">\
                                    <h4>NO.</h4>\
                                </div>\
                            </div>\
                        </div>\
                    </div>\
                    <h3 class="administracion3">IntraVenosa Intermitente (IVI) --[2° CANAL]--</h3>\
                    <div class="contenedor__Presentacion">\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion3">\
                                    <h4>Diluyente</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>SF o DX5%</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion3">\
                                    <h4>Concentración (igual a dosis indicada)</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Llevar a '+dilucion+'ml.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion3">\
                                    <h4>Infusión</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>No exceder los 2mg/minuto.</p>\
                                </div>\
                            </div>\
                        </div>\
                    </div>\
                    <h3 class="administracion3">IntraVenosa Continua (IVC) --[GOTEO]--</h3>\
                    <div class="contenedor__Presentacion">\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion3">\
                                    <h4>NO</h4>\
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
                    btn.style.display = 'none';
                });

            }
            //MEROPENEM
            else if(nombreMedicamento === "Meropenem" || nombreMedicamento === "meropenem" || nombreMedicamento === "MEROPENEM"){

                miligramos = 500;
                frascoTotal = 10;
                miligramos2 = 1000;
                frascoTotal2 = 20;
                dilucion = dosis/50;
                dilucion2 = dosis/2.5;
                dilucion3 = dosis/10;

                function calculo1(){
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
            
                function ampollas1(){
                                if (dosis === entero){
                                    let ampollas = dosis/miligramos2;
                                    console.log(ampollas);
                                    return ampollas;
                            } else if(dosis !== entero){
                                let ampollas = dosis/miligramos2;
                                redondeo2 = (ampollas.toFixed(2));
                                console.log(redondeo2);
                                if (ampollas === 1.00){
                                    redondeo2 = parseInt(ampollas);
                                    return Math.ceil(redondeo2);
                                }
                                return Math.ceil(redondeo2);
                            }
                }

                let fondo = document.querySelector('.contenedor');
                console.log(fondo);
                fondo.style.backgroundColor = '#1357a6';
    
                let info = 
                '<div class="contenedor__Grilla">\
                <div class="contenedor__Titulo">\
                    <h3 class="nombre__Farmaco">Meropenem</h3>\
                </div>\
                <div class="contenedor__Info">\
                    <div class="contenedor__Presentacion">\
                        <div class="titulo__Presentacion">\
                            <h4 class="presentacion">Frasco 500mg</h4>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion">\
                                    <h4>Reconstitución</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>En 10ml de SF, concetración de 50mg/ml.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion">\
                                    <h4>Según dosis indicada</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Retirar del Frasco '+calculo()+' ml.</p>\
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
                    <div class="contenedor__Presentacion">\
                        <div class="titulo__Presentacion">\
                            <h4 class="presentacion">Frasco 1000mg</h4>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion">\
                                    <h4>Reconstitución</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>En 20ml de SF, concetración de 50mg/ml.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion">\
                                    <h4>Según dosis indicada</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Retirar del Frasco '+calculo1()+' ml.</p>\
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
                    <h3 class="estabilidad">Estabilidad y observaciones</h3>\
                    <div class="contenedor__Estabilidad">\
                        <p class="texto__Estabilidad"><b class="texto__Blanco">Una vez Reconstituido tiene una durabilidad de 8 hs a T° ambiente y 24hs refrigerado.</b></p>\
                        <p class="texto__Observaciones">Puede ir infundido en 2hs, mejora su actividad antimicrobiana.</p>\
                        <p class="texto__Observaciones">No usar DX5%.</p>\
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
                                    <p>SF.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion">\
                                    <h4>Concentración por vía périferica y central (50mg/ml)</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Llevar a '+dilucion+'ml.</p>\
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
                                    <p>SF.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion">\
                                    <h4>Minima por vía periferica (2,5mg/ml)</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Llevar a '+dilucion2+'ml.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion">\
                                    <h4>Recomendada por vía periferica (10mg/ml)</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Llevar a '+dilucion3+'ml.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion">\
                                    <h4>Máxima por vía central (50mg/ml)</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Llevar a '+dilucion+'ml.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion">\
                                    <h4>Infusión</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Entre 15-30 minutos.</p>\
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
                    btn.style.display = 'none';
                });

            }
            //METILPREDNISOLONA
            else if(nombreMedicamento === "Metilprednisolona" || nombreMedicamento === "metilprednisolona" || nombreMedicamento === "METILPREDNISOLONA"){

                miligramos = 500;
                frascoTotal = 5;
                dilucion = dosis/62.5;
                dilucion2 = dosis/125;
                dilucion3 = dosis/2.5;
                dilucion4 = dosis/20;      

                let fondo = document.querySelector('.contenedor');
                console.log(fondo);
                fondo.style.backgroundColor = '#e47200';
    
                let info = 
                '<div class="contenedor__Grilla">\
                <div class="contenedor__Titulo">\
                    <h3 class="nombre__Farmaco4">Metilprednisolona</h3>\
                </div>\
                <div class="contenedor__Info">\
                    <div class="contenedor__Presentacion">\
                        <div class="titulo__Presentacion4">\
                            <h4 class="presentacion">Ampolla Bufferizada 500mg.</h4>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion4">\
                                    <h4>Reconstitución</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>5ml de agua destilada o solvente del producto.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion4">\
                                    <h4>Según dosis indicada</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Retirar del FA '+calculo()+' ml.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion4">\
                                    <h4>Cantidad a utilizar</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Para la dosis indicada se debe utlizar '+ampollas()+' frasco/os</p>\
                                </div>\
                            </div>\
                        </div>\
                    </div>\
                    <div class="contenedor__Presentacion">\
                        <div class="titulo__Presentacion4">\
                            <h4 class="presentacion">Comprimidos 4mg. 8mg y 40mg.</h4>\
                        </div>\
                        <div class="titulo__Presentacion4">\
                            <h4 class="presentacion">Gotas de 4mg/ml.</h4>\
                        </div>\
                    </div>\
                    <h3 class="estabilidad4">Estabilidad y observaciones</h3>\
                    <div class="contenedor__Estabilidad">\
                        <p class="texto__Estabilidad"><b class="texto__Blanco">Una vez reconstituida tiene una durabilidad 72hs a T° ambiente.</b></p>\
                        <p class="texto__Observaciones">Vía oral: Administrar con alimentos, disminuye la intolerancia gastrica, se puede triturar.</p>\
                    </div>\
                    <h4 class="texto1">En base a la dosis indicada y la forma de administración elegida:</h4>\
                    <h3 class="administracion4">IntraVenosa Directa (IVD) --[PUSH]--</h3>\
                    <div class="contenedor__Presentacion">\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion4">\
                                    <h4>Diluyente</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>SF o DX5%.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion4">\
                                    <h4>Recomendada por vía périferica (62,5mg/ml)</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Llevar a '+dilucion+'ml.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion4">\
                                    <h4>Máxima por vía central (125mg/ml)</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Llevar a '+dilucion2+'ml.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion4">\
                                    <h4>Infusión</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>De 3 a 5 minutos.</p>\
                                </div>\
                            </div>\
                        </div>\
                    </div>\
                    <h3 class="administracion4">IntraVenosa Intermitente (IVI) --[2° CANAL]--</h3>\
                    <div class="contenedor__Presentacion">\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion4">\
                                    <h4>Dilución:</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>En SF o DX5%.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion4">\
                                    <h4>Recomendada por vía périferica (2,5mg/ml)</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Llevar a '+dilucion3+'ml.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion4">\
                                    <h4>Máxima por vía central (20mg/ml)</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Llevar a '+dilucion4+'ml.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion4">\
                                    <h4>Infusión:</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>En 30-60 minutos.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion4">\
                                    <h4>Dosis mayores a 500mg</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Infundir por mas de 60 minutos.</p>\
                                </div>\
                            </div>\
                        </div>\
                    </div>\
                    <h3 class="administracion4">IntraVenosa (IVC)--[GOTEO]--</h3>\
                    <div class="contenedor__Presentacion">\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion4">\
                                    <h4>NO</h4>\
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
                    btn.style.display = 'none';
                });

            }
            //METRONIDAZOL
            else if(nombreMedicamento === "Metronidazol" || nombreMedicamento === "metronidazol" || nombreMedicamento === "METRONIDAZOL"){

                miligramos = 500;
                frascoTotal = 100;
                dilucion = dosis/5;

                solucion_oral = ((dosis*100) / 2500).toFixed(2);

                let fondo = document.querySelector('.contenedor');
                console.log(fondo);
                fondo.style.backgroundColor = '#1357a6';
    
                let info = 
                '<div class="contenedor__Grilla">\
                <div class="contenedor__Titulo">\
                    <h3 class="nombre__Farmaco">Metronidazol</h3>\
                </div>\
                <div class="contenedor__Info">\
                    <div class="contenedor__Presentacion">\
                        <div class="titulo__Presentacion">\
                            <h4 class="presentacion">Sachet 500mg (5mg/ml)</h4>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion">\
                                    <h4>Reconstitución</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>No requiere.</p>\
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
                    <div class="contenedor__Info">\
                <div class="contenedor__Presentacion">\
                    <div class="titulo__Presentacion">\
                        <h4 class="presentacion">Suspención Oral de 120ml(2,5G/100ml)</h4>\
                    </div>\
                    <div class="info__Presentacion">\
                        <div class="info__Uno">\
                            <div class="reconstitucion">\
                                <h4>Reconstitución</h4>\
                            </div>\
                            <div class="datos">\
                                <p>No requiere.</p>\
                            </div>\
                        </div>\
                    </div>\
                    <div class="info__Presentacion">\
                        <div class="info__Uno">\
                            <div class="reconstitucion">\
                                <h4>Según dosis indicada</h4>\
                            </div>\
                            <div class="datos">\
                                <p>Retirar del frasco '+solucion_oral+' ml.</p>\
                            </div>\
                        </div>\
                    </div>\
                </div>\
                    <h3 class="estabilidad">Estabilidad y observaciones</h3>\
                    <div class="contenedor__Estabilidad">\
                        <p class="texto__Estabilidad"><b class="texto__Blanco">si el sachet es FLEX 24hs refrigerado y si es rigido desechar luego de su uso.</b></p>\
                        <p class="texto__Estabilidad">PROTEGER DE LA LUZ.</p>\
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
                                    <p>SF o DX5%.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion">\
                                    <h4>Por vía périferica o central (5mg/ml)</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Llevar a '+dilucion+'ml.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion">\
                                    <h4>Máxima</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Llevar a'+dilucion+'ml de S.F. por via central.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion">\
                                    <h4>Infusión</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Entre 30 a 60 minutos.</p>\
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
                    btn.style.display = 'none';
                });

            }
            //MIDAZOLAM
            else if(nombreMedicamento === "Midazolam" || nombreMedicamento === "midazolam" || nombreMedicamento === "MIDAZOLAM"){

                miligramos = 15;
                frascoTotal = 3;
                dilucion = Number(calculo()) + Number(calculo());
                let dosisml = 24 - calculo();
                let plantotal = Number(calculo()) + Number(dosisml);
                let dosisDoble = dosis * 2;
                let mlDoble = calculo() * 2;
                let dosismlDoble = dosisml * 2;
                let plantotalDoble = plantotal * 2;
                let ampollaDoble = ampollas() * 2;
                
                
                function plan(){
                    if (dosis >= 120){
                        let planpuro ='Midazolam '+dosis+'MG_____'+calculo()+'ml.<br>\
                        Dosis Pura.<br>\
                        Total_________________________'+plantotal+'ml.';
                        return plan.innerHTML=planpuro;
                    } else {
                        let planparcial =
                        'Midazolam '+dosis+'MG_____'+calculo()+'ml.<br>\
                        DX5%_________________'+dosisml+'ml.<br>\
                        Total_________________________'+plantotal+'ml.';
                       return plan.innerHTML = planparcial;
                    };
                }
                function plan2(){
                    if (dosis >= 1200){
                        let planpuro ='Midazolam '+dosisDoble+'MG_____'+mlDoble+'ml.<br>\
                        Dosis Pura.<br>\
                        Total_________________________'+plantotalDoble+'ml.<br>\
                        Se debe utlizar '+ampollaDoble+' ampollas.';
                        return plan.innerHTML=planpuro;
                    } else {
                        let planparcial =
                        'Midazolam '+dosisDoble+'MG_____'+mlDoble+'ml.<br>\
                        DX5%_________________'+dosismlDoble+'ml.<br>\
                        Total_________________________'+plantotalDoble+'ml.<br>\
                        Se debe utlizar '+ampollaDoble+' ampollas.';
                       return plan.innerHTML = planparcial;
                    };
                }


                let fondo = document.querySelector('.contenedor');
                console.log(fondo);
                fondo.style.backgroundColor = '#089c41';
    
                let info = 
                '<div class="contenedor__Grilla">\
                <div class="contenedor__Titulo">\
                    <h3 class="nombre__Farmaco3">Midazolam</h3>\
                </div>\
                <div class="contenedor__Info">\
                    <div class="contenedor__Presentacion">\
                        <div class="titulo__Presentacion3">\
                            <h4 class="presentacion">Ampolla de 15mg/3ml (5mg/ml).</h4>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion3">\
                                    <h4>Reconstitución</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>No requiere.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion3">\
                                    <h4>Según dosis indicada</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Retirar de la ampolla '+calculo()+' ml.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion3">\
                                    <h4>Cantidad a utilizar</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Para la dosis indicada se debe utlizar '+ampollas()+' ampolla/as</p>\
                                </div>\
                            </div>\
                        </div>\
                    </div>\
                    <h3 class="estabilidad3">Estabilidad y observaciones</h3>\
                    <div class="contenedor__Estabilidad">\
                        <p class="texto__Observaciones"><b class="texto__Blanco">Dolor en sitio de inyección.</b></p>\
                    </div>\
                    <h4 class="texto1">En base a la dosis indicada y la forma de administración elegida:</h4>\
                    <h3 class="administracion3">IntraVenosa Directa (IVD) --[PUSH]--</h3>\
                    <div class="contenedor__Presentacion">\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion3">\
                                    <h4>Diluyente</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>SF o DX5%.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion3">\
                                    <h4>Diluir a la misma cantidad que la dosis</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>llevar a '+dilucion+'ml.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion3">\
                                    <h4>Infundir</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>En 3 a 5 minutos.</p>\
                                </div>\
                            </div>\
                        </div>\
                    </div>\
                    <h3 class="administracion3">IntraVenosa Intermitente (IVI) --[2° CANAL]--</h3>\
                    <div class="contenedor__Presentacion">\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion3">\
                                    <h4>NO</h4>\
                                </div>\
                            </div>\
                        </div>\
                    </div>\
                    <h3 class="administracion3">IntraVenosa Continua (IVC) --[GOTEO]--</h3>\
                    <div class="contenedor__Presentacion">\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion3">\
                                    <h4>Dilución</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Dosis indicada llevar a 24 ml de DX5%.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion3">\
                                    <h4>Preparación</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>'+plan()+'</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion3">\
                                    <h4>Si se prepara por primera vez o se debe cambiar el perfus PREPARAR DOBLE DOSIS</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>'+plan2()+'</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion3">\
                                    <h4>Identificación</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Perfus cinta color verde.<br>\
                                    Rotulo color verde.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion3">\
                                    <h4>Perfus</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Utilizar perfus común y cambiar el mismo cada 48hs.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion3">\
                                    <h4>Sachet</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Cambiar el mismo cada 24hs.</p>\
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
                    btn.style.display = 'none';
                });

            }
            //MILRINONA
            else if(nombreMedicamento === "Milrinona" || nombreMedicamento === "milrinona" || nombreMedicamento === "MILRINONA"){
                

            miligramos = 10;
            frascoTotal = 10;
            let dosisml = 25;
            let plantotal = Number(calculo()) + Number(dosisml);
            let dosisDoble = dosis * 2;
            let mlDoble = calculo() * 2;
            let dosismlDoble = dosisml * 2;
            let plantotalDoble = plantotal * 2;
            let ampollaDoble = ampollas() * 2;
                
                
            function plan(){
                if (dosis >= 24){
                    let planpuro ='Milrinona '+dosis+'MG_____'+calculo()+'ml.<br>\
                    Dosis Pura.<br>\
                    Total_________________________'+calculo()+'ml.';
                    return plan.innerHTML=planpuro;
                } else {
                    let planparcial =
                    'Milrinona '+dosis+'MG_____'+calculo()+'ml.<br>\
                    DX5%_________________'+dosisml+'ml.<br>\
                    Total_________________________'+plantotal+'ml.';
                    return plan.innerHTML = planparcial;
                };
                }
            function plan2(){
                if (dosis >= 24){
                    let planpuro ='Milrinona '+dosisDoble+'MG_____'+mlDoble+'ml.<br>\
                    Dosis Pura.<br>\
                    Total_________________________'+mlDoble+'ml.<br>\
                    Se debe utlizar '+ampollaDoble+' ampollas.';
                    return plan.innerHTML=planpuro;
                } else {
                    let planparcial =
                    'Milrinona '+dosisDoble+'MG_____'+mlDoble+'ml.<br>\
                    DX5%_________________'+dosismlDoble+'ml.<br>\
                    Total_________________________'+plantotalDoble+'ml.<br>\
                    Se debe utlizar '+ampollaDoble+' ampollas.';
                    return plan.innerHTML = planparcial;
                };
            }            
                        
        
        
            let fondo = document.querySelector('.contenedor');
            console.log(fondo);
            fondo.style.backgroundColor = '#B71C1C';
            
            let info = 
            '<div class="contenedor__Grilla">\
            <div class="contenedor__Titulo">\
                <h3 class="nombre__Farmaco2">Milrinona</h3>\
            </div>\
            <div class="contenedor__Info">\
                <div class="contenedor__Presentacion">\
                    <div class="titulo__Presentacion2">\
                        <h4 class="presentacion">Frasco/Ampolla de 10mg/10ml (1mg/ml).</h4>\
                    </div>\
                    <div class="info__Presentacion">\
                        <div class="info__Uno">\
                            <div class="reconstitucion2">\
                                <h4>Según dosis indicada</h4>\
                            </div>\
                            <div class="datos">\
                                <p>Retirar de la ampolla '+calculo()+'ml.</p>\
                            </div>\
                        </div>\
                    </div>\
                    <div class="info__Presentacion">\
                        <div class="info__Uno">\
                            <div class="reconstitucion2">\
                                <h4>Cantidad a utilizar</h4>\
                            </div>\
                            <div class="datos">\
                                <p>Para la dosis indicada se debe utlizar '+ampollas()+' frasco/os.</p>\
                            </div>\
                        </div>\
                    </div>\
                </div>\
                <h3 class="estabilidad2">Estabilidad y observaciones</h3>\
                <div class="contenedor__Estabilidad">\
                    <p class="texto__Estabilidad">Frasco/ampolla se conserva a T° ambiente, no congelar. Una vez diluido se conserva 24hs a temperatura ambiente.</p>\
                    <p class="texto__Estabilidad">Si su preparación se a realizado de forma aseptica, puede durar hasta 72hs.</p>\
                    <p class="texto__Observaciones">Evitar Exposición al calor.</p>\
                </div>\
                <h4 class="texto1">En base a la dosis indicada y la forma de administración elegida:</h4>\
                <h3 class="administracion2">IntraVenosa Directa (IVD) --[PUSH]--</h3>\
                <div class="contenedor__Presentacion">\
                    <div class="info__Presentacion">\
                        <div class="info__Uno">\
                            <div class="reconstitucion2">\
                                <h4>NO</h4>\
                            </div>\
                        </div>\
                    </div>\
                </div>\
                <h3 class="administracion2">IntraVenosa Intermitente (IVI) --[2° CANAL]--</h3>\
                <div class="contenedor__Presentacion">\
                    <div class="info__Presentacion">\
                        <div class="info__Uno">\
                            <div class="reconstitucion2">\
                                <h4>NO</h4>\
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
                                <p>agregar la dosis indicada a 25ml de DX5%.</p>\
                            </div>\
                        </div>\
                    </div>\
                    <div class="info__Presentacion">\
                        <div class="info__Uno">\
                            <div class="reconstitucion2">\
                                <h4>Preparación</h4>\
                            </div>\
                            <div class="datos">\
                                <p>'+plan()+'</p>\
                            </div>\
                        </div>\
                    </div>\
                    <div class="info__Presentacion">\
                        <div class="info__Uno">\
                            <div class="reconstitucion2">\
                                <h4>Si se prepara por primera vez o se debe cambiar el perfus PREPARAR DOBLE DOSIS</h4>\
                            </div>\
                            <div class="datos">\
                                <p>'+plan2()+'</p>\
                            </div>\
                        </div>\
                    </div>\
                    <div class="info__Presentacion">\
                        <div class="info__Uno">\
                            <div class="reconstitucion2">\
                                <h4>Perfus</h4>\
                            </div>\
                            <div class="datos">\
                                <p>Utilizar perfus fotosensible, para aumentar la duración del mismo. Cambiar cada 7 días.</p>\
                            </div>\
                        </div>\
                    </div>\
                    <div class="info__Presentacion">\
                        <div class="info__Uno">\
                            <div class="reconstitucion2">\
                                <h4>Sachet</h4>\
                            </div>\
                            <div class="datos">\
                                <p>No se necesita cubrir, cambiar cada 24hs.</p>\
                            </div>\
                        </div>\
                    </div>\
                    <div class="info__Presentacion">\
                        <div class="info__Uno">\
                            <div class="reconstitucion2">\
                                <h4>Identificar</h4>\
                            </div>\
                            <div class="datos">\
                                <p>Perfus: rotular con cinta roja.<br>Sachet: utilizar rotulo color rojo.</p>\
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
                btn.style.display = 'none';
                });   
            }
            //MORFINA
            else if(nombreMedicamento === "Morfina" || nombreMedicamento === "morfina" || nombreMedicamento === "MORFINA"){

                miligramos = 10;
                frascoTotal = 1;
                dilucion = Number(calculo()) + Number(calculo());
                let dosisml = 24 - calculo();
                let plantotal = Number(calculo()) + Number(dosisml);
                let dosisDoble = dosis * 2;
                let mlDoble = calculo() * 2;
                let dosismlDoble = dosisml * 2;
                let plantotalDoble = plantotal * 2;
                let ampollaDoble = ampollas() * 2;
                
                
                function plan(){
                    if (dosis >= 120){
                        let planpuro ='Morfina '+dosis+'MG_____'+calculo()+'ml.<br>\
                        Dosis Pura.<br>\
                        Total_________________________'+plantotal+'ml.';
                        return plan.innerHTML=planpuro;
                    } else {
                        let planparcial =
                        'Morfina '+dosis+'MG_____'+calculo()+'ml.<br>\
                        DX5%_________________'+dosisml+'ml.<br>\
                        Total_________________________'+plantotal+'ml.';
                       return plan.innerHTML = planparcial;
                    };
                }
                function plan2(){
                    if (dosis >= 1200){
                        let planpuro ='Morfina '+dosisDoble+'MG_____'+mlDoble+'ml.<br>\
                        Dosis Pura.<br>\
                        Total_________________________'+plantotalDoble+'ml.<br>\
                        Se debe utlizar '+ampollaDoble+' ampollas.';
                        return plan.innerHTML=planpuro;
                    } else {
                        let planparcial =
                        'Morfina '+dosisDoble+'MG_____'+mlDoble+'ml.<br>\
                        DX5%_________________'+dosismlDoble+'ml.<br>\
                        Total_________________________'+plantotalDoble+'ml.<br>\
                        Se debe utlizar '+ampollaDoble+' ampollas.';
                       return plan.innerHTML = planparcial;
                    };
                }


                let fondo = document.querySelector('.contenedor');
                console.log(fondo);
                fondo.style.backgroundColor = '#089c41';
    
                let info = 
                '<div class="contenedor__Grilla">\
                <div class="contenedor__Titulo">\
                    <h3 class="nombre__Farmaco3">Morfina</h3>\
                </div>\
                <div class="contenedor__Info">\
                    <div class="contenedor__Presentacion">\
                        <div class="titulo__Presentacion3">\
                            <h4 class="presentacion">Ampolla de 10mg/ml (1mg/0.1ml).</h4>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion3">\
                                    <h4>Reconstitución</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>No requiere.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion3">\
                                    <h4>Según dosis indicada</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Retirar de la ampolla '+calculo()+' ml.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion3">\
                                    <h4>Cantidad a utilizar</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Para la dosis indicada se debe utlizar '+ampollas()+' ampolla/as</p>\
                                </div>\
                            </div>\
                        </div>\
                    </div>\
                    <h3 class="estabilidad3">Estabilidad y observaciones</h3>\
                    <div class="contenedor__Estabilidad">\
                        <p class="texto__Estabilidad"><b class="texto__Blanco">En goteo de infusión 24hs de estabilidad a temperatura ambiente, proteger de la luz.</b></p>\
                        <p class="texto__Observaciones"><b class="texto__Blanco">Una vez diluido 24 a 48hs a T° ambiente.</b></p>\
                    </div>\
                    <h4 class="texto1">En base a la dosis indicada y la forma de administración elegida:</h4>\
                    <h3 class="administracion3">IntraVenosa Directa (IVD) --[PUSH]--</h3>\
                    <div class="contenedor__Presentacion">\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion3">\
                                    <h4>Diluyente</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>SF o DX5%.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion3">\
                                    <h4>Concentración (misma cantidad que la dosis indicada)</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Llevar a '+dilucion+'.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion3">\
                                    <h4>Infundir</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Entre 3 a 5 minutos.</p>\
                                </div>\
                            </div>\
                        </div>\
                    </div>\
                    <h3 class="administracion3">IntraVenosa Intermitente (IVI) --[2° CANAL]--</h3>\
                    <div class="contenedor__Presentacion">\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion3">\
                                    <h4>NO</h4>\
                                </div>\
                            </div>\
                        </div>\
                    </div>\
                    <h3 class="administracion3">IntraVenosa Continua (IVC) --[GOTEO]--</h3>\
                    <div class="contenedor__Presentacion">\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion3">\
                                    <h4>Dilución</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Dosis indicada llevar a 24ml de DX5%.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion3">\
                                    <h4>Preparación</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>'+plan()+'</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion3">\
                                    <h4>Si se prepara por primera vez o se debe cambiar el perfus PREPARAR DOBLE DOSIS</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>'+plan2()+'</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion3">\
                                    <h4>Identificación</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Perfus cinta color verde.<br>\
                                    Rotulo color verde.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion3">\
                                    <h4>Perfus</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Utilizar perfus fotosensible y cambiar el mismo cada 7 días.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion3">\
                                    <h4>Sachet</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Cambiar el mismo cada 24hs, Cubrir para proteger de la luz.</p>\
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
                    btn.style.display = 'none';
                });

            }
            //NORADRENALINA - NOREPINEFRINA
            else if(nombreMedicamento === "Noradrenalina" || nombreMedicamento === "noradrenalina" || nombreMedicamento === "NORADRENALINA" || nombreMedicamento === "Norepinefrina" || nombreMedicamento === "norepinefrina" || nombreMedicamento === "NOREPINEFRINA"){
                
                medicamento = nombreMedicamento;
                miligramos = 4;
                frascoTotal = 4;
                let dosisml = 100;
                let plantotal = Number(calculo()) + Number(dosisml);                  
                    
                function plan(){
                    if(medicamento === "Noradrenalina" || medicamento === "noradrenalina" || medicamento === "NORADRENALINA"){
                        let planparcial =
                        'Noradrenalina '+dosis+'MG_____'+calculo()+'ml.<br>\
                        DX5%_________________'+dosisml+'ml.<br>\
                        Total_________________________'+plantotal+'ml.';
                        return plan.innerHTML = planparcial;
                    } else if(medicamento === "Norepinefrina" || medicamento === "norepinefrina" || medicamento === "NOREPINEFRINA"){
                        let plan2 =
                        'Norepinefrina '+dosis+'MG_____'+calculo()+'ml.<br>\
                        DX5%_________________'+dosisml+'ml.<br>\
                        Total_________________________'+plantotal+'ml.';
                        return plan.innerHTML = plan2;
                    }
                    
                    }         
                            
            
            
                let fondo = document.querySelector('.contenedor');
                console.log(fondo);
                fondo.style.backgroundColor = '#B71C1C';
                
                let info = 
                '<div class="contenedor__Grilla">\
                <div class="contenedor__Titulo">\
                    <h3 class="nombre__Farmaco2">Noradrenalina - Norepinefrina</h3>\
                </div>\
                <div class="contenedor__Info">\
                    <div class="contenedor__Presentacion">\
                        <div class="titulo__Presentacion2">\
                            <h4 class="presentacion">Ampolla de 4mg/4ml (1mg/ml).</h4>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion2">\
                                    <h4>Según dosis indicada</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Retirar de la ampolla '+calculo()+'ml.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion2">\
                                    <h4>Cantidad a utilizar</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Para la dosis indicada se debe utlizar '+ampollas()+' ampolla/as.</p>\
                                </div>\
                            </div>\
                        </div>\
                    </div>\
                    <h3 class="estabilidad2">Estabilidad y observaciones</h3>\
                    <div class="contenedor__Estabilidad">\
                        <p class="texto__Estabilidad">ampolla es estable a T° ambiente y proteger de la luz, no refrigerar.</p>\
                        <p class="texto__Estabilidad">Una vez diluidoProteger de la luz 24hs a temperatura ambiente.</p>\
                        <p class="texto__Estabilidad">Se oxida con facilidad, no utilizar si la coloración es parda.</p>\
                        <p class="texto__Estabilidad">No es estable con soluciones alcalina. Nunca diluir son S.F. al 0,9%.</p>\
                    </div>\
                    <h4 class="texto1">En base a la dosis indicada y la forma de administración elegida:</h4>\
                    <h3 class="administracion2">IntraVenosa Directa (IVD) --[PUSH]--</h3>\
                    <div class="contenedor__Presentacion">\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion2">\
                                    <h4>NO</h4>\
                                </div>\
                            </div>\
                        </div>\
                    </div>\
                    <h3 class="administracion2">IntraVenosa Intermitente (IVI) --[2° CANAL]--</h3>\
                    <div class="contenedor__Presentacion">\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion2">\
                                    <h4>NO</h4>\
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
                                    <p>agregar la dosis indicada a 100ml de DX5%.\
                                    </p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion2">\
                                    <h4>Preparación</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>'+plan()+'</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion2">\
                                    <h4>Perfus</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Utilizar perfus fotosensible. Cambiar cada 7 días.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion2">\
                                    <h4>Sachet</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Cubrir para proteger de la luz, cambiar cada 24hs.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion2">\
                                    <h4>Identificar</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Perfus: rotular con cinta roja.<br>Sachet: utilizar rotulo color rojo.</p>\
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
                    btn.style.display = 'none';
                    });   
            }
            //OMEPRAZOL
            else if(nombreMedicamento === "Omeprazol" || nombreMedicamento === "omeprazol" || nombreMedicamento === "OMEPRAZOL"){

                miligramos = 40;
                frascoTotal = 10;
                dilucion = dosis/0.4;
      

                let fondo = document.querySelector('.contenedor');
                console.log(fondo);
                fondo.style.backgroundColor = '#e47200';
    
                let info = 
                '<div class="contenedor__Grilla">\
                <div class="contenedor__Titulo">\
                    <h3 class="nombre__Farmaco4">Omeprazol</h3>\
                </div>\
                <div class="contenedor__Info">\
                    <div class="contenedor__Presentacion">\
                        <div class="titulo__Presentacion4">\
                            <h4 class="presentacion">Frasco/Ampolla 40mg.</h4>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion4">\
                                    <h4>Reconstitución</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>10ml de SF o DX5%.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion4">\
                                    <h4>Según dosis indicada</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Retirar del FA '+calculo()+' ml.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion4">\
                                    <h4>Cantidad a utilizar</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Para la dosis indicada se debe utlizar '+ampollas()+' frasco/os</p>\
                                </div>\
                            </div>\
                        </div>\
                    </div>\
                    <div class="contenedor__Presentacion">\
                        <div class="titulo__Presentacion4">\
                            <h4 class="presentacion">Comprimidos/Capsula 20mg y 40mg.</h4>\
                        </div>\
                        <div class="titulo__Presentacion4">\
                            <h4 class="presentacion">Formula magistral 2mg/ml.</h4>\
                        </div>\
                    </div>\
                    <h3 class="estabilidad4">Estabilidad y observaciones</h3>\
                    <div class="contenedor__Estabilidad">\
                        <p class="texto__Estabilidad"><b class="texto__Blanco">Reconstituida con el solvente tiene una durabilidad 4hs a T° ambiente.</b></p>\
                        <p class="texto__Estabilidad"><b class="texto__Blanco">Dependiendo de la solución con la que se reconstituyo y diluyo tiene una durabilidad con S.F. 12hs y con DX5% 6hs a T° ambiente.</b></p>\
                        <p class="texto__Estabilidad"><b class="texto__Blanco">La formula magistral tiene una durabilidad de 14 dias a T° ambiente y 45 días en la heladera.</b></p>\
                        <p class="texto__Observaciones">no masticar ni aplastar los gránulos, se puede abrir la capsula y administrar el contenido con yogurth o jugo de naranjas.</p>\
                    </div>\
                    <h4 class="texto1">En base a la dosis indicada y la forma de administración elegida:</h4>\
                    <h3 class="administracion4">IntraVenosa Directa (IVD) --[PUSH]--</h3>\
                    <div class="contenedor__Presentacion">\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion4">\
                                    <h4>Infundir lentamente y sin diluir</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>a una velocidad de 4mg/minuto.</p>\
                                </div>\
                            </div>\
                        </div>\
                    </div>\
                    <h3 class="administracion4">IntraVenosa Intermitente (IVI) --[2° CANAL]--</h3>\
                    <div class="contenedor__Presentacion">\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion4">\
                                    <h4>Dilución:</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>en SF o DX5%.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion4">\
                                    <h4>Concentracion por vía périferica o central (0,4mg/ml)</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Llevar a '+dilucion+'ml.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion4">\
                                    <h4>Infusión:</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>En 30 minutos.</p>\
                                </div>\
                            </div>\
                        </div>\
                    </div>\
                    <h3 class="administracion4">IntraVenosa (IVC)--[GOTEO]--</h3>\
                    <div class="contenedor__Presentacion">\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion4">\
                                    <h4>Poco Recomendada en Pediatría (PRP)</h4>\
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
                    btn.style.display = 'none';
                });

            }
            //PARACETAMOL
            else if(nombreMedicamento === "Paracetamol" || nombreMedicamento === "paracetamol" || nombreMedicamento === "PARACETAMOL"){

                miligramos = 500;
                frascoTotal = 50;

                let fondo = document.querySelector('.contenedor');
                console.log(fondo);
                fondo.style.backgroundColor = '#089c41';
    
                let info = 
                '<div class="contenedor__Grilla">\
                <div class="contenedor__Titulo">\
                    <h3 class="nombre__Farmaco3">Paracetamol</h3>\
                </div>\
                <div class="contenedor__Info">\
                    <div class="contenedor__Presentacion">\
                        <div class="titulo__Presentacion3">\
                            <h4 class="presentacion">Frasco/Ampolla de 500mg/50ml (10mg/ml).</h4>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion3">\
                                    <h4>Reconstitución</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>No requiere.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion3">\
                                    <h4>Según dosis indicada</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Retirar del frasco '+calculo()+' ml.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion3">\
                                    <h4>Cantidad a utilizar</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Para la dosis indicada se debe utlizar '+ampollas()+' Frasco/os.</p>\
                                </div>\
                            </div>\
                        </div>\
                    </div>\
                    <div class="contenedor__Presentacion">\
                        <div class="titulo__Presentacion3">\
                            <h4 class="presentacion">Comprimidos de 500mg y 1gr.</h4>\
                        </div>\
                    </div>\
                    <div class="contenedor__Presentacion">\
                        <div class="titulo__Presentacion3">\
                            <h4 class="presentacion">Gotas orales.</h4>\
                        </div>\
                    </div>\
                    <h3 class="estabilidad3">Estabilidad y observaciones</h3>\
                    <div class="contenedor__Estabilidad">\
                        <p class="texto__Estabilidad"><b class="texto__Blanco">No refrigerar, es estable 24hs a T° ambiente con puerto de inyección.</b></p>\
                    </div>\
                    <h4 class="texto1">En base a la dosis indicada y la forma de administración elegida:</h4>\
                    <h3 class="administracion3">IntraVenosa Directa (IVD) --[PUSH]--</h3>\
                    <div class="contenedor__Presentacion">\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion3">\
                                    <h4>NO.</h4>\
                                </div>\
                            </div>\
                        </div>\
                    </div>\
                    <h3 class="administracion3">IntraVenosa Intermitente (IVI) --[2° CANAL]--</h3>\
                    <div class="contenedor__Presentacion">\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion3">\
                                    <h4>Infundir</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Entre 15 a 30 minutos.</p>\
                                </div>\
                            </div>\
                        </div>\
                    </div>\
                    <h3 class="administracion3">IntraVenosa Continua (IVC) --[GOTEO]--</h3>\
                    <div class="contenedor__Presentacion">\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion3">\
                                    <h4>NO</h4>\
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
                    btn.style.display = 'none';
                });

            }
            //PENICILINA G
            else if(nombreMedicamento === "Penicilina G" || nombreMedicamento === "penicilina g" || nombreMedicamento === "PENICILINA G"){

                miligramos = 1000000;
                frascoTotal = 4.5;
                miligramos2 = 3000000;
                frascoTotal2 = 9;
                dilucion = dosis/10000;
                dilucion2 = (dosis/30000).toFixed(2);
                dilucion3 = dosis/50000;

                function calculo1(){
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
            
                function ampollas1(){
                                if (dosis === entero){
                                    let ampollas = dosis/miligramos2;
                                    console.log(ampollas);
                                    return ampollas;
                            } else if(dosis !== entero){
                                let ampollas = dosis/miligramos2;
                                redondeo2 = (ampollas.toFixed(2));
                                console.log(redondeo2);
                                if (ampollas === 1.00){
                                    redondeo2 = parseInt(ampollas);
                                    return Math.ceil(redondeo2);
                                }
                                return Math.ceil(redondeo2);
                            }
                }

                let fondo = document.querySelector('.contenedor');
                console.log(fondo);
                fondo.style.backgroundColor = '#1357a6';
    
                let info = 
                '<div class="contenedor__Grilla">\
                <div class="contenedor__Titulo">\
                    <h3 class="nombre__Farmaco">Penicilina G</h3>\
                </div>\
                <div class="contenedor__Info">\
                    <div class="contenedor__Presentacion">\
                        <div class="titulo__Presentacion">\
                            <h4 class="presentacion">Frasco/Ampolla 1.000.000UI.</h4>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion">\
                                    <h4>Reconstitución</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>En 4,5ml de agua destilada, obteniendo 200.000UI/ml.</p>\
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
                    <div class="contenedor__Presentacion">\
                        <div class="titulo__Presentacion">\
                            <h4 class="presentacion">Frasco/Ampolla 3.000.000UI.</h4>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion">\
                                    <h4>Reconstitución</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>En 9ml de agua destilada, obteniendo 300.000UI/ml.</p>\
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
                    <h3 class="estabilidad">Estabilidad y observaciones</h3>\
                    <div class="contenedor__Estabilidad">\
                        <p class="texto__Estabilidad"><b class="texto__Blanco">Una vez reconstituido tiene una durabilidad de 6hs a T° ambiente.</b></p>\
                        <p class="texto__Observaciones">No usar DX5%.</p>\
                        <p class="texto__Observaciones">Se recomienda usar y desechar.</p>\
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
                                    <p>SF.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion">\
                                    <h4>Minima por vía périferica (10.000UI/ml)</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Llevar a <b>'+dilucion+'ml.</b></p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion">\
                                    <h4>Recomendada por vía périferica (30.000UI/ml)</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Llevar a <b>'+dilucion2+'ml.</b></p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion">\
                                    <h4>Máxima por vía central (50.000UI/ml)</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Llevar a '+dilucion3+'ml.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion">\
                                    <h4>Infusión</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Entre 60 minutos a 2hs.</p>\
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
                    btn.style.display = 'none';
                });

            }
            //PIPERACILINA
            else if(nombreMedicamento === "Piperacilina" || nombreMedicamento === "piperacilina" || nombreMedicamento === "PIPERACILINA"){

                miligramos = 2000;
                frascoTotal = 10;
                miligramos2 = 4000;
                frascoTotal2 = 20;
                dilucion = dosis/10;
                dilucion2 = dosis/20;

                function calculo1(){
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
            
                function ampollas1(){
                                if (dosis === entero){
                                    let ampollas = dosis/miligramos2;
                                    console.log(ampollas);
                                    return ampollas;
                            } else if(dosis !== entero){
                                let ampollas = dosis/miligramos2;
                                redondeo2 = (ampollas.toFixed(2));
                                console.log(redondeo2);
                                if (ampollas === 1.00){
                                    redondeo2 = parseInt(ampollas);
                                    return Math.ceil(redondeo2);
                                }
                                return Math.ceil(redondeo2);
                            }
                }

                let fondo = document.querySelector('.contenedor');
                console.log(fondo);
                fondo.style.backgroundColor = '#1357a6';
    
                let info = 
                '<div class="contenedor__Grilla">\
                <div class="contenedor__Titulo">\
                    <h3 class="nombre__Farmaco">Piperacilina</h3>\
                </div>\
                <div class="contenedor__Info">\
                    <div class="contenedor__Presentacion">\
                        <div class="titulo__Presentacion">\
                            <h4 class="presentacion">Frasco/Ampolla 2000mg.</h4>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion">\
                                    <h4>Reconstitución</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>En 10ml de agua destilada, obteniendo 200mg/ml.</p>\
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
                    <div class="contenedor__Presentacion">\
                        <div class="titulo__Presentacion">\
                            <h4 class="presentacion">Frasco/Ampolla 40000mg.</h4>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion">\
                                    <h4>Reconstitución</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>En 20ml de agua destilada, obteniendo 200mg/ml.</p>\
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
                    <h3 class="estabilidad">Estabilidad y observaciones</h3>\
                    <div class="contenedor__Estabilidad">\
                        <p class="texto__Estabilidad"><b class="texto__Blanco">Una vez reconstituido tiene una durabilidad de 24hs a T° ambiente y 48hs refrigerado.</b></p>\
                        <p class="texto__Observaciones">Administrar por separado, en 1 hs lejos de aminoglucósidos.</p>\
                    </div>\
                    <h4 class="texto1">En base a la dosis indicada y la forma de administración elegida:</h4>\
                    <h3 class="administracion">IntraVenosa Directa (IVD) --[PUSH]--</h3>\
                    <div class="contenedor__Presentacion">\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion">\
                                    <h4>Poco Recomendado para Pediatría (PRP).</h4>\
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
                                    <p>SF o DX5%.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion">\
                                    <h4>Recomendada por vía périferica (10mg/ml)</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Llevar a <b>'+dilucion+'ml.</b></p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion">\
                                    <h4>Máxima por vía central (20mg/ml)</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Llevar a'+dilucion2+'ml.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion">\
                                    <h4>Infusión</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Entre 20 a 30 minutos.</p>\
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
                    btn.style.display = 'none';
                });

            }
            //PIPERACILINA TAZOBACTAM
            else if(nombreMedicamento === "Piperacilina Tazobactam" || nombreMedicamento === "piperacilina tazobactam" || nombreMedicamento === "PIPERACILINA TAZOBACTAM"){

                miligramos = 4500;
                frascoTotal = 20;
                dilucion = dosis/10;
                dilucion2 = dosis/20;

                let reconstitucion = (dosis*frascoTotal)/miligramos;

                //FUNCION DE COMPARACION DE LA DOSIS
    function calculoentero(){
        if (Number.isInteger(reconstitucion)){//COMPARA QUE LA DOSIS SEA UN ENTERO Y LO MANTIENE
                        console.log(reconstitucion);
                        return reconstitucion;//IMPRIME EL VALOR ENTERO
        } else{//COMPARA QUE LA DOSIS NO SEA UN VALOR ENTERO Y LO CONVIERTE A FLOTANTE
                        let reconstitucion = (dosis*frascoTotal)/miligramos;
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
                    <h3 class="nombre__Farmaco">Piperacilina Tazobactam</h3>\
                </div>\
                <div class="contenedor__Info">\
                    <div class="contenedor__Presentacion">\
                        <div class="titulo__Presentacion">\
                            <h4 class="presentacion">Frasco/Ampolla 4500mg.</h4>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion">\
                                    <h4>Reconstitución</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>En 20ml de agua destilada, obteniendo 200mg/ml.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion">\
                                    <h4>Según dosis indicada</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Retirar del FA '+calculoentero()+' ml.</p>\
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
                        <p class="texto__Estabilidad"><b class="texto__Blanco">Una vez reconstituido tiene una durabilidad de 24hs a T° ambiente y 48hs refrigerado.</b></p>\
                        <p class="texto__Observaciones">Datos consignados en base a la Piperacilina.</p>\
                    </div>\
                    <h4 class="texto1">En base a la dosis indicada y la forma de administración elegida:</h4>\
                    <h3 class="administracion">IntraVenosa Directa (IVD) --[PUSH]--</h3>\
                    <div class="contenedor__Presentacion">\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion">\
                                    <h4>Poco Recomendado para Pediatría (PRP).</h4>\
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
                                    <p>SF o DX5%.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion">\
                                    <h4>Recomendada por vía périferica (10mg/ml)</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Llevar a <b>'+dilucion+'ml.</b></p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion">\
                                    <h4>Máxima por vía central (20mg/ml)</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Llevar a '+dilucion2+'ml.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion">\
                                    <h4>Infusión</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Entre 30 a 60 minutos.</p>\
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
                    btn.style.display = 'none';
                });

            }
            //PROPOFOL
            else if(nombreMedicamento === "Propofol" || nombreMedicamento === "propofol" || nombreMedicamento === "PROPOFOL"){

                miligramos = 200;
                frascoTotal = 20;
                dilucion = Number(calculo()) + Number(calculo());
                let dosisml = 24 - calculo();
                let plantotal = Number(calculo()) + Number(dosisml);
                let dosisDoble = dosis * 2;
                let mlDoble = calculo() * 2;
                let dosismlDoble = dosisml * 2;
                let plantotalDoble = plantotal * 2;
                let ampollaDoble = ampollas() * 2;
                
                
                function plan(){
                    if (dosis >= 120){
                        let planpuro ='Morfina '+dosis+'MG_____'+calculo()+'ml.<br>\
                        Dosis Pura.<br>\
                        Total_________________________'+plantotal+'ml.';
                        return plan.innerHTML=planpuro;
                    } else {
                        let planparcial =
                        'Morfina '+dosis+'MG_____'+calculo()+'ml.<br>\
                        DX5%_________________'+dosisml+'ml.<br>\
                        Total_________________________'+plantotal+'ml.';
                       return plan.innerHTML = planparcial;
                    };
                }
                function plan2(){
                    if (dosis >= 1200){
                        let planpuro ='Morfina '+dosisDoble+'MG_____'+mlDoble+'ml.<br>\
                        Dosis Pura.<br>\
                        Total_________________________'+plantotalDoble+'ml.<br>\
                        Se debe utlizar '+ampollaDoble+' ampollas.';
                        return plan.innerHTML=planpuro;
                    } else {
                        let planparcial =
                        'Morfina '+dosisDoble+'MG_____'+mlDoble+'ml.<br>\
                        DX5%_________________'+dosismlDoble+'ml.<br>\
                        Total_________________________'+plantotalDoble+'ml.<br>\
                        Se debe utlizar '+ampollaDoble+' ampollas.';
                       return plan.innerHTML = planparcial;
                    };
                }


                let fondo = document.querySelector('.contenedor');
                console.log(fondo);
                fondo.style.backgroundColor = '#089c41';
    
                let info = 
                '<div class="contenedor__Grilla">\
                <div class="contenedor__Titulo">\
                    <h3 class="nombre__Farmaco3">Propofol</h3>\
                </div>\
                <div class="contenedor__Info">\
                    <div class="contenedor__Presentacion">\
                        <div class="titulo__Presentacion3">\
                            <h4 class="presentacion">Ampolla de 200mg/20ml.</h4>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion3">\
                                    <h4>Reconstitución</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>No requiere.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion3">\
                                    <h4>Según dosis indicada</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Retirar de la ampolla '+calculo()+' ml.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion3">\
                                    <h4>Cantidad a utilizar</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Para la dosis indicada se debe utlizar '+ampollas()+' ampolla/as</p>\
                                </div>\
                            </div>\
                        </div>\
                    </div>\
                    <h3 class="estabilidad3">Estabilidad y observaciones</h3>\
                    <div class="contenedor__Estabilidad">\
                        <p class="texto__Estabilidad"><b class="texto__Blanco">Una vez preparada 6hs de estabilidad a temperatura ambiente.</b></p>\
                        <p class="texto__Estabilidad"><b class="texto__Blanco">Las ampollas se conservan a T° ambiente.</b></p>\
                        <p class="texto__Observaciones"><b class="texto__Blanco">Deben considerarse los beneficios y los riesgos antes de proceder con el uso repetido o prolongado (>3 horas) de propofol en niños pequeños (menores de 3 años) ya que ha habido informes de neurotoxicidad en estudios preclínicos.</b></p>\
                        <p class="texto__Observaciones"><b class="texto__Blanco">Bradicardia severa, Asistolia, despresión respiratoria, paro cardiorespiratorio, dolor en zona de punzión.</b></p>\
                    </div>\
                    <h4 class="texto1">En base a la dosis indicada y la forma de administración elegida:</h4>\
                    <h3 class="administracion3">IntraVenosa Directa (IVD) --[PUSH]--</h3>\
                    <div class="contenedor__Presentacion">\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion3">\
                                    <h4>NO.</h4>\
                                </div>\
                            </div>\
                        </div>\
                    </div>\
                    <h3 class="administracion3">IntraVenosa Intermitente (IVI) --[2° CANAL]--</h3>\
                    <div class="contenedor__Presentacion">\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion3">\
                                    <h4>NO</h4>\
                                </div>\
                            </div>\
                        </div>\
                    </div>\
                    <h3 class="administracion3">IntraVenosa Continua (IVC) --[GOTEO]--</h3>\
                    <div class="contenedor__Presentacion">\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion3">\
                                    <h4>Dilución</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Dosis indicada y cantidad por indicación medica en DX5% (si hay que purgar el perfus preparar doble dosis).</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion3">\
                                    <h4>Identificación</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Perfus cinta color verde.<br>\
                                    Rotulo color verde.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion3">\
                                    <h4>Perfus</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Utilizar perfus común y cambiar el mismo cada 12hs.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion3">\
                                    <h4>Sachet</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Cambiar solución cada 6hs.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion3">\
                                    <h4>Administración</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Se debe administrar en una via de manera solitaria por sus efectos adversos y por ser una emulsion lipídica, favorece la proliferación bacteriana y fungica.</p>\
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
                    btn.style.display = 'none';
                });

            }
            //RANITIDINA
            else if(nombreMedicamento === "Ranitidina" || nombreMedicamento === "ranitidina" || nombreMedicamento === "RANITIDINA"){

                miligramos = 50;
                frascoTotal = 5;
                dilucion = dosis/2.5;
                dilucion2 = dosis/0.5;
      

                let fondo = document.querySelector('.contenedor');
                console.log(fondo);
                fondo.style.backgroundColor = '#e47200';
    
                let info = 
                '<div class="contenedor__Grilla">\
                <div class="contenedor__Titulo">\
                    <h3 class="nombre__Farmaco4">Ranitidina</h3>\
                </div>\
                <div class="contenedor__Info">\
                    <div class="contenedor__Presentacion">\
                        <div class="titulo__Presentacion4">\
                            <h4 class="presentacion">Ampolla 50mg/5ml.</h4>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion4">\
                                    <h4>Reconstitución</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>No requiere.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion4">\
                                    <h4>Según dosis indicada</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Retirar de la ampolla '+calculo()+' ml.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion4">\
                                    <h4>Cantidad a utilizar</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Para la dosis indicada se debe utlizar '+ampollas()+' ampolla/as</p>\
                                </div>\
                            </div>\
                        </div>\
                    </div>\
                    <div class="contenedor__Presentacion">\
                        <div class="titulo__Presentacion4">\
                            <h4 class="presentacion">Comprimidos/Capsulas 150mg, 300mg.</h4>\
                        </div>\
                        <div class="titulo__Presentacion4">\
                            <h4 class="presentacion">Suspención oral de 0,84mg/ml, o 200ml</h4>\
                        </div>\
                    </div>\
                    <h3 class="estabilidad4">Estabilidad y observaciones</h3>\
                    <div class="contenedor__Estabilidad">\
                        <p class="texto__Observaciones">Via oral con alimentos aumenta la biodisponibilidad.</p>\
                        <p class="texto__Observaciones">Si se administra en dosis única dar por la noche.</p>\
                    </div>\
                    <h4 class="texto1">En base a la dosis indicada y la forma de administración elegida:</h4>\
                    <h3 class="administracion4">IntraVenosa Directa (IVD) --[PUSH]--</h3>\
                    <div class="contenedor__Presentacion">\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion4">\
                                    <h4>Diluyente</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>en SF o DX5%.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion4">\
                                    <h4>Concentración 2,5mg/ml.</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Llevar a '+dilucion+'ml.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion4">\
                                    <h4>Infusión</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Entre 5 a 10 minutos (dosis menores a 10mg).</p>\
                                </div>\
                            </div>\
                        </div>\
                    </div>\
                    <h3 class="administracion4">IntraVenosa Intermitente (IVI) --[2° CANAL]--</h3>\
                    <div class="contenedor__Presentacion">\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion4">\
                                    <h4>Dilución:</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>en SF 0 DX5%.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion4">\
                                    <h4>Recomendación por vía périferica (0,5mg/ml)</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Llevar a '+dilucion2+'ml.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion4">\
                                    <h4>Máxima por vía central (2,5mg/ml)</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Llevar a '+dilucion+'ml.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion4">\
                                    <h4>Infusión:</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Entre 10 a 30 minutos.</p>\
                                </div>\
                            </div>\
                        </div>\
                    </div>\
                    <h3 class="administracion4">IntraVenosa (IVC)--[GOTEO]--</h3>\
                    <div class="contenedor__Presentacion">\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion4">\
                                    <h4>NO</h4>\
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
                    btn.style.display = 'none';
                });

            }
            //RIFAMPICINA
            else if(nombreMedicamento === "Rifampicina" || nombreMedicamento === "rifampicina" || nombreMedicamento === "RIFAMPICINA"){

                miligramos = 600;
                frascoTotal = 10;
                dilucion = Math.round(dosis/6);

                let fondo = document.querySelector('.contenedor');
                console.log(fondo);
                fondo.style.backgroundColor = '#1357a6';
    
                let info = 
                '<div class="contenedor__Grilla">\
                <div class="contenedor__Titulo">\
                    <h3 class="nombre__Farmaco">Rifampicina</h3>\
                </div>\
                <div class="contenedor__Info">\
                    <div class="contenedor__Presentacion">\
                        <div class="titulo__Presentacion">\
                            <h4 class="presentacion">Frasco/Ampolla 600mg</h4>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion">\
                                    <h4>Reconstitución</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>En 10ml de agua destilada, obteniendo 60mg/ml.</p>\
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
                        <p class="texto__Estabilidad"><b class="texto__Blanco">Una vez reconstituido tiene una durabilidad de 24hs a T° ambiente.</b></p>\
                        <p class="texto__Estabilidad">El diluido precipita luego de 3 hs.</p>\
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
                                    <p>DX5% o SF.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion">\
                                    <h4>Concentración por vía périferica y central (6mg/ml)</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Llevar a '+dilucion+'ml.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion">\
                                    <h4>Infusión</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Entre 30 minutos a 3hs.</p>\
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
                    btn.style.display = 'none';
                });

            }
            //SULFAMETAXAZOL TRIMTROPRIMA (BACTRIM)
            else if(nombreMedicamento === "Sulfametoxazol Trimetroprima" || nombreMedicamento === "sulfametoxazol trimetroprima" || nombreMedicamento === "SULFAMETOXAZOL TRIMETROPRIMA" || nombreMedicamento === "Bactrim" || nombreMedicamento === "bactrim" || nombreMedicamento === "BACTRIM" || nombreMedicamento === "Tmp-Smx" || nombreMedicamento === "tmp-smx" || nombreMedicamento === "TMP-SMX"){

                miligramos = 80;
                frascoTotal = 5;
                dilucion = (dosis/0.6).toFixed(2);
                dilucion2 = (dosis/1).toFixed(2);
                dilucion3 = (dosis/1.6).toFixed(2);

                let fondo = document.querySelector('.contenedor');
                console.log(fondo);
                fondo.style.backgroundColor = '#1357a6';
    
                let info = 
                '<div class="contenedor__Grilla">\
                <div class="contenedor__Titulo">\
                    <h3 class="nombre__Farmaco">Sulfametoxazol trimetropina TMP-SMX (Bactrim)</h3>\
                </div>\
                <div class="contenedor__Info">\
                    <div class="contenedor__Presentacion">\
                        <div class="titulo__Presentacion">\
                            <h4 class="presentacion">Ampolla 80mg de TMP + 400mg de SMX.</h4>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion">\
                                    <h4>Reconstitución</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>No requiere.</p>\
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
                        <p class="texto__Estabilidad"><b class="texto__Blanco">Una vez utlizado desechar.</b></p>\
                        <p class="texto__Observaciones">Datos consignados en base a la Trimetropina.</p>\
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
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion">\
                                    <h4>Recomendada por vía périferica(0,6mg/ml)</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Llevar a '+dilucion+'ml.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion">\
                                    <h4>Máxima por vía central (1mg/ml)</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Llevar a '+dilucion2+'ml.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion">\
                                    <h4>Pacientes con Restricción Hidrica (1,6mg/ml)</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Llevar a '+dilucion3+'ml.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion">\
                                    <h4>Infusión</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Entre 30 a 60 minutos.</p>\
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
                    btn.style.display = 'none';
                });

            }
            //SULFATO DE MAGNESIO
            else if(nombreMedicamento === "Sulfato de MG" || nombreMedicamento === "Sulfato de mg" || nombreMedicamento === "sulfato de mg" || nombreMedicamento === "SULFATO DE MG" || nombreMedicamento === "Sulfato de Magnesio" || nombreMedicamento === "sulfato de magnesio" || nombreMedicamento === "SULFATO DE MAGNESIO"){

                miligramos = 1250;
                frascoTotal = 5;
                dilucion = dosis/200;
                dilucion2 = dosis/10;
                dilucion3 = dosis/30;
      

                let fondo = document.querySelector('.contenedor');
                console.log(fondo);
                fondo.style.backgroundColor = '#e47200';
    
                let info = 
                '<div class="contenedor__Grilla">\
                <div class="contenedor__Titulo">\
                    <h3 class="nombre__Farmaco4">Sulfato de Magnesio (MG+)</h3>\
                </div>\
                <div class="contenedor__Info">\
                    <div class="contenedor__Presentacion">\
                        <div class="titulo__Presentacion4">\
                            <h4 class="presentacion">Ampolla al 25% 250mg/ml.</h4>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion4">\
                                    <h4>Reconstitución</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>No requiere.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion4">\
                                    <h4>Según dosis indicada</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Retirar del FA '+calculo()+' ml.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion4">\
                                    <h4>Cantidad a utilizar</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Para la dosis indicada se debe utlizar '+ampollas()+' frasco/os</p>\
                                </div>\
                            </div>\
                        </div>\
                    </div>\
                    <div class="contenedor__Presentacion">\
                        <div class="titulo__Presentacion4">\
                            <h4 class="presentacion">Solución Magistral 4mEq/ml(1mEq Mg = 12 mg de Mg).</h4>\
                        </div>\
                    </div>\
                    <h3 class="estabilidad4">Estabilidad y observaciones</h3>\
                    <div class="contenedor__Estabilidad">\
                        <p class="texto__Observaciones">En caso de intoxicación se debe contar con una solución de calcio.</p>\
                    </div>\
                    <h4 class="texto1">En base a la dosis indicada y la forma de administración elegida:</h4>\
                    <h3 class="administracion4">IntraVenosa Directa (IVD) --[PUSH]--</h3>\
                    <div class="contenedor__Presentacion">\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion4">\
                                    <h4>Solo en Arritmias</h4>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion4">\
                                    <h4>Dilución:</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>en SF o DX5%.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion4">\
                                    <h4>Recomendada (200mg/ml).</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Llevar a '+dilucion+'ml.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion4">\
                                    <h4>Infusión</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>en 10 a 20 minutos.</p>\
                                </div>\
                            </div>\
                        </div>\
                    </div>\
                    <h3 class="administracion4">IntraVenosa Intermitente (IVI) --[2° CANAL]--</h3>\
                    <div class="contenedor__Presentacion">\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion4">\
                                    <h4>Dilución:</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>en SF o DX5%</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion4">\
                                    <h4>Recomendación por vía périferica (10mg/ml)</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Llevar a '+dilucion2+'ml.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion4">\
                                    <h4>Máxima por vía central (30mg/ml)</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Llevar a '+dilucion3+'ml.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion4">\
                                    <h4>Infusión</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>En 30 a 60 minutos.</p>\
                                </div>\
                            </div>\
                        </div>\
                    </div>\
                    <h3 class="administracion4">En Crisis Asmaticas --[2° CANAL]--</h3>\
                    <div class="contenedor__Presentacion">\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion4">\
                                    <h4>Dilución:</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>en SF o DX5%</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion4">\
                                    <h4>Dosis</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Dosis entre 250-500mg: llevar a 20ml.<br>\
                                        Dosis entre 501-750mg: llevar a 30ml.<br>\
                                        Dosis entre 751-1500mg: llevar a 50ml.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion4">\
                                    <h4>Infusión</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>En 30 a 60 minutos.</p>\
                                </div>\
                            </div>\
                        </div>\
                    </div>\
                    <h3 class="administracion4">IntraVenosa (IVC)--[GOTEO]--</h3>\
                    <div class="contenedor__Presentacion">\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion4">\
                                    <h4>NO</h4>\
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
                    btn.style.display = 'none';
                });

            }
            //TIOPENTAL
            else if(nombreMedicamento === "Tiopental" || nombreMedicamento === "tiopental" || nombreMedicamento === "TIOPENTAL"){

                miligramos = 1000;
                frascoTotal = 10;
                miligramos2 = 1000;
                frascoTotal2 = 20;
                dilucion = dosis/20;
                dilucion2 = dosis/50;
                dilucion3 = dosis/25;
                let dosisml = 24 - calculo();
                let plantotal = Number(calculo()) + Number(dosisml);
                let dosisDoble = dosis * 2;
                let mlDoble = calculo() * 2;
                let dosismlDoble = dosisml * 2;
                let plantotalDoble = plantotal * 2;
                let ampollaDoble = ampollas() * 2;
                
                function calculo1(){
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
            
                function ampollas1(){
                                if (dosis === entero){
                                    let ampollas = dosis/miligramos2;
                                    console.log(ampollas);
                                    return ampollas;
                            } else if(dosis !== entero){
                                let ampollas = dosis/miligramos2;
                                redondeo2 = (ampollas.toFixed(2));
                                console.log(redondeo2);
                                if (ampollas === 1.00){
                                    redondeo2 = parseInt(ampollas);
                                    return Math.ceil(redondeo2);
                                }
                                return Math.ceil(redondeo2);
                            }
                }
                
                function plan(){
                    if (dosis >= 120){
                        let planpuro ='Morfina '+dosis+'MG_____'+calculo()+'ml.<br>\
                        Dosis Pura.<br>\
                        Total_________________________'+plantotal+'ml.';
                        return plan.innerHTML=planpuro;
                    } else {
                        let planparcial =
                        'Morfina '+dosis+'MG_____'+calculo()+'ml.<br>\
                        DX5%_________________'+dosisml+'ml.<br>\
                        Total_________________________'+plantotal+'ml.';
                       return plan.innerHTML = planparcial;
                    };
                }
                function plan2(){
                    if (dosis >= 1200){
                        let planpuro ='Morfina '+dosisDoble+'MG_____'+mlDoble+'ml.<br>\
                        Dosis Pura.<br>\
                        Total_________________________'+plantotalDoble+'ml.<br>\
                        Se debe utlizar '+ampollaDoble+' ampollas.';
                        return plan.innerHTML=planpuro;
                    } else {
                        let planparcial =
                        'Morfina '+dosisDoble+'MG_____'+mlDoble+'ml.<br>\
                        DX5%_________________'+dosismlDoble+'ml.<br>\
                        Total_________________________'+plantotalDoble+'ml.<br>\
                        Se debe utlizar '+ampollaDoble+' ampollas.';
                       return plan.innerHTML = planparcial;
                    };
                }


                let fondo = document.querySelector('.contenedor');
                console.log(fondo);
                fondo.style.backgroundColor = '#089c41';
    
                let info = 
                '<div class="contenedor__Grilla">\
                <div class="contenedor__Titulo">\
                    <h3 class="nombre__Farmaco3">Tiopental</h3>\
                </div>\
                <div class="contenedor__Info">\
                    <div class="contenedor__Presentacion">\
                        <div class="titulo__Presentacion3">\
                            <h4 class="presentacion">Frasco/Ampolla de 1gr.</h4>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion3">\
                                    <h4>Reconstitución</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>10 ml de SF (100mg/ml).</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion3">\
                                    <h4>Según dosis indicada</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Retirar de la ampolla '+calculo()+' ml.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion3">\
                                    <h4>Cantidad a utilizar</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Para la dosis indicada se debe utlizar '+ampollas()+' ampolla/as</p>\
                                </div>\
                            </div>\
                        </div>\
                    </div>\
                    <div class="contenedor__Presentacion">\
                        <div class="titulo__Presentacion3">\
                            <h4 class="presentacion">Frasco/Ampolla de 1gr.</h4>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion3">\
                                    <h4>Reconstitución</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>20 ml de SF (50mg/ml).</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion3">\
                                    <h4>Según dosis indicada</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Retirar de la ampolla '+calculo1()+' ml.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion3">\
                                    <h4>Cantidad a utilizar</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Para la dosis indicada se debe utlizar '+ampollas1()+' ampolla/as</p>\
                                </div>\
                            </div>\
                        </div>\
                    </div>\
                    <h3 class="estabilidad3">Estabilidad y observaciones</h3>\
                    <div class="contenedor__Estabilidad">\
                        <p class="texto__Estabilidad"><b class="texto__Blanco">Una vez diluido 24 a T° ambiente.</b></p>\
                        <p class="texto__Observaciones"><b class="texto__Blanco">En caso de intoxicación se debe contar con una solución de calcio.</b></p>\
                    </div>\
                    <h4 class="texto1">En base a la dosis indicada y la forma de administración elegida:</h4>\
                    <h3 class="administracion3">IntraVenosa Directa (IVD) --[PUSH]--</h3>\
                    <div class="contenedor__Presentacion">\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion3">\
                                    <h4>Diluyente.</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>DX5% o SF.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion3">\
                                    <h4>Recomendada por vía périferica (20mg/ml)</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Llevar a '+dilucion+'ml.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion3">\
                                    <h4>Máxima por vía central (50mg/ml)</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Llevar a '+dilucion2+'ml.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion3">\
                                    <h4>Infusión</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Lenta.</p>\
                                </div>\
                            </div>\
                        </div>\
                    </div>\
                    <h3 class="administracion3">IntraVenosa Intermitente (IVI) --[2° CANAL]--</h3>\
                    <div class="contenedor__Presentacion">\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion3">\
                                    <h4>Diluyente</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>DX5% o SF.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion3">\
                                    <h4>Recomendada por vía périferica (20mg/ml)</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Llevar a '+dilucion+'ml.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion3">\
                                    <h4>Máxima por vía central (25mg/ml)</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Llevar a '+dilucion3+'ml.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion3">\
                                    <h4>Infusión</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Lenta.</p>\
                                </div>\
                            </div>\
                        </div>\
                    </div>\
                    <h3 class="administracion3">IntraVenosa Continua (IVC) --[GOTEO]--</h3>\
                    <div class="contenedor__Presentacion">\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion3">\
                                    <h4>Dilución</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>El vial a una concentración entre 2-4mg/ml.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion3">\
                                    <h4>Máxima Dilución</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>50mg/ml.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion3">\
                                    <h4>Preparación</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>la dilución para el goteo estará orientada a la cantidad de mg/ml que requiera el equipo médico.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion3">\
                                    <h4>Identificación</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Perfus cinta color verde.<br>\
                                    Rotulo color verde.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion3">\
                                    <h4>Perfus</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Utilizar perfus común y cambiar el mismo cada 24hs.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion3">\
                                    <h4>Sachet</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Cambiar el mismo cada 24hs, no necesita proteger de la luz.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion3">\
                                    <h4>Administración</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Unicamente por vía central.</p>\
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
                    btn.style.display = 'none';
                });

            }
            //VANCOMICINA
            else if(nombreMedicamento === "Vancomicina" || nombreMedicamento === "vancomicina" || nombreMedicamento === "VANCOMICINA"){

                miligramos = 500;
                frascoTotal = 10;
                dilucion = dosis/2.5;
                dilucion2 = dosis/5;
                dilucion3 = dosis/16;

                let fondo = document.querySelector('.contenedor');
                console.log(fondo);
                fondo.style.backgroundColor = '#1357a6';
    
                let info = 
                '<div class="contenedor__Grilla">\
                <div class="contenedor__Titulo">\
                    <h3 class="nombre__Farmaco">Vancomicina</h3>\
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
                        <p class="texto__Estabilidad"><b class="texto__Blanco">Una vez reconstituido tiene una durabilidad de 4 días refrigerado.</b></p>\
                        <p class="texto__Observaciones">Requiere pre-medicación de difenhidramina o hidrocortisona.</p>\
                        <p class="texto__Observaciones">administrar de forma lenta.</p>\
                        <p class="texto__Observaciones">Puede ser infundido en 3hs, mejora la activación antimicrobiana.</p>\
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
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion">\
                                    <h4>Recomendada por vía périferica (2,5mg/ml)</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Llevar a <b>'+dilucion+'ml.</b></p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion">\
                                    <h4>Máxima por vía central (5mg/ml)</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Llevar a '+dilucion2+'ml.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion">\
                                    <h4>Pacientes con Restricción Hidrica (16mg/ml)</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Llevar a '+dilucion3+'ml.</p>\
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
                    btn.style.display = 'none';
                });

            }
            //VECURONIO
            else if(nombreMedicamento === "Vecuronio" || nombreMedicamento === "vecuronio" || nombreMedicamento === "VECURONIO"){

                miligramos = 10;
                frascoTotal = 10;
                let dosisml = 24 - calculo();
                let plantotal = Number(calculo()) + Number(dosisml);
                let dosisDoble = dosis * 2;
                let mlDoble = calculo() * 2;
                let dosismlDoble = dosisml * 2;
                let plantotalDoble = plantotal * 2;
                let ampollaDoble = ampollas() * 2;
                
                
                function plan(){
                    if (dosis >= 24){
                        let planpuro ='Vecuronio '+dosis+'MG_____'+calculo()+'ml.<br>\
                        Dosis Pura.<br>\
                        Total_________________________'+dosis+'ml.';
                        return plan.innerHTML=planpuro;
                    } else {
                        let planparcial =
                        'Vecuronio '+dosis+'MG_____'+calculo()+'ml.<br>\
                        DX5%_________________'+dosisml+'ml.<br>\
                        Total_________________________'+plantotal+'ml.';
                       return plan.innerHTML = planparcial;
                    };
                }
                function plan2(){
                    if (dosis >= 24){
                        let planpuro ='Vecuronio '+dosisDoble+'MG_____'+mlDoble+'ml.<br>\
                        Dosis Pura.<br>\
                        Total_________________________'+dosisDoble+'ml.<br>\
                        Se debe utlizar '+ampollaDoble+' ampollas.';
                        return plan.innerHTML=planpuro;
                    } else {
                        let planparcial =
                        'Vecuronio '+dosisDoble+'MG_____'+mlDoble+'ml.<br>\
                        DX5%_________________'+dosismlDoble+'ml.<br>\
                        Total_________________________'+plantotalDoble+'ml.<br>\
                        Se debe utlizar '+ampollaDoble+' ampollas.';
                       return plan.innerHTML = planparcial;
                    };
                }


                let fondo = document.querySelector('.contenedor');
                console.log(fondo);
                fondo.style.backgroundColor = '#089c41';
    
                let info = 
                '<div class="contenedor__Grilla">\
                <div class="contenedor__Titulo">\
                    <h3 class="nombre__Farmaco3">Vecuronio</h3>\
                </div>\
                <div class="contenedor__Info">\
                    <div class="contenedor__Presentacion">\
                        <div class="titulo__Presentacion3">\
                            <h4 class="presentacion">Frasco/Ampolla de 10mg</h4>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion3">\
                                    <h4>Reconstitución</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>10ml de  DX5% (Tiene una estabilidad de 24hs). Concentración 1mg/ml.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion3">\
                                    <h4>Según dosis indicada</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Retirar de la ampolla '+calculo()+' ml.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion3">\
                                    <h4>Cantidad a utilizar</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Para la dosis indicada se debe utlizar '+ampollas()+' ampolla/as</p>\
                                </div>\
                            </div>\
                        </div>\
                    </div>\
                    <h3 class="estabilidad3">Estabilidad y observaciones</h3>\
                    <div class="contenedor__Estabilidad">\
                        <p class="texto__Estabilidad"><b class="texto__Blanco">Las ampollas se conservan a T° ambiente.</b></p>\
                        <p class="texto__Estabilidad"><b class="texto__Blanco">Una vez diluida el fraco/ampolla 24hs de estabilidad a T° ambiente y a la luz natural.</b></p>\
                        <p class="texto__Observaciones"><b class="texto__Blanco">Algunos estudios relacionan el uso prolongado, especialmente tras administraciones prolongadas y asociación con corticoides, con cuadros miopáticos, bien incrementando su incidencia, bien empeorando su pronóstico.</b></p>\
                    </div>\
                    <h4 class="texto1">En base a la dosis indicada y la forma de administración elegida:</h4>\
                    <h3 class="administracion3">IntraVenosa Directa (IVD) --[PUSH]--</h3>\
                    <div class="contenedor__Presentacion">\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion3">\
                                    <h4>Dilución</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>No requiere.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion3">\
                                    <h4>Infusión</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>lenta, lavar luego con 5ml de S.F.</p>\
                                </div>\
                            </div>\
                        </div>\
                    </div>\
                    <h3 class="administracion3">IntraVenosa Intermitente (IVI) --[2° CANAL]--</h3>\
                    <div class="contenedor__Presentacion">\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion3">\
                                    <h4>NO</h4>\
                                </div>\
                            </div>\
                        </div>\
                    </div>\
                    <h3 class="administracion3">IntraVenosa Continua (IVC) --[GOTEO]--</h3>\
                    <div class="contenedor__Presentacion">\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion3">\
                                    <h4>Dilución</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>dosis indicada llevar a 24ml de DX5%.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion3">\
                                    <h4>Preparación</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>'+plan()+'</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion3">\
                                    <h4>Si se prepara por primera vez o se debe cambiar el perfus PREPARAR DOBLE DOSIS</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>'+plan2()+'</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion3">\
                                    <h4>Identificación</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Perfus cinta color verde.<br>\
                                    Rotulo color verde.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion3">\
                                    <h4>Perfus</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Utilizar perfus común y cambiar el mismo cada 7 días.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="info__Presentacion">\
                            <div class="info__Uno">\
                                <div class="reconstitucion3">\
                                    <h4>Sachet</h4>\
                                </div>\
                                <div class="datos">\
                                    <p>Cambiar el mismo cada 24hs, no necesita proteger de la luz.</p>\
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
                    btn.style.display = 'none';
                });

            }
            else{
                let fondo = document.querySelector('.contenedor');
                console.log(fondo);
                fondo.style.backgroundColor = '#e61919';

                let info ='<div class="error">\
                 <h2 class="texto-error">Error</h2>\
                 <img class="alerta" src="ASSETS/ICONOS/ALERTA.png" alt="icono alerta">\
                 <h2 class="texto-error"> Agrege un nombre de medicamento valido</h2>\
                </div>'
                informacion.innerHTML += info;
                //EVENTO AL HACER CLICK EN EL BOTON BORRAR RESTABLECE EL ELEMENTO <P> ORGINAL.
                btn.addEventListener('click', function(e){
                    informacion.innerHTML = informaacionOriginal;
                    fondo.style.backgroundColor = '#318CE7';
                    btn1.style.display = 'block';
                    btn.style.display = 'none';
                });
            };

})


