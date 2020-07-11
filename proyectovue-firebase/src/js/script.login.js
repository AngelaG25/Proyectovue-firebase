class usuario {
	
  obtener() {
   var correo = document.getElementById('inputEmail').value;
   var contraseña = document.getElementById('inputPassword').value;
   
   this.login(correo, contraseña);

  }
  
login = function(correo, contraseña)
    {
		if(correo == '' || contraseña == '')
        {
		alert('Debe ingresar el correo y contraseña');
				document.getElementById('inputEmail').value = '';
                document.getElementById('inputPassword').value = '';
                document.getElementById('inputEmail').focus();
		}
		else{
        if(correo == 'marvin@unah.edu.hn' && contraseña == '24hn@@MD')
        {
            alert("Bienvenido: " + correo);		
        }
        else{
             alert('No se puede acceder a la plataforma ; Posibles razones:\n1) Usuario y/o contraseña incorrecta.\n2) El correo institucional está bloqueado.\n3) El correo institucional no está registrado.');
               
                document.getElementById('inputEmail').value = '';
                document.getElementById('inputPassword').value = '';
                document.getElementById('inputEmail').focus();
        }
		}
    };
  
  
}
var datos = new usuario();