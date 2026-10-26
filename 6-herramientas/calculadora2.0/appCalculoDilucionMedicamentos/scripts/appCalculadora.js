/* DATOS DEL PROYECTO
 * ============================================================
 * ENFERMERÍA CONECTADA
 * Calculadora de Dilución de Medicamentos
 * ============================================================
 *
 * Archivo: appCalculadora.js
 * Lenguaje: JavaScript
 *
 * Descripción:
 * Archivo principal de la calculadora de medicamentos.
 * Gestiona la interacción con el usuario, recepción de datos,
 * selección del medicamento, ejecución de funciones de cálculo
 * y generación de los resultados en la interfaz.
 *
 * Plataforma: Enfermería Conectada
 *
 * Proyecto:
 * “Creación de una aplicación móvil como herramienta para
 * optimizar la calidad del cuidado de enfermería en el servicio
 * de UCIP del Hospital Infantil Municipal durante el periodo 2023”
 *
 * Autor: FERNANDEZ LUCAS EDUARDO
 * Año de creación del proyecto: 2023
 *
 * Actualización: V2.0 — 15/08/2026
 *
 * Copyright © 2026 FERNANDEZ LUCAS EDUARDO
 * Todos los derechos reservados.
 *
 * Este archivo forma parte del software desarrollado para
 * el proyecto Enfermería Conectada.
 *
 * No se autoriza la reproducción, modificación, distribución
 * o utilización comercial de este código sin autorización
 * expresa del titular de los derechos.
 *
 * ============================================================
 */

import medicamentos from "./Medicamentos.js"; //traemos la fichas de los medicamentos
import { calculo, dilucion, convertirUnidad, calcularFechaDesecho } from "./funciones.js"; //traemos la funciones de calculo
import { mostrarDatosIngresados, mostrarFichaFarmaco, mostrarPosologias, mostrarIVD, claseCategoria} from "./mostrarDatos.js";

//con esta variable seleccionamos los elementos del formulario
const formulario = document.getElementById("medicamentos");

//FUNCIONES DE LA CALCULADORA


let medicamentoSeleccionado = null;
let dosisIndicadaSeleccionada = null;
let pesoSeleccionado = null;
let resultadosReconstitucionSeleccionados = {};
let resultadosPosologiaActuales = null;
let claseCategoriaPosologiaActual = "";

let patologiaPosologiaSeleccionada = "";
let indicacionPosologiaSeleccionada = "";


