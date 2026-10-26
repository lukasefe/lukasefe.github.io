
import { calculo, formatearNumero, convertirUnidad } from "./funciones.js";
import {
    mostrarReconstitucion,
    mostrarFrascos,
    cargarModalidades,
    cargarModalidadesPorVia,
    analizarPosologia
} from "./appCalculadora.js";
import medicamentos from "./Medicamentos.js";



export function mostrarDatosIngresados(farmaco, dosis, peso, via, modalidad, acceso, presentacion) {
    const contenedor = document.getElementById("datosIngresados");

    contenedor.innerHTML =`
    <div class="tarjeta-datos-ingresados">
            <h2 class="titulo-datos-ingresados">
                Datos ingresados
            </h2>

            <div class="contenedor-datos-ingresados">

                <div class="dato-ingresado">
                    <div class="icono-dato">💊</div>

                    <span class="etiqueta-dato">
                        Medicamento
                    </span>

                    <span class="valor-dato">
                        ${farmaco}
                    </span>
                </div>


                <div class="dato-ingresado">
                    <div class="icono-dato">🧪</div>

                    <span class="etiqueta-dato">
                        Dosis indicada
                    </span>

                    <span class="valor-dato">
                        ${dosis} mg
                    </span>
                </div>


                <div class="dato-ingresado">
                    <div class="icono-dato">⚖️</div>

                    <span class="etiqueta-dato">
                        Peso del paciente
                    </span>

                    <span class="valor-dato">
                        ${peso} kg
                    </span>
                </div>
                ${via ? `
                    <div class="dato-ingresado">
                        <div class="icono-dato">💉</div>
                        <span class="etiqueta-dato">Vía de administración</span>
                        <span class="valor-dato">${via}</span>
                    </div>
                ` : ""}

                ${modalidad ? `
                    <div class="dato-ingresado">
                        <div class="icono-dato">💧</div>
                        <span class="etiqueta-dato">Tipo de administración</span>
                        <span class="valor-dato">${modalidad}</span>
                    </div>
                ` : ""}

                ${acceso ? `
                    <div class="dato-ingresado">
                        <div class="icono-dato">🩸</div>
                        <span class="etiqueta-dato">Acceso de administración</span>
                        <span class="valor-dato">${acceso}</span>
                    </div>
                ` : ""}

                                    
                    ${presentacion ? `
                        <div class="dato-ingresado">
                            <div class="icono-dato">📦</div>

                            <span class="etiqueta-dato">
                                Presentación
                            </span>

                            <span class="valor-dato">
                                ${presentacion}
                            </span>
                        </div>
                    ` : ""}

            </div>

        </div>
    `;
}
export function mostrarFichaFarmaco(
    medicamento,
    mostrarResultadosReconstitucion,
    dosis,
    unidadFarmacologica,
    presentacionSeleccionada,
    accesoSeleccionado
) {

    const ficha = document.getElementById("fichaFarmacos");


    //LEEMOS LA CATEGORIA DEL MEDICAMENTO(PARA CONECTAR EL COLOR DE LA FICHA)
    const categoria = medicamento.categoria;
    console.log("CATEGORIA DEL MEDICAMENTO: ", categoria)
    const claseCategoriaMedicamento = claseCategoria(categoria);
    console.log("CATEGORIA DEL MEDICAMENTO PARA LA FUNCION: ", claseCategoriaMedicamento)
    //evalua si hay presentaciones y validamos
    const tienePresentacion = medicamento.presentaciones && Object.keys(medicamento.presentaciones).length > 0;

    let htmlPresentaciones = "";

    const viaSeleccionada = document.getElementById("viaAdministracion")?.value;
    const formaIM = medicamento.administracion?.IM?.formas?.IM;

    const presentacionesMostrar = presentacionSeleccionada
    ? { [presentacionSeleccionada]: medicamento.presentaciones[presentacionSeleccionada] }
    : {};

    for (const nombre in presentacionesMostrar){
        
        const presentacion = presentacionesMostrar[nombre];
        const concentracion = presentacion.cantidad+presentacion.unidadCantidad+".";
        const reconstituyente = presentacion.reconstituyente+".";
        const descripcion = presentacion.descripcion;
        const icono = iconoPresentacion(presentacion);
        const tipo = medicamento.presentaciones[nombre].tipo;
        const esViaOral = presentacion.viasPermitidas?.includes("VO") && viaSeleccionada !== "IM";
        const resultado = mostrarResultadosReconstitucion?.[nombre];

        if (!resultado) {
            console.warn("No hay resultados para la presentación:", nombre);
            continue;
        }

        const volumenMedicamento = resultado.volumenAdministrar;
        const htmlEstabilidad = mostrarEstabilidad(resultado.estabilidad);
        console.log("VOLUMEN MEDICAMENTO PARA IVD:", volumenMedicamento);

        
        if (esViaOral) {
            htmlPresentaciones += `
                <div class="contenedor-presentacion ${claseCategoriaMedicamento}">
                    <h4 class="presentacion ${claseCategoriaMedicamento}">
                        ${presentacion.tipo}
                    </h4>
                </div>

                <div class="bloque">
                    <div class="presentacion-info">
                        <h5 class="concentracion ${claseCategoriaMedicamento}">
                            Concentración final:
                        </h5>
                        <p>${presentacion.cantidad} ${presentacion.unidadCantidad}/${presentacion.volumen} ${presentacion.unidadVolumen}</p>
                    </div>

                    <div class="presentacion-info">
                        <h5 class="concentracion ${claseCategoriaMedicamento}">
                            Reconstituyente:
                        </h5>
                        <p>${presentacion.reconstituyente}</p>
                    </div>

                    <div class="descripcion-info">
                        <h5 class="concentracion ${claseCategoriaMedicamento}">
                            Preparación:
                        </h5>
                        <p>${presentacion.descripcion}</p>
                    </div>

                    <div class="contenedor-calculo ${claseCategoriaMedicamento}">
                        <h5 class="concentracion ${claseCategoriaMedicamento}">
                            Según dosis indicada:
                        </h5>

                        <p>Retirar del frasco:</p>
                        <p class="resultado-reconstitucion ${claseCategoriaMedicamento}">
                            ${mostrarResultadosReconstitucion?.[nombre]?.volumenAdministrar ?? "No disponible"} ml
                        </p>
                    </div>

                    

                    ${mostrarEstabilidad(
                        medicamento.estabilidad?.[
                            presentacion.estabilidad
                                .normalize("NFD")
                                .replace(/[\u0300-\u036f]/g, "")
                        ] ??
                        medicamento.estabilidad?.suspenciónReconstituida
                    )}

                    <div class="rotulo-preparacion ${claseCategoriaMedicamento}">
                        <h5 class="concentracion h5-t ${claseCategoriaMedicamento}">
                            Rotular:
                        </h5>

                        
                        ${
                            fechaDisponible(resultado.fechaDesecho?.ambiente)
                                ? `
                                    <div class="rotulo-organizacion">
                                        <p class="p-rotulo ${claseCategoriaMedicamento}">
                                            Desechar a temperatura ambiente:
                                        </p>
                                        <p class="p-rotulo ${claseCategoriaMedicamento} p-resultado">
                                            ${formatearFecha(resultado.fechaDesecho.ambiente)} hs.
                                        </p>
                                    </div>
                                `
                                : ""
                        }

                    </div>

                </div>
            `;
            continue;
        }


        if (viaSeleccionada === "IM") {
            const concentracionIM =
                Number(formaIM?.miligramos) / Number(formaIM?.volumen);

            htmlPresentaciones += `
                <div class="contenedor-presentacion ${claseCategoriaMedicamento}">
                    <h4 class="presentacion ${claseCategoriaMedicamento}">
                        ${presentacion.nombre || presentacion.tipo}
                    </h4>
                </div>

                <div class="bloque">
                    <div class="presentacion-info">
                        <h5 class="concentracion ${claseCategoriaMedicamento}">Presentación:</h5>
                        <p>${presentacion.cantidad} ${presentacion.unidadCantidad}</p>
                    </div>

                    <div class="presentacion-info">
                        <h5 class="concentracion ${claseCategoriaMedicamento}">Preparación intramuscular:</h5>
                        <p>${formaIM?.diluyente || "No configurado"}</p>
                    </div>

                    <div class="presentacion-info">
                        <h5 class="concentracion ${claseCategoriaMedicamento}">Concentración IM configurada:</h5>
                        <p>${formaIM?.concentracion || (Number.isFinite(concentracionIM) ? `${concentracionIM} mg/ml` : "No configurada")}</p>
                    </div>

                    <div class="contenedor-calculo ${claseCategoriaMedicamento}">
                        <h5 class="concentracion ${claseCategoriaMedicamento}">Según dosis indicada:</h5>
                        <p>Volumen a administrar por vía IM:</p>
                        <p class="resultado-reconstitucion ${claseCategoriaMedicamento}">${resultado.volumenAdministrar} ml</p>
                        <h5 class="concentracion ${claseCategoriaMedicamento}">Cantidad de frascos:</h5>
                        <p class="resultado-reconstitucion ${claseCategoriaMedicamento}">${resultado.cantidadFrascos} ${presentacion.tipo}</p>
                    </div>

                    ${htmlEstabilidad}

                    <div class="rotulo-preparacion ${claseCategoriaMedicamento}">
                        <h5 class="concentracion h5-t ${claseCategoriaMedicamento}">Rotular:</h5>
                        <div class="rotulo-organizacion">
                            <p class="p-rotulo ${claseCategoriaMedicamento}">Fecha de preparación:</p>
                            <p class="p-rotulo ${claseCategoriaMedicamento} p-resultado">${formatearFecha(resultado.fechaPreparacion)} hs.</p>
                        </div>
                        
                            ${
                                fechaDisponible(resultado.fechaDesecho?.ambiente)
                                    ? `
                                        <div class="rotulo-organizacion">
                                            <p class="p-rotulo ${claseCategoriaMedicamento}">
                                                Desechar a temperatura ambiente:
                                            </p>
                                            <p class="p-rotulo ${claseCategoriaMedicamento} p-resultado">
                                                ${formatearFecha(resultado.fechaDesecho.ambiente)} hs.
                                            </p>
                                        </div>
                                    `
                                    : ""
                            }

                    </div>
                </div>
            `;
            continue;
        }

        console.log("PRESENTACIÓN ORAL:", presentacion);
        console.log("CLAVE DE ESTABILIDAD:", presentacion.estabilidad);
        console.log("ESTABILIDADES DEL MEDICAMENTO:", medicamento.estabilidad);
        console.log(
            "ESTABILIDAD ENCONTRADA:",
            medicamento.estabilidad?.[presentacion.estabilidad]
);

         htmlPresentaciones += `<div class = "contenedor-presentacion ${claseCategoriaMedicamento}">
                                    <h4 class="presentacion ${claseCategoriaMedicamento}">${presentacion.tipo}</h4><img class="iconoFarmaco" src=${icono} alt="frasco ampolla">
                                </div>
                                <div class="bloque">
                                    <div class="presentacion-info">
                                        <h5 class="concentracion ${claseCategoriaMedicamento}">Concentración:</h5><p>${concentracion}</p>
                                    </div>
                                    <div class="presentacion-info">
                                        <h5 class="concentracion ${claseCategoriaMedicamento}">Reconstituyente:</h5><h5>${reconstituyente}</h5>
                                    </div>
                                    <div class="descripcion-info">
                                        <h5 class="concentracion ${claseCategoriaMedicamento}">Descripción:</h5>
                                        <p>${descripcion}</p>
                                    </div>

                                    <div class="contenedor-calculo ${claseCategoriaMedicamento}">
                                    <h5 class="concentracion ${claseCategoriaMedicamento}">Según dosis indicada:</h5>
                                    <p>Retirar del frasco: </p><p class="resultado-reconstitucion ${claseCategoriaMedicamento}">${resultado.volumenAdministrar} ml.</p>
                                
                                    <h5 class="concentracion h5-t ${claseCategoriaMedicamento}">
                                        Cantidad de frascos a utilizar:
                                    </h5>
                                    <p>Se debe usar:</p>
                                    <p class="resultado-reconstitucion ${claseCategoriaMedicamento}">
                                        ${resultado.cantidadFrascos} ${
                                            pluralizarPresentacion(resultado.cantidadFrascos, tipo)
                                        }.
                                    </p>


                                    ${htmlEstabilidad}

                                    <h5 class="concentracion h5-t ${claseCategoriaMedicamento}">Rotular:</h5>
                                    <div class="rotulo-preparacion ${claseCategoriaMedicamento}">
                                        ${
                                            presentacion.reconstituyente !== "No se reconstituye"
                                                ? `
                                                    <div class="rotulo-organizacion">
                                                        <p class="p-rotulo ${claseCategoriaMedicamento}">Reconstitución:</p>
                                                        <p class="p-rotulo ${claseCategoriaMedicamento} p-resultado">${presentacion.volumen} ${presentacion.unidadVolumen || "ml"}.</p>
                                                    </div>
                                                `
                                                : ""
                                        }
                                        <div class="rotulo-organizacion">
                                            <p class="p-rotulo ${claseCategoriaMedicamento}">Fecha de preparación: </p>
                                            <p class="p-rotulo ${claseCategoriaMedicamento} p-resultado">${formatearFecha(resultado.fechaPreparacion)} hs.</p>
                                        </div>
                                        
                                            ${
                                                fechaDisponible(resultado.fechaDesecho?.ambiente)
                                                    ? `
                                                        <div class="rotulo-organizacion">
                                                            <p class="p-rotulo ${claseCategoriaMedicamento}">
                                                                Desechar a T° ambiente:
                                                            </p>
                                                            <p class="p-rotulo ${claseCategoriaMedicamento} p-resultado">
                                                                ${formatearFecha(resultado.fechaDesecho.ambiente)} hs.
                                                            </p>
                                                        </div>
                                                    `
                                                    : ""
                                            }

                                            ${
                                                fechaDisponible(resultado.fechaDesecho?.refrigerada)
                                                    ? `
                                                        <div class="rotulo-organizacion">
                                                            <p class="p-rotulo ${claseCategoriaMedicamento}">
                                                                Desechar a T° refrigerada:
                                                            </p>
                                                            <p class="p-rotulo ${claseCategoriaMedicamento} p-resultado">
                                                                ${formatearFecha(resultado.fechaDesecho.refrigerada)} hs.
                                                            </p>
                                                        </div>
                                                    `
                                                    : ""
                                            }
                                    </div>

                                
                                
                                

                                
                            </div>

                            </div>`;

        
    }

    
const observaciones = medicamento.observaciones || {};

const categoriasObservaciones = [
    { clave: "generales", titulo: "Generales" },
    { clave: "precauciones", titulo: "Precauciones" },
    { clave: "alertas", titulo: "Alertas" },
    { clave: "contraindicaciones", titulo: "Contraindicaciones" },
    { clave: "criticas", titulo: "Críticas" }
];

const tarjetasObservaciones = categoriasObservaciones
    .filter(categoria =>
        Array.isArray(observaciones[categoria.clave]) &&
        observaciones[categoria.clave].length > 0
    )
    .map(categoria => `
        <div class="tarjeta-observacion observacion-${categoria.clave}">
            <h4 class="concentracion ${claseCategoriaMedicamento}">
                ${categoria.titulo}
            </h4>
            <ul>
                ${observaciones[categoria.clave]
                    .map(texto => `<li>${texto}</li>`)
                    .join("")}
            </ul>
        </div>
    `)
    .join("");

const htmlObservaciones = tarjetasObservaciones
    ? `
        <div class="posologias-contenedor observaciones-contenedor">
            <h3 class="titulo-presentaciones ${claseCategoriaMedicamento}">
                Observaciones
            </h3>
            <div class="contenedor-observaciones">
                ${tarjetasObservaciones}
            </div>
        </div>
    `
    : "";

// EFECTOS ADVERSOS
const efectosAdversos = Array.isArray(medicamento.efectosAdversos)
    ? medicamento.efectosAdversos
    : [];

const htmlEfectosAdversos = `
    <div class="posologias-contenedor efectos-adversos-contenedor">
        <h3 class="titulo-presentaciones ${claseCategoriaMedicamento}">
            <span class="icono-efectos-adversos" aria-hidden="true">
                <i class="fa-solid fa-shield-heart"></i>
            </span>
            Efectos adversos
        </h3>

        <button
            type="button"
            class="boton-efectos-adversos"
            aria-expanded="false"
            aria-controls="listaEfectosAdversos">
            <i class="fa-regular fa-eye" aria-hidden="true"></i>
            <span>Ver efectos adversos</span>
        </button>

        <div
            id="listaEfectosAdversos"
            class="contenido-efectos-adversos"
            hidden>
            ${
                efectosAdversos.length > 0
                    ? `
                        <ul class="lista-efectos-adversos">
                            ${efectosAdversos.map(efecto => `
                                <li>${efecto}</li>
                            `).join("")}
                        </ul>
                    `
                    : `
                        <p class="efectos-adversos-sin-datos">
                            No hay efectos adversos registrados para este medicamento.
                        </p>
                    `
            }
        </div>
    </div>
`;


    //FUNCION CON QUE LA VALORAMOS SEGÚN EL TIPO DE MEDICAMENTO QUE ICONO MOSTRAMOS
    function iconoPresentacion(presentacion){
        if (presentacion.tipo === "Frasco/Ampolla"){
        const icono = "../ASSETS/ICONOS/frasco_ampolla2.png";
        return icono

        } if (presentacion.tipo === "Ampolla (Solución Inyectable)"){
            const icono = "../ASSETS/ICONOS/ampolla.png";
            return icono
        } else {
            console.log("no hay tipo")
        }
    }

    function formatearFecha(fecha) {
            if(!fecha || isNaN(new Date(fecha).getTime())) {
                return "Fecha no disponible"; // Retorna un mensaje si la fecha es inválida
        }
        return new Date(fecha).toLocaleDateString('es-AR', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            hourCycle: "h23"
        });
    }

    
