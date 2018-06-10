function validacion(){

    var nombre = document.getElementById("name").value;
    var apellido = document.getElementById("lastname").value;
    var email = document.getElementById("email").value;
    var usuario = document.getElementById("username").value;
    var clave = document.getElementById("password").value;
    var clave2 = document.getElementById("password2").value;
    
    if(nombre == "" || apellido == "" || email == "" || usuario == "" || clave == ""){
        alert("Por favor rellene los campos");
    }
    
    if(clave != clave2){
        alert("Las contraseñas no coinciden");
    }
    

}