//EVENTO PRINCIPAL OBTENER FARMACOS
//agregamos un eventos que se activa al enviar los datos con el boton calcular
formulario.addEventListener("submit", function(e){

    e.preventDefault();//esta funcion previene que se borren los datos al enviarlos a las funciones

    //OBTENEMOS TODOS LOS DATOS DE LOS ELEMENTOS EN VARIABLES
    let nombreMedicamento = document
                            .getElementById("seleccion")
                            .value.trim()
                            .toLowerCase();

    let dosiscadena = document
                    .getElementById("dosis")
                    .value;//AQUI CAMBIE YA QUE EL TYPE NUMBER NO ACEPTABA VALORES DECIMALES CON .
                    
    let pesocadena = document
                    .getElementById("peso")
                    .value; //recibimos el valor del input peso.


    let informacion = document.querySelector(".resultado");
    let borrarP = document.querySelector(".resp");
    let btn1 = document.querySelector(".boton1");
    let btn = document.querySelector(".boton");
    let informaacionOriginal = informacion.innerHTML;//ESTA VARIABLE ALMACENA EL VALOR ORIGINAL DEL DIV INFORMACION PARA QUE AL SE ESTABLESCA LA FUNCION DE BORRAR.    
   
    //AQUI CONVIERTO EL STRING DEL VALOR DEL INPUT TEXT PARA LAS OPERACIONES
    const dosis = Number(dosiscadena);
    const peso = Number(pesocadena);
    
    console.log(convertirUnidad(0.5, "g", "mg"));
    console.log(convertirUnidad(500, "mcg", "mg"));
    console.log(convertirUnidad(450, "mg", "mg"));


    const nombreMedicamentoReal = Object.keys(medicamentos).find(nombre => nombre.toLocaleLowerCase() === nombreMedicamento);
    // Validamos que el medicamento exista
if (!nombreMedicamentoReal) {
    alert("Seleccioná un medicamento válido de la lista.");
    return;
    }

    const medicamento = medicamentos[nombreMedicamentoReal];

        // Guardamos los datos para los pasos siguientes
        medicamentoSeleccionado = medicamento;
        dosisIndicadaSeleccionada = dosis;
        pesoSeleccionado = peso;

        // Mostramos únicamente los datos iniciales
        mostrarDatosIngresados(medicamento.nombre, dosis, peso);

        cargarModalidades(medicamentoSeleccionado);
        const selectorPresentacion = document.getElementById("presentacionMedicamento");

        selectorPresentacion.innerHTML =
            '<option value="">Seleccionar presentación</option>';

        selectorPresentacion.disabled = true;

        document.getElementById("pasoAdministracion").style.display = "block";

        // Avanzaremos al paso 2 en el próximo cambio
        console.log("Medicamento seleccionado:", medicamentoSeleccionado);
        console.log("Dosis indicada:", dosisIndicadaSeleccionada);
        console.log("Peso:", pesoSeleccionado);




    const farmaco = medicamento.nombre;
    const claseCategoriaMedicamento = claseCategoria(medicamento.categoria);

    let via = document.getElementById("viaAdministracion").value;
    let modalidad = document.getElementById("modalidad").selectedOptions[0]?.textContent || "";
    let acceso = document.getElementById("accesoAdministracion").value;
    
    mostrarDatosIngresados(farmaco, dosis, peso, via, modalidad, acceso);

    console.log(medicamento)
    console.log("el farmaco es: ", medicamento.nombre);
    console.log("Dosis indicada: ", dosis);
    console.log("peso: ", peso);
    console.log("Presentaciones: ", medicamento.presentaciones);
    console.log("Cantidad de presentaciones: ",Object.keys(medicamento.presentaciones).length);

    

    resultadosReconstitucionSeleccionados = {};

    //CREAMOS LA FECHA DE PREPRACION ANTES DEL FOR
    const fechaPreparacion = new Date();
    console.log("Fecha de preparación: ", fechaPreparacion);


    for (const nombre in medicamento.presentaciones){
            const datos = medicamento.presentaciones[nombre]
            console.log("Nombre de la presentación: ", nombre);
            console.log("Datos de la presentación: ",datos);

            console.log("PRESENTACIÓN:", nombre);
            console.log("ESTABILIDAD DE LA PRESENTACIÓN:", datos.estabilidad);
            console.log("OBJETO ESTABILIDAD DEL MEDICAMENTO:", datos.estabilidad);

            const volumenAdministrar = (dosis * datos.volumen) / datos.cantidad;
            console.log("Se debe retirar del medicamento:", volumenAdministrar,"ml del medicamento reconstituido.");

            const cantidadFrascos = Math.ceil(dosis / datos.cantidad);
            console.log("Cantidad de frascos a utilizar: ", cantidadFrascos," frasco/s para dosis indicada");

            const estabilidad = medicamento.estabilidad[datos.estabilidad];

            console.log("CLAVE ESTABILIDAD:", datos.estabilidad);
            console.log("OBJETO ESTABILIDAD:", medicamento.estabilidad);
            console.log("ESTABILIDAD ENCONTRADA:", estabilidad);

            const fechaDesecho = calcularFechaDesecho(fechaPreparacion, estabilidad);
            

           resultadosReconstitucionSeleccionados [nombre] = {
                    volumenAdministrar: volumenAdministrar.toFixed(2),
                    cantidadFrascos: cantidadFrascos,
                    fechaPreparacion: fechaPreparacion,
                    fechaDesecho: fechaDesecho,
                    estabilidad: estabilidad,
           }
        };

        
        //YA CALCULADO MOSTRAMOS LA FICHA EN mostrarDatos.js
        mostrarFichaFarmaco(medicamento, resultadosReconstitucionSeleccionados, dosis, medicamento.unidadFarmacologica)
    
    

    const dosisPorKg = Number( (dosis / peso).toFixed(2));
    console.log("Dosis por kg: ",dosisPorKg,"mg.");
    
    //GUARDAMOS LOS DATOS FUERA DEL FOR PARA QUE NO SE PIERDAN AL VOLVER A ENTRAR AL FOR
    const resultadosPosologia = {};
    
    for (const nombrePatologia in medicamento.posologia){
        const patologia = medicamento.posologia[nombrePatologia];
        //INICIAMOS Y GUARDAMOS SUS DATOS
        resultadosPosologia[nombrePatologia] = {
            diagnostico: patologia.diagnostico,
            indicaciones: {}
        }

        console.log("Nombre de la patologia: ", nombrePatologia);
        console.log("Diagnostico: ", patologia.diagnostico);
        console.log("Descripción: ", patologia.indicaciones);

        for(const nombreIndicacion in patologia.indicaciones){
            const indicacion = patologia.indicaciones[nombreIndicacion];
            console.log("Indicacion: ",nombreIndicacion);
            
            const dosisPosologia = indicacion.dosis;
            const intervaloDosis = indicacion.intervalo;

            const intervaloEsRango = Boolean(intervaloDosis?.rango);

            const intervaloTexto = intervaloEsRango
                ? `${intervaloDosis.rango.valorMin}-${intervaloDosis.rango.valorMax} ${intervaloDosis.rango.unidad}`
                : `${intervaloDosis.valor} ${intervaloDosis.unidad}`;
                        console.log("Dosis por Posologia",dosisPosologia);

            //MOSTRAMOS LA DOSIS RECOMENDADA SEGÚN EL TIPO DE POSOLOGÍA (FIJA, RANGO, MÁXIMA, DESCONOCIDA)
            if (dosisPosologia.tipo === "Fija"){
                //LA DOSIS TIENE UN ÚNICO VALOR RECOMENDADO
                console.log(
                    "Dosis recomendada: ",
                    dosisPosologia.valor,
                    dosisPosologia.unidad
                )
            } 
            else if (dosisPosologia.tipo === "Rango"){
                //LA DOSIS TIENE UN VALOR MINIMO  MÁXIMO RECOMENDADO
                console.log(
                    "Dosis recomendada: ",
                    dosisPosologia.valorMin,
                    "-",
                    dosisPosologia.valorMax,
                    dosisPosologia.unidad
                )
            }
            else if(dosisPosologia.tipo === "Maxima"){
                //LA DOSIS ESTABLECE ÚNICAMENTE UN LIMITE MÁXIMO PERMITIDO
                console.log(
                    "LA DOSIS MAXIMA ES: ",
                    dosisPosologia.valor,
                    dosisPosologia.unidad
                )
            }
        
            else{
                //DETECTAMOS SI EXISTE UN TIPO DE POSOLOGÍA QUE
                ///TODAVIA NO ESTÁ COMTEMPLADO POR LA FUNCIÓN
                console.log(
                    "Tipo de dosis no reconocido",
                    dosisPosologia)
            }
            //LLAMAMOS A LA FUNCION ANALIZARPOSOLOGIA PARA HACER LAS COMPARACIONES Y CALCULOS
            const resultadoPosologia = analizarPosologia(dosisPosologia, intervaloDosis, peso, dosis, medicamento.unidadFarmacologica);
            console.log("Resultado del análisis de posología: ", resultadoPosologia);

            console.log("nombrePatologia:", nombrePatologia);
            console.log("resultadosPosologia:", resultadosPosologia);
            console.log(
            "patologia actual:",
            resultadosPosologia[nombrePatologia]
            );
            


            //guardamos todos los datos de los calculos
            resultadosPosologia[nombrePatologia].indicaciones[nombreIndicacion] = {
                descripcion: indicacion.descripcion,
                via: indicacion.via,
                acceso: indicacion.acceso,
                dosis: indicacion.dosis,
                intervalo: indicacion.intervalo,
                peso: peso,
                dosisIndicada: dosis,
                unidadFarmacologica: medicamento.unidadFarmacologica,
                resultado: resultadoPosologia
            };
    }
    
    console.log("RESULTADOS DE TODA LA POSOLOGIA FUERA DEL FOR: ", resultadosPosologia);
    //FUNCION DE COMPARACION DE LA DOSIS
   
    }
    console.log("Voy a mostrar las posologías:", resultadosPosologia);
    console.log("Contenedor encontrado:", document.querySelector(".contenedor-posologias"));

    // Guardamos los resultados para reutilizarlos al actualizar la ficha.
    resultadosPosologiaActuales = resultadosPosologia;
    claseCategoriaPosologiaActual = claseCategoriaMedicamento;

    // Al calcular un medicamento nuevo, comenzamos con la primera selección.
    patologiaPosologiaSeleccionada = "";
    indicacionPosologiaSeleccionada = "";

    mostrarPosologias(
        resultadosPosologiaActuales,
        claseCategoriaPosologiaActual
    );
})
//ANALIZAR POSOLOGIA
export function analizarPosologia(dosisPosologia, intervaloDosis, peso, dosis, unidadFarmacologica){
    //MOSTRAMOS SI RECIBIMOS LOS DATOS DE FORMA CORRECTA
    console.log("ENTRO A ANALIZARPOSOLOGIA");
    console.log("Analizando posologia: ", dosisPosologia);
    console.log("Intervalo recibido: ", intervaloDosis);
    console.log("Peso recibido: ", peso);
    console.log("Dosis indicada: ", dosis);
    console.log("UNIDAD FARMACOLOGICA: ", unidadFarmacologica);

    //variable para datos
    let resultado = {};

    //-------------------------------------------
    //DOSIS FIJA
    //-------------------------------------------

    if (dosisPosologia.tipo === "Fija"){
        console.log("Tipo de dosis: FIJA");
        //-------------------------------------------
        //mg/kg/día
        //-------------------------------------------
        if(dosisPosologia.unidad === "mg/kg/día"){
            console.log("UNIDAD: mg/kg/día");

            //calculamos la dosis diaria recomendada según el peso del paciente
            const dosisDiaria = dosisPosologia.valor * peso;
            console.log("Dosis recomendada segun el peso del paciente: ",dosisDiaria,"mg/día");

            //calculamos cuantas dosis corresponden por día según el intervalo indicado
            const cantidadDosisDia = 24/intervaloDosis.valor;
            console.log("Cantidad de dosis por día: ",cantidadDosisDia);

            //calculamos la dosis recomendada por administracion (LO QUE SE ADMINISTRA EN CADA DOSIS)
            const dosisPorAdministracion = dosisDiaria/cantidadDosisDia;
            console.log("Dosis recomendada por administracion: ",dosisPorAdministracion,"mg");
            
            //CALCULAMOS EL ACUMULADO DIARIO (LO QUE RECIBE EL PACIENTE EN 24HS)
            const dosisIndicadaDia = dosis * cantidadDosisDia;
            console.log("Dosis Total indicada por día: ",dosisIndicadaDia,"mg/día");

            //convertimos la dosis indicada por administración a mg/kg/dia
            //para poder compararla con la dosis recomendad por peso.
            const dosisIndicadaKgDia = dosisIndicadaDia / peso;
            console.log("Dosis indicada según el peso: ",dosisIndicadaKgDia,"mg/kg/día")

            

            //COMPARAMOS SI LA DOSIS INDICADA SUPERA, ES INFERIOR O COINCIDE CON LO RECOMENDADO
            if(dosisIndicadaKgDia > dosisPosologia.valor){
                resultado.estado = "superior";
                console.log(
                    "LA DOSIS SUPERA LA DOSIS RECOMENDADA",
                    "Dosis indicada:",
                    dosis,
                    "mg por administración.",
                    "Según el intervalo indicado: ",
                    cantidadDosisDia,
                    "Dosis por día, administradas cada: ",
                    intervaloDosis.valor,
                    intervaloDosis.unidad,
                    "Dosis total indicada por día: ",
                    dosisIndicadaDia,"mg/día.",
                    "Dosis recomendada según peso del paciente: ",
                    dosisPorAdministracion,
                    "mg por administración" 
                );
            } else if (dosisIndicadaKgDia < dosisPosologia.valor){
                resultado.estado = "inferior";
                console.log(
                    "LA DOSIS INDICADA ES INFERIOR A LA DOSIS RECOMENDADA",
                    "Dosis indicada:",
                    dosis,
                    "mg por administración.",
                    "Según el intervalo indicado: ",
                    cantidadDosisDia,
                    "Dosis por día, administradas cada: ",
                    intervaloDosis.valor,
                    intervaloDosis.unidad,
                    "Dosis total indicada por día: ",
                    dosisIndicadaDia,"mg/día.",
                    "Dosis recomendada según peso del paciente: ",
                    dosisPorAdministracion,
                    "mg por administración" 
                );
            } else {
                resultado.estado = "coincide";
                console.log(
                    "LA DOSIS INDICADA COINCIDE CON LA DOSIS RECOMENDADA",
                    "Dosis indicada:",
                    dosis,
                    "mg por administración.",
                    "Según el intervalo indicado: ",
                    cantidadDosisDia,
                    "Dosis por día, administradas cada: ",
                    intervaloDosis.valor,
                    intervaloDosis.unidad,
                    "Dosis total indicada por día: ",
                    dosisIndicadaDia,"mg/día.",
                    "Dosis recomendada según peso del paciente: ",
                    dosisPorAdministracion,
                    "mg por administración"
                )
            };
            // -------------------------------------------
            // GUARDAMOS LOS RESULTADOS
            // -------------------------------------------

            resultado = {
                tipo: dosisPosologia.tipo,
                unidad: dosisPosologia.unidad,
                dosisIndicada: dosis,
                unidadDosisIndicada: unidadFarmacologica,

                dosisIndicadaDia: dosisIndicadaDia,
                unidadDosisIndicadaDia: unidadFarmacologica + "/día.",

                dosisIndicadaKgDia: dosisIndicadaKgDia,
                unidadDosisIndicadaKgDia: unidadFarmacologica + "/kg/día.",

                dosisRecomendada: dosisPosologia.valor,
                unidadDosisRecomendada: dosisPosologia.unidad,

                dosisRecomendadaDia: dosisDiaria,
                unidadDosisRecomendadaDia: unidadFarmacologica + "/día.",

                dosisRecomendadaAdministracion: dosisPorAdministracion,
                unidadDosisRecomendadaAdministracion: unidadFarmacologica,

                cantidadDosisDia: cantidadDosisDia,
                intervalo: intervaloDosis.valor,
                unidadIntervalo: intervaloDosis.unidad,
                estado: resultado.estado

            }

        }
        else if (dosisPosologia.unidad === "mg/kg/dosis"){
            console.log("UNIDAD: mg/kg/dosis")
            //calculamos la dosis recomendada por administración segun el peso del pacientes
            const dosisPorAdministracion = dosisPosologia.valor * peso;
            console.log("Dosis recomendada por administracion según peso: ",dosisPorAdministracion,"mg.");

            //calculamos cuanta dosis le corresponde por según intervalo
            const cantidadDosisDia = 24 / intervaloDosis.valor;
            console.log("Cantidad de dosis por día: ", cantidadDosisDia);

            //DOSIS RECOMENDADA TOTAL EN 24HS   
            const dosisRecomendadaDia = dosisPorAdministracion * cantidadDosisDia;

            //calculamos el acumulado diario (lo que recibe el paciente en 24hs)
            const dosisIndicadaDia = dosis * cantidadDosisDia;
            console.log("Dosis Total indicada por día: ",dosisIndicadaDia,"mg/día");

            if (dosis < dosisPorAdministracion){
                resultado.estado = "inferior";
                console.log(
                    "LA DOSIS ES INFERIOR A LA DOSIS RECOMENDADA",
                    "Dosis indicada:",
                    dosis,
                    "mg por administración.",
                    "Según el intervalo indicado: ",
                    cantidadDosisDia,
                    "Dosis por día, administradas cada: ",
                    intervaloDosis.valor,
                    intervaloDosis.unidad,
                    "Dosis total indicada por día: ",
                    dosisIndicadaDia,"mg/día.",
                    "Dosis recomendada según peso del paciente: ",
                    dosisPorAdministracion,
                    "mg por administración"
                )
            } else if (dosis > dosisPorAdministracion){
                resultado.estado = "superior";
                console.log(
                    "LA DOSIS SUPERA LA DOSIS RECOMENDADA",
                    "Dosis indicada:",
                    dosis,
                    "mg por administración.",
                    "Según el intervalo indicado: ",
                    cantidadDosisDia,
                    "Dosis por día, administradas cada: ",
                    intervaloDosis.valor,
                    intervaloDosis.unidad,
                    "Dosis total indicada por día: ",
                    dosisIndicadaDia,"mg/día.",
                    "Dosis recomendada según peso del paciente: ",
                    dosisPorAdministracion,
                    "mg por administración"
                )
            } else {
                resultado.estado = "coincide";
                console.log(
                    "LA DOSIS COINCIDE CON LA DOSIS RECOMENDADA",
                    "Dosis indicada:",
                    dosis,
                    "mg/kg/dosis por administración.",
                    "Según el intervalo indicado: ",
                    cantidadDosisDia,
                    "Dosis por día, administradas cada: ",
                    intervaloDosis.valor,
                    intervaloDosis.unidad,
                    "Dosis total indicada por día: ",
                    dosisIndicadaDia,"mg/día.",
                    "Dosis recomendada según peso del paciente: ",
                    dosisPorAdministracion,
                    "mg por administración"
                ) 
            }
            // -------------------------------------------
            // GUARDAMOS LOS RESULTADOS
            // -------------------------------------------

            resultado = {
                tipo: dosisPosologia.tipo,
                unidad: dosisPosologia.unidad,
                dosisIndicada: dosis,
                unidadDosisIndicada: unidadFarmacologica,

                dosisIndicadaDia: dosisIndicadaDia,
                unidadDosisIndicadaDia: unidadFarmacologica + "/día.",

                dosisRecomendada: dosisPosologia.valor,
                unidadDosisRecomendada: dosisPosologia.unidad,

                dosisRecomendadaDia: dosisRecomendadaDia,
                unidadDosisRecomendadaDia: unidadFarmacologica + "/día.",

                dosisRecomendadaAdministracion: dosisPorAdministracion,
                unidadDosisRecomendadaAdministracion: unidadFarmacologica,

                cantidadDosisDia: cantidadDosisDia,
                intervalo: intervaloDosis.valor,
                unidadIntervalo: intervaloDosis.unidad,
                estado: resultado.estado
            }
        }
        else if (dosisPosologia.unidad === "mg/día"){
            console.log("UNIDAD: mg/día");
            //obtenemos el dato de la dosis de mg/día
            const dosisDiaria = dosisPosologia.valor
            //calculamos el intervalo de dosis recomendada
            const cantidadDosisDia = 24 / intervaloDosis.valor;
            //calculamos la dosis recomendada que recibe el paciente POR ADMINISTRACION
            const dosisPorAdministracion = dosisDiaria / cantidadDosisDia;
            //DOSIS RECOMENDADA TOTAL EN 24HS   
            const dosisRecomendadaDia = dosisPorAdministracion * cantidadDosisDia;
            console.log("Dosis recomendada según posología: ",dosisDiaria,"mg/día");
            console.log("Cantidad de dosis por día: ",cantidadDosisDia);
            console.log("Dosis recomendada por administración: ",dosisPorAdministracion,"mg");

            //CALCULAMOS LA DOSIS INDICADA POR DIA QUE RECIBE EL PACIENTE EN 24HS
            const dosisIndicadaDia = dosis * cantidadDosisDia;


            if(dosisIndicadaDia < dosisDiaria){
                resultado.estado = "inferior";
                console.log(
                    "LA DOSIS ES INFERIOR A LA DOSIS RECOMENDADA",
                    "Dosis indicada:",
                    dosis,
                    "mg por administración.",
                    "Según el intervalo indicado: ",
                    cantidadDosisDia,
                    "Dosis por día, administradas cada: ",
                    intervaloDosis.valor,
                    intervaloDosis.unidad,
                    "Dosis total indicada por día: ",
                    dosisIndicadaDia,"mg/día.",
                    "Dosis recomendada según peso del paciente: ",
                    dosisPorAdministracion,
                    "mg por administración" 
                ) 
            }else if (dosisIndicadaDia > dosisDiaria){
                    resultado.estado = "superior";
                    console.log(
                        "LA DOSIS SUPERA LA DOSIS RECOMENDADA",
                        "Dosis indicada:",
                        dosis,
                        "mg por administración.",
                        "Según el intervalo indicado: ",
                        cantidadDosisDia,
                        "Dosis por día, administradas cada: ",
                        intervaloDosis.valor,
                        intervaloDosis.unidad,
                        "Dosis total indicada por día: ",
                        dosisIndicadaDia,"mg/día.",
                        "Dosis recomendada según peso del paciente: ",
                        dosisPorAdministracion,
                        "mg por administración" 
                    )
                } else {
                    resultado.estado = "coincide";
                    console.log(
                        "LA DOSIS COINCIDE CON LA DOSIS RECOMENDADA",
                        "Dosis indicada:",
                        dosis,
                        "mg por administración.",
                        "Según el intervalo indicado: ",
                        cantidadDosisDia,
                        "Dosis por día, administradas cada: ",
                        intervaloDosis.valor,
                        intervaloDosis.unidad,
                        "Dosis total indicada por día: ",
                        dosisIndicadaDia,"mg/día.",
                        "Dosis recomendada según peso del paciente: ",
                        dosisPorAdministracion,
                        "mg por administración" 
                    )
                }
                 // -------------------------------------------
            // GUARDAMOS LOS RESULTADOS
            // -------------------------------------------

            resultado = {
                tipo: dosisPosologia.tipo,
                unidad: dosisPosologia.unidad,
                dosisIndicada: dosis,
                unidadDosisIndicada: unidadFarmacologica,

                dosisIndicadaDia: dosisIndicadaDia,
                unidadDosisIndicadaDia: unidadFarmacologica + "/día.",

                dosisRecomendada: dosisPosologia.valor,
                unidadDosisRecomendada: dosisPosologia.unidad,

                dosisRecomendadaDia: dosisRecomendadaDia,
                unidadDosisRecomendadaDia: unidadFarmacologica + "/día.",

                dosisRecomendadaAdministracion: dosisPorAdministracion,
                unidadDosisRecomendadaAdministracion: unidadFarmacologica,

                cantidadDosisDia: cantidadDosisDia,
                intervalo: intervaloDosis.valor,
                unidadIntervalo: intervaloDosis.unidad,
                estado: resultado.estado
            }


        }
        else if (dosisPosologia.unidad === "mg"){
            console.log("UNIDAD: mg")
            //OBTENEMOS LA DOSIS RECOMENDADA POR MG
            const dosisPorAdministracion = dosisPosologia.valor;
            console.log("Dosis recomendada por administracion: ",dosisPorAdministracion,"mg");


            if(dosis < dosisPorAdministracion){
                resultado.estado = "inferior";
                console.log(
                    "LA DOSIS ES INFERIOR A LA DOSIS RECOMENDADA",
                    "Dosis indicada:",
                    dosis,
                    "mg por administración.",
                    "Dosis recomendada según mg: ",
                    dosisPorAdministracion,
                    "mg por administración" 
                ) 
            }else if (dosis > dosisPorAdministracion){
                resultado.estado = "superior";
                    console.log(
                        "LA DOSIS SUPERA LA DOSIS RECOMENDADA",
                        "Dosis indicada:",
                        dosis,
                        "mg por administración.",
                        "Dosis recomendada según mg: ",
                        dosisPorAdministracion,
                        "mg por administración" 
                    )
                } else {
                    resultado.estado = "coincide";
                    console.log(
                        "LA DOSIS COINCIDE CON LA DOSIS RECOMENDADA",
                        "Dosis indicada:",
                        dosis,
                        "mg por administración.",
                        "Dosis recomendada según mg: ",
                        dosisPorAdministracion,
                        "mg por administración"  
                    )
                }
            // -------------------------------------------
            // GUARDAMOS LOS RESULTADOS
            // -------------------------------------------
                console.log("RAMA RANGO mg: guardando resultado");
            resultado = {
                tipo: dosisPosologia.tipo,
                unidad: dosisPosologia.unidad,
                dosisIndicada: dosis,
                unidadDosisIndicada: unidadFarmacologica,

                dosisRecomendada: dosisPosologia.valor,
                unidadDosisRecomendada: dosisPosologia.unidad,

                dosisRecomendadaAdministracion: dosisPorAdministracion,
                unidadDosisRecomendadaAdministracion: unidadFarmacologica,

                estado: resultado.estado
            }
        } 
    }
    //-------------------------------------------
    //DOSIS RANGO
    //-------------------------------------------
    else if(dosisPosologia.tipo === "Rango"){
        console.log("Tipo de dosis: RANGO");
        if(dosisPosologia.unidad === "mg/kg/día"){
            console.log("UNIDAD: mg/kg/día");
            
            
            //CALCULAMOS EN RANGO DE VECES DE ADMINISTRACION DIARIA
            const cantidadDosisDia = 24/intervaloDosis.valor;
            
            //CALCULAMOS EL RANGO TOTAL DIARIO SEGUN EL PESO
            const dosisMinimaKgDia = dosisPosologia.valorMin;
            const dosisMaximaKgDia = dosisPosologia.valorMax;
            
            //CALCULAMOS EL RANGO DIARIO PARA ESTE PACIENTE
            const dosisMinimaDia = dosisMinimaKgDia * peso;
            const dosisMaximaDia = dosisMaximaKgDia * peso;
           
            //CALCULAMOS CUANTO CORRESPONDE POR ADMINISTRACION
            const dosisMinimaAdministracion = dosisMinimaDia / cantidadDosisDia;
            const dosisMaximaAdministracion = dosisMaximaDia / cantidadDosisDia;
           
            //MOSTRAMOS VALORES
            console.log("Dosis minima recomendada según peso: ",dosisMinimaDia,"mg/día");
            console.log("Dosis máxima recomendada según peso: ",dosisMaximaDia,"mg/día");
            console.log("Cantidad de dosis por día: ",cantidadDosisDia);
            console.log("dosis minima por administracion: ",dosisMinimaAdministracion,"mg");
            console.log("dosis máxima por administracion: ",dosisMaximaAdministracion,"mg");

            //DOSIS INDICADA DURANTE TODO EL DIA
            const dosisIndicadaDia = dosis * cantidadDosisDia;

            //CONVIERTE LA DOSIS INDICADA EN MG/KG/DÍA
            const dosisIndicadaKgDia = dosisIndicadaDia / peso;

            //MOSTRAMOS DATOS
            console.log(
                "LA DOSIS INDICADA TOTAL POR DÍA: ",
                dosisIndicadaDia,
                "MG/DÍA."
            )
            console.log(
                "DOSIS INDICADA SEGÚN PESO: ",
                dosisIndicadaKgDia.toFixed(2),
                "MG/KG/DÍA."
            )

            //COMPARAMOS LA DOSIS INDICADA CON EL RANGO RECOMENDADO
            if (dosisIndicadaKgDia < dosisPosologia.valorMin){
                resultado.estado = "inferior al rango";
                console.log(
                    "LA DOSIS ESTA POR DEBAJO DEL RANGO RECOMENDADO",
                    "Dosis indicada:",
                    dosis,
                    "Según el intervalo indicado: ",
                    cantidadDosisDia,
                    "Dosis por día, administradas cada: ",
                    intervaloDosis.valor,
                    intervaloDosis.unidad,
                    "Dosis total indicada por día: ",
                    dosisIndicadaDia,
                    "Rango minimo recomendado según peso del paciente: ",
                    dosisMinimaDia,
                    "Rango minimo recomendado según bibliografia: ",
                    dosisMinimaKgDia,"mg/kg/día",

                )
            } else if (dosisIndicadaKgDia > dosisPosologia.valorMax){
                resultado.estado = "superior al rango";
                console.log(
                    "LA DOSIS ESTA SUPERA DEL RANGO RECOMENDADO",
                    "Dosis indicada:",
                    dosis,
                    "Según el intervalo indicado: ",
                    cantidadDosisDia,
                    "Dosis por día, administradas cada: ",
                    intervaloDosis.valor,
                    intervaloDosis.unidad,
                    "Dosis total indicada por día: ",
                    dosisIndicadaDia,
                    "Rango máximo recomendado según el peso del paciente: ",
                    dosisMaximaDia, "mg/día",
                    "Rango máximo recomendado según bibliografia: ",
                    dosisMaximaKgDia,"mg/kg/día"
                )
            } else{
                resultado.estado = "dentro del rango";
                console.log(
                    "LA DOSIS ESTA DENTRO DEL RANGO RECOMENDADO",
                    "Dosis indicada:",
                    dosis,
                    "Según el intervalo indicado: ",
                    cantidadDosisDia,
                    "Dosis por día, administradas cada: ",
                    intervaloDosis.valor,
                    intervaloDosis.unidad,
                    "Dosis total indicada por día: ",
                    dosisIndicadaDia,
                    "Rango minimo recomendado según el peso del paciente: ",
                    dosisMinimaDia,"mg/día",
                    "Rango máximo recomendado según el peso del paciente: ",
                    dosisMaximaDia,"mg/día",
                    "Rango minimo recomendado según bibliografia: ",
                    dosisMinimaKgDia,"mg/kg/día",
                    "Rango máximo recomendado según bibliografia: ",
                    dosisMaximaKgDia,"mg/kg/día"
                )
            }
            console.log("RAMA RANGO mg/kg/día: guardando resultado");
            //GUARDAMOS LOS RESULTADOS
            resultado = {

                        tipo: dosisPosologia.tipo,
                        unidad: dosisPosologia.unidad,

                        dosisIndicada: dosis,
                        unidadDosisIndicada: unidadFarmacologica,

                        dosisIndicadaDia: dosisIndicadaDia,
                        unidadDosisIndicadaDia: unidadFarmacologica + "/día.",

                        dosisIndicadaKgDia: dosisIndicadaKgDia,
                        unidadDosisIndicadaKgDia: unidadFarmacologica + "/kg/día.",


                        // RANGO SEGÚN BIBLIOGRAFÍA

                        dosisRecomendadaMin: dosisPosologia.valorMin,
                        dosisRecomendadaMax: dosisPosologia.valorMax,
                        unidadDosisRecomendada: dosisPosologia.unidad,


                        // RANGO SEGÚN PESO - POR DÍA

                        dosisRecomendadaDiaMin: dosisMinimaDia,
                        dosisRecomendadaDiaMax: dosisMaximaDia,
                        unidadDosisRecomendadaDia: unidadFarmacologica + "/día.",


                        // RANGO SEGÚN PESO - POR ADMINISTRACIÓN

                        dosisRecomendadaAdministracionMin: dosisMinimaAdministracion,
                        dosisRecomendadaAdministracionMax: dosisMaximaAdministracion,
                        unidadDosisRecomendadaAdministracion: unidadFarmacologica,


                        cantidadDosisDia: cantidadDosisDia,

                        intervalo: intervaloDosis.valor,
                        unidadIntervalo: intervaloDosis.unidad,

                        estado: resultado.estado
                    };

        }
        else if (dosisPosologia.unidad === "mg/kg/dosis"){
            console.log("UNIDAD: mg/kg/dosis");
            const dosisMinimaPorAdministracion = dosisPosologia.valorMin * peso;
            const dosisMaximaPorAdministracion = dosisPosologia.valorMax * peso;
            const dosisMinimaDosis = dosisPosologia.valorMin;
            const dosisMaximaDosis = dosisPosologia.valorMax;
            const cantidadDosisDia = 24 / intervaloDosis.valor;
            const dosisIndicada = dosis * cantidadDosisDia;
            const dosisIndicadaDia = dosis * cantidadDosisDia;
            const dosisMinimaDia = dosisMinimaPorAdministracion * cantidadDosisDia;
            const dosisMaximaDia = dosisMaximaPorAdministracion * cantidadDosisDia;

            console.log("Dosis minima por administración: ",dosisMinimaPorAdministracion,"mg");
            console.log("Dosis máxima por administración: ",dosisMaximaPorAdministracion,"mg");
            
            if (dosis < dosisMinimaPorAdministracion){
                resultado.estado = "inferior al rango";
                console.log(
                    "LA DOSIS ESTA POR DEBAJO DEL RANGO RECOMENDADO",
                    "Dosis indicada:",
                    dosis,
                    "Según el intervalo indicado: ",
                    cantidadDosisDia,
                    "Dosis por día, administradas cada: ",
                    intervaloDosis.valor,
                    intervaloDosis.unidad,
                    "Dosis total indicada por día: ",
                    dosisIndicada,
                    "Rango minimo recomendado según peso del paciente: ",
                    dosisMinimaPorAdministracion,
                    "Rango minimo recomendado según bibliografia: ",
                    dosisMinimaDosis,"mg/kg/dosis",
                )
                
            } else if (dosis > dosisMaximaPorAdministracion){
                resultado.estado = "superior al rango";
                console.log(
                    "LA DOSIS ES SUPERIOR DEL RANGO RECOMENDADO",
                    "Dosis indicada:",
                    dosis,
                     "Según el intervalo indicado: ",
                    cantidadDosisDia,
                    "Dosis por día, administradas cada: ",
                    intervaloDosis.valor,
                    intervaloDosis.unidad,
                    "Dosis total indicada por día: ",
                    dosisIndicada,
                    "Rango máxima recomendado según peso del paciente: ",
                    dosisMaximaPorAdministracion,
                    "Rango máxima recomendado según bibliografia: ",
                    dosisMaximaDosis,"mg/kg/día",
                )
            } else{
                resultado.estado = "dentro del rango";
                console.log(
                    "LA DOSIS ESTA DENTRO DEL RANGO RECOMENDADO",
                    "Dosis indicada:",
                    dosis,
                    "Según el intervalo indicado: ",
                    cantidadDosisDia,
                    "Dosis por día, administradas cada: ",
                    intervaloDosis.valor,
                    intervaloDosis.unidad,
                    "Dosis total indicada por día: ",
                    dosisIndicada,
                    "Rango minimo recomendado según peso del paciente: ",
                    dosisMinimaPorAdministracion,
                    "Rango minimo recomendado según bibliografia: ",
                    dosisMinimaDosis,"mg/kg/día",
                    "Rango máxima recomendado según peso del paciente: ",
                    dosisMaximaPorAdministracion,
                    "Rango máxima recomendado según bibliografia: ",
                    dosisMaximaDosis,"mg/kg/día",
                )
            }
            //GUARDAMOS LOS RESULTADOS
            resultado = {

                        tipo: dosisPosologia.tipo,
                        unidad: dosisPosologia.unidad,

                        dosisIndicada: dosis,
                        unidadDosisIndicada: unidadFarmacologica,

                        dosisIndicadaDia: dosisIndicadaDia,
                        unidadDosisIndicadaDia: unidadFarmacologica + "/día.",

                        // RANGO SEGÚN BIBLIOGRAFÍA

                        dosisRecomendadaMin: dosisPosologia.valorMin,
                        dosisRecomendadaMax: dosisPosologia.valorMax,
                        unidadDosisRecomendada: dosisPosologia.unidad,


                        // RANGO SEGÚN PESO - POR DÍA

                        dosisRecomendadaDiaMin: dosisMinimaDia,
                        dosisRecomendadaDiaMax: dosisMaximaDia,
                        unidadDosisRecomendadaDia: unidadFarmacologica + "/día.",


                        // RANGO SEGÚN PESO - POR ADMINISTRACIÓN

                        dosisRecomendadaAdministracionMin: dosisMinimaPorAdministracion,
                        dosisRecomendadaAdministracionMax: dosisMaximaPorAdministracion,
                        unidadDosisRecomendadaAdministracion: unidadFarmacologica,

                        cantidadDosisDia: cantidadDosisDia,

                        intervalo: intervaloDosis.valor,
                        unidadIntervalo: intervaloDosis.unidad,

                        estado: resultado.estado
                    };
        }
        else if (dosisPosologia.unidad === "mg/día"){
            console.log("UNIDAD: mg/día");
            const dosisMinimaDiaria = dosisPosologia.valorMin;
            const dosisMaximaDiaria = dosisPosologia.valorMax;
            const cantidadDosisDia = 24 / intervaloDosis.valor;

            const dosisMinimaPorAdministracion = dosisMinimaDiaria / cantidadDosisDia;
            const dosisMaximaPorAdministracion = dosisMaximaDiaria / cantidadDosisDia;
            console.log("Dosis minima recomendad segun posología: ",dosisMinimaDiaria,"mg/día");
            console.log("Dosis máxima recomendada según posología: ",dosisMaximaDiaria,"mg/día");
            console.log("Cantidad de dosis por día: ",cantidadDosisDia);
            console.log("Dosis minima por administracion: ",dosisMinimaPorAdministracion,"mg");
            console.log("Dosis máxima por administración: ",dosisMaximaPorAdministracion,"mg");
            
            const dosisIndicadaDia = dosis * cantidadDosisDia;

            if (dosisIndicadaDia < dosisMinimaDiaria){
                resultado.estado = "inferior al rango",
                console.log("LA DOSIS ESTA POR DEBAJO DEL RANGO RECOMENDADO.",
                    "Dosis indicada:",
                    dosis,
                    "Según el intervalo indicado: ",
                    cantidadDosisDia,
                    "Dosis por día, administradas cada: ",
                    intervaloDosis.valor,
                    intervaloDosis.unidad,
                    "Dosis total indicada por día: ",
                    dosisIndicadaDia,
                    "Rango maximo recomendado: ",
                    dosisMaximaDiaria,
                )
                   
            }
            else if( dosisIndicadaDia > dosisMaximaDiaria){
                resultado.estado = "superior al rango",
                console.log("LA DOSIS SUPERA EL RANGO RECOMENDADO.",
                    "Dosis indicada:",
                    dosis,
                    "Según el intervalo indicado: ",
                    cantidadDosisDia,
                    "Dosis por día, administradas cada: ",
                    intervaloDosis.valor,
                    intervaloDosis.unidad,
                    "Dosis total indicada por día: ",
                    dosisIndicadaDia,
                    "Rango maximo recomendado: ",
                    dosisMaximaDiaria,
                )
            }
            else{
                    resultado.estado = "dentro del rango"
                    console.log("LA DOSIS ESTA DENTRO DEL RANGO RECOMENDADO.",
                    "Dosis indicada:",
                    dosis,
                    "Según el intervalo indicado: ",
                    cantidadDosisDia,
                    "Dosis por día, administradas cada: ",
                    intervaloDosis.valor,
                    intervaloDosis.unidad,
                    "Dosis total indicada por día: ",
                    dosisIndicadaDia,
                    "Rango minino recomendado: ",
                    dosisMinimaDiaria,
                    "Rango maximo recomendado: ",
                    dosisMaximaDiaria,
                )
            }
            //GUARDAMOS LOS RESULTADOS
            resultado = {

                        tipo: dosisPosologia.tipo,
                        unidad: dosisPosologia.unidad,

                        dosisIndicada: dosis,
                        unidadDosisIndicada: unidadFarmacologica,

                        dosisIndicadaDia: dosisIndicadaDia,
                        unidadDosisIndicadaDia: unidadFarmacologica + "/día.",

                        // RANGO SEGÚN BIBLIOGRAFÍA

                        dosisRecomendadaMin: dosisPosologia.valorMin,
                        dosisRecomendadaMax: dosisPosologia.valorMax,
                        unidadDosisRecomendada: dosisPosologia.unidad,


                        // RANGO SEGÚN PESO - POR DÍA

                        dosisRecomendadaDiaMin: dosisMinimaDiaria,
                        dosisRecomendadaDiaMax: dosisMaximaDiaria,
                        unidadDosisRecomendadaDia: unidadFarmacologica + "/día.",


                        // RANGO SEGÚN PESO - POR ADMINISTRACIÓN

                        dosisRecomendadaAdministracionMin: dosisMinimaPorAdministracion,
                        dosisRecomendadaAdministracionMax: dosisMaximaPorAdministracion,
                        unidadDosisRecomendadaAdministracion: unidadFarmacologica,

                        cantidadDosisDia: cantidadDosisDia,

                        intervalo: intervaloDosis.valor,
                        unidadIntervalo: intervaloDosis.unidad,

                        estado: resultado.estado
                    };
        }
        
        else if (dosisPosologia.unidad === "mg"){
        console.log("UNIDAD: mg");

        // RANGO RECOMENDADO POR ADMINISTRACIÓN
        const dosisMinimaPorAdministracion = dosisPosologia.valorMin;
        const dosisMaximaPorAdministracion = dosisPosologia.valorMax;

        // CANTIDAD DE ADMINISTRACIONES SEGÚN EL INTERVALO SELECCIONADO
        const cantidadDosisDia = intervaloDosis?.valor > 0
            ? 24 / intervaloDosis.valor
            : null;

        // RANGO DIARIO SEGÚN EL INTERVALO SELECCIONADO
        const dosisMinimaDia = cantidadDosisDia !== null
            ? dosisMinimaPorAdministracion * cantidadDosisDia
            : null;

        const dosisMaximaDia = cantidadDosisDia !== null
            ? dosisMaximaPorAdministracion * cantidadDosisDia
            : null;

        console.log(
            "Dosis mínima por administración:",
            dosisMinimaPorAdministracion,
            "mg"
        );

        console.log(
            "Dosis máxima por administración:",
            dosisMaximaPorAdministracion,
            "mg"
        );

        console.log("Cantidad de dosis por día:", cantidadDosisDia);
        console.log("Dosis mínima diaria:", dosisMinimaDia, "mg/día");
        console.log("Dosis máxima diaria:", dosisMaximaDia, "mg/día");

        // COMPARACIÓN DE LA DOSIS INDICADA CON EL RANGO
        if (dosis < dosisMinimaPorAdministracion) {
            resultado.estado = "inferior al rango";

        } else if (dosis > dosisMaximaPorAdministracion) {
            resultado.estado = "superior al rango";

        } else {
            resultado.estado = "dentro del rango";
        }

        // GUARDAMOS LOS RESULTADOS
        resultado = {
            tipo: dosisPosologia.tipo,
            unidad: dosisPosologia.unidad,

            dosisIndicada: dosis,
            unidadDosisIndicada: unidadFarmacologica,

            dosisRecomendadaMin: dosisPosologia.valorMin,
            dosisRecomendadaMax: dosisPosologia.valorMax,
            unidadDosisRecomendada: dosisPosologia.unidad,

            dosisRecomendadaAdministracionMin:
                dosisMinimaPorAdministracion,
            dosisRecomendadaAdministracionMax:
                dosisMaximaPorAdministracion,
            unidadDosisRecomendadaAdministracion:
                unidadFarmacologica,

            dosisRecomendadaDiaMin: dosisMinimaDia,
            dosisRecomendadaDiaMax: dosisMaximaDia,
            unidadDosisRecomendadaDia: unidadFarmacologica + "/día",

            cantidadDosisDia: cantidadDosisDia,

            intervalo: intervaloDosis?.valor ?? null,
            unidadIntervalo: intervaloDosis?.unidad ?? "",

            estado: resultado.estado
        };
        }

        }
    //-------------------------------------------
    //DOSIS MÁXIMA
    //-------------------------------------------
    else if(dosisPosologia.tipo === "Maxima"){
        console.log("Tipo de dosis: MÁXIMA");
        
        if(dosisPosologia.unidad === "mg/kg/día"){
            console.log("UNIDAD: mg/kg/día");
            const cantidadDosisDia = 24 / intervaloDosis.valor;

            const dosisIndicadaDia = dosis * cantidadDosisDia;

            const dosisIndicadaKgDia = dosisIndicadaDia / peso;
            const dosisMaximaDia = dosisPosologia.valor * peso;
            const dosisMaximaAdministracion = dosisMaximaDia / cantidadDosisDia;

            console.log("Dosis indicada en kg/día calculada según peso: ",dosisIndicadaKgDia,"mg/kg/día");
            console.log("Dosis máxima recomendada por guía farmacologica: ",dosisPosologia.valor,"mg/kg/día.");

            if (dosisIndicadaKgDia > dosisPosologia.valor){
                resultado.estado = "supera el máximo"
                console.log(
                    "LA DOSIS SUPERA LA DOSIS MÁXIMA.",
                    "Dosis indicada: ",
                    dosisIndicadaKgDia.toFixed(2),
                    "mg/kg/día.",
                    "Según el intervalo indicado: ",
                    cantidadDosisDia,
                    "dosis por día, administradas cada: ",
                    intervaloDosis.valor,
                    intervaloDosis.unidad + ".",
                    "Dosis máxima recomendada: ",
                    dosisPosologia.valor,
                    "mg/kg/día."
                );
            } else{
                resultado.estado = "no supera el máximo"
                console.log(
                    "LA DOSIS ESTÁ DENTRO DEL MÁXIMO PERMITIDO.",
                    "Dosis indicada: ",
                    dosisIndicadaKgDia.toFixed(2),
                    "mg/kg/día.",
                    "Según el intervalo indicado: ",
                    cantidadDosisDia,
                    "dosis por día, administradas cada: ",
                    intervaloDosis.valor,
                    intervaloDosis.unidad + ".",
                    "Dosis máxima recomendada: ",
                    dosisPosologia.valor,
                    "mg/kg/día."
                )
            }
            //GUARDAMOS LOS DATOS//
            resultado = {
                tipo: dosisPosologia.tipo,
                unidad:dosisPosologia.unidad,

                dosisIndicada: dosis,
                unidadDosisIndicada: unidadFarmacologica,

                dosisIndicadaDia: dosisIndicadaDia,
                unidadaDosisIndicadaDia: unidadFarmacologica + "/día.",

                dosisIndicadaKgDia: dosisIndicadaKgDia,
                unidadDosisIndicadaKgDia: unidadFarmacologica + "/kg/día.",

                dosisRecomendadaMax: dosisPosologia.valor,
                unidadDosisRecomendada: dosisPosologia.unidad,

                dosisRecomendadaDiaMax: dosisMaximaDia,
                unidadDosisRecomendadaDia: unidadFarmacologica + "/día.",

                dosisRecomendadaAdministracion: dosisMaximaAdministracion,
                unidadDosisRecomendadaAdministracion: unidadFarmacologica,

                cantidadDosisDia: cantidadDosisDia,

                intervalo: intervaloDosis.valor,
                unidadIntervalo: intervaloDosis.unidad,

                estado: resultado.estado
            }
            
        }
        else if (dosisPosologia.unidad === "mg/kg/dosis"){
            console.log("UNIDAD: mg/kg/dosis")
            const dosisIndicadaKgDosis = dosis / peso;
            const dosisMaximaAdministracion = dosisPosologia.valor * peso;
            const cantidadDosisDia = 24 / intervaloDosis.valor;
            const dosisIndicadaDia = dosis * cantidadDosisDia;
            const dosisMaximaDia = dosisMaximaAdministracion * cantidadDosisDia;
            console.log("Dosis indicada en kg/dosis calculada según el peso del paciente: ",dosisIndicadaKgDosis,"mg");
            console.log("Dosis máxima recomendada por guía farmacologica: ",dosisPosologia.valor,"mg/dosis.")
            if (dosisIndicadaKgDosis > dosisPosologia.valor){
                resultado.estado = "supera el máximo";
                console.log(
                    "LA DOSIS SUPERA LA MÁXIMA PERMITIDA",
                    "Dosis indicada: ",
                    dosisIndicadaKgDosis.toFixed(2),
                    "mg/kg/dosis.",
                    "Dosis máxima recomendada: ",
                    dosisPosologia.valor,
                    "mg/kg/dosis."
                )
            } else {
                resultado.estado = "no supera el máximo";
                console.log(
                    "LA DOSIS ESTA DENTRO DEL MÁXIMO PERMITIDO",
                    "Dosis indicada: ",
                    dosisIndicadaKgDosis.toFixed(2),
                    "mg/kg/dosis.",
                    "Dosis máxima recomendada: ",
                    dosisPosologia.valor,
                    "mg/kg/dosis."
                )
            }
            //GUARDAMOS LOS DATOS//
            resultado = {
                tipo: dosisPosologia.tipo,
                unidad:dosisPosologia.unidad,

                dosisIndicada: dosis,
                unidadDosisIndicada: unidadFarmacologica,

                dosisIndicadaDia: dosisIndicadaDia,
                unidadaDosisIndicadaDia: unidadFarmacologica + "/día.",

                dosisIndicadaKgDosis: dosisIndicadaKgDosis,
                unidadDosisIndicadaKgDia: unidadFarmacologica + "/kg/día.",

                dosisRecomendadaMax: dosisPosologia.valor,
                unidadDosisRecomendada: dosisPosologia.unidad,

                dosisRecomendadaDiaMax: dosisMaximaDia,
                unidadDosisRecomendadaDia: unidadFarmacologica + "/día.",

                dosisRecomendadaAdministracion: dosisMaximaAdministracion,
                unidadDosisRecomendadaAdministracion: unidadFarmacologica,

                cantidadDosisDia: cantidadDosisDia,

                intervalo: intervaloDosis.valor,
                unidadIntervalo: intervaloDosis.unidad,

                estado: resultado.estado
            }
        }
        else if (dosisPosologia.unidad === "mg/día"){
            console.log("UNIDAD: mg/día")
            const dosisMaximaDia = dosisPosologia.valor;
            const cantidadDosisDia = 24 / intervaloDosis.valor;
            const dosisIndicadaDia = dosis * cantidadDosisDia;
            const dosisMaximaAdministracion = dosisMaximaDia / cantidadDosisDia;
            console.log("Dosis indicada por día: ",dosisIndicadaDia,"mg");
            console.log("Dosis máxima recomendada por guía farmacologica: ",dosisPosologia.valor,"mg/día.")
            if(dosisIndicadaDia > dosisPosologia.valor){
                resultado.estado ="supera el máximo"
                console.log(
                    "LA DOSIS SUPERA LA DOSIS MÁXIMA",
                    "Dosis indicada: ",
                    dosisIndicadaDia.toFixed(2),
                    "mg/día.",
                    "Según el intervalo indicado: ",
                    cantidadDosisDia,
                    "dosis por día, administradas cada: ",
                    intervaloDosis.valor,
                    intervaloDosis.unidad + ".",
                    "Dosis máxima recomendada: ",
                    dosisPosologia.valor,
                    "mg/día."
                )
            } else{
                resultado.estado = "no supera el máximo"
                console.log(
                    "LA DOSIS ESTA DENTRO DEL MÁXIMO PERMITIDO",
                    "Dosis indicada: ",
                    dosisIndicadaDia.toFixed(2),
                    "mg/kg/día.",
                    "Según el intervalo indicado: ",
                    cantidadDosisDia,
                    "dosis por día, administradas cada: ",
                    intervaloDosis.valor,
                    intervaloDosis.unidad + ".",
                    "Dosis máxima recomendada: ",
                    dosisPosologia.valor,
                    "mg/kg/día."
                )
            }
            //GUARDAMOS LOS DATOS//
            resultado = {
                tipo: dosisPosologia.tipo,
                unidad:dosisPosologia.unidad,

                dosisIndicada: dosis,
                unidadDosisIndicada: unidadFarmacologica,

                dosisIndicadaDia: dosisIndicadaDia,
                unidadaDosisIndicadaDia: unidadFarmacologica + "/día.",

                dosisRecomendadaMax: dosisPosologia.valor,
                unidadDosisRecomendada: dosisPosologia.unidad,

                dosisRecomendadaDiaMax: dosisMaximaDia,
                unidadDosisRecomendadaDia: unidadFarmacologica + "/día.",

                dosisRecomendadaAdministracion: dosisMaximaAdministracion,
                unidadDosisRecomendadaAdministracion: unidadFarmacologica,

                cantidadDosisDia: cantidadDosisDia,

                intervalo: intervaloDosis.valor,
                unidadIntervalo: intervaloDosis.unidad,

                estado: resultado.estado
            }
        }
        else if (dosisPosologia.unidad === "mg"){
            console.log("UNIDAD: mg")
            const dosisMaximaMg = dosis;
            const dosisMaximaAdministracion = dosisPosologia.valor;
            const cantidadDosisDia = 24 / intervaloDosis.valor;
            const dosisIndicadaDia = dosis * cantidadDosisDia;
            console.log("Dosis indicada por mg: ",dosisMaximaMg,"mg.");
            console.log("Dosis máxima recomendada por guía farmacologica: ",dosisPosologia.valor,"mg.");

            if (dosisMaximaMg > dosisPosologia.valor){
                resultado.estado = "supera el máximo"
                console.log(
                    "LA DOSIS SUPERA LA MÁXIMA PERMITIDA",
                    "Dosis indicada: ",
                    dosisMaximaMg.toFixed(2),
                    "mg.",
                    "Dosis máxima recomendada: ",
                    dosisPosologia.valor,
                    "mg."
                )
            } else {
                resultado.estado = "no supera el máximo"
                console.log(
                    "LA DOSIS ESTA DENTRO DEL MÁXIMO PERMITIDO",
                    "Dosis indicada: ",
                    dosisMaximaMg.toFixed(2),
                    "mg.",
                    "Dosis máxima recomendada: ",
                    dosisPosologia.valor,
                    "mg."
                )
            }
            //GUARDAMOS LOS DATOS//
            resultado = {
                tipo: dosisPosologia.tipo,
                unidad:dosisPosologia.unidad,

                dosisIndicada: dosis,
                unidadDosisIndicada: unidadFarmacologica,

                dosisIndicadaDia: dosisIndicadaDia,
                unidadaDosisIndicadaDia: unidadFarmacologica + "/día.",

                dosisRecomendadaMax: dosisPosologia.valor,
                unidadDosisRecomendada: dosisPosologia.unidad,

                dosisRecomendadaDiaMax: dosisMaximaMg,
                unidadDosisRecomendadaDia: unidadFarmacologica + "/día.",

                dosisRecomendadaAdministracion: dosisMaximaAdministracion,
                unidadDosisRecomendadaAdministracion: unidadFarmacologica,

                cantidadDosisDia: cantidadDosisDia,

                intervalo: intervaloDosis.valor,
                unidadIntervalo: intervaloDosis.unidad,

                estado: resultado.estado
            }
        }
    } 
    //-------------------------------------------
    //TIPO DESCONOCIDO
    //-------------------------------------------
    else{
        console.log("Tipo de dosis no reconocido", dosisPosologia.tipo);
    }

    return resultado;

}