function fechaDisponible(fecha) {
    if (!fecha || fecha === "Fecha no disponible") {
        return false;
    }

    return !Number.isNaN(new Date(fecha).getTime());
}

function pluralizarPresentacion(cantidad, tipo) {
    const singular = String(tipo || "unidad").trim();

    if (Number(cantidad) === 1) {
        return singular;
    }

    // Plurales frecuentes en presentaciones farmacéuticas.
    const plurales = {
        "Ampolla (Solución Inyectable)": "Ampollas (Solución Inyectable)",
        "Ampolla": "Ampollas",
        "Frasco/Ampolla": "Frascos/Ampolla",
        "Frasco ampolla": "Frascos ampolla",
        "Frasco": "Frascos",
        "Vial": "Viales",
        "Comprimido": "Comprimidos",
        "Cápsula": "Cápsulas",
        "Jeringa": "Jeringas",
        "Sobre": "Sobres",
        "Gota": "Gotas"
    };

    return plurales[singular] || `${singular}s`;
}

    
function mostrarEstabilidad(estabilidad) {
    if (!estabilidad) {
        return "";
    }

    let html = "";

    // No mostrar el encabezado si no hay identificador.
    if (estabilidad.identificador) {
        html += `
            <h5 class="concentracion h5-t ${claseCategoriaMedicamento}">
                ${estabilidad.identificador}
            </h5>
        `;
    }

    if (estabilidad.duracion) {
        const duracion = estabilidad.duracion;

        if (
            duracion.rango &&
            typeof duracion.rango === "object" &&
            duracion.rango.valorMin != null &&
            duracion.rango.valorMax != null
        ) {
            html += `
                <p>Duración:</p>
                <p class="resultado-reconstitucion ${claseCategoriaMedicamento}">
                    ${duracion.rango.valorMin} - ${duracion.rango.valorMax} ${duracion.unidad || ""}
                </p>
            `;
        } else if (
            duracion.fija != null &&
            duracion.fija !== "" &&
            duracion.fija !== "fija"
        ) {
            html += `
                <p>Duración:</p>
                <p class="resultado-reconstitucion ${claseCategoriaMedicamento}">
                    ${duracion.fija} ${duracion.unidad || ""}
                </p>
            `;
        }

        if (duracion.temperaturaAmbiente != null) {
            html += `
                <p>Temperatura ambiente:</p>
                <p class="resultado-reconstitucion ${claseCategoriaMedicamento}">
                    ${duracion.temperaturaAmbiente} ${duracion.unidad || ""}
                </p>
            `;
        }

        if (duracion.temperaturaRefrigerada != null) {
            html += `
                <p>Temperatura refrigerada:</p>
                <p class="resultado-reconstitucion ${claseCategoriaMedicamento}">
                    ${duracion.temperaturaRefrigerada} ${duracion.unidad || ""}
                </p>
            `;
        }
    }

    if (estabilidad.cuidado) {
        html += `
            <p>Cuidado:</p>
            <p class="resultado-reconstitucion ${claseCategoriaMedicamento}">
                ${estabilidad.cuidado}
            </p>
        `;
    }

    if (estabilidad.texto1) {
        html += `
            <p class="resultado-reconstitucion ${claseCategoriaMedicamento}">
                ${estabilidad.texto1}
            </p>
        `;
    }

    return html;
}


    const formasEV = medicamento.administracion?.EV?.formas;
    const formasIM = medicamento.administracion?.IM?.formas;
    const formaVO = medicamento.administracion?.VO?.formas?.VO;

    let htmlAdministracion = "";
    let htmlAdministracionIVC = "";
    let htmlAdministracionIvi = "";
    let htmlAdministracionIM = "";
    let htmlAdministracionVO = "";

   

    const modalidadSeleccionada =
        document.getElementById("modalidad")?.value;

    if (
        viaSeleccionada === "IM" &&
        modalidadSeleccionada === "IM" &&
        formasIM?.IM
    ) {
        htmlAdministracionIM = mostrarIM(
            formasIM.IM,
            dosis,
            unidadFarmacologica,
            mostrarResultadosReconstitucion?.[presentacionSeleccionada],
            claseCategoriaMedicamento
        );
    }

