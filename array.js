function agregar(){
    function Persona(nombre,correo){
        this.nombre=nombre;
        this.correo=correo;
    }
    var nuevoNombre = document.getElementById("nombre").value;
    var nuevoCorreo = document.getElementById("correo").value;

    nuevoCliente = new Persona(nuevoNombre,nuevoCorreo);
    console.log(nuevoCliente);
    agregar();
}

var agenda= [];
function agregar(){
    agenda.push(nuevoCliente);
    console.log(agenda);
};