//FUNCION PARA MOSTRAR LOS DATOS DE LOS CALCULOS DE RECONSTITUCION Y USO DE FRASCOS
    export function mostrarReconstitucion(volumenAdministrar){
        const reconstitucionFinal = volumenAdministrar.toFixed(2);
        console.log("MUESTRO CANTIDAD DE DOSIS EN: ",reconstitucionFinal,"ML")
        return reconstitucionFinal;
        const reconstitucion = reconstitucionFinal;
        mostrarFichaFarmaco(reconstitucion);
        
    }

        

    export function mostrarFrascos(cantidadFrascos){
        const frascosFinal = cantidadFrascos
        return frascosFinal
    }




export function cargarModalidades(medicamento) {
    const selector = document.getElementById("modalidad");
    const selectorVia = document.getElementById("viaAdministracion");
    const selectorAcceso = document.getElementById("accesoAdministracion");
    selectorAcceso.disabled = true;

    // Limpiamos los selectores
    selector.innerHTML = '<option value="">Seleccionar tipo</option>';
    selectorVia.innerHTML = '<option value="">Seleccionar vía</option>';
    selectorAcceso.innerHTML = '<option value="">Seleccionar acceso</option>';

    const administraciones = medicamento.administracion;

    if (!administraciones) {
        console.warn("El medicamento no tiene administración configurada.");
        return;
    }

    // Detectamos la estructura nueva o la anterior
    const estructuraNueva = Object.values(administraciones).some(
        via => via && via.formas
    );

    if (estructuraNueva) {
        // Nueva estructura: EV, IM, VO, SC...
        for (const via in administraciones) {
            const datosVia = administraciones[via];

            if (!datosVia.formas || Object.keys(datosVia.formas).length === 0) {
                continue;
            }

            const opcion = document.createElement("option");
            opcion.value = via;
            opcion.textContent = via;
            selectorVia.appendChild(opcion);
        }

        // Las modalidades se cargarán al elegir la vía.
        selector.disabled = true;
    } else {
        // Estructura anterior: IVD, IVI, IM...
        const nombresModalidades = {
            IVD: "IVD - Intravenosa directa o push",
            IVI: "IVI - Intravenosa intermitente",
            infusionContinua: "Infusión continua",
            IM: "IM - Intramuscular"
        };

        for (const clave in administraciones) {
            const opcion = document.createElement("option");
            opcion.value = clave;
            opcion.textContent = nombresModalidades[clave] || clave;
            selector.appendChild(opcion);
        }

        selector.disabled = false;
    }
}


export function cargarModalidadesPorVia(medicamento, viaSeleccionada) {
    const selectorModalidad = document.getElementById("modalidad");
    const selectorAcceso = document.getElementById("accesoAdministracion");

    selectorModalidad.innerHTML =
        '<option value="">Seleccionar modalidad</option>';

    selectorAcceso.innerHTML =
        '<option value="">Seleccionar acceso</option>';

    selectorModalidad.disabled = true;
    selectorAcceso.disabled = true;

    if (!medicamento?.administracion || !viaSeleccionada) {
        return;
    }

    const datosVia = medicamento.administracion[viaSeleccionada];

    if (!datosVia?.formas) {
        return;
    }

    const nombresModalidades = {
        IVD: "IVD - Intravenosa directa o push",
        IVI: "IVI - Intravenosa intermitente",
        infusionContinua: "IVC - Infusión continua",
        IM: "IM - Intramuscular",
        VO: "VO - Vía oral",
        SC: "SC - Subcutánea"
    };

    for (const clave in datosVia.formas) {
        const datosForma = datosVia.formas[clave];

        if (!datosForma) continue;

        const opcion = document.createElement("option");
        opcion.value = clave;
        opcion.textContent =
            datosForma.titulo || nombresModalidades[clave] || clave;

        selectorModalidad.appendChild(opcion);
    }

    selectorModalidad.disabled =
        selectorModalidad.options.length <= 1;
}





