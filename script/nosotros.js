`use strict`
/*function consultarDatos() {
    fetch("./objetos/objet.json")
        .then(respuesta => {
            if (!respuesta.ok) {
                throw new Error("no response");
            }
            console.log(respuesta)
            return respuesta.json();
        })
        .then(data => {
            const seleccionaListaProd = document.querySelector("#listandoProductos")
            console.log(data)
            for (let i = 0; i < data.tarjetas2.length; i++) {
                const crearDocumento = document.createElement("div")
                crearDocumento.classList.add("nuestrahistoria2")
                const crearImagen = document.createElement("img")
                crearImagen.classList.add("fragancias")
                crearImagen.src = (data.tarjetas2[i].imagen)
                console.log(data.tarjetas2[i].imagen)
                console.log(crearImagen)
                crearDocumento.innerHTML = `
                <span class="fragancias">${data.tarjetas2[i].titulo}</span>
                `
                crearDocumento.appendChild(crearImag)
                seleccionaListaProd.appendChild(crearDocumento)
            }


        })
        .catch(error => {
            console.error(error, "errorrrrr");
        });


}

consultarDatos();*/

