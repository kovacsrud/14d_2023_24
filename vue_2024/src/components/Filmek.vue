<script>
import Szereplo from '../components/Szereplo.vue';

    export default {
        components:{
            Szereplo:Szereplo
        },
        data(){
            return {
                filmek:[]
            }
        },
        created(){
            this.getFilmek();
        },
        methods:{
            getFilmek(){
                fetch("https://swapi.dev/api/films/")
                .then(res=>res.json())
                .then(adatok=>this.filmek=adatok.results)
                .catch(err=>alert(err));
            }
        }
    }
</script>

<template>
  <h1 class="text-3xl font-bold text-center">Filmek:</h1>
  <div v-for="film in filmek">
    <p>Film: {{ film.title }}, Epizód: {{ film.episode_id }}, Rendező:{{ film.director }} Megjelenés:{{ film.release_date }}</p>
    <ul>
        <div v-for="karakter in film.characters">
            <Szereplo :url="karakter" />
        </div>
    </ul>

  </div>  

</template>