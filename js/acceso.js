function validacion(){

    var usuario = document.getElementById("username").value;
    var clave = document.getElementById("password").value;

    if(usuario == ""){
        alert("Por favor ingrese su Usuario");
        //return false;
    }
    if(clave == ""){
        alert("Por favor ingrese su Contraseña");
        //return false;
    }
    
    
}