function actualizarDatosTarjeta() {
    if (!medicamentoSeleccionado) return;

    const via = document.getElementById("viaAdministracion").value;
    const selectorModalidad = document.getElementById("modalidad");
    const selectorAcceso = document.getElementById("accesoAdministracion");
    const selectorPresentacion = document.getElementById("presentacionMedicamento");

    const modalidad = selectorModalidad.value
        ? selectorModalidad.selectedOptions[0].textContent
        : "";

    const acceso = selectorAcceso.value;

    const presentacionElegida = selectorPresentacion.value
        ? medicamentoSeleccionado.presentaciones?.[selectorPresentacion.value]
        : null;

    // Guardar la selección actual antes de reconstruir la ficha.
    const selectorPatologiaActual =
        document.getElementById("selectorPatologia");

    const selectorIndicacionActual =
        document.getElementById("selectorIndicacion");

    if (selectorPatologiaActual) {
        patologiaPosologiaSeleccionada = selectorPatologiaActual.value;
    }

    if (selectorIndicacionActual) {
        indicacionPosologiaSeleccionada = selectorIndicacionActual.value;
    }

    mostrarDatosIngresados(
        medicamentoSeleccionado.nombre,
        dosisIndicadaSeleccionada,
        pesoSeleccionado,
        via,
        modalidad,
        acceso,
        presentacionElegida?.nombre || ""
    );

    // Volver a dibujar las posologías en el contenedor recién creado.
    if (resultadosPosologiaActuales) {
        mostrarPosologias(
            resultadosPosologiaActuales,
            claseCategoriaPosologiaActual,
            patologiaPosologiaSeleccionada,
            indicacionPosologiaSeleccionada
        );
    }

    if (presentacionElegida) {
        const dosisActual = Number(dosisIndicadaSeleccionada);

        if (Number.isFinite(dosisActual) && dosisActual > 0) {
            const clavePresentacion = selectorPresentacion.value;
            const datosPresentacion = presentacionElegida;
            let volumenAdministrar;

            if (via === "IM") {
                const formaIM =
                    medicamentoSeleccionado.administracion?.IM?.formas?.IM;

                const concentracionIM =
                    Number(formaIM?.miligramos) / Number(formaIM?.volumen);

                if (
                    (datosPresentacion.viasPermitidas || []).includes("IM") &&
                    Number.isFinite(concentracionIM) &&
                    concentracionIM > 0
                ) {
                    volumenAdministrar = dosisActual / concentracionIM;
                }
            } else if (datosPresentacion.cantidad > 0) {
                // Para las demás vías se conserva la fórmula existente.
                volumenAdministrar =
                    (dosisActual * datosPresentacion.volumen) /
                    datosPresentacion.cantidad;
            }

            if (Number.isFinite(volumenAdministrar)) {
                const resultadoAnterior =
                    resultadosReconstitucionSeleccionados[clavePresentacion] || {};

                const estabilidad =
                    medicamentoSeleccionado.estabilidad?.[
                        datosPresentacion.estabilidad
                    ];

                const fechaPreparacion =
                    resultadoAnterior.fechaPreparacion || new Date();

                const esIVC =
                    via === "EV" &&
                    selectorModalidad.value === "infusionContinua";

                const fechaInicioPerfus = esIVC
                    ? (resultadoAnterior.fechaInicioPerfus || new Date())
                    : resultadoAnterior.fechaInicioPerfus;

                resultadosReconstitucionSeleccionados[clavePresentacion] = {
                    ...resultadoAnterior,
                    volumenAdministrar: volumenAdministrar.toFixed(2),
                    cantidadFrascos: Math.ceil(
                        dosisActual / datosPresentacion.cantidad
                    ),
                    fechaPreparacion,
                    fechaDesecho: calcularFechaDesecho(
                        fechaPreparacion,
                        estabilidad
                    ),
                    ...(fechaInicioPerfus ? { fechaInicioPerfus } : {}),
                    estabilidad
                };
            } else if (via === "IM") {
                // Evita reutilizar un volumen calculado para otra vía.
                delete resultadosReconstitucionSeleccionados[
                    clavePresentacion
                ];
            }
        }
    }

    mostrarFichaFarmaco(
        medicamentoSeleccionado,
        resultadosReconstitucionSeleccionados,
        dosisIndicadaSeleccionada,
        medicamentoSeleccionado.unidadFarmacologica,
        selectorPresentacion.value,
        selectorAcceso.value
    );

    console.log(
    "RESULTADOS DE POSOLOGÍA GUARDADOS:",
    resultadosPosologiaActuales
);

console.log(
    "CONTENEDOR NUEVO:",
    document.querySelector(".contenedor-posologias")
);

if (resultadosPosologiaActuales) {
    mostrarPosologias(
        resultadosPosologiaActuales,
        claseCategoriaPosologiaActual,
        patologiaPosologiaSeleccionada,
        indicacionPosologiaSeleccionada
    );
} else {
    console.error("No hay resultados de posología guardados.");
}
}




