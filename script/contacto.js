`use strict`
class validarContacto{
    constructor(idContacto){
        this.form=document.getElementById(idContacto);
        this.nombre = document.getElementById("nombre");
        this.correo=document.getElementById("email");
        this.mensaje=document.getElementById("mensaje");
        this.registrarse=document.getElementById("registrarse");

        this.errorNombre=document.getElementById("errorNombre");
        this.errorCorreo=document.getElementById("errorCorreo");
        this.errorMensaje=document.getElementById("errorMensaje");
        this.errorRegistrarse=document.getElementById("errorRegistrarse");

        this.form.addEventListener("submit", (event)=>{
            event.preventDefault();
            if(this.validacion()){
                alert("Fue enviado exitosamente")
            }
        });
    }


    validacion(){
        let validando=true;
        if(this.nombre.value===""){
            this.errorNombre.textContent="campo obligatorio"
            this.nombre.classList.add("errorInput");
            validando=false;
        } else{
            this.errorNombre.textContent="";
            this.nombre.classList.remove("errorInput")
        }
        if(this.correo.value===""){
            this.errorCorreo.textContent="campo obligatorio"
            this.correo.classList.add("errorInput");
            validando=false;
        } else{
            this.errorCorreo.textContent="";
            this.correo.classList.remove("errorInput")
        }
        if(this.mensaje.value===""){
            this.errorMensaje.textContent="campo obligatorio"
            this.mensaje.classList.add("errorInput");
            validando=false;
        } else{
            this.errorMensaje.textContent="";
            this.mensaje.classList.remove("errorInput")
        }
        /*if(this.registrarse.value===""){
            this.errorRegistrarse.textContent="campo obligatorio"
            this.registrarse.classList.add("errorInput");
            validando=false;
        } else{
            this.errorRegistrarse.textContent="";
            this.registrarse.classList.remove("errorInput")
        }
*/


        return validando;
    }
    
}