if (modalidadSeleccionada === "IVD" && formasEV?.IVD) {
    htmlAdministracion = mostrarIVD(
        formasEV,
        dosis,
        unidadFarmacologica,
        mostrarResultadosReconstitucion,
        claseCategoriaMedicamento,
        presentacionSeleccionada,
        accesoSeleccionado
    );
}

if (modalidadSeleccionada === "IVI" && formasEV?.IVI) {
    htmlAdministracionIvi = mostrarIVI(
        formasEV,
        dosis,
        unidadFarmacologica,
        mostrarResultadosReconstitucion,
        claseCategoriaMedicamento,
        presentacionSeleccionada,
        accesoSeleccionado
    );
}

if (
        viaSeleccionada === "VO" &&
        modalidadSeleccionada === "VO" &&
        formaVO
    ) {
        htmlAdministracionVO = mostrarVO(
            formaVO,
            dosis,
            unidadFarmacologica,
            claseCategoriaMedicamento
        );
    }

if (
    modalidadSeleccionada === "infusionContinua" &&
    viaSeleccionada === "EV" &&
    formasEV?.infusionContinua
) {
    htmlAdministracionIVC = mostrarIVC(
        formasEV,
        dosis,
        unidadFarmacologica,
        mostrarResultadosReconstitucion,
        claseCategoriaMedicamento,
        presentacionSeleccionada,
        accesoSeleccionado,
        medicamento.nombre
    );
}


        

    //ESTRUCTURA PINCIPAL DEL ESQUEMA DE LA FICHA MEDICA
    ficha.innerHTML = `
                <div id="fichaFarmacos" class="ficha-principal">
                <div class="ficha-completa ${claseCategoriaMedicamento}">
                    <div class="ficha-individual ${claseCategoriaMedicamento}">
                        <div class="contenedor-titulo"><h2 class="titulo-farmaco ${claseCategoriaMedicamento}}">${medicamento.nombre}</h2></div>
                        <div class="contenedor-info">
                            <div class="espacio"><h4 class="info-categoria ${claseCategoriaMedicamento}">Tipo</h4><span class="info">${medicamento.tipo}</span></div>
                            <div class="espacio"><h4 class="info-categoria ${claseCategoriaMedicamento}">Acción</h4><span class="info">${medicamento.accion}</span></div>
                        </div>
                        
                        <div class="fila-presentacion-administracion">

                            <div class="presentaciones-contenedor">
                                <h3 class="titulo-presentaciones ${claseCategoriaMedicamento}">
                                    Presentaciones
                                </h3>
                                ${tienePresentacion ? htmlPresentaciones : ""}
                            </div>

                            <!-- TARJETA DE ADMINISTRACIÓN -->
                            <div class="administracion-contenedor">
                                <h3 class="titulo-presentaciones ${claseCategoriaMedicamento}">
                                    Administración
                                </h3>

                                ${htmlAdministracion}
                                ${htmlAdministracionIvi}
                                ${htmlAdministracionIM}
                                ${htmlAdministracionVO}
                                ${htmlAdministracionIVC}
                            </div>

                        </div>

                        <!-- TARJETA DE OBSERVACIONES -->
                            ${htmlObservaciones}
                        <!--TARJETA DE POSOLOGIAS-->
                        <div class="posologias-contenedor">
                        <h3 class="titulo-presentaciones ${claseCategoriaMedicamento}">Posología</h3>
                        <div class="contenedor-posologias"></div>
                        </div>

                        <!-- TARJETA DE COMPATIBILIDAD -->
                        <div class="posologias-contenedor compatibilidad-contenedor">
                            <h3 class="titulo-presentaciones ${claseCategoriaMedicamento}">
                                Compatibilidad de medicamentos
                            </h3>

                            <p class="compatibilidad-descripcion">
                                Seleccioná la modalidad para consultar la compatibilidad.
                            </p>

                            <div class="compatibilidad-modalidades">
                                <button
                                    type="button"
                                    class="compatibilidad-boton activo"
                                    data-modalidad-compatibilidad="conexionY"
                                    aria-pressed="true">
                                    Conexión en Y
                                </button>

                                <button
                                    type="button"
                                    class="compatibilidad-boton"
                                    data-modalidad-compatibilidad="mismaJeringa"
                                    aria-pressed="false">
                                    Misma jeringa
                                </button>

                                <button
                                    type="button"
                                    class="compatibilidad-boton"
                                    data-modalidad-compatibilidad="mismaBolsa"
                                    aria-pressed="false">
                                    Misma bolsa
                                </button>
                            </div>

                            <div class="compatibilidad-contenido">
                                <label
                                    class="compatibilidad-etiqueta"
                                    for="buscarMedicamentoCompatibilidad">
                                    Medicamento a comparar
                                </label>

                                <input
                                    type="search"
                                    id="buscarMedicamentoCompatibilidad"
                                    class="compatibilidad-buscador"
                                    placeholder="Buscar otro medicamento..."
                                    autocomplete="off">

                                <div
                                    class="compatibilidad-resultado"
                                    id="resultadoCompatibilidad"
                                    aria-live="polite">
                                    <p class="compatibilidad-sin-datos">
                                        Seleccioná un segundo medicamento para consultar
                                        su compatibilidad.
                                    </p>
                                </div>
                            </div>

                            <div class="compatibilidad-leyenda">
                                <h4 class="titu_referencias">Referencias</h4>

                                <div class="compatibilidad-categoria compatible">
                                    <span class="compatibilidad-indicador"></span>
                                    <span>Compatible</span>
                                </div>

                                <div class="compatibilidad-categoria incompatible">
                                    <span class="compatibilidad-indicador"></span>
                                    <span>Incompatible</span>
                                </div>

                                <div class="compatibilidad-categoria no-probada">
                                    <span class="compatibilidad-indicador"></span>
                                    <span>No probada</span>
                                </div>

                                <div class="compatibilidad-categoria variable">
                                    <span class="compatibilidad-indicador"></span>
                                    <span>Variable según concentración</span>
                                </div>

                                <div class="compatibilidad-categoria incierta">
                                    <span class="compatibilidad-indicador"></span>
                                    <span>Combinación incierta</span>
                                </div>
                            </div>
                        </div>

                        <!-- TARJETA DE EFECTOS ADVERSOS -->
                        ${htmlEfectosAdversos}

                    </div>
                    
                    
                </div>

            </div>
                    
                    
                </div>
        
    `;

    // MOSTRAR U OCULTAR EFECTOS ADVERSOS
        const botonEfectosAdversos = ficha.querySelector(
            ".boton-efectos-adversos"
        );

        const contenidoEfectosAdversos = ficha.querySelector(
            ".contenido-efectos-adversos"
        );

        if (botonEfectosAdversos && contenidoEfectosAdversos) {
            botonEfectosAdversos.addEventListener("click", () => {
                const expandido =
                    botonEfectosAdversos.getAttribute("aria-expanded") === "true";

                contenidoEfectosAdversos.hidden = expandido;

                botonEfectosAdversos.setAttribute(
                    "aria-expanded",
                    String(!expandido)
                );

                botonEfectosAdversos.querySelector("span").textContent =
                    expandido
                        ? "Ver efectos adversos"
                        : "Ocultar efectos adversos";
            });
        }

    // Conectar los deslizadores con los calculos
        ficha.querySelectorAll(
            '.control-concentracion input[type="range"]'
        ).forEach(slider => {
            slider.addEventListener("input", () => {
                const concentracion = Number(slider.value);
                const modalidad = slider.dataset.modalidad;
                const tipo = slider.dataset.tipo;
                const unidad = slider.dataset.unidad;

                const valorConcentracion = ficha.querySelector(
                    `#valor-${modalidad}-${tipo}`
                );

                if (valorConcentracion) {
                    valorConcentracion.textContent =
                        `${concentracion} ${unidad}`;
                }

                const formas = medicamento.administracion?.EV?.formas;
                const administracionActual = formas?.[modalidad];
                const dosisActual = administracionActual?.dosis?.[tipo];

                if (!dosisActual) return;

                const unidadConcentracion =
                    dosisActual.unidad.split("/")[0];

                const dosisConvertida = convertirUnidad(
                    dosis,
                    unidadFarmacologica,
                    unidadConcentracion
                );

                const volumenMedicamento = Number(
                    mostrarResultadosReconstitucion?.[presentacionSeleccionada]
                        ?.volumenAdministrar
                );

                const volumenRequerido = dosisConvertida / concentracion;

                let volumenDiluyente;
                let volumenTotal;

                if (dosisActual.tipoDilucion === "llevarA") {
                    volumenTotal = volumenRequerido;
                    volumenDiluyente = volumenTotal - volumenMedicamento;
                } else if (dosisActual.tipoDilucion === "diluirEn") {
                    volumenDiluyente = volumenRequerido;
                    volumenTotal = volumenMedicamento + volumenDiluyente;
                } else {
                    return;
                }

                const resultadoConcentracion = ficha.querySelector(
                    `#resultado-concentracion-${modalidad}-${tipo}`
                );

                if (resultadoConcentracion) {
                    resultadoConcentracion.textContent =
                        `${concentracion} ${unidad}`;
                }

                const resultadoDiluyente = ficha.querySelector(
                    `#resultado-diluyente-${modalidad}-${tipo}`
                );

                if (resultadoDiluyente) {
                    resultadoDiluyente.textContent =
                        `${Number(volumenDiluyente.toFixed(2))} ml de ${administracionActual.diluyente.abreviatura}`;
                }

                const resultadoTotal = ficha.querySelector(
                    `#resultado-total-${modalidad}-${tipo}`
                );

                if (resultadoTotal) {
                    resultadoTotal.textContent =
                        `${Number(volumenTotal.toFixed(2))} ml`;
                }
                
            });
            
        });

        
    // ==========================================
    // COMPATIBILIDAD ENTRE MEDICAMENTOS
    // ==========================================

    const buscadorCompatibilidad = ficha.querySelector(
        "#buscarMedicamentoCompatibilidad"
    );

    const resultadoCompatibilidad = ficha.querySelector(
        "#resultadoCompatibilidad"
    );

    const botonesModalidad = ficha.querySelectorAll(
        "[data-modalidad-compatibilidad]"
    );

    let modalidadCompatibilidad = "conexionY";
    let categoriaSeleccionada = null;
    let nombreSeleccionado = null;

    const categoriasCompatibilidad = {
    compatible: {
        titulo: "Compatible",
        clase: "compatible"
    },
    combinacionVariable: {
        titulo: "Variable según concentración",
        clase: "variable"
    },
    noProbada: {
        titulo: "No probada",
        clase: "no-probada"
    },
    noCompatible: {
        titulo: "Incompatible",
        clase: "incompatible"
    },
    combinacionIncierta: {
        titulo: "Combinación incierta",
        clase: "incierta"
    }
};

    function normalizarNombreCompatibilidad(nombre) {
        return String(nombre || "")
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .toLowerCase()
            .trim();
    }

    function obtenerDatosCompatibilidad() {
        return medicamento?.compatibilidad?.[modalidadCompatibilidad] || {};
    }

    function obtenerMedicamentosDeLaModalidad() {
        const datos = obtenerDatosCompatibilidad();
        const encontrados = [];

        Object.entries(categoriasCompatibilidad).forEach(
            ([categoria, informacion]) => {
                const lista = datos[categoria];

                if (!Array.isArray(lista)) return;

                lista.forEach(nombre => {
                    if (
                        typeof nombre !== "string" ||
                        !nombre.trim()
                    ) {
                        return;
                    }

                    encontrados.push({
                        nombre: nombre.trim(),
                        categoria,
                        titulo: informacion.titulo,
                        clase: informacion.clase
                    });
                });
            }
        );

        return encontrados;
    }

    function mostrarResultadoCompatibilidad() {
        if (!resultadoCompatibilidad) return;

        resultadoCompatibilidad.className =
        "compatibilidad-resultado compatibilidad-categoria";

        if (!nombreSeleccionado) {
            resultadoCompatibilidad.textContent =
                "Buscá y seleccioná un medicamento para consultar su compatibilidad.";
            return;
        }

        const informacion = obtenerMedicamentosDeLaModalidad().find(
            item =>
                normalizarNombreCompatibilidad(item.nombre) ===
                normalizarNombreCompatibilidad(nombreSeleccionado)
        );

        if (!informacion) {
            resultadoCompatibilidad.textContent =
                "Compatibilidad no registrada para esta modalidad.";
            return;
        }

        resultadoCompatibilidad.classList.add(informacion.clase);

        const titulo = document.createElement("strong");
        titulo.textContent = informacion.titulo;

        const detalle = document.createElement("p");
        detalle.textContent = informacion.nombre;

        const modalidad = document.createElement("small");

        modalidad.textContent =
            modalidadCompatibilidad === "conexionY"
                ? "Modalidad: Conexión en Y"
                : modalidadCompatibilidad === "mismaJeringa"
                    ? "Modalidad: Misma jeringa"
                    : "Modalidad: Misma bolsa";

        resultadoCompatibilidad.replaceChildren(
            titulo,
            detalle,
            modalidad
        );
    }

    function mostrarOpcionesCompatibilidad(texto) {
        if (!buscadorCompatibilidad) return;

        let contenedorOpciones = ficha.querySelector(
            "#opcionesCompatibilidad"
        );

        if (!contenedorOpciones) {
            contenedorOpciones = document.createElement("div");
            contenedorOpciones.id = "opcionesCompatibilidad";
            contenedorOpciones.className = "compatibilidad-opciones";

            buscadorCompatibilidad.insertAdjacentElement(
                "afterend",
                contenedorOpciones
            );
        }

        contenedorOpciones.replaceChildren();

        const textoBuscado = normalizarNombreCompatibilidad(texto);

        if (!textoBuscado) return;

        const coincidencias = obtenerMedicamentosDeLaModalidad()
            .filter(item =>
                normalizarNombreCompatibilidad(item.nombre)
                    .includes(textoBuscado)
            )
            .filter((item, indice, lista) =>
                lista.findIndex(otro =>
                    normalizarNombreCompatibilidad(otro.nombre) ===
                    normalizarNombreCompatibilidad(item.nombre)
                ) === indice
            )
            .slice(0, 10);

        if (coincidencias.length === 0) {
            const mensaje = document.createElement("p");
            mensaje.textContent =
                "No se encontraron nombres en los datos de esta modalidad.";
            contenedorOpciones.appendChild(mensaje);
            return;
        }

        coincidencias.forEach(item => {
            const boton = document.createElement("button");

            boton.type = "button";
            boton.className = "compatibilidad-opcion";
            boton.textContent = item.nombre;

            boton.addEventListener("click", () => {
                nombreSeleccionado = item.nombre;
                categoriaSeleccionada = item.categoria;

                buscadorCompatibilidad.value = item.nombre;
                contenedorOpciones.replaceChildren();

                mostrarResultadoCompatibilidad();
            });

            contenedorOpciones.appendChild(boton);
        });
    }

    botonesModalidad.forEach(boton => {
        boton.addEventListener("click", () => {
            modalidadCompatibilidad =
                boton.dataset.modalidadCompatibilidad;

            categoriaSeleccionada = null;
            nombreSeleccionado = null;

            botonesModalidad.forEach(otroBoton => {
                const activo = otroBoton === boton;

                otroBoton.classList.toggle("active", activo);
                otroBoton.setAttribute(
                    "aria-pressed",
                    String(activo)
                );
            });

            if (buscadorCompatibilidad) {
                buscadorCompatibilidad.value = "";

                const opciones = ficha.querySelector(
                    "#opcionesCompatibilidad"
                );

                if (opciones) opciones.replaceChildren();
            }

            mostrarResultadoCompatibilidad();
        });
    });

    if (buscadorCompatibilidad) {
        buscadorCompatibilidad.addEventListener("input", () => {
            nombreSeleccionado = null;
            categoriaSeleccionada = null;

            mostrarResultadoCompatibilidad();

            mostrarOpcionesCompatibilidad(
                buscadorCompatibilidad.value
            );
        });
    }

    mostrarResultadoCompatibilidad();

        

}


