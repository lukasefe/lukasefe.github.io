/*DATOS DEL PROYECTO
 * ============================================================
 * ENFERMERÍA CONECTADA
 * Calculadora de Dilución de Medicamentos
 * ============================================================
 *
 * Archivo: Medicamentos.js
 * Lenguaje: JavaScript
 *
 * Descripción:
 * Base de datos estructurada de medicamentos, presentaciones,
 * posología, diluciones, estabilidad, compatibilidades y
 * observaciones.
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
 * IMPORTANTE:
 * Los datos farmacológicos contenidos en este archivo deben
 * ser verificados y validados contra fuentes bibliográficas
 * y protocolos institucionales antes de su utilización clínica.
 *
 * ============================================================
 */


//nuestro objeto MEDICAMENTOS que contendra una base de datos de todos los medicamentos de uso diario en el 
//vademecum del Hospital Infantil Municipal
const medicamentos ={
    
    //ACICLOVIR
    Aciclovir:{
            nombre: "Aciclovir",

            tipo:"Antiviral, Análogo de nucleósido de la guanina",

            accion:"Activo frente a virus herpes simple tipo 1 y 2, virus varicela zoster y virus Epstein-Barr. Inhibe la síntesis de ADN viral",

            unidadFarmacologica:"mg",

            categoria:"antiviral",

            presentaciones: {
                    presentacion1:{
                        nombre: "FA 500mg",
                        viasPermitidas:["EV"],
                        tipo: "Frasco/Ampolla",
                        cantidad:500,
                        unidadCantidad:"mg",

                        reconstituyente: "Agua Destilada",

                        volumen:10,
                        unidadVolumen:"ml",

                        descripcion:"En 9,5 ml de agua destilada, obteniendo 50mg/ml, concentracion total 500mg/10ml reconstituido.",

                        estabilidad: "frascoReconstituido"
                    },
                   
                        nombre: "Suspencion",
                        viasPermitidas:["EV"],
                        tipo: "Frasco/Ampolla",
            },

            estabilidad:{

                frascoReconstituido:{
                    identificador:"Frasco/Ampolla Reconstituido",
                    duracion:{
                        temperaturaAmbiente:12,
                        unidad:"hs",
                    },
                    
                    cuidado:"no refrigerar por riesgo a precipitación."
                },
                jarabeReconstituido:{
                    identificador:"Jarabe Reconstituido",
                    duracion: 14,
                    unidad:"días",
                    temperatura:"Ambiente",
                    cuidado:"Agitar antes de usar."
                }
            },

            posologia:{
                    patologia1:{
                        diagnostico:"Encefalitis Herpética",
                        indicaciones:{
                            indicacion1:{
                            descripcion:"Menor de 12 años: 30mg/kg/día (EV) cada 8hs",
                            dosis:{
                                tipo:"Fija",
                                valor:30,
                                unidad:"mg/kg/día",
                            },
                            intervalo:{
                                valor:8,
                                unidad:"hs"
                            },
                            via: "EV",
                            acceso: "central"  
                            },
                            indicacion2:{
                            descripcion:"Mayor de 12 años: 60mg/kg/día (EV) cada 8hs",
                            dosis:{
                                tipo:"Fija",
                                valor:60,
                                unidad:"mg/kg/día",
                            },
                            intervalo:{
                                valor:8,
                                unidad:"hs"
                            },
                            via: "EV",
                            acceso: "central"   
                            }
                        }   
                    },
                    patologia2:{
                        diagnostico:"Infección por VHS (Mucocutánea, Progresiva o Diseminada) en Huésped Inmunocomprometido",
                        indicaciones:{
                            indicacion1:{
                            descripcion:"Menor de 12 años: 15mg/kg/día (EV) cada 8hs",
                            dosis:{
                                tipo:"Fija",
                                valor:15,
                                unidad:"mg/kg/día"
                            },
                            intervalo:{
                                valor:8,
                                unidad:"hs",
                            },
                            via: "EV",
                            acceso: "central", 
                            },
                            indicacion2:{
                            descripcion:"Mayor de 12 años: 60mg/kg/día (EV) cada 8hs",
                            dosis:{
                                tipo:"Fija",
                                valor:60,
                                unidad:"mg/kg/día"
                            },
                            intervalo:{
                                valor:8,
                                unidad:"hs",
                            },
                            via: "EV",
                            acceso: "central",   
                            },
                            indicacion3:{
                            descripcion:"V.O.: 80mg/kg/día cada 6hs, dosis máxima 3200mg.",
                            dosis:{
                                tipo:"Fija",
                                valor:80,
                                unidad:"mg/kg/día"
                            },
                            dosisMaxima:{
                                valor:3200,
                                unidad:"mg"
                            },
                            intervalo:{
                                valor:6,
                                unidad:"hs",
                            },
                            via: "VO",
                            acceso: "oral",   
                            },
                            indicacion4:{
                            descripcion:"Adultos: 200-800mg cada 6-8hs,",
                            dosis:{
                                tipo:"Rango",
                                valorMin:200,
                                valorMax:800,
                                unidad:"mg",
                            },
                            intervalo:{
                                rango:{
                                    valorMin:6,
                                    valorMax:8,
                                    unidad:"hs"
                                },
                            },
                            }
                        }
                    },
                    patologia3:{
                        diagnostico:"Varicela en Inmunocomprometido",
                        indicaciones:{
                            indicacion1:{
                            descripcion:"30mg/kg/día (EV) cada 8hs",
                            dosis:{
                                tipo:"Fija",
                                valor:30,
                                unidad:"mg/kg/día"
                            },
                            intervalo:{
                                valor:8,
                                unidad:"hs",
                            },
                            via: "EV",
                            acceso: "central", 
                            },
                        },
                    },
                    patologia4:{
                        diagnostico:"Varicela Complicada en Inmunocompetente (Neumonia,Encefalitis)",
                        indicaciones:{
                            indicacion1:{
                            descripcion:"30mg/kg/día (EV) cada 8hs",
                            dosis:{
                                tipo:"Fija",
                                valor:30,
                                unidad:"mg/kg/día"
                            },
                            intervalo:{
                                valor:8,
                                unidad:"hs",
                            },
                            via: "EV",
                            acceso: "central", 
                            },
                        },
                    },
                    patologia5:{
                        diagnostico:"Profilaxis Post Exposicion a Varicela en Pacientes Inmunocomprometidos",
                        indicaciones:{
                            indicacion1:{
                            descripcion:"V.O.: 80mg/kg/día cada 6hs, comenzando entre los 7 y 10 días después de la exposición, durante 7 días.",
                            dosis:{
                                tipo:"Fija",
                                valor:80,
                                unidad:"mg/kg/día"
                            },
                            intervalo:{
                                valor:6,
                                unidad:"hs",
                            },
                            via: "VO",
                            acceso: "oral", 
                            },
                        },
                    },
                    patologia6:{
                        diagnostico:"Herpes Zoster",
                        indicaciones:{
                            indicacion1:{
                            descripcion:"V.O.: 30mg/kg/día cada 8hs",
                                dosis:{
                                    tipo:"Fija",
                                    valor:30,
                                    unidad:"mg/kg/día"
                                },
                                intervalo:{
                                    valor:8,
                                    unidad:"hs",
                                },
                                via: "VO",
                                acceso: "oral", 
                            },
                            indicacion2:{
                            descripcion:"Mayor o igual a 80años: 80mg/kg/día cada 6hs",
                                dosis:{
                                    tipo:"Fija",
                                    valor:80,
                                    unidad:"mg/kg/día"
                                },
                                intervalo:{
                                    valor:6,
                                    unidad:"hs",
                                },
                                via: "VO",
                                acceso: "oral", 
                            },
                        },
                    },
            },

            administracion:{
                EV:{
                    formas:{
                        IVI:{
                            titulo:"IVI o 2DO CANAL",
                            // Concentraciones expresadas en mg/ml.
                            // Se utilizan para calcular el volumen final de dilución.
                            diluyente:{
                                        nombre:"Solución Fisiológica o Dextrosa al 5%",
                                        abreviatura:"S.F 0,9% - DX 5%",
                                    },
                            dosis:{
                                recomendada:{
                                    concentracionMin:2.5,
                                    concentracionMax:7,
                                    unidad:"mg/ml",
                                    acceso:"Central - PICC",
                                    descripcion: " Recomendado 2.5-5mg/ml, como maxima dilucion 7mg/ml.",
                                    tipoDilucion: "llevarA"
                                },
                                
                            },
                            tiempoInfusion:{
                                descripcion:"En 1 hora, preparar y administrar",
                            }
                        }
                    }
                }
                
            },

            observaciones:{
                generales:[],
                
                precauciones:["Para prevenir la precipitación del aciclovir en los túbulos renales es necesario una hidratación adecuada."],
                
                alertas:["Riesgo de flebitis o inflamación en el sitio de inyección a altas concentraciones (muy alcalino).",
                    "Probenecid y cimetidina disminuyen la secreción tubular del aciclovir y con aumento de la concentración plasmática y liquido cefalorraquídeo."
                ],
                
                contraindicaciones:["V.O.: Con alimentos disminuye la intolerancia gastrointestinal.",
                    "Con ciclosporina, glucopéptidos, aminoglucósidos, cefalosporinas aumentan la posibilidad de cristaluria."
                ],
                
                
            },
           
            compatibilidad:{
                conexionY:{

                    compatible:["Amikacina","Aminofilina", "Ampicilina","Anfotericina (ABELCET)","Anfotericina Liposomal","Anidulofungina",
                    "Bicarbonato de Sodio","Cloruro de Calcio","Gluconato de Calcio","Cefotaxima","Ceftazidima","Ceftriaxona","Cefuroxima",
                    "Clindamicina","Dexametasona","Dexmedetomidina","Enalaprilato","Fenobarbital","Fentanilo","Fluconazol","Furosemida",
                    "Heparina Sódica","Hidrocortisona","Imipenem","Insulina Regular","Linezolid","Lorazepam","Sulfato de Magnesio","Metilprednisolona",
                    "Metronidazol","Milrinona","Octreotida", "Pancuronio","Cloruro de Potasio","Propanolol","Ranitidina","Remifentanilo","Rocuronio",
                    "Sulfametoxazol Trimetropina","Tigeciclina","Tiopental","Vancomicina","Vasoprecina","Voriconazol","Zidovudina"],

                    combinacionVariable:["Caspofungina","Ciclosporina","Difenhidramina","Gentamicina","Meropenem","Metroclopramida","Morfina","Noradrenalina",
                    ],

                    noProbada:["Acido Tranexámico", "Alprostadil","Cefalotina","Claritromicina","Clonidina","Colistin","Ganciclovir",
                    "Fosfato de Sodio","Hidroxocobalamina","Indometacina Sódica","Levetiracetam","Omeprazol","Penicilina G. Sódica",
                    "Rifampicina","Sildenafil"],

                    noCompatible:["Adrenalina","Amiodarona","Ampicilina Sulbactam","Anfotericina B","Ciprofloxacina","Clorpromazina","Daptomizina",
                    "Diazepan","Dobutamina","Dopamina","Esmolol","Estreptomicina","Fenitoina","Foscarnet","Fosfato de Potasio","Labetalol","Lidocaina",
                    "Midazolam","Nitroprusiato de Sodio","Paracetamol","Pentamidina","Piperacilina Tazobactam","Tacrolimus","Vecuronio",],

                    combinacionIncierta:[]
                }
                
            },

            efectosAdversos:[
                "Náuseas",
                "Vomitos",
                "Diarrea",
                "Signos Encefalopáticos",
                "Hipotensión",
                "Hematuria",
                "Artralgia",
                "Prurito",
                "Rash",
            ]
    },

    //AMPICILINA
    Ampicilina:{
            nombre: "Ampicilina",

            tipo:"Penicilina Semisintética.",

            accion:"Actua inhibiendo la síntesis de la pared celular bacteriana.",

            unidadFarmacologica: "mg",

            presentaciones: {
                    presentacion1:{
                    tipo: "Frasco/Ampolla",
                    cantidad: 1000,
                    unidadCantidad:"mg",

                    reconstituyente: "Agua Destilada",

                    volumen:10,
                    unidadVolumen:"ml",
                    
                    descripcion:"En 9,5 ml de agua destilada, obteniendo 100mg/ml, concentracion total 1000mg/10ml reconstituido.",

                    estabilidad: "frascoReconstituido"
                    },

                    presentacion2:{
                    tipo: "Frasco/Ampolla",
                    cantidad:500,
                    unidadCantidad:"mg",

                    reconstituyente: "Agua Destilada",

                    volumen:5,
                    unidadVolumen:"ml",                    
                    
                    descripcion:"En 4,5 ml de agua destilada, obteniendo 100mg/ml, concentracion total 500mg/5ml reconstituido.",

                    estabilidad: "frascoReconstituido"
                }
            },

            estabilidad:{

                frascoReconstituido:{
                    identificador:"Frasco/Ampolla Reconstituido",
                    
                    duracion:{
                        tipo:"Rango",
                        temperaturaAmbiente:1,
                        temperaturaRefrigerada:2,
                        rango:{
                            valorMin:1,
                            valorMax:2,
                        },
                        unidad:"hs",
                    },
                    cuidado:"luego desechar"
                },

                texto1:"Una vez reconstituida dura 1hs a temperatura ambiente y 2hs refrigerada, luego de este tiempo desechar."
            },

            posologia:{
                patologia1:{
                        diagnostico:"Neumonía Aguda de la Comunidad (NAC)",
                        indicaciones:{
                            indicacion1:{
                            descripcion:"200mg/kg/día cada 6hs",
                            dosis:{
                                tipo:"Fija",
                                valor:200,
                                unidad:"mg/kg/día"
                            },
                            intervalo:{
                                valor:6,
                                unidad:"hs",
                            },
                            via: "EV",
                            acceso: "periférico o central"  
                            },
                        }
                },
                patologia2:{
                        diagnostico:"Neumonia con derrame",
                        indicaciones:{
                            indicacion1:{
                            descripcion:"300mg/kg/día cada 6hs",
                            dosis:{
                                tipo:"Fija",
                                valor:300,
                                unidad:"mg/kg/día"
                            },
                            intervalo:{
                                valor:6,
                                unidad:"hs",
                            },
                            via: "EV",
                            acceso: "periférico o central"  
                            },
                        }
                },
                patologia3:{
                        diagnostico:"Otitis y Sinusitis",
                        indicaciones:{
                            indicacion1:{
                            descripcion:"100mg/kg/día cada 6hs",
                            dosis:{
                                tipo:"Fija",
                                valor:100,
                                unidad:"mg/kg/día"
                            },
                            intervalo:{
                                valor:6,
                                unidad:"hs",
                            },
                            via: "EV",
                            acceso: "periférico o central"  
                            },
                        }
                },
                patologia4:{
                        diagnostico:"Meningitis y Endocarditis",
                        indicaciones:{
                            indicacion1:{
                            descripcion:"300 a 400mg/kg/día",
                            dosis:{
                                tipo:"Rango",
                                valorMin:300,
                                valorMax:400,
                                unidad:"mg/kg/día"
                            
                            },
                            intervalo:{
                                valor:6,
                                unidad:"hs",
                            },
                            via: "EV",
                            acceso: "periférico o central"  
                            },
                        }
                },
                patologia5:{
                        diagnostico:"Dosis Máxima 12gr/día",
                        indicaciones:{
                            indicacion1:{
                                dosis:{
                                    tipo:"Maxima",
                                    valor:12000,
                                    unidad:"mg/día"
                                },
                                intervalo:{
                                    valor:24,
                                    unidad:"hs"
                                },
                            via: "EV",
                            acceso: "periférico o central"  
                            },
                        }
                }
                    },

            administracion:{
                diluyente: "S.F 0,9%",
                IVD:{
                   // Concentraciones expresadas en mg/ml.
                    // Se utilizan para calcular el volumen final de dilución.
                    titulo:"IVD: INTRAVENEOSA DIRECTA O PUSH",

                    diluyente:{
                        nombre:"Solución Fisiológica",
                        abreviatura:"S.F 0,9%",
                    },

                    dosis:{
                        recomendada:{
                            concentracion:10,
                            unidad:"mg/ml",
                            acceso:"Perferico",
                            descripcion: "10mg/ml",
                            tipoDilucion: "llevarA"
                        },
                        maxima:{
                            concentracion:50,
                            unidad:"mg/ml",
                            acceso:"Central",
                            descripcion:"50mg/ml",
                            tipoDilucion:"llevarA"
                        },
                    },
                  
                    
                    tiempoInfusion:{
                        descripcion:"Entre 5 a 10 minutos"
                    },

                    restriccionHidrica:{
                        estado: "SinDatos",
                        descripcion: ""
                    }
                },

                IVI:{
                    // Concentraciones expresadas en mg/ml.
                    // Se utilizan para calcular el volumen final de dilución.
                    titulo:"IVD: INTRAVENEOSA DIRECTA O PUSH",

                    diluyente:{
                        nombre:"Solución Fisiológica",
                        abreviatura:"S.F 0,9%",
                    },

                    dosis:{
                        recomendada:{
                            concentracionMin:10,
                            concentracionMax:20,
                            unidad:"mg/ml",
                            acceso:"Perferico",
                            descripcion: "10-20mg/ml",
                            tipoDilucion: "llevarA"
                        },
                        maxima:{
                            concentracion:30,
                            unidad:"mg/ml",
                            acceso:"Central",
                            descripcion:"10-20mg/ml",
                            tipoDilucion:"llevarA"
                        },
                    },
                  
                    
                    tiempoInfusion:{
                        descripcion:"En 30 minutos, preparar y administrar inmediatamente"
                    },

                },

                IM:{
                    // Concentraciones expresadas en mg/ml.
                    // Se utilizan para calcular el volumen final de dilución.
                    diluyente:"3,5ml Agua Destilada o lidocaina al 2%",
                    concentracion:"250mg/ml",
                    miligramos: 250,
                    volumen:1
                }
            },

            observaciones:[
                "El tiempo de preparación y administración no debe exceder 1 hora.",
                "Observar signos de anafilaxia durante los primero minutos tras la administración.",
                "No usar DX 5%, acelere su hidrólisis.",
                "No mezcla con soluciones que contengan aminoácidos."
            ],

            compatibilidad:{
                compatible:["Aciclovir","Alprostadil", "Anidulofungina","Claritromicina","Daptomizina","Dexmedetomidina","Foscarnet","Linezolid","Metronidazol","Milrinona",
                            "Octreotida", "Pancuronio","Remifentanilo","Rocuronio","Tigeciclina","Vecuronio","Voriconazol"],

                combinacionVariable:["Adrenalina", "Amikacina", "Bicarbonato de Sodio", "Cefalotina","Cefotaxima","Ceftazidima","Ceftriaxona","Cefuroxima","Ciclosporina",
                                    "Clindamicina","Cloruro de Calcio","Cloruro de Potasio","Colistin","Dexametasona","Enalaprilato","Esmolol","Estreptomicina","Fentanilo",
                                    "Furosemida","Gentamicina","Gluconato de Calcio","Heparina Sódica","Hidrocortisona","Imipenem","Insulina Regular","Labetalol",
                                    "Lidocaina","Metroclopramida","Morfina","Sulfato de Magnesio","Noradrenalina","Penicilina G. Sódica","Vancomicina","Vasoprecina"],

                noProbada:["Ampicilina Sulbactam","Ciprofloxacina","Clonidina","Fenobarbital","Fosfato de Potasio","Fosfato de Sodio","Hidroxocobalamina","Indometacina Sódica",
                        "Levetiracetam","Meropenem","Metilprednisolona","Omeprazol", "Paracetamol","Piperacilina Tazobactam","Propanolol","Ranitidina","Rifampicina","Sildenafil",
                        "Tiopental","Zidovudina"],

                noCompatible:["Acido Tranexámico", "aminofilina","Amiodarona","Anfotericina (ABELCET)", "Anfotericina B", "Anfotericina Liposomal", "Caspofungina","Clorpromazina",
                            "Diazepan","difenhidramina","Dobutamina","Fenitoina","Fluconazol","Ganciclovir","Lorazepam","Midazolam","Pentamidina","Sulfametoxazol Trimetropina"],

                combinacionIncierta:["Dopamina","Nitroprusiato de Sodio","Tacrolimus"]
            },

            efectosAdversos:[
                "Náuseas","Vomitos","Diarrea","Glositis","Anemia","Trombocitopenia","Eosinofilia","Eritema","Rash","Urticaria"
            ]
    },

    //ADRENALINA
    Adrenalina:{
            nombre: "Adrenalina",

            tipo:"Agonista adrenérgico (Alfa y Beta), simpaticomimético,",

            unidadFarmacologica:"mg",

            categoria:"inotropicos",

            accion:["Actua en reacciones de hipersensibilidad",
                "Broncodilatador",
                "Relajación del músculo liso del árbol bronquial",
                "estimulación cardíaca",
                "dilatación de vasos del músculo esquelético por estimulación receptores alfa, beta 1 y beta 2",
                "Dosis pequeñas pueden causar vasodilatación a través de receptores vasculares beta 2.",
                "Dosis grandes pueden producir constricción del músculo esquelético y liso vascular. Dilata la pupila post contracción del músculo dilatador",
                "aumenta la presión arterial y la frecuencia cardíaca, aumenta el gasto cardíaco y la contractilidad miocárdica.",
                "Aumenta la glucogenólisis y la liberación de glucosa, aumenta la lipólisis y la liberación de ácidos grasos libres.",
                "Aumenta la liberación de renina y disminuye la liberación de insulina."
            ],

            presentaciones: {
                    presentacion1:{
                        tipo:"ampolla",
                    vial: "Ampolla (Solución Inyectable)",
                    miligramos: 1,
                    mililitros: 1,
                    volumenFinal: 10,
                    reconstituyente: "No se reconstituye",
                    concentracionMG: 1,
                    concentracionML: 1,
                    descripcion:"Concentracion total 1mg/ml(1:1000)."
                    },

            },

            estabilidad:{

                vialAbierto:{
                    cuidado:"una vez abierta la ampolla usar y desechar"
                },

                jeringapreprada:{
                    duracion:8,
                    unidad:"hs",
                    cuidado:"dosi preparada para push, desechar en cada turno"
                },
            },

            posologia:{
                patologia1:{
                        diagnostico:"Reanimación: recien nacido, lactante y niño",
                        indicaciones:{
                            indicacion1:{
                            descripcion:"0.01 mg/kg (0.1 ml/kg/dosis de solución 1:10000) cada 3-5 min",
                            dosis:0.01,
                            unidad:"ml/kg/dosis",
                            volumen:0.1,
                            unidadVolumen:"ml/kg/dosis",
                            concentracion:1,
                            concentracionUnidad:"1:10000",
                            intervalo:{
                                min:3,
                                max:5,
                                unidad:"minutos"
                            },
                            dosismax:1,
                            via: "EV",
                            acceso: "periférico o central"  
                            },
                        }
                },
                patologia2:{
                        diagnostico:"Reanimación: Adultos",
                        indicaciones:{
                            indicacion1:{
                            descripcion:"1mg/dosis cada 3-5 min",
                            dosis:1,
                            unidad:"mg/dosis",
                            via: "EV",
                            acceso: "periférico o central"  
                            },
                        }
                },
                patologia3:{
                        diagnostico:"Shock: Mantenimiento infusion continua",
                        indicaciones:{
                            indicacion1:{
                            descripcion:"0.1-1 μg/kg/min",
                            dosis:{
                                rango:{
                                    valorMin:0.1,
                                    valorMax:1,
                                    unidad:"μg/kg/min"
                                },
                            },
                            tiempoInfusion:{
                                tiempo:60,
                                unidad:"minutos"
                            },
                            via: "EV",
                            acceso: "central"  
                            },
                        }
                },
                patologia4:{
                        diagnostico:"Anafilaxia",
                        indicaciones:{
                            indicacion1:{
                            descripcion:"IM o SC. Repetir cada 5 a 15 minutos, hasta un total de 3 dosis.",
                            via:["IM","SC"],
                            intervalo:{
                                min:5,
                                max:15,
                                unidad:"minutos"
                            },
                            dosisMaximaAplicaciones:3,
                            administracion:{
                                viaPreferente:"IM",
                                viaAlternativa:"SC",
                                sitio:"Cara anterolateral del muslo",
                                observacion:"Puede administrase incluso a través de la ropa"
                            }
                            },
                        }
                },
                patologia5:{
                        diagnostico:"Crisis respiratoria",
                        indicaciones:{
                            indicacion1:{
                            descripcion:"Nebulizado: 3 a 5 mg + 4 ml de SF con oxígeno a bajo flujo 4-6 L/min.",
                            dosis:{
                                min:3,
                                max:5,
                                unidad:"mg"
                            },

                            via:"Nebulización",

                            dilucion:{
                                diluyente:"S.F. 0,9%",
                                volumen:4,
                                unidad:"ml"
                            },

                            oxigenoterapia:{
                                flujoMin:4,
                                flujoMax:6,
                                unidad:"L/Min"
                            },
                            
                            importante:"Administrar asociado a corticoide",
                            },
                        }
                },
                    },

            administracion:{
                diluyente: "S.F 0,9%",
                IVD:{
                    // Concentraciones expresadas en mg/ml.
                    // Se utilizan para calcular el volumen final de dilución.
                    descripcion: "1mg/9ml",
                    volumenFinal: 10,
                    volumenDiluyente: 9,
                    unidadVolumen: "ml",
                    miligramos: 1,
                    unidad: "mg",
                    concentracion:"1:10.000",
                    tiempoInfusion:{
                        infusionMin: 5,
                        infusionMax: 10,
                        unidad:"minutos"
                    },
                },

                infusionContinua:{
                    descripcion:"Dosis indicada  en 100ml de DX 5%",
                    preparacion:{
                        tipo:"diluiEn",
                        diluyente:"DX 5%",
                        volumen: 100,
                        unidad:"ml",
                        recambio:{
                            duracion:24,
                            unidad:"horas"
                        }
                    },

                    proteccion:{
                        luz:true,
                        descripcion:"Proteger de la luz"
                    },
                    
                    perfus:{
                        fotosensible:true,

                        recambio:{
                            duracion:7,
                            unidad:"días"
                        }
                    },

                    identificacion:{
                        rotulo:"Rojo",
                        descripcion:"Rotulo de color rojo"
                    },
                    seguridad:["Los inotropicos se deben administrar por un lumen unicamente destinado a inotropicos",
                        "No mezclar con otros medicamentos ni con Nutrición Parenteral (NPT).",
                        "Purgar el sistema y conector de tres lúmenes antes de iniciar la infusión, para evitar la acumulación de burbujas",]
                },

                IM:{
                    descripcion:"IM o SC. Repetir cada 5 a 15 minutos, hasta un total de 3 dosis.",
                            via:["IM","SC"],
                            intervalo:{
                                min:5,
                                max:15,
                                unidad:"minutos"
                            },
                            dosisMaximaAplicaciones:3,
                            administracion:{
                                viaPreferente:"IM",
                                viaAlternativa:"SC",
                                sitio:"Cara anterolateral del muslo",
                                observacion:"Puede administrase incluso a través de la ropa"
                            }
                },

                ET:{
                    descripcion:"0,1mg/kg (0.1ml/kg de adrenalina 1:1000, 1ml/1mg) máximo de 2,5mg, luego lavar con 2,5-5ml de solución fisiológica",
                    via:"Endotraqueal",

                    dosis:0.1,
                    unidad:"mg/kg",

                    volumenPorKg:0.1,
                    unidadVolumenPorKg:"ml/kg",

                    concentracion:"1:1000",

                    dosisMax:2.5,
                    unidadDosisMax:"mg",

                    dilucion:9,
                    unidadDilucion:"ml",
                    diluyente:"S.F 0,9%",
                    
                    lavado:{
                        min:2.5,
                        max:5,
                        unidad:"ml",
                        solucion:"S.F. 0,9%"
                    }

                }
            },

            observaciones:[
                "Proteger de la luz.",
                "No administrar si aparece coloración parda o rosácea.",
                "Incompatible con soluciones alcalinas por ej. Bicarbonato de sodio.",
            ],

            compatibilidad:{
                compatible:["Amikacina","Amiodarona","Anfotericina (ABELCET)","Anfotericina Liposomal","Anidulofungina","Cloruro de Calcio","Caspofungina",
                    "Cefalotina","Cefotaxima","Ceftazidima","Ceftriaxona","Cefuroxima","Ciclosporina","Clindamicina","Clonidina","Clorpromazina","Colistin",
                    "Daptomizina","Dexametasona","Dexmedetomidina","Difenhidramina","Dobutamina","Dopamina","Enalaprilato","Esmolol","Estreptomicina",
                    "Fentanilo","Fluconazol","Foscarnet","Furosemida","Gentamicina","Gluconato de Calcio","Heparina Sódica","Hidrocortisona","Imipenem",
                    "Labetalol","Lidocaina","Linezolid","Lorazepam","Metilprednisolona","Metroclopramida","Midazolam","Milrinona","Morfina",
                    "Nitroprusiato de Sodio","Noradrenalina","Octreotida","Sulfato de Magnesio","Pancuronio","Penicilina G. Sódica","Pentamidina",
                    "Piperacilina Tazobactam","Cloruro de Potasio","Propanolol","Ranitidina","Remifentanilo","Rocuronio","Tacrolimus","Tigeciclina",
                    "Vancomicina","Vasoprecina","Vecuronio",
                ],

                combinacionVariable:["Ampicilina","Ampicilina Sulbactam","Insulina Regular",
                ],

                noProbada:["Acido Tranexámico","Alprostadil","Ciprofloxacina","Claritromicina","Ganciclovir","Hidroxocobalamina","Fosfato de Potasio","Fosfato de Sodio",
                    "Levetiracetam","Meropenem","Metronidazol","Omeprazol","Paracetamol","Rifampicina","Sildenafil","Voriconazol","Zidovudina"
                ],

                noCompatible:["Aciclovir","Aminofilina","Anfotericina B","Bicarbonato de Sodio","Diazepan","Fenitoina","Fenobarbital","Indometacina Sódica",
                       "Tiopental","Sulfametoxazol Trimetropina"],

                combinacionIncierta:[]
            },

            efectosAdversos:[
                "Palidez",
                "Taquicardia",
                "Hipertensión",
                "Incremento del consumo del oxigeno miercárdico",
                "Arritmias cardíacas",
                "Muerte subita",
                "Ansiedad",
                "Cefalea",
                "Náuseas",
                "Retención acida de orina en pacientes con obstrucción vesical",
                "Debilidad",
                "Temblor",
                "Exacerbación del glaucoma del ángulo estrecho",
                "Disminución del flujo sanguíneo y esplácnico",
            ],
    },

    //FENTANILO 
    Fentanilo:{
            nombre: "Fentanilo",

            tipo:"Mecanismo de acción similar a la morfina",

            accion:["Coadyuvante de la anestesia general.",
                
            ],

            unidadFarmacologica:"mcg",

            categoria:"sedoanalgesia",

            presentaciones: {
                    presentacion1:{
                        /*DATOS DE LA PRESENTACION */
                        nombre: "Ampolla 250mcg/5ml",
                        viasPermitidas:["EV"],
                        tipo: "Ampolla (Solución Inyectable)",

                        /*DATOS DEL FARMACO*/
                        cantidad:250,
                        unidadCantidad:"mcg",

                        /*DATOS DE LA CONCENTRACION EN ML */
                        volumen:5,
                        unidadVolumen:"ml",

                        /*DATOS DE LA RECONSTITUCION */
                        reconstituyente: "No se reconstituye",
                        descripcion:"Concentracion total 250mcg/5ml.",

                        /*SELECTOR DE ESTABILIDAD */
                        estabilidad: "vialAbierto"
                    },


            },

            estabilidad:{

                vialAbierto:{
                    cuidado:"una vez abierta la ampolla usar y desechar"
                },

            },

            posologia:{
                patologia1:{
                        diagnostico:"Inducción a la anestecia",
                        indicaciones:{
                            indicacion1:{
                                descripcion:"1 - 12 años: 1 - 2 μg/kg/dosis, > 12 años",
                                dosis:{   
                                        tipo:"Rango",
                                        valorMin:1,
                                        valorMax:2,
                                        unidad:"μg/kg/dosis"
                                }, 
                                via: "EV",
                                acceso: "periférico o central"
                            },
                            indicacion2:{
                                descripcion:"Mayor de 12 años y  adultos",
                                dosis:{
                                        tipo:"Rango",
                                        valorMin:0.5,
                                        valorMax:1,
                                        unidad:"μg/kg/dosis"
                                },
                                via: "EV",
                                acceso: "periférico o central"  
                            },
                        }
                },
                patologia2:{
                        diagnostico:"Intubación endotraqueal",
                        indicaciones:{
                            indicacion1:{
                                descripcion:"5-10 μg/kg",
                                dosis:{
                                        tipo:"Rango",
                                        valorMin:5,
                                        valorMax:10,
                                        unidad:"μg/kg"

                                },
                                via: "EV",
                                acceso: "periférico o central"  
                            },
                        }
                },
                patologia3:{
                        diagnostico:"Pacientes en A.R.M.",
                        indicaciones:{
                            indicacion1:{
                            descripcion:"infusión continua: 1-2 μg/kg/hora.",
                            dosis:{
                                    tipo:"Rango",
                                    valorMin:1,
                                    valorMax:2,
                                    unidad:"μg/kg/hs"
                            },
                            via: "EV",
                            acceso: "central"  
                            },
                        }
                },
            },

            administracion:{
                EV:{
                    formas:{
                        IVD:{
                    // Concentraciones expresadas en mg/ml.
                    // Se utilizan para calcular el volumen final de dilución.
                    descripcion: "50mcg/1ml",
                    dosis:{
                        valor:50,
                        unidad:"mcg",
                    },
                    volumenml:{
                        valor:1,
                        unidad:"ml"
                    },
                    diluyente: "S.F 0,9%",
                    tiempoInfusion:{
                        
                        valorMin:3,
                        valorMax:5,
                        unidad:"minuto"
                    },
                        },

                        infusionContinua:{
                                    titulo:"IVC: INFUSIÓN CONTINUA",
                                    descripcion:"Llevar dosis indicada  a 24ml con DX 5%",
                                    acceso:{permitidos:["Periferico o Central"]},
                                
                                    preparacion:{
                                        tipo:"llevarDosisAVolumenFinal",

                                        volumenFinal:{
                                            volumen: 24,
                                            unidad:"ml",
                                        },

                                        diluyente:"DX 5%",
                                        
                                        preparacionInicial:{
                                            requerida:true,
                                            multiplicadorDosis:2,
                                            volumenFinalMultiplicador:2,
                                            motivo:"Preparacion inicial para purgado del perfus"
                                        },

                                        recambio:{
                                            duracion:24,
                                            unidad:"horas"
                                        
                                        },

                                        proteccion:{
                                            luz:true,
                                            descripcion:"Proteger de la luz"
                                        },
                                        
                                        perfus:{
                                            fotosensible:true,
                                            nombre:"Set Primario PLUM, fotosensible 14007.",

                                            recambio:{
                                                duracion:7,
                                                unidad:"días"
                                            }
                                        },

                                        identificacion:{
                                            rotulo:"verde",
                                            descripcion:"Rotulo de color verde"
                                        },
                                        seguridad:["La sedoanalgesia se deben administrar por un lumen o acceso unicamente destinado a sedoanalgesia",
                                        ]
                                        
                                    },
                                        
                                        
                        },
                    }
                    
                },
                


            
            },

            observaciones:{

                generales:["Proteger de la luz.",],
                
                precauciones:["Debe evitarse el uso simultáneo de derivados del ácido barbitúrico, ya que el efecto depresor respiratorio del fentanilo podría aumentar",
                    "No se recomienda el uso simultáneo con nalbufina podrían inducir síntomas de abstinencia en pacientes dependientes de los opiáceos.",
                ],
                
                alertas:[],
                
                contraindicaciones:[
                ],
                
                criticas:["La sobredosis puede ser tratada con naloxona.",
                    "El uso simultáneo de otros depresores del SNC podría producir efectos depresores aditivos y podrían darse casos de hipoventilación, hipotensión y también sedación profunda o coma."
                ],
            
            },

            compatibilidad:{
                compatible:["Aciclovir","Adrenalina","Alprostadil","Amikacina","Aminofilina","Anfotericina (ABELCET)","Anfotericina Liposomal",
                    "Anidulofungina","Bicarbonato de Sodio","Cloruro de Calcio","Cloruro de Potasio","Caspofungina","Cefalotina","Cefotaxima","Ceftazidima","Ceftriaxona","Cefuroxima","Ciclosporina",
                    "Clindamicina","Clonidina","Clorpromazina","Daptomizina","Dexametasona","Dexmedetomidina","Difenhidramina","Dobutamina",
                    "Dopamina","Enalaprilato","Esmolol","Fenobarbital","Fluconazol","Foscarnet","Furosemida","Ganciclovir","Gentamicina","Gluconato de Calcio",
                    "Heparina Sódica","Hidrocortisona","Imipenem","Indometacina Sódica","Insulina Regular","Labetalol","Lidocaina","Linezolid","Lorazepam",
                    "Metilprednisolona","Metroclopramida","Midazolam","Milrinona","Morfina","Nitroprusiato de Sodio","Noradrenalina","Octreotida","Pancuronio",
                    "Paracetamol","Penicilina G. Sódica","Pentamidina","Piperacilina Tazobactam","Propanolol","Ranitidina","Remifentanilo","Rocuronio",
                    "Sulfato de Magnesio","Tacrolimus","Tigeciclina","Tiopental","Vancomicina","Vasoprecina","Vecuronio","Voriconazol",  
                ],

                combinacionVariable:["Amiodarona","Ampicilina","Ampicilina Sulbactam","Anfotericina B","Diazepan",
                    
                ],

                noProbada:["Acido Tranexámico","Ciprofloxacina","Claritromicina","Colistin","Estreptomicina","Fosfato de Potasio","Fosfato de Sodio","Levetiracetam",
                    "Meropenem","Metronidazol","Omeprazol","Rifampicina","Sildenafil","Zidovudina"  
                ],

                noCompatible:["Fenitoina","Hidroxocobalamina","Sulfametoxazol Trimetropina"
                ],

                combinacionIncierta:[]
            },

            efectosAdversos:[
                "Apnea",
                "Bradicardia",
                "Tórax rigido o leñoso",
                "Depresión respiratoria",
                "Arritmias cardíacas",
            ],
    },

    //PRUEBA
    Prueba:{
            nombre: "PRUEBA",

            tipo:"TIPO DE FARMACO",

            accion:"LO QUE EL FARMACO HACE",

            unidadFarmacologica:"mg",

            categoria:"antibiotico",

            presentaciones: {
                    presentacion1:{
                    nombre: "FA 1000mg",
                    viasPermitidas:["EV","IM"],
                    tipo: "Ampolla",
                    cantidad: 1000,
                    unidadCantidad:"mg",

                    reconstituyente: "Agua Destilada",

                    volumen:10,
                    unidadVolumen:"ml",
                    
                    descripcion:"En 9,5 ml de agua destilada, obteniendo 100mg/ml, concentracion total 1000mg/10ml reconstituido.",

                    estabilidad: "frascoReconstituido"
                    },

                    presentacion2:{
                    nombre: "FA 500mg",
                    viasPermitidas:["EV","IM"],
                    tipo: "Frasco/Ampolla",
                    cantidad:500,
                    unidadCantidad:"mg",

                    reconstituyente: "Agua Destilada",

                    volumen:5,
                    unidadVolumen:"ml",                    
                    
                    descripcion:"En 4,5 ml de agua destilada, obteniendo 100mg/ml, concentracion total 500mg/5ml reconstituido.",

                    estabilidad: "frascoReconstituido"
                    },
                    presentacion3:{
                    nombre: "Suspención 250mg/5ml",
                    viasPermitidas:["VO"],
                    tipo: "Suspención",
                    cantidad:250,
                    unidadCantidad:"mg",

                    reconstituyente: "Agua Destilada",

                    volumen:5,
                    unidadVolumen:"ml",                    
                    
                    descripcion:"Llenar con agua destilada hasta la marca indicada enel frasco.",

                    estabilidad: "suspencionReconstituida"
                    }
            },

            estabilidad:{

                frascoReconstituido:{

                    identificador:"Frasco/Ampolla Reconstituido",

                    duracion:{
                        temperaturaAmbiente:12,
                        temperaturaRefrigerada:2,
                        unidad:"hs",
                    },

                    cuidado:"luego desechar",
                    
                    texto1:"Una vez reconstituida dura 1hs a temperatura ambiente y 2hs refrigerada, luego de este tiempo desechar."
                    },
                suspencionReconstituida:{
                        identificador:"Suspención Reconstituida",

                        duracion:{
                            temperaturaAmbiente:14,
                            unidad:"días",
                        },
                        cuidado:"Proteger de la luz",
                        texto1:"Una vez reconstituida dura 14 diasa temperatura ambiente, luego de este tiempo desechar."
                },
                    },

                

            posologia:{
                patologia1:{
                        diagnostico:"Neumonía Aguda de la Comunidad (NAC)",
                        indicaciones:{
                            indicacion1:{
                            descripcion:"200mg/kg/día cada 6hs",
                            dosis:{
                                tipo:"Fija",
                                valor:200,
                                unidad:"mg/kg/día"
                            },
                            intervalo:{
                                valor:6,
                                unidad:"hs",
                            },
                            via: "EV",
                            acceso: "periférico o central"  
                            },
                        }
                },
                patologia2:{
                        diagnostico:"Neumonia con derrame",
                        indicaciones:{
                            indicacion1:{
                            descripcion:"300mg/kg/día cada 6hs",
                            dosis:{
                                tipo:"Fija",
                                valor:300,
                                unidad:"mg/kg/día"
                            },
                            intervalo:{
                                valor:6,
                                unidad:"hs",
                            },
                            via: "EV",
                            acceso: "periférico o central"  
                            },
                        }
                },
                patologia3:{
                        diagnostico:"Otitis y Sinusitis",
                        indicaciones:{
                            indicacion1:{
                            descripcion:"100mg/kg/día cada 6hs",
                            dosis:{
                                tipo:"Fija",
                                valor:100,
                                unidad:"mg/kg/día"
                            },
                            intervalo:{
                                valor:6,
                                unidad:"hs",
                            },
                            via: "EV",
                            acceso: "periférico o central"  
                            },
                            indicacion2:{
                            descripcion:"PRUEBA 100mg/kg/dosis cada 6hs",
                            dosis:{
                                tipo:"Fija",
                                valor:100,
                                unidad:"mg/kg/dosis"
                            },
                            intervalo:{
                                valor:6,
                                unidad:"hs",
                            },
                            via: "EV",
                            acceso: "periférico o central"  
                            },
                            indicacion3:{
                            descripcion:"PRUEBA 100mg/dia",
                            dosis:{
                                tipo:"Fija",
                                valor:100,
                                unidad:"mg/día"
                            },
                            intervalo:{
                                valor:6,
                                unidad:"hs",
                            },
                            via: "EV",
                            acceso: "periférico o central"  
                            },
                            indicacion4:{
                            descripcion:"PRUEBA 400mg",
                            dosis:{
                                tipo:"Fija",
                                valor:400,
                                unidad:"mg"
                            },
                            
                            via: "EV",
                            acceso: "periférico o central"  
                            },
                        }
                },
                patologia4:{
                        diagnostico:"Meningitis y Endocarditis",
                        indicaciones:{
                            indicacion1:{
                            descripcion:"300 a 400mg/kg/día",
                            dosis:{
                                tipo:"Rango",
                                valorMin:300,
                                valorMax:400,
                                unidad:"mg/kg/día"
                            
                            },
                            intervalo:{
                                valor:6,
                                unidad:"hs",
                            },
                            via: "EV",
                            acceso: "periférico o central"  
                            },
                            indicacion2:{
                            descripcion:"PRUEBA 300 a 400mg/kg/dosis",
                            dosis:{
                                tipo:"Rango",
                                valorMin:300,
                                valorMax:400,
                                unidad:"mg/kg/dosis"
                            
                            },
                            intervalo:{
                                valor:6,
                                unidad:"hs",
                            },
                            via: "EV",
                            acceso: "periférico o central"  
                            },
                            indicacion3:{
                            descripcion:"PRUEBA 300 a 400mg/día",
                            dosis:{
                                tipo:"Rango",
                                valorMin:300,
                                valorMax:400,
                                unidad:"mg/día"
                            
                            },
                            intervalo:{
                                valor:6,
                                unidad:"hs",
                            },
                            via: "EV",
                            acceso: "periférico o central"  
                            },
                            indicacion3A:{
                            descripcion:"PRUEBA 300 a 400mg/día",
                            dosis:{
                                tipo:"Rango",
                                valorMin:300,
                                valorMax:400,
                                unidad:"mg/día"
                            
                            },
                            intervalo:{
                                valor:8,
                                unidad:"hs",
                            },
                            via: "EV",
                            acceso: "periférico o central"  
                            },
                            indicacion3B:{
                            descripcion:"PRUEBA 300 a 400mg/día",
                            dosis:{
                                tipo:"Rango",
                                valorMin:300,
                                valorMax:400,
                                unidad:"mg/día"
                            
                            },
                            intervalo:{
                                valor:12,
                                unidad:"hs",
                            },
                            via: "EV",
                            acceso: "periférico o central"  
                            },
                            indicacion3C:{
                            descripcion:"PRUEBA 300 a 400mg/día",
                            dosis:{
                                tipo:"Rango",
                                valorMin:300,
                                valorMax:400,
                                unidad:"mg/día"
                            
                            },
                            intervalo:{
                                valor:24,
                                unidad:"hs",
                            },
                            via: "EV",
                            acceso: "periférico o central"  
                            },
                            indicacion4:{
                            descripcion:"PRUEBA 300 a 400mg",
                            dosis:{
                                tipo:"Rango",
                                valorMin:300,
                                valorMax:400,
                                unidad:"mg"
                            
                            },
                            intervalo:{
                                valor:6,
                                unidad:"hs",
                            },
                            via: "EV",
                            acceso: "periférico o central"  
                            },
                        }
                },
                patologia5:{
                        diagnostico:"Dosis Máxima MG/KG/DÍA",
                        indicaciones:{
                            indicacion2:{
                                dosis:{
                                    tipo:"Maxima",
                                    valor:100,
                                    unidad:"mg/kg/día"
                                },
                                intervalo:{
                                    valor:24,
                                    unidad:"hs"
                                },
                            via: "EV",
                            acceso: "periférico o central"  
                            },
                        }      
                },
                patologia6:{
                        diagnostico:"Dosis Máxima MG/KG/DOSIS",
                        indicaciones:{
                            indicacion3:{
                                dosis:{
                                    tipo:"Maxima",
                                    valor:100,
                                    unidad:"mg/kg/dosis"
                                },
                                intervalo:{
                                    valor:24,
                                    unidad:"hs"
                                },
                            via: "EV",
                            acceso: "periférico o central"  
                            },
                        }      
                },
                patologia7:{
                        diagnostico:"Dosis Máxima MG/día",
                        indicaciones:{
                            indicacion1:{
                                dosis:{
                                    tipo:"Maxima",
                                    valor:12000,
                                    unidad:"mg/día"
                                },
                                intervalo:{
                                    valor:24,
                                    unidad:"hs"
                                },
                            via: "EV",
                            acceso: "periférico o central"  
                            },
                        }      
                },
                 patologia8:{
                        diagnostico:"Dosis Máxima MG",
                        indicaciones:{
  
                            indicacion3:{
                                dosis:{
                                    tipo:"Maxima",
                                    valor:12000,
                                    unidad:"mg"
                                },
                                intervalo:{
                                    valor:24,
                                    unidad:"hs"
                                },
                            via: "EV",
                            acceso: "periférico o central"  
                            },
                        }      
                }
                    },

            administracion:{
                EV:{
                    formas:{
                        IVD:{
                            // Concentraciones expresadas en mg/ml.
                            // Se utilizan para calcular el volumen final de dilución.
                            titulo:"IVD: INTRAVENEOSA DIRECTA O PUSH",

                            diluyente:{
                                nombre:"Solución Fisiológica",
                                abreviatura:"S.F 0,9%",
                            },

                            dosis:{
                                recomendada:{
                                    concentracion:10,
                                    unidad:"mg/ml",
                                    acceso:"Perferico",
                                    descripcion: "10mg/ml",
                                    tipoDilucion: "llevarA"
                                },
                                maxima:{
                                    concentracion:50,
                                    unidad:"mg/ml",
                                    acceso:"Central",
                                    descripcion:"50mg/ml",
                                    tipoDilucion:"diluirEn"
                                },
                            },
                        
                            
                            tiempoInfusion:{
                                descripcion:"Entre 5 a 10 minutos"
                            },

                            restriccionHidrica:{
                                estado: "SinDatos",
                                descripcion: ""
                            }
                                },
                        IVI:{
                            // Concentraciones expresadas en mg/ml.
                            // Se utilizan para calcular el volumen final de dilución.
                            titulo:"IVI: INTRAVENEOSA INTERMITENTE O 2DO CANAL",

                            diluyente:{
                                nombre:"Solución Fisiológica",
                                abreviatura:"S.F 0,9%",
                            },

                            dosis:{
                                recomendada:{
                                    concentracionMin:10,
                                    concentracionMax:20,
                                    unidad:"mg/ml",
                                    acceso:"Perferico",
                                    descripcion: "10-20mg/ml",
                                    tipoDilucion: "llevarA"
                                },
                                maxima:{
                                    concentracion:30,
                                    unidad:"mg/ml",
                                    acceso:"Central",
                                    descripcion:"30mg/ml",
                                    tipoDilucion:"diluirEn"
                                },
                            },
                        
                            
                            tiempoInfusion:{
                                descripcion:"En 30 minutos, preparar y administrar inmediatamente"
                            },

                        },
                        infusionContinua:{
                            titulo:"IVC: INFUSIÓN CONTINUA",
                            descripcion:"Llevar dosis indicada  a 24ml con DX 5%",
                            acceso:{permitidos:["Periferico o Central"]},
                        
                            preparacion:{
                                tipo:"llevarDosisAVolumenFinal",

                                volumenFinal:{
                                    volumen: 24,
                                    unidad:"ml",
                                },
                                
                            },
                                
                                diluyente:"DX 5%",
                                
                                preparacionInicial:{
                                    requerida:true,
                                    multiplicadorDosis:2,
                                    volumenFinalMultiplicador:2,
                                    motivo:"Preparacion inicial para purgado del perfus"
                                },

                                recambio:{
                                    duracion:24,
                                    unidad:"horas"
                                
                            },

                            proteccion:{
                                luz:true,
                                descripcion:"Proteger de la luz"
                            },
                            
                            perfus:{
                                fotosensible:true,

                                recambio:{
                                    duracion:7,
                                    unidad:"días"
                                }
                            },

                            identificacion:{
                                rotulo:"verde",
                                descripcion:"Rotulo de color verde"
                            },
                            seguridad:["La sedoanalgesia se deben administrar por un lumen o acceso unicamente destinado a sedoanalgesia",
                            ]
                        },
                    }
                },
                
                IM: {
                    formas: {
                        IM: {
                            // Datos de reconstitución y concentración
                            diluyente: "3,5 ml de agua destilada o lidocaína al 2%",
                            concentracion: "250 mg/ml",
                            miligramos: 250,
                            volumen: 1,

                            // Consideraciones para la administración
                            textos: [
                                {
                                    titulo: "Sitios recomendados:",
                                    texto: ""
                                },
                                {
                                    titulo: "Calibre y longitud de aguja:",
                                    texto: ""
                                }
                            ]
                        }
                    }
                },   
                
                VO: {
                    formas: {
                        VO: {
                            textos: [
                                {
                                    titulo: "Preparación:",
                                    texto: ""
                                },
                                {
                                    titulo: "Administración:",
                                    texto: ""
                                },
                                {
                                    titulo: "Consideraciones:",
                                    texto: ""
                                }
                            ]
                        }
                    }
                },

                SC: {
                    formas: {
                        SC: {
                            textos: [
                                { titulo: "Sitios recomendados:", texto: "" },
                                { titulo: "Calibre y longitud de aguja:", texto: "" },
                                { titulo: "Técnica de administración:", texto: "" },
                                { titulo: "Consideraciones:", texto: "" }
                            ]
                        }
                    }
                },
            },

            observaciones:{

                generales:["Proteger de la luz.",],
                
                precauciones:["Debe evitarse el uso simultáneo de derivados del ácido barbitúrico, ya que el efecto depresor respiratorio del fentanilo podría aumentar",
                    "No se recomienda el uso simultáneo con nalbufina podrían inducir síntomas de abstinencia en pacientes dependientes de los opiáceos.",
                ],
                
                alertas:[],
                
                contraindicaciones:[
                ],
                
                criticas:["La sobredosis puede ser tratada con naloxona.",
                    "El uso simultáneo de otros depresores del SNC podría producir efectos depresores aditivos y podrían darse casos de hipoventilación, hipotensión y también sedación profunda o coma."
                ],
            
            },

            compatibilidad: {
                conexionY: {
                    
                    compatible: ["Aciclovir","Alprostadil", "Anidulofungina","Claritromicina","Daptomizina","Dexmedetomidina","Foscarnet","Linezolid","Metronidazol","Milrinona",
                            "Octreotida", "Pancuronio","Remifentanilo","Rocuronio","Tigeciclina","Vecuronio","Voriconazol"],

                    combinacionVariable: ["Adrenalina", "Amikacina", "Bicarbonato de Sodio", "Cefalotina","Cefotaxima","Ceftazidima","Ceftriaxona","Cefuroxima","Ciclosporina",
                                    "Clindamicina","Cloruro de Calcio","Cloruro de Potasio","Colistin","Dexametasona","Enalaprilato","Esmolol","Estreptomicina","Fentanilo",
                                    "Furosemida","Gentamicina","Gluconato de Calcio","Heparina Sódica","Hidrocortisona","Imipenem","Insulina Regular","Labetalol",
                                    "Lidocaina","Metroclopramida","Morfina","Sulfato de Magnesio","Noradrenalina","Penicilina G. Sódica","Vancomicina","Vasoprecina"],
                                    
                    noProbada: ["Ampicilina Sulbactam","Ciprofloxacina","Clonidina","Fenobarbital","Fosfato de Potasio","Fosfato de Sodio","Hidroxocobalamina","Indometacina Sódica",
                        "Levetiracetam","Meropenem","Metilprednisolona","Omeprazol", "Paracetamol","Piperacilina Tazobactam","Propanolol","Ranitidina","Rifampicina","Sildenafil",
                        "Tiopental","Zidovudina"],

                    noCompatible: ["Acido Tranexámico", "aminofilina","Amiodarona","Anfotericina (ABELCET)", "Anfotericina B", "Anfotericina Liposomal", "Caspofungina","Clorpromazina",
                            "Diazepan","difenhidramina","Dobutamina","Fenitoina","Fluconazol","Ganciclovir","Lorazepam","Midazolam","Pentamidina","Sulfametoxazol Trimetropina"],

                    combinacionIncierta: ["Dopamina","Nitroprusiato de Sodio","Tacrolimus"]
                },

                mismaJeringa: {
                    compatible: [],
                    combinacionVariable: [],
                    noProbada: [],
                    noCompatible: [],
                    combinacionIncierta: []
                },

                mismaBolsa: {
                    compatible: [],
                    combinacionVariable: [],
                    noProbada: [],
                    noCompatible: [],
                    combinacionIncierta: []
                }
            },

            efectosAdversos:[
                "Náuseas","Vomitos","Diarrea","Glositis","Anemia","Trombocitopenia","Eosinofilia","Eritema","Rash","Urticaria"
            ],
            bibliografia: [
                {
                    titulo: "Ficha técnica oficial",
                    tipo: "Ficha técnica",
                    url: "https://sitio-oficial.org/ficha",
                    edicion: "",
                    fechaConsulta: ""
                },
                {
                    titulo: "Manual de administración de medicamentos",
                    autor: "Institución responsable",
                    tipo: "Manual",
                    url: "https://sitio-oficial.org/manual",
                    edicion: "2.ª edición",
                    fechaConsulta: ""
                }
            ],   autor: "Laboratorio o institución responsable",
    
    }
}



export default medicamentos;
//ESTO ES IMPORTANTE PARA QUE LOS OTROS DOCUMENTOS PUEDAN TOMAR LA INFORMACION TOTAL DEL OBJETO MEDICAMENTOS
//DEFAULT QUE EXPORTA TODO EL OBJETO
//ese export default es el puente entre tu archivo de datos y el resto de tu aplicación.



