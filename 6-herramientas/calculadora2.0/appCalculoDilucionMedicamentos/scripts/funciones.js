/*DATOS DEL PROYECTO
 * ============================================================
 * ENFERMERÍA CONECTADA
 * Calculadora de Dilución de Medicamentos
 * ============================================================
 *
 * Archivo: funciones.js
 * Lenguaje: JavaScript
 *
 * Descripción:
 * Conjunto de funciones destinadas al procesamiento de datos
 * y realización de cálculos matemáticos utilizados por la
 * calculadora de medicamentos.
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

import medicamentos from "./Medicamentos.js";

const medicamento = medicamentos.Aciclovir;
const dosis = 600;

// FUNCIÓN DE CÁLCULO DEL VOLUMEN A ADMINISTRAR
//
// Recibe:
//   - medicamento: objeto que contiene los datos de la presentación
//     del medicamento seleccionado.
//   - dosis: dosis indicada que se desea administrar, expresada en mg.
//
// Devuelve:
//   - administrar: volumen en ml que se debe retirar de la presentación
//     reconstituida para administrar la dosis indicada.
export function calculo(medicamento, dosis) {
    // Creamos un objeto vacío donde vamos a guardar
    // el resultado del cálculo correspondiente a cada presentación.
    //
    // Ejemplo:
    // resultado = {
    //     presentacion1: 6,
    //     presentacion2: 6
    // }
    const resultado = {};
    
     // Recorremos todas las presentaciones disponibles
    // dentro del medicamento.
    //
    // Esto permite que la función sea adaptable a medicamentos
    // que tengan una, dos o más presentaciones diferentes.

    for (const nombre in medicamento.presentaciones) {

        // Obtenemos los datos de la presentación actual.
        //
        // Por ejemplo:
        // miligramos: 1000
        // volumenFinal: 10
        const presentacion = medicamento.presentaciones[nombre];

        // Calculamos el volumen que corresponde administrar.
        //
        // Fórmula:
        // dosis indicada × volumen final de la presentación
        //
        // Ejemplo:
        // 600 mg × 10 ml = 6000
        const concentracion = dosis * presentacion.volumen;

        // Dividimos el resultado anterior por la cantidad total
        // de miligramos que contiene la presentación.
        //
        // Ejemplo:
        // 6000 ÷ 1000 mg = 6 ml
        //
        // Resultado:
        // se deben retirar 6 ml de la presentación reconstituida.
        const dosisIndicada = concentracion / presentacion.cantidad;

         // Guardamos el volumen calculado utilizando como clave
        // el nombre de la presentación.
        //
        // Ejemplo:
        // resultado.presentacion1 = 6
        resultado[nombre] = dosisIndicada;
    }

    // Devolvemos un objeto con los resultados de todas
    // las presentaciones disponibles del medicamento.
    return resultado;
}




// FUNCIÓN DE CÁLCULO DE DILUCIONES
// Recibe:
//   - medicamento: objeto con toda la información del medicamento seleccionado.
//   - dosis: dosis indicada en mg.
//
// Devuelve un objeto con los volúmenes necesarios para las diferentes
// vías de administración disponibles en la ficha del medicamento.
export function dilucion(medicamento, dosis){
    // ---------------------------------------------------------
    // INTRAVENOSA DIRECTA (IVD)
    // ---------------------------------------------------------

    // Calcula el volumen máximo de dilución permitido/recomendado
    // según la concentración mínima indicada para IVD.
    function ivdMin(medicamento, dosis){
        const concentracionMinima = Number(medicamento.administracion?.IVD?.min);
        return Number.isFinite(concentracionMinima) && concentracionMinima > 0
            ? dosis / concentracionMinima
            : null;
    };
    // Calcula el volumen mínimo de dilución
    // según la concentración máxima indicada para IVD.
    function ivdMax (medicamento, dosis){
        const concentracionMaxima = Number(medicamento.administracion?.IVD?.max);
        return Number.isFinite(concentracionMaxima) && concentracionMaxima > 0
            ? dosis / concentracionMaxima
            : null;
    };

    // ---------------------------------------------------------
    // INTRAVENOSA INTERMITENTE (IVI)
    // ---------------------------------------------------------

    // Calcula el volumen de dilución correspondiente
    // a la concentración mínima indicada para IVI.
    function iviMin(medicamento, dosis){
        const concentracionMinima = Number(medicamento.administracion?.IVI?.min);
        return Number.isFinite(concentracionMinima) && concentracionMinima > 0
            ? dosis / concentracionMinima
            : null;
    };
    // Calcula el volumen de dilución correspondiente
    // a la concentración máxima indicada para IVI.
    function iviMax(medicamento, dosis){
        const concentracionMaxima = Number(medicamento.administracion?.IVI?.max);
        return Number.isFinite(concentracionMaxima) && concentracionMaxima > 0
            ? dosis / concentracionMaxima
            : null;
    };
    // ---------------------------------------------------------
    // INTRAMUSCULAR (IM)
    // ---------------------------------------------------------

    // Calcula el volumen a administrar por vía IM
    // utilizando la concentración expresada en mg/ml.
    function Im(medicamento, dosis){
        const formaIM = medicamento.administracion?.IM?.formas?.IM;
        const miligramos = Number(formaIM?.miligramos);
        const volumen = Number(formaIM?.volumen);

        if (!Number.isFinite(miligramos) || miligramos <= 0 ||
            !Number.isFinite(volumen) || volumen <= 0) {
            return null;
        }

        // miligramos / volumen = concentración en mg/ml.
        const concentracion = miligramos / volumen;
        return dosis / concentracion;
    };
    // ---------------------------------------------------------
    // RESULTADOS
    // ---------------------------------------------------------
    return{
    ivdMin:ivdMin(medicamento, dosis),
    ivdMax:ivdMax(medicamento, dosis),
    iviMin:iviMin(medicamento, dosis),
    iviMax:iviMax(medicamento, dosis),
    IM:Im(medicamento, dosis)
    // Devuelve todos los cálculos realizados en un único objeto.
    // De esta manera, desde appCalculadora.js podemos acceder
    // individualmente a cada resultado:
    //
    // resultado.ivdMin
    // resultado.ivdMax
    // resultado.iviMin
    // resultado.iviMax
    // resultado.IM
    //
   }
}

console.log("medicamento: " ,medicamento.nombre);
console.log("Tipo: ", medicamento.tipo);
console.log("Tipo: ", medicamento.accion);
console.log("Tipo: ", medicamento.presentaciones);
console.log("retirar del frasco: ", calculo(medicamento, dosis),"ml.");
console.log("Estabilidad: ",medicamento.estabilidad);


//FUNCION FECHA DE DESECHO

export function calcularFechaDesecho(fechaPrepracion, estabilidad) {
    if (!estabilidad || !estabilidad.duracion) {
        return null;
    }

    const duracion = estabilidad.duracion;
    const fechaAmbiente = new Date(fechaPrepracion);
    let fechaRefrigeracion = null;

    // TEMPERATURA AMBIENTE
    if (duracion.temperaturaAmbiente !== undefined &&
        duracion.temperaturaAmbiente !== null) {

        if (duracion.unidad === "hs") {
            fechaAmbiente.setHours(
                fechaAmbiente.getHours() + duracion.temperaturaAmbiente
            );
        } else if (duracion.unidad === "días") {
            fechaAmbiente.setDate(
                fechaAmbiente.getDate() + duracion.temperaturaAmbiente
            );
        }
    }

    // TEMPERATURA REFRIGERADA
    if (duracion.temperaturaRefrigerada !== undefined &&
        duracion.temperaturaRefrigerada !== null) {

        fechaRefrigeracion = new Date(fechaPrepracion);

        if (duracion.unidad === "hs") {
            fechaRefrigeracion.setHours(
                fechaRefrigeracion.getHours() + duracion.temperaturaRefrigerada
            );
        } else if (duracion.unidad === "días") {
            fechaRefrigeracion.setDate(
                fechaRefrigeracion.getDate() + duracion.temperaturaRefrigerada
            );
        }
    }

    return {
        ambiente: fechaAmbiente,
        refrigerada: fechaRefrigeracion
    };
}


export function formatearNumero(numero){
    if (numero === undefined || numero === null || numero === ""){
        return "No definido."
    }
    const valor = Number(numero);
    if(isNaN(valor)){
        return "No definido."
    }
    return Number(numero.toFixed(2));
}

//funcion para convertir unidades
export function convertirUnidad(valor, unidadOrigen, unidadDestino){
    if (unidadOrigen === unidadDestino){
        return valor;
    }
    //convertimos todo primero a mg
    let valorMg;

    switch (unidadOrigen){

        case "g":
            valorMg = valor * 1000;
            break;
        case "mg":
            valorMg = valor;
            break
        case "mcg":
            valorMg = valor / 1000;
            break
        default:
            console.error("unidad de origen no reconocida", unidadOrigen);
            return null;
    }

    //desde mg convertimos a la undiad de destino
    switch (unidadDestino){
        case "g":
            return valorMg / 1000;
        case "mg":
            return valorMg;
        case "mcg":
            return valorMg * 1000;
        default:
            console.error("unidad de destino no reconocida: ", unidadDestino);
            return null;
    }
}