export function mostrarPosologias(
    resultadosPosologia,
    claseCategoriaMedicamento,
    patologiaSeleccionada = "",
    indicacionSeleccionada = ""
) {
    const contenedor = document.querySelector(".contenedor-posologias");

    if (!contenedor) {
        console.error("No se encontró .contenedor-posologias");
        return;
    }

    const patologias = Object.entries(resultadosPosologia);

    if (patologias.length === 0) {
        contenedor.innerHTML = "<p>No hay posologías registradas.</p>";
        return;
    }

    // Selector de patología
    let html = `
        
    <div class="selector-posologia">

        <div class="campo-posologia">
            <select id="selectorPatologia" required>
                <option value="" selected disabled></option>
                ${patologias.map(([clave, patologia]) => `
                    <option value="${clave}">
                        ${patologia.diagnostico}
                    </option>
                `).join("")}
            </select>
            <label for="selectorPatologia">
                Patología o indicación clínica:
            </label>
            <span class="flecha-posologia"></span>
        </div>

        <div class="campo-posologia">
            <select id="selectorIndicacion" required disabled>
                <option value="" selected disabled>
                    Primero seleccioná una patología
                </option>
            </select>
            <label for="selectorIndicacion">
                Indicación específica:
            </label>
            <span class="flecha-posologia"></span>
        </div>

    </div>


        <div id="resultadoPosologiaSeleccionada"></div>
    `;

    contenedor.innerHTML = html;

   const selectorPatologia = contenedor.querySelector("#selectorPatologia");
const selectorIndicacion = contenedor.querySelector("#selectorIndicacion");

const resultadoSeleccionado = contenedor.querySelector(
    "#resultadoPosologiaSeleccionada"
);

// Restaurar la patología si todavía existe.
if (
    patologiaSeleccionada &&
    resultadosPosologia[patologiaSeleccionada]
) {
    selectorPatologia.value = patologiaSeleccionada;
}

function actualizarIndicaciones() {
    const clavePatologia = selectorPatologia.value;
    const patologia = resultadosPosologia[clavePatologia];

    if (!patologia) {
        selectorIndicacion.innerHTML =
            '<option value="">Primero seleccioná una patología</option>';

        selectorIndicacion.disabled = true;
        resultadoSeleccionado.innerHTML = "";
        return;
    }

    const indicaciones = Object.entries(patologia.indicaciones || {});

    selectorIndicacion.innerHTML = `
        <option value="">Seleccioná una indicación específica</option>
        ${indicaciones.map(([clave, indicacion]) => `
            <option value="${clave}">
                ${indicacion.descripcion || clave}
            </option>
        `).join("")}
    `;

selectorIndicacion.disabled = indicaciones.length === 0;

    // Restaurar la indicación si existe en esta patología.
    if (
        selectorPatologia.value === patologiaSeleccionada &&
        indicaciones.some(([clave]) => clave === indicacionSeleccionada)
    ) {
        selectorIndicacion.value = indicacionSeleccionada;
    }

    mostrarIndicacionSeleccionada();
}

function mostrarIndicacionSeleccionada() {
    const patologia = resultadosPosologia[selectorPatologia.value];
    const indicacion = patologia?.indicaciones[selectorIndicacion.value];

    if (!selectorPatologia.value || !selectorIndicacion.value) {
        resultadoSeleccionado.innerHTML = "";
        return;
    }

        const resultado = indicacion.resultado;
        console.log("RESULTADO QUE SE VA A MOSTRAR:", resultado);
        console.log("DOSIS POR ADMINISTRACIÓN:", resultado.dosisRecomendadaAdministracionMin);
        console.log("DOSIS DIARIA MÍNIMA:", resultado.dosisRecomendadaDiaMin);
        console.log("DOSIS DIARIA MÁXIMA:", resultado.dosisRecomendadaDiaMax);
        const intervalo = indicacion.intervalo;
        const selectorIntervalo = resultadoSeleccionado.querySelector(
            "#selectorIntervalo"
        );

        const intervaloHTML = intervalo?.rango
        ? crearSelectorIntervalo(intervalo, "selectorIntervalo")
        : `
            <p class="items-posologia"><strong>Intervalo:</strong></p>
            <p>${resultado.intervalo ?? "Sin especificar"} ${resultado.unidadIntervalo ?? ""}</p>
        `;

        let dosisRecomendada = "--";

        if (resultado.tipo === "Fija") {
            dosisRecomendada =
                `${resultado.dosisRecomendada} ${resultado.unidad}`;
        } else if (resultado.tipo === "Rango") {
            dosisRecomendada =
                `${resultado.dosisRecomendadaMin} - ${resultado.dosisRecomendadaMax} ${resultado.unidad}`;
        } else if (resultado.tipo === "Maxima") {
            dosisRecomendada =
                `Máximo ${resultado.dosisRecomendadaMax} ${resultado.unidad}`;
        }

        const advertencia = mostrarAdvertencia(resultado.estado);

        resultadoSeleccionado.innerHTML = `
            <div class="posologia ${claseCategoriaMedicamento}">
                <h4 class="titulo-posologia ${claseCategoriaMedicamento}">
                    ${patologia.diagnostico}
                </h4>

                <p class="descripcion-posologia">
                    ${indicacion.descripcion || ""}
                </p>

                <p class="items-posologia"><strong>Dosis de referencia:</strong></p>
                <p>${dosisRecomendada}</p>

                ${intervaloHTML}

                <p class="items-posologia"><strong>Vía:</strong></p>
                <p>${indicacion.via || "--"}</p>

                <p class="items-posologia"><strong>Acceso:</strong></p>
                <p>${indicacion.acceso || "--"}</p>

                <div class="contenedor-advertencia ${advertencia.clase}">
                    <div class="contenedor-icono">
                        <div class="filas1">
                            <img class="icono-advertencia" src="${advertencia.icono}" alt="">
                        </div>
                        <div class="filas2">
                            <h4 class="titulo-advertencia ${claseCategoriaMedicamento}">
                                ${advertencia.titulo}
                            </h4>
                        </div>
                    </div>

                    <p class="texto-advertencia">${advertencia.texto}</p>

                    <p class="items-posologia"><strong>Dosis indicada:</strong></p>
                    <p>${resultado.dosisIndicada ?? "--"}${resultado.unidadDosisIndicada ?? ""}</p>

                    <p class="items-posologia"><strong>Dosis recomendada por administración:</strong></p>
                    <p>
                        ${
                            resultado.dosisRecomendadaAdministracionMin != null &&
                            resultado.dosisRecomendadaAdministracionMax != null
                                ? `${resultado.dosisRecomendadaAdministracionMin} - ${resultado.dosisRecomendadaAdministracionMax} ${resultado.unidadDosisRecomendadaAdministracion ?? resultado.unidad ?? ""}`
                                : resultado.dosisRecomendadaAdministracion != null
                                    ? `${resultado.dosisRecomendadaAdministracion} ${resultado.unidadDosisRecomendadaAdministracion ?? resultado.unidad ?? ""}`
                                    : "--"
                        }
                    </p>

                    <p class="items-posologia"><strong>Dosis diaria recomendada:</strong></p>
                    <p>
                        ${
                            resultado.dosisRecomendadaDiaMin != null &&
                            resultado.dosisRecomendadaDiaMax != null
                                ? `${resultado.dosisRecomendadaDiaMin} - ${resultado.dosisRecomendadaDiaMax} ${resultado.unidadDosisRecomendadaDia ?? ""}`
                                : resultado.dosisRecomendadaDia != null
                                    ? `${resultado.dosisRecomendadaDia} ${resultado.unidadDosisRecomendadaDia ?? ""}`
                                    : "--"
                        }
                    </p>

                    <p>Herramienta de apoyo para el control de la prescripción. Verificar la dosis, la unidad, el intervalo y la fuente de referencia antes de administrar.</p>
                </div>
            </div>
        `;
        const selectorIntervaloActual = resultadoSeleccionado.querySelector(
    "#selectorIntervalo"
);

if (selectorIntervaloActual) {
    selectorIntervaloActual.addEventListener("change", function () {
        const intervaloDosisActualizado = {
            valor: Number(this.value),
            unidad: this.dataset.unidad
        };
        console.log("CAMBIÓ EL INTERVALO:", this.value);
        console.log("INDICACIÓN RECIBIDA:", indicacion);
        console.log("DOSIS POSOLOGÍA:", indicacion.dosis);
        console.log("PESO:", indicacion.peso);
        console.log("DOSIS INDICADA:", indicacion.dosisIndicada);
        console.log("UNIDAD FARMACOLÓGICA:", indicacion.unidadFarmacologica);
        console.log("RESULTADO ANTES:", indicacion.resultado);
        const nuevoResultado = analizarPosologia(
            indicacion.dosis,
            intervaloDosisActualizado,
            indicacion.peso,
            indicacion.dosisIndicada,
            indicacion.unidadFarmacologica
        );
        
        indicacion.resultado = nuevoResultado;

        mostrarIndicacionSeleccionada();
        console.log("RESULTADO NUEVO:", nuevoResultado);
    });
}
}

            selectorPatologia.addEventListener("change", actualizarIndicaciones);
            selectorIndicacion.addEventListener("change", mostrarIndicacionSeleccionada);

            actualizarIndicaciones();
            
}

