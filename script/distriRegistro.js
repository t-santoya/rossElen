`use strict`
//crear clase para hacer la validacion del form
class validarRegistro {
    //la cual tendra un constructor que recibira el id form
    constructor(formularioId) {   //si se hace un console vemos lo que esta imprimiendo la instancia creada en el html

        //agregar una propiedad (this y mi propiedad es form) y el valor
        this.form = document.getElementById(formularioId);
        //seleccionamos el input que se va a validar por medio del id
        //agregamos la propiedad
        this.nombre = document.getElementById("nombre");
        this.apellido = document.getElementById("apellido");
        this.ciudad = document.getElementById("ciudad");
        this.correo = document.getElementById("email");
        this.clave = document.getElementById("clave");
        this.enviar = document.getElementById("enviar");
        //hasta aqui creamos la clase 
        //para usarla nos vamos a html y creamos una constante con una nueva instancia

        // seleccionar span de mensajes de error
        this.nombreError = document.getElementById("nombre-error");
        this.apellidoError = document.getElementById("apellido-error");
        this.ciudadError = document.getElementById("ciudad-error");
        this.correoError = document.getElementById("correo-error");
        this.claveError = document.getElementById("clave-error");
        this.enviarError = document.getElementById("enviar-error");


        //crear los eventos  viene de abajo
        this.form.addEventListener("submit", (event) => {  //recibe 2 parametros 
            event.preventDefault();//este metodo no permite que recargue la pagina
            if (this.verificar()) {//este es el condicional para validar la clase (validarRegistro)
                alert("Enviado exitosamente")
            }
        });
    }

    // creamos un metodo dentro de la clase pero fuera del constructor


    //cuando se crea la propiedad  que esta en el constructor se puede utilizar dentro de la clase

    //para ejecutarlo se utiliza  escuchar eventos que se crea en el constructor  vamos arriba
    verificar() {
        let veri = true;
        //con value solo llega el valor y no se imprime todo tal cual
        if (this.nombre.value === "") {
            //aqui el id del span
            this.nombreError.textContent = "El campo es obligatorio"
            //para que se muestre en rojo el input le agregamos una clase (.add("error-input"))
            this.nombre.classList.add("inp-error");
            veri = false;
        } else {
            this.nombreError.textContent = "";
            this.nombre.classList.remove("inp-error")
        }


        if (this.apellido.value === "") {

            this.apellidoError.textContent = "El campo es obligatorio"
            this.apellido.classList.add("inp-error");
            veri = false;
        } else {
            this.apellidoError.textContent = "";
            this.apellido.classList.remove("inp-error")
        }


        if (this.ciudad.value === "") {
            this.ciudadError.textContent = "El campo es obligatorio"
            this.ciudad.classList.add("inp-error");
            veri = false;
        } else {
            this.ciudadError.textContent = "";
            this.ciudad.classList.remove("inp-error")
        }


        if (this.correo.value === "") {
            this.correoError.textContent = "El campo es obligatorio"
            this.correo.classList.add("inp-error");
            veri = false;
        } else {
            this.correoError.textContent = "";
            this.correo.classList.remove("inp-error")
        }


        if (this.clave.value === "") {
            this.claveError.textContent = "El campo es obligatorio"
            this.clave.classList.add("inp-error");
            veri = false;
        } else {
            this.claveError.textContent = "";
            this.clave.classList.remove("inp-error")
        }
        return veri;
    }
    //creamos un  nuevo metodo para validar un correo
    /* validarCorreo(email){
    
            const email= /\S+@\S+\.\S+/
            return correo
    
        }*/
}

//   RESUMEN

//  seleccionamos elementos del DOM

// creamos metodos para validar formulario (tiene nombre de "verificar") hay van las validaciones

//en el constructor se creo un evento para escuchar cada vez que el usuario envie el formulario



//////////
//crear una funcion tipo flecha  EVENTOS DEL MOUSE
const capturar = () => {
    console.log("al pasar por la imagen");
}
//despues en html asignar al elemento el evento'onmouseover' y pasarle la funcion 

//crear una funcion tipo clasica
function capturaMove() {
    console.log("sobre")
}
//    EVENTOS DEL TECLADO
// crear funcion tipo flecha
const presionar = () => {
    alert("presiona la tecla")
}

//generar eventos mediante propiedades




















