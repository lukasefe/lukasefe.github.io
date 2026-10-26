/*
 * ============================================================
 * ENFERMERÍA CONECTADA
 * Calculadora de Dilución de Medicamentos
 * ============================================================
 *
 * Archivo: prueba.js
 * Lenguaje: JavaScript
 * Tipo: Archivo de pruebas y desarrollo
 *
 * Descripción:
 * Archivo destinado a la realización de pruebas de funcionamiento
 * de las estructuras de datos y funciones utilizadas por la
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
 * Este archivo forma parte del código fuente de desarrollo
 * del proyecto Enfermería Conectada.
 *
 * ============================================================
 */

import {medicamentos, fechaRecambio} from "./Medicamentos.js";
import { calculo, Dilucion } from "./funciones.js";

const dosis = 300;
const medicamento = medicamentos.Adrenalina;

const volumen = calculo(medicamento, dosis);
const resultado = Dilucion(medicamento, dosis);

console.log("Medicamento: ", medicamento.nombre);
console.log("Reconstituyente: ", medicamentos.Adrenalina.presentaciones.presentacion1.reconstituyente);
console.log("Dosis: ", dosis,"mg.");
console.log("Volumen a retirar FA1000: ", volumen.presentacion1,"ml.");
console.log("Volumen a retirar FA500: ", volumen.presentacion2,"ml.");

console.log( resultado.ivdMin);
console.log("dilucion minima por IVD: ", resultado.ivdMin);
console.log("dilucion maxima por IVD: ", resultado.ivdMax);
console.log("dilucion minima por IVI: ", resultado.iviMin);
console.log("dilucion maxima por IVI: ", resultado.iviMax);
console.log("dilucion minima por IM: ", resultado.IM);
