function ingresar() {

    var usuario="Johnatan"
    var contraseña="examen";

    if (document.frmingreso.txtusuario.value==usuario && document.frmingreso.txtcontraseña.value==contraseña) 
    {
        document.location="inicio.html"
    }
    else
    {
        alert("Ingrese su usuario y contraseña correctamente")
    }
    
} 