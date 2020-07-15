import Vue from "https://cdn.jsdelivr.net/npm/vue@2.6.11/dist/vue.esm.browser.js";

new Vue({
  el: "#curso-registro",
  template: `
    <div class="container mt-5"> 
        <h2>{{title.toLocaleUpperCase()}}</h2>        
    
        <div class="add-item-form">
            <input id="#datos-input" class="mt-2 mb-2" type="text" v-model="newItem" placeholder="Escriba el texto aquí" @keyup.enter="addItem">
            <button class="btn btn-primary" @click="addItem">Agregar</button>
        </div>
        
        <h3 v-if="items.length > 0" class="text-content.center mt-4">
          {{subtitle}}
        </h3>
        
        <p v-if="items.length === 0" class="alert alert-warning mt-4 col-7 text-center"  role="alert">
            ¡No hay cursos agregados a tu lista todavía!
        </p>

        <!--ciclo for que recorre y muestra la lista de cursos.-->
        <div class="mt-3 col-8" v-for="(item, index) in items">
          <div role="alert" class="alert alert-success">
            <div class="d-flex justify-content-between align-items-center">
              <div>
                {{item}} 
              </div>
              <div>
                <button class="btn btn-danger btn-sm" @click="removeItem(index)">X</button>
              </div>  
            </div>
          </div>
        </div>

    </div>`,

  data: {
    state: "default",
    title: "Registrar curso",
    subtitle: "Listado de cursos",
    newItem: "",

    items: [
      "Computación en la nube",
      "Internet de las cosas",
      "Big data"
      //"Python for data science",
      //"MySql",
      //"VueJs"
    ]
  },
  methods: {
    addItem: function() {
      if (this.newItem === "") {
        alert("No hay datos para agregar a la lista.");
      } else {
        this.items.push(this.newItem);
        document.getElementById("#datos-input").focus();
        this.newItem = "";
      }
    },
    removeItem: function(index) {
      this.items.splice(index, 1);      
    },    
  }
});