function cargarAccesosPorModalidad(medicamento, viaSeleccionada, modalidadSeleccionada) {
    const selectorAcceso = document.getElementById("accesoAdministracion");

    selectorAcceso.innerHTML =
        '<option value="">Seleccionar acceso disponible</option>';

    selectorAcceso.disabled = true;

    if (!medicamento?.administracion || !viaSeleccionada || !modalidadSeleccionada) {
        return;
    }

    const datosVia = medicamento.administracion[viaSeleccionada];
    const datosForma = datosVia?.formas?.[modalidadSeleccionada];

    if (!datosForma) return;

    let accesos = [];

    if (viaSeleccionada === "EV") {
        // Infusión continua: leer los accesos configurados.
        if (modalidadSeleccionada === "infusionContinua") {
            accesos = datosForma.acceso?.permitidos || [];
        } else {
            // IVD / IVI: mostrar los accesos definidos en cada concentración.
            const dosis = datosForma.dosis || {};

            for (const tipo of ["recomendada", "maxima"]) {
                const acceso = dosis[tipo]?.acceso;

                if (acceso && !accesos.includes(acceso)) {
                    accesos.push(acceso);
                }
            }
        }
    } else {
        // Las vías no venosas no son accesos venosos.
        const nombresVia = {
            IM: "Intramuscular",
            VO: "Oral",
            SC: "Subcutáneo"
        };

        if (nombresVia[viaSeleccionada]) {
            accesos = [nombresVia[viaSeleccionada]];
        }
    }

    for (const acceso of accesos) {
        const opcion = document.createElement("option");
        opcion.value = acceso;
        opcion.textContent = acceso;
        selectorAcceso.appendChild(opcion);
    }

    selectorAcceso.disabled = accesos.length === 0;
}


