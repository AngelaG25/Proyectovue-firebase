import Vue from "https://cdn.jsdelivr.net/npm/vue@2.6.11/dist/vue.esm.browser.js";
new Vue({
  el: "#login",
  template: `
  <div >
      <FORM class="form-signin">
      <div >
      <IMG width="100" height="100" class="mb-4" alt="" src="src/assets/img/portfolio/Mineduc-1024x850.jpg"> 
      </div >
      <div >
      <H1 class="h3 mb-3 font-weight-normal">Inicio de Sesión</H1>
      
      <LABEL class="sr-only" for="inputEmail">Email address</LABEL>       
          <INPUT class="form-control" id="inputEmail" autofocus="" required="" type="email" placeholder="Correo" value="">
          </div > 
          <div >
      <LABEL class="sr-only" for="inputPassword">Password</LABEL>      
          <INPUT class="form-control" id="inputPassword" required="" type="password" placeholder="Contraseña" value="">
          </div >
                    
      <BUTTON class="btn btn-lg btn-primary btn-block" onclick="datos.obtener();" type="submit">Inicio</BUTTON>
      
      <DIV class="alert alert-info">Recuerda  que debes iniciar sesión con tu correo </DIV>
      
      <P class="mt-5 mb-3 text-muted">© 2020</P>
  </FORM>
  
      </div>
    `
});
