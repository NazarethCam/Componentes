Vue.component("listado", {
  template: `
  <ul>
    <li v-for="(personaje, $index) in personajes" :key="$index">
      <img class="imgPersonaje" :src="personaje.src"/>
      <h1 class="nmPersonaje">{{personaje.nombre}}</h1>
    </li>
  </ul>`,
  data() {
    return {
      personajes: [
        {
          nombre: "Rick Sanchez",
          src: "https://rickandmortyapi.com/api/character/avatar/1.jpeg"
        },
        {
          nombre: "Morty Smith",
          src: "https://rickandmortyapi.com/api/character/avatar/2.jpeg"
        },
        {
          nombre: "Summer Smith",
          src: "https://rickandmortyapi.com/api/character/avatar/3.jpeg"
        },
        {
          nombre: "Beth Smith",
          src: "https://rickandmortyapi.com/api/character/avatar/4.jpeg"
        },
        {
          nombre: "Jerry Smith",
          src: "https://rickandmortyapi.com/api/character/avatar/5.jpeg"
        },
        {
          nombre: "Abadango Cluster Princess",
          src: "https://rickandmortyapi.com/api/character/avatar/6.jpeg"
        },
        {
          nombre: "Abradolf Lincler",
          src: "https://rickandmortyapi.com/api/character/avatar/7.jpeg"
        }
      ]
    };
  }
});

new Vue({
  el: "#app"
});
