<template>
  <h1>Buscar pokémon: {{ pokemonId }}</h1>
  <form @submit.prevent="onSubmit">
    <input 
      type="number"
      placeholder="Numero del pokémon"
      v-model="pokemonId"
      ref="txtSearchId"
    >
  </form>
  <br>
  <span>Presione enter para buscar</span>
</template>

<script>
import { ref, onActivated } from 'vue'
import { useRouter } from 'vue-router'

export default {

    setup() {

        const router = useRouter()
        
        const pokemonId = ref(1)
        const txtSearchId = ref()

        // nos sirve utilizar el hook onActivated porque los componentes no se desmontan.
        // Durante la navegación entre las vistas, se mantienen vivos gracias al keep-alive
        onActivated(() => {
            // el select es como el focus, pero además selecciona el contenido del input
            // txtSearchId.value.focus()
            txtSearchId.value.select()
        })
        

        return {
            pokemonId,
            txtSearchId,

            onSubmit: () => {
                // console.log('pokemon a buscar:', pokemonId.value)
                router.push({ name: 'pokemon-id', params: { id: pokemonId.value }})
            }
        }
        
    }


}
</script>

<style>

</style>