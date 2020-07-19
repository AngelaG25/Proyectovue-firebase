class usuario {
  obtener() {
    var correo = document.getElementById("inputEmail").value;
    var contraseña = document.getElementById("inputPassword").value;

    this.login(correo, contraseña);
  }

  login = function(correo, contraseña) {
    if (correo == "" || contraseña == "") {
      alert("Debe ingresar el correo y contraseña");
      document.getElementById("inputEmail").value = "";
      document.getElementById("inputPassword").value = "";
      document.getElementById("inputEmail").focus();
    } else {
      if (correo == "marvin@unah.edu.hn" && contraseña == "123456") {
        alert("Bienvenido: " + correo);
      } else {
        alert(
          "No se puede acceder a la plataforma ; Posibles razones:\n1) Usuario y/o contraseña incorrecta.\n2) El correo está bloqueado.\n3) El correo no está registrado."
        );

        document.getElementById("inputEmail").value = "";
        document.getElementById("inputPassword").value = "";
        document.getElementById("inputEmail").focus();
      }
    }
  };
}
// eslint-disable-next-line no-unused-vars
var datos = new usuario();
