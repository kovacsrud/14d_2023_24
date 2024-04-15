<script>
export default {
    props:['url'],
    data(){
        return {
            szereplo:{}
        }
    },
    created(){
        console.log(this.url);
        this.getCharacter();
    },
    methods:{
        getCharacter(){
            fetch(this.url)
            .then(res=>res.json())
            .then(adatok=>this.szereplo=adatok)
            .catch(err=>alert(err));
        }

    }
}

</script>

<template>    
 <p class="font-bold mx-10">{{ szereplo.name }}</p>
</template>