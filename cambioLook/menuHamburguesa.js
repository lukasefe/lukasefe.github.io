
let abrir = document.getElementById("burger");
let menuAnterior = abrir;
console.log(abrir);
abrir.addEventListener('click', function(e){
      let oculta = document.querySelector('.lista__Oculta');
      console.log(oculta);
      oculta.style.display = 'flex';
      let cerrar = document.querySelector('.icono__CerrarMenu');
      console.log(cerrar);
      
      //FUNCION PARA CERRAR EL MENU
      cerrar.addEventListener('click', function(e){
            oculta.style.display = "none";
      })

      //ESTA FUNCION HACE QUE AL MAIN EN SU WIDTH DE VENTANA ES MAYOR A 900PX SE CIERRA AUTOMATICAMENTE
      const ventana = document.getElementsByTagName('main');
      console.log(ventana);
      if (ventana.scrollWidth > 900){
            oculta.style.display = "none";
      } else{};

     

})

 //FUNCION DEL BOTON DESPLEGABLE DENTRO DEL MENU OCULTO
 let desplegarForm = document.querySelector('.formularios');
 console.log(desplegarForm);
 let opcionesDesplegar = document.querySelector('.form__Oculto');
 console.log(opcionesDesplegar);

 desplegarForm.addEventListener('click', function(e){
      let opcionesDesplegar = document.querySelector('.form__Oculto');
      console.log(opcionesDesplegar);
      if(opcionesDesplegar.style.display == 'none' ){
            opcionesDesplegar.style.display = "block";
                  console.log(opcionesDesplegar);
      } else if (opcionesDesplegar != 'none'){
            opcionesDesplegar.style.display = "none";
      }
});


