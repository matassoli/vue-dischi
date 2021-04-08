var app = new Vue({
  el: "#app",
  data: {
    albums: [],
    genre: ["All"],
    genreActive: "All"
  },


  methods: {
    filter: function() {
      this.albums.forEach((elemento) => {
        if (this.genre.includes(elemento.genre) == false) {
          this.genre.push(elemento.genre);
        }
      });
    },

    sort: function() {
      return this.albums.sort((a, b) => a.year - b.year);
    },
  },

  mounted: function() {
    axios.get("https://flynn.boolean.careers/exercises/api/array/music")
      .then((risposta) => {
        this.albums = risposta.data.response;
        this.sort();
        this.filter();
      });
  },
});