export function crearSelectorIntervalo(intervaloDosis, id) {
    // Si el intervalo es fijo, no necesitamos un selector.
    if (!intervaloDosis?.rango) {
        return "";
    }

    const { valorMin, valorMax, unidad } = intervaloDosis.rango;

    const opciones = [`
    <option value="" selected disabled>
        Seleccioná un intervalo
    </option>
    `];

    opciones.push(`<option value="${valorMin}">Cada ${valorMin} ${unidad}</option>`);

    if (valorMax !== valorMin) {
    opciones.push(`<option value="${valorMax}">Cada ${valorMax} ${unidad}</option>`);
    }

    return `
    <div class="campo-posologia campo-intervalo">
        <label class="etiqueta-intervalo" for="${id}">
            Intervalo de administración
        </label>

        <select id="${id}" class="selector-intervalo" data-unidad="${unidad}">
            ${opciones.join("")}
        </select>

        <span class="flecha-posologia"></span>
    </div>
`;
}

function mostrarAdvertencia(estado){
    if (estado === "inferior"){
        return {
            icono:"./ASSETS/ICONOS/INFERIOR.png",
            titulo:"Dosis inferior",
            texto: "La dosis indicada es inferior a la recomendada.",
            clase:"advertencia-inferior",
        };
    }
    if (estado === "inferior al rango"){
        return {
            icono:"./ASSETS/ICONOS/INFERIOR.png",
            titulo:"Dosis inferior al rango",
            texto: "La dosis indicada es inferior al rango recomendado.",
            clase:"advertencia-inferior",
        };
    }
    if (estado === "superior"){
        return{
            icono:"./ASSETS/ICONOS/SUPERIOR.png",
            titulo:"Dosis superior",
            texto: "La dosis indicada es superior a la recomendada.",
            clase: "advertencia-superior"
        };
    }
    if (estado === "superior al rango"){
        return{
            icono:"./ASSETS/ICONOS/SUPERIOR.png",
            titulo:"Dosis superior al rango",
            texto: "La dosis indicada es superior al rango recomendado.",
            clase: "advertencia-superior"
        };
    }
    if (estado === "coincide"){
        return{
            icono:"./ASSETS/ICONOS/COINCIDE.png",
            titulo:"La dosis coincide",
            texto:"La dosis indicada coincide con la dosis recomendada.",
            clase:"advertencia-coincide"
        }
    }
    if (estado === "dentro del rango"){
        return{
            icono:"./ASSETS/ICONOS/COINCIDE.png",
            titulo:"La dosis esta dentro del rango",
            texto:"La dosis indicada esta dentro del rango recomendado.",
            clase:"advertencia-coincide"
        }
    }
    if (estado === "supera el máximo"){
        return{
            icono:"./ASSETS/ICONOS/SUPERIOR.png",
            titulo:"Dosis superior al máximo",
            texto: "La dosis indicada es superior al máximo recomendado.",
            clase: "advertencia-superior"
        };
    }
    if (estado === "no supera el máximo"){
        return{
            icono:"./ASSETS/ICONOS/COINCIDE.png",
            titulo:"La dosis no supera el máximo",
            texto:"La dosis indicada esta dentro del máximo recomendado.",
            clase:"advertencia-coincide"
        };
    }
    return{
        titulo:"Sin análisis",
        icono:"./ASSETS/ICONOS/MANO.GIF",
        texto:"No existen datos suficientes para realizar un analisis.",
        clase:"advertencia-sin-analisis"
    }
}


export function mostrarIM(
    administracionIM,
    dosisIndicada,
    unidadFarmacologica,
    resultadoPresentacion,
    claseCategoriaMedicamento
) {
    if (!administracionIM) return "";

    const miligramos = Number(administracionIM.miligramos);
    const volumenBase = Number(administracionIM.volumen);
    const concentracionCalculada =
        miligramos > 0 && volumenBase > 0 ? miligramos / volumenBase : null;

    const dosisMg = convertirUnidad(
        dosisIndicada,
        unidadFarmacologica,
        "mg"
    );

    const volumenCalculado =
        resultadoPresentacion?.volumenAdministrar ??
        (Number.isFinite(dosisMg) && Number.isFinite(concentracionCalculada)
            ? (dosisMg / concentracionCalculada).toFixed(2)
            : null);

    const textos = (administracionIM.textos || [])
        .filter(item => item && item.texto)
        .map(item => `
            <p class="descripcion-posologia ${claseCategoriaMedicamento}">
                <strong>${item.titulo || "Consideraciones"}:</strong> ${item.texto}
            </p>
        `)
        .join("");

    return `
        <div class="datos-administracion datos-administracion-im">
            <h4 class="subtitulo-administracion ${claseCategoriaMedicamento}">
                Administración intramuscular (IM)
            </h4>

            <p class="descripcion-posologia ${claseCategoriaMedicamento}">
                <strong>Diluyente configurado:</strong>
                ${administracionIM.diluyente || "No configurado"}
            </p>

            <p class="descripcion-posologia ${claseCategoriaMedicamento}">
                <strong>Concentración configurada:</strong>
                ${administracionIM.concentracion || (
                    concentracionCalculada ? `${concentracionCalculada} mg/ml` : "No configurada"
                )}
            </p>

            <p class="descripcion-posologia ${claseCategoriaMedicamento}">
                <strong>Dosis indicada:</strong>
                ${dosisIndicada} ${unidadFarmacologica}
            </p>

            <div class="llevar ${claseCategoriaMedicamento}">
                <h4 class="llevar-subtitulo ${claseCategoriaMedicamento}">
                    Volumen a administrar
                </h4>
                <h3 class="subtitulo-concentracion ${claseCategoriaMedicamento}">
                    ${volumenCalculado !== null ? `${volumenCalculado} ml` : "No disponible"}
                </h3>
            </div>

            ${textos}
        </div>
    `;
}


export function mostrarVO(
    formaVO,
    dosis,
    unidadFarmacologica,
    claseCategoriaMedicamento
) {
    if (!formaVO) return "";

    const textos = (formaVO.textos || [])
        .filter(item => item && item.texto?.trim())
        .map(item => `
            <div class="descripcion-info">
                <h5 class="concentracion ${claseCategoriaMedicamento}">
                    ${item.titulo || "Consideraciones"}
                </h5>
                <p>${item.texto}</p>
            </div>
        `)
        .join("");

    return `
        <div class="bloque administracion-vo">
            <div class="contenedor-presentacion ${claseCategoriaMedicamento}">
                <h4 class="presentacion ${claseCategoriaMedicamento}">
                    Administración por vía oral (VO)
                </h4>
            </div>

            <div class="presentacion-info">
                <h5 class="concentracion ${claseCategoriaMedicamento}">
                    Dosis indicada:
                </h5>
                <p>${dosis ?? "No especificada"} ${unidadFarmacologica ?? ""}</p>
            </div>

            ${textos || `
                <p>No hay instrucciones de administración VO cargadas.</p>
            `}
        </div>
    `;
}


export function mostrarIVD(
    administracion,
    dosisIndicada,
    unidadFarmacologica,
    mostrarResultadosReconstitucion,
    claseCategoriaMedicamento,
    presentacionSeleccionada,
    accesoSeleccionado
) {
    const ivd = administracion.IVD;
    if (!ivd) return "";

    const dosisFiltradas = filtrarDosisPorAcceso(
        ivd.dosis,
        accesoSeleccionado
    );

    const resultadoPresentacion =
        mostrarResultadosReconstitucion?.[presentacionSeleccionada];

    if (!resultadoPresentacion) {
        console.warn(
            "No hay resultados para la presentación seleccionada:",
            presentacionSeleccionada
        );
        return "";
    }

    const volumenMedicamento = Number(
        resultadoPresentacion.volumenAdministrar
    );

    let htmlDosis = "";

    for (const [tipo, dosis] of dosisFiltradas) {
        const unidadConcentracion = dosis.unidad.split("/")[0];

        const dosisConvertida = convertirUnidad(
            dosisIndicada,
            unidadFarmacologica,
            unidadConcentracion
        );

        // Mostramos un único resultado inicial.
        const concentracionInicial =
            dosis.concentracionMin !== undefined &&
            dosis.concentracionMax !== undefined
                ? Number(dosis.concentracionMin)
                : Number(dosis.concentracion);

        if (!Number.isFinite(concentracionInicial) || concentracionInicial <= 0) {
            console.warn("Concentración inválida para:", tipo);
            continue;
        }

        const volumenRequerido =
            dosisConvertida / concentracionInicial;

        let volumenDiluyente;
        let volumenTotal;

        if (dosis.tipoDilucion === "llevarA") {
            volumenTotal = volumenRequerido;
            volumenDiluyente = volumenTotal - volumenMedicamento;
        } else if (dosis.tipoDilucion === "diluirEn") {
            volumenDiluyente = volumenRequerido;
            volumenTotal = volumenMedicamento + volumenDiluyente;
        }

        const tieneRango =
            dosis.concentracionMin !== undefined &&
            dosis.concentracionMax !== undefined;

        htmlDosis += `
            <div
                class="datos-administracion"
                data-modalidad="IVD"
                data-tipo="${tipo}"
            >
                <h4 class="subtitulo-administracion ${claseCategoriaMedicamento}">
                    ${tipo}
                </h4>

                ${crearControlConcentracion(dosis, tipo, "IVD")}

                <p class="descripcion-posologia ${claseCategoriaMedicamento}">
                    <strong>Acceso:</strong> ${dosis.acceso}
                </p>

                <p class="descripcion-posologia ${claseCategoriaMedicamento}">
                    <strong>Referencia:</strong> ${dosis.descripcion}
                </p>

                <div class="llevar ${claseCategoriaMedicamento}">
                    <h4 class="llevar-subtitulo ${claseCategoriaMedicamento}">
                        ${dosis.tipoDilucion === "llevarA" ? "Llevar a" : "Diluir en"}
                    </h4>

                    <h3
                        class="subtitulo-concentracion ${claseCategoriaMedicamento}"
                        id="resultado-concentracion-IVD-${tipo}"
                    >
                        ${concentracionInicial} ${dosis.unidad}
                    </h3>

                    <div class="llevar-grid">
                        <p class="descripcion-posologia"><strong>Dosis indicada:</strong></p>
                        <p class="llevar-resultado ${claseCategoriaMedicamento}">
                            ${dosisIndicada} ${unidadFarmacologica}
                        </p>

                        <p class="descripcion-posologia"><strong>Medicamento reconstituido:</strong></p>
                        <p class="llevar-resultado ${claseCategoriaMedicamento}">
                            ${volumenMedicamento} ml
                        </p>

                        <p class="descripcion-posologia"><strong>Diluyente requerido:</strong></p>
                        <p
                            class="llevar-resultado ${claseCategoriaMedicamento}"
                            id="resultado-diluyente-IVD-${tipo}"
                        >
                            ${Number(volumenDiluyente.toFixed(2))} ml de ${ivd.diluyente.abreviatura}
                        </p>

                        <p class="descripcion-posologia"><strong>Volumen total requerido:</strong></p>
                        <p
                            class="llevar-resultado ${claseCategoriaMedicamento}"
                            id="resultado-total-IVD-${tipo}"
                        >
                            ${Number(volumenTotal.toFixed(2))} ml
                        </p>
                    </div>
                </div>
            </div>
        `;
    }

    return `
        <div class="tarjeta-administracion ${claseCategoriaMedicamento}">
            <h3 class="titulo-administracion ${claseCategoriaMedicamento}">
                ${ivd.titulo}
            </h3>

            <p class="descripcion-posologia">
                <strong>Diluyente:</strong>
                ${ivd.diluyente.nombre} (${ivd.diluyente.abreviatura})
            </p>

            ${htmlDosis}

            <p class="descripcion-posologia">
                <strong>Infusión:</strong> ${ivd.tiempoInfusion.descripcion}
            </p>
        </div>
    `;
}



export function mostrarIVI(
    administracion,
    dosisIndicada,
    unidadFarmacologica,
    mostrarResultadosReconstitucion,
    claseCategoriaMedicamento,
    presentacionSeleccionada,
    accesoSeleccionado
) {
    const ivi = administracion.IVI;
    if (!ivi) return "";

    const dosisFiltradas = filtrarDosisPorAcceso(
        ivi.dosis,
        accesoSeleccionado
    );

    const resultadoPresentacion =
        mostrarResultadosReconstitucion?.[presentacionSeleccionada];

    if (!resultadoPresentacion) {
        console.warn(
            "No hay resultados para la presentación seleccionada:",
            presentacionSeleccionada
        );
        return "";
    }

    const volumenMedicamento = Number(
        resultadoPresentacion.volumenAdministrar
    );

    let htmlDosis = "";

    for (const [tipo, dosis] of dosisFiltradas) {
        const unidadConcentracion = dosis.unidad.split("/")[0];

        const dosisConvertida = convertirUnidad(
            dosisIndicada,
            unidadFarmacologica,
            unidadConcentracion
        );

        const concentracionInicial =
            dosis.concentracionMin !== undefined &&
            dosis.concentracionMax !== undefined
                ? Number(dosis.concentracionMin)
                : Number(dosis.concentracion);

        if (!Number.isFinite(concentracionInicial) || concentracionInicial <= 0) {
            console.warn("Concentración inválida para:", tipo);
            continue;
        }

        const volumenRequerido =
            dosisConvertida / concentracionInicial;

        let volumenDiluyente;
        let volumenTotal;

        if (dosis.tipoDilucion === "llevarA") {
            volumenTotal = volumenRequerido;
            volumenDiluyente = volumenTotal - volumenMedicamento;
        } else if (dosis.tipoDilucion === "diluirEn") {
            volumenDiluyente = volumenRequerido;
            volumenTotal = volumenMedicamento + volumenDiluyente;
        }

        htmlDosis += `
            <div
                class="datos-administracion"
                data-modalidad="IVI"
                data-tipo="${tipo}"
            >
                <h4 class="subtitulo-administracion ${claseCategoriaMedicamento}">
                    ${tipo}
                </h4>

                ${crearControlConcentracion(dosis, tipo, "IVI")}

                <p class="descripcion-posologia">
                    <strong>Acceso:</strong> ${dosis.acceso}
                </p>

                <p class="descripcion-posologia">
                    <strong>Referencia:</strong> ${dosis.descripcion}
                </p>

                <div class="llevar ${claseCategoriaMedicamento}">
                    <h4 class="llevar-subtitulo ${claseCategoriaMedicamento}">
                        ${dosis.tipoDilucion === "llevarA" ? "Llevar a" : "Diluir en"}
                    </h4>

                    <h3
                        class="subtitulo-concentracion ${claseCategoriaMedicamento}"
                        id="resultado-concentracion-IVI-${tipo}"
                    >
                        ${concentracionInicial} ${dosis.unidad}
                    </h3>

                    <div class="llevar-grid">
                        <p class="descripcion-posologia"><strong>Dosis indicada:</strong></p>
                        <p class="llevar-resultado ${claseCategoriaMedicamento}">
                            ${dosisIndicada} ${unidadFarmacologica}
                        </p>

                        <p class="descripcion-posologia"><strong>Medicamento reconstituido:</strong></p>
                        <p class="llevar-resultado ${claseCategoriaMedicamento}">
                            ${volumenMedicamento} ml
                        </p>

                        <p class="descripcion-posologia"><strong>Diluyente requerido:</strong></p>
                        <p
                            class="llevar-resultado ${claseCategoriaMedicamento}"
                            id="resultado-diluyente-IVI-${tipo}"
                        >
                            ${Number(volumenDiluyente.toFixed(2))} ml de ${ivi.diluyente.abreviatura}
                        </p>

                        <p class="descripcion-posologia"><strong>Volumen total requerido:</strong></p>
                        <p
                            class="llevar-resultado ${claseCategoriaMedicamento}"
                            id="resultado-total-IVI-${tipo}"
                        >
                            ${Number(volumenTotal.toFixed(2))} ml
                        </p>
                    </div>
                </div>
            </div>
        `;
    }

    return `
        <div class="tarjeta-administracion ${claseCategoriaMedicamento}">
            <h3 class="titulo-administracion ${claseCategoriaMedicamento}">
                ${ivi.titulo}
            </h3>

            <p class="descripcion-posologia">
                <strong>Diluyente:</strong>
                ${ivi.diluyente.nombre} (${ivi.diluyente.abreviatura})
            </p>

            ${htmlDosis}
        </div>
    `;
}




export function mostrarIVC(
    administracion,
    dosisIndicada,
    unidadFarmacologica,
    mostrarResultadosReconstitucion,
    claseCategoriaMedicamento,
    presentacionSeleccionada,
    accesoSeleccionado,
    nombreMedicamento
) {
    const ivc = administracion?.infusionContinua;
    if (!ivc) return "";

    const preparacion = ivc.preparacion;
    if (!preparacion) return "";

    const identificacion = preparacion.identificacion || {};
    const perfus = preparacion.perfus || {};
    const proteccion = preparacion.proteccion || {};

    const recambioPreparacion = preparacion.recambio;
    const recambioPerfus = perfus.recambio;
    const fechaInicioPerfus =
    mostrarResultadosReconstitucion?.[presentacionSeleccionada]?.fechaInicioPerfus;

const calcularFechaRecambioPerfus = (fechaInicio, intervalo) => {
    if (!fechaInicio || !intervalo?.duracion) return null;

    const fecha = new Date(fechaInicio);
    if (Number.isNaN(fecha.getTime())) return null;

    const duracion = Number(intervalo.duracion);

    if (!Number.isFinite(duracion) || duracion <= 0) return null;

    switch (intervalo.unidad) {
        case "horas":
            fecha.setHours(fecha.getHours() + duracion);
            break;
        case "días":
        case "dias":
            fecha.setDate(fecha.getDate() + duracion);
            break;
        default:
            return null;
    }

    return fecha;
};

const formatearFechaHora = (fecha) => {
    if (!fecha) return "No registrada";

    return new Date(fecha).toLocaleString("es-AR", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit"
    });
};

const fechaRecambioPerfus = calcularFechaRecambioPerfus(
    fechaInicioPerfus,
    recambioPerfus
);

const formatearIntervalo = (intervalo) => {
    if (!intervalo?.duracion) return "No especificado";

    return `${intervalo.duracion} ${
        intervalo.unidad || "unidades"
    }`;
};

const consideraciones = [
    proteccion.luz
        ? proteccion.descripcion || "Proteger de la luz."
        : null,
    ...(Array.isArray(preparacion.seguridad)
        ? preparacion.seguridad
        : [])
].filter(Boolean);

