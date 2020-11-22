document.getElementById("boton_registrarse ").addEventListener("click ", register);
document.getElementById("boton_iniciar_session").addEventListener("click", Iniciar_Session);
var contenedor_login_registro = document.querySelector(".contenedor__login_register ");
var formulario_login = document.querySelector(".formulario__login_register");
var formulario_registro = document.querySelector(".formulario__register");
var caja_login = document.querySelector(".caja__trasera_login");
var caja_registro = document.querySelector(".caja__trasera_registro");



function register() {
    formulario_registro.style.display = "block";
    contenedor_login_registro.style.left = "10px";
    formulario_login.sytle.dispay = "none";
    caja_registro.style.opacity = "0";
    caja_login.style.opacity = "1";

}

function Iniciar_Session() {
    formulario_registro.style.display = "none";
    contenedor_login_registro.style.left = "-250px";
    formulario_login.sytle.dispay = "block";
    caja_registro.style.opacity = "1";
    caja_login.style.opacity = "0";

}