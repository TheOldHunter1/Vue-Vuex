<template>
  <div class="hello">
    <h1>{{ $store.getters.mensaje }}</h1>
    <h2>{{ $store.getters.nombreCompleto }}</h2>

    <input type="text" v-model="amigo">
    <button @click="addAmigo">Agregar Amigo</button>
    <h3>Amigos</h3>
    <ul>
      <li v-for="(amigo, indice) in $store.state.amigos" :key="indice"> 
        {{amigo}}
        <button @click="$store.dispatch('delAmigoAction', indice)">Borrar</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data(){
    return{
      amigo:''
    }
  },
  methods: {
    addAmigo(){
      // this.$store.state.amigo = this.amigo;
      console.log(this.amigo);
      this.$store.dispatch('addAmigoAction', this.amigo);
      this.amigo = '';
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  /* display: inline-block; */
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