export function cargarPresentaciones(medicamento, viaSeleccionada) {
    const selector = document.getElementById("presentacionMedicamento");

    selector.innerHTML =
        '<option value="">Seleccionar presentación</option>';

    selector.disabled = true;

    const presentaciones = medicamento?.presentaciones;

    if (!presentaciones || !viaSeleccionada) {
        return;
    }

    for (const [clave, datos] of Object.entries(presentaciones)) {
        if (!datos) continue;

        const vias = datos.viasPermitidas || [];

        if (!vias.includes(viaSeleccionada)) {
            continue;
        }

        const opcion = document.createElement("option");
        opcion.value = clave;
        opcion.textContent = datos.nombre || clave;

        selector.appendChild(opcion);
    }

    selector.disabled = selector.options.length <= 1;
}



document.getElementById("viaAdministracion")
    .addEventListener("change", function () {
        cargarModalidadesPorVia(
            medicamentoSeleccionado,
            this.value
        );

        cargarPresentaciones(
            medicamentoSeleccionado,
            this.value
        );

        actualizarDatosTarjeta();
    });


document.getElementById("modalidad")
    .addEventListener("change", function () {
        cargarAccesosPorModalidad(
            medicamentoSeleccionado,
            document.getElementById("viaAdministracion").value,
            this.value
        );

        actualizarDatosTarjeta();
    });

document.getElementById("accesoAdministracion")
    .addEventListener("change", actualizarDatosTarjeta);



document.getElementById("presentacionMedicamento")
    .addEventListener("change", function () {
        if (!medicamentoSeleccionado) return;

        const presentacionElegida = this.value
            ? medicamentoSeleccionado.presentaciones[this.value]
            : null;

        actualizarDatosTarjeta(
            presentacionElegida?.nombre || ""
        );

        console.log("Presentación seleccionada:", presentacionElegida);
    });
