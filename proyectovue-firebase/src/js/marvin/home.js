import Vue from "https://cdn.jsdelivr.net/npm/vue@2.6.11/dist/vue.esm.browser.js";
new Vue({
  el: "#home",
  template: `
    <div >
     
    <nav class="navbar navbar-expand-lg bg-secondary text-uppercase fixed-top" id="mainNav">
    <div class="container">
        <a class="navbar-brand js-scroll-trigger" href="#page-top">
            <h1 class="masthead-heading text-uppercase mb-0">YO</h1>
        </a>
      <img  src="src/assets/img/portfolio/logo.png" alt="Inicio: Aprendo en Casa" aria-label="Inicio: Aprendo en Casa">
   <button class="navbar-toggler navbar-toggler-right text-uppercase font-weight-bold bg-primary text-white rounded" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            Menu
            <i class="fas fa-bars"></i>
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
            <ul class="navbar-nav ml-auto">
                <li class="nav-item mx-0 mx-lg-1"> 
                <a class="btn btn-outline-primary" href="login.html" role="button">Iniciar sesión</a>
            </li>
              <li class="nav-item mx-0 mx-lg-1">
                <a class="btn btn-outline-primary" href="register.html" role="button">Registrarse</a>
            </li> 
               
            </ul>
        </div>
    </div>
</nav>

<!-- Masthead-->
<header class="masthead bg-primary text-white ">

    <section class="page-section portfolio">
        <div class="container">
          
            <!-- About Section Content-->
            <div class="row">
                
                <div class="col-lg-6 ml-auto"> <p class="lead">
                    <h1>Adquiere nuevas habilidades para un mundo digital</h1>
                    Desarrolla tu carrera profesional o expande tu 
                    empresa a tu propio ritmo mediante cursos de formación flexibles y 
                    personalizados, diseñados para fortalecer tu confianza y ayudarte a 
                    crecer.</p>
                </div>
                <div class="col-lg-4 mr-auto">
                       <picture>
                                <img  src="src/assets/img/portfolio/estudiante1.jpg">
                          </picture>
                </div>
            </div>
            
        </div>
    </section>
</header>
<!-- Portfolio Section-->

<section class="page-section portfolio" >
    <div class="container">
        <!-- Portfolio Section Heading-->
        <h4 class="page-section-heading text-center">Pasos simples para tu crecimiento</h4>
        <!-- Icon Divider-->
        <div class="divider-custom">
            <div class="divider-custom-line"></div>
            <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
            <div class="divider-custom-line"></div>
        </div>
        <!-- Portfolio Grid Items-->
        <div class="row">
            <!-- Portfolio Item 1-->
            <div class="col-lg-4 ml-auto"> 
                <img class="three-steps-carousel__item-icon" src="src/assets/img/portfolio/habilidad.png" alt="Aprende a tu ritmo icon">
                <h5 >
                    Selecciona una habilidad
                  </h5>
                <p class="lead">
                    Sin importar si eres un estudiante o una empresa, si 
                    acabas de comenzar o ya tienes algo de experiencia, aquí puedes elegir 
                    las lecciones que sean adecuadas para ti.</p>
            </div>

            <div class="col-lg-4 ml-auto"> 
                <img class="three-steps-carousel__item-icon" src="src/assets/img/portfolio/calendario.png" alt="Aprende a tu ritmo icon">
                 <h5>
                    Aprende a tu ritmo
                  </h5>
                <p class="lead">
                Crea un plan de aprendizaje único en tu ordenador, smartphone o tablet.</p>
            </div>

            <div class="col-lg-4 ml-auto"> 
                <img class="three-steps-carousel__item-icon" src="src/assets/img/portfolio/certificado.png" alt="Aprende a tu ritmo icon">
                <h5 >
                    Obtén la certificación
                  </h5>
                <p class="lead">
                    Realiza un seguimiento de tu progreso y recibe un certificado acreditado para mejorar tu CV o perfil de LinkedIn.
                </p>
            </div>
         </div>
</section>

<!-- Copyright Section-->
<div class="copyright py-4 text-center text-white">
    <div class="container"><small>Copyright © Your Website 2020</small></div>
</div>
 </div>
    `
});