const htmlDetallesIVC = `
    <section class="ivc-detalles">

        <h4 class="ivc-detalles-titulo">
            <span>🧪</span>
            Preparación del perfus
        </h4>

        <div class="ivc-detalle">
            <span class="ivc-detalle-icono">💧</span>
            <div class="ivc-detalle-contenido">
                
            <strong>Perfus a utilizar</strong>
            <p>${perfus.nombre || "No especificado"}</p>

            </div>
        </div>

        <div class="ivc-detalle">
            <span class="ivc-detalle-icono">🏷️</span>
            <div class="ivc-detalle-contenido">
                <strong>Tipo de rótulo</strong>
                <p>${
                    identificacion.descripcion ||
                    identificacion.rotulo ||
                    "No especificado"
                }</p>
            </div>
        </div>

        <div class="ivc-detalle">
            <span class="ivc-detalle-icono">🕒</span>
            <div class="ivc-detalle-contenido">
                <strong>Recambio de la preparación</strong>
                <p>${formatearIntervalo(recambioPreparacion)}</p>
            </div>
        </div>

        <div class="ivc-detalle">
            <span class="ivc-detalle-icono">🔄</span>
            <div class="ivc-detalle-contenido">
                <strong>Recambio del perfus</strong>
                <p>${formatearIntervalo(recambioPerfus)}</p>
            </div>
        </div>

        ${
            consideraciones.length
                ? `
                    <div class="ivc-consideraciones">
                        <h4 class="ivc-detalles-titulo">
                            <span>🛡️</span>
                            Consideraciones
                        </h4>
                        <ul>
                            ${consideraciones.map(item =>
                                `<li>${item}</li>`
                            ).join("")}
                        </ul>
                    </div>
                `
                : ""
        }

    </section>
`;



const htmlDuracionPerfus = `
    <section class="ivc-detalles ivc-duracion-perfus">
        <h4 class="ivc-detalles-titulo">
            <span>⏱️</span> Duración del perfus
        </h4>

        <div class="ivc-detalle">
            🟢 Fecha y hora de inicio:
            ${formatearFechaHora(fechaInicioPerfus)}
        </div>

        <div class="ivc-detalle">
            🔄 Frecuencia de recambio:
            ${recambioPerfus
                ? `Cada ${formatearIntervalo(recambioPerfus)}`
                : "Intervalo no especificado"}
        </div>

        <div class="ivc-detalle">
            📅 Fecha y hora del próximo recambio:
            ${formatearFechaHora(fechaRecambioPerfus)}
        </div>
    </section>
`;



    if (!preparacion) return "";

    const resultadoPresentacion =
        mostrarResultadosReconstitucion?.[presentacionSeleccionada];

    if (!resultadoPresentacion) {
        console.warn(
            "No hay resultados para la presentación seleccionada:",
            presentacionSeleccionada
        );
        return "";
    }

    const volumenMedicamento = Number(
        resultadoPresentacion.volumenAdministrar
    );

    const volumenFinal = Number(
        preparacion.volumenFinal?.volumen
    );

    if (
        !Number.isFinite(volumenMedicamento) ||
        volumenMedicamento < 0 ||
        !Number.isFinite(volumenFinal) ||
        volumenFinal <= 0
    ) {
        console.warn("Volúmenes inválidos para IVC.");
        return "";
    }

    let volumenDiluyente;
    let volumenTotal;

    if (preparacion.tipo === "llevarDosisAVolumenFinal") {
        volumenTotal = volumenFinal;
        volumenDiluyente = volumenFinal - volumenMedicamento;
    } else if (preparacion.tipo === "diluirEn") {
        volumenDiluyente = volumenFinal;
        volumenTotal = volumenMedicamento + volumenDiluyente;
    } else {
        console.warn("Tipo de preparación IVC no reconocido:", preparacion.tipo);
        return "";
    }

    if (volumenDiluyente < 0) {
        console.warn("El volumen del medicamento supera el volumen final.");
        return "";
    }

    const diluyente =
        preparacion.diluyente ||
        ivc.diluyente ||
        "Diluyente no especificado";

    const dosisFormateada = (valor) =>
        Number(Number(valor).toFixed(2)).toString();

    const crearPreparacion = (multiplicador, titulo) => {
        const volumenMedicamentoPreparacion =
            volumenMedicamento * multiplicador;

        const volumenDiluyentePreparacion =
            volumenDiluyente * multiplicador;

        const volumenTotalPreparacion =
            volumenTotal * multiplicador;

        const dosisPreparacion =
            Number(dosisIndicada) * multiplicador;

        return `
            <section class="ivc-preparacion">
                <h4 class="ivc-preparacion-titulo">${titulo}</h4>

                <div class="ivc-rotulo ${claseCategoriaMedicamento}">
                    <p class="ivc-linea-rotulo">
                        <span>${nombreMedicamento || "Medicamento"} ${dosisFormateada(dosisPreparacion)} ${unidadFarmacologica}</span>
                        <span>${dosisFormateada(volumenMedicamentoPreparacion)} ml</span>
                    </p>

                    <p class="ivc-linea-rotulo">
                        <span>${diluyente}</span>
                        <span>${dosisFormateada(volumenDiluyentePreparacion)} ml</span>
                    </p>

                    <p class="ivc-linea-rotulo ivc-total-rotulo">
                        <span>Total</span>
                        <span>${dosisFormateada(volumenTotalPreparacion)} ml</span>
                    </p>
                </div>
            </section>
        `;
    };

    let htmlPreparacion = crearPreparacion(
        1,
        "Preparación habitual — Rotular"
    );

    const preparacionInicial = preparacion.preparacionInicial;

    if (
        preparacionInicial?.requerida === true &&
        Number(preparacionInicial.multiplicadorDosis) > 1
    ) {
        htmlPreparacion += crearPreparacion(
            Number(preparacionInicial.multiplicadorDosis),
            "Preparación inicial / purgado de perfus"
        );
    }

    const accesos = ivc.acceso?.permitidos || [];
    const accesoTexto =
        accesoSeleccionado || accesos.join(", ") || "No especificado";

    return `
        <div class="tarjeta-administracion ${claseCategoriaMedicamento}">
            <h3 class="titulo-administracion ${claseCategoriaMedicamento}">
                IVC - Goteo de infusión
            </h3>

            <p class="descripcion-posologia">
                <strong>Acceso permitido:</strong> ${accesoTexto}
            </p>

            <p class="descripcion-posologia">
                <strong>Preparación:</strong>
                ${
                    preparacion.tipo === "llevarDosisAVolumenFinal"
                        ? `Llevar a ${volumenFinal} ml con ${diluyente}.`
                        : `Diluir en ${volumenDiluyente} ml de ${diluyente}.`
                }
            </p>

            ${htmlPreparacion}
            ${htmlDetallesIVC}
            ${htmlDuracionPerfus}
        </div>
    `;
}



function normalizarAcceso(acceso) {
    return (acceso || "")
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .trim()
        .toLowerCase();
}

function filtrarDosisPorAcceso(dosis, accesoSeleccionado) {
    return Object.entries(dosis || {}).filter(([tipo, datos]) => {
        // Si todavía no hay acceso seleccionado, no mostramos categorías.
        if (!accesoSeleccionado) return false;

        const accesoDosis = normalizarAcceso(datos.acceso);
        const accesoActual = normalizarAcceso(accesoSeleccionado);

        return accesoDosis === accesoActual;
    });
}


function crearControlConcentracion(dosis, tipo, modalidad) {
    const tieneRango =
        dosis.concentracionMin !== undefined &&
        dosis.concentracionMax !== undefined;

    const concentracionFija = dosis.concentracion;

    if (tieneRango) {
        const minimo = Number(dosis.concentracionMin);
        const maximo = Number(dosis.concentracionMax);

        return `
            <div class="control-concentracion">
                <label for="slider-${modalidad}-${tipo}">
                    Concentración seleccionada:
                    <strong id="valor-${modalidad}-${tipo}">
                        ${minimo} ${dosis.unidad}
                    </strong>
                </label>

                <input
                    type="range"
                    id="slider-${modalidad}-${tipo}"
                    min="${minimo}"
                    max="${maximo}"
                    step="${Number.isInteger(minimo) && Number.isInteger(maximo) ? 1 : 0.5}"
                    value="${minimo}"
                    data-unidad="${dosis.unidad}"
                    data-modalidad="${modalidad}"
                    data-tipo="${tipo}"
                >
            </div>
        `;
    }

    if (concentracionFija !== undefined) {
        return `
            <p class="descripcion-posologia">
                <strong>Concentración: </strong>
                ${concentracionFija} ${dosis.unidad}
            </p>
        `;
    }

    return "";
}


function mostrarConcentracion(dosis){
    //CONCENTRACION EN RANGO
    if(dosis.concentracionMin !== undefined && dosis.concentracionMax !== undefined){
        return `
            <p class="descripcion-posologia">
                <strong>Concentración: </strong>
                ${dosis.concentracionMin}-${dosis.concentracionMax}${dosis.unidad}
            </p>
        `
    }

    //CONCENTRACION FIJA
    if(dosis.concentracion !== undefined){
        return `
            <p class="descripcion-posologia">
                <strong>Concentración: </strong>
                ${dosis.concentracion}${dosis.unidad}
            </p>
        `
    }

    //SI NO HAY CONCENTRACION
    return null;
}

//FUNCION PARA SELECCIONA COLORES DE LA FICHA SEGUN LA CATEGORIA DEL MEDICAMENTO
export function claseCategoria(categoria){
    switch (categoria){

        case "sedoanalgesia":
            return "categoria-sedoanalgesia";
        case "inotropicos":
            return "categoria-inotropicos";
        case "diureticos":
            return "categoria-diureticos";
        case "varios":
            return "categoria-varios";
        case "antibiotico":
            return "categoria-antibiotico";
        case "antiviral":
            return "categoria-antiviral";
        default:
            return "categoria-neutro";
    }
}