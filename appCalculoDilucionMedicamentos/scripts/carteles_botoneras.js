
//MODAL PLAN DE HIDRATACIÓN
const boton1 = document.getElementById("boton1");//IDENTIFICA AL BOTON DE ABRIR MEDIANTE SU ID Y LO GUARDA EN LA VARIABLE DECALRADA
const modal_planh = document.getElementById("modal_planh");//IDENTIFICA AL CONTENEDOR DEL MODAL MEDIANTE SU ID Y LO GUARDA EN LA VARIABLE DECALRADA
const cerrar1 = document.getElementById("cerrar1");//IDENTIFICA AL BOTON CERRAR MEDIANTE SU ID Y LO GUARDA EN LA VARIABLE DECALRADA

boton1.addEventListener("click", ()=>{//FUNCION QUE USA LA VARIABLE CON LOS DATOS MEDIANTE LA UNA LLAMADA DE ESCUCHA CON CLICK,
    modal_planh.classList.add("mostrar");//SELECCIONA LA VARIABLE DEL MODAL Y ENLISTA SUS CLASES Y AGREGA UNA CLASE MOSTRAR QUE LA VISUALIZA EN PANTALLA
})

cerrar1.addEventListener("click", ()=>{//FUNCION QUE USA LA VARIABLE CON LOS DATOS MEDIANTE LA UNA LLAMADA DE ESCUCHA CON CLICK,
    modal_planh.classList.remove("mostrar");//SELECCIONA LA VARIABLE DEL MODAL Y ENLISTA SUS CLASES Y REMUEVE LA CLASE MOSTRAR QUE LA VISUALIZA EN PANTALLA
})



    //con esta variable seleccionamos los elementos del contenedor de los botones
const botones = document.getElementById("boton_2");
const Carteles =document.getElementById("carteles");
const cerrar = document.getElementById("boton_c2");

botones.addEventListener("click", () =>{
    Carteles.classList.add("mostrar");
    
    
})

cerrar.addEventListener("click", () =>{
    Carteles.classList.remove("mostrar");
})
