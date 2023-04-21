<template>
  <h1 v-if="!pokemon && !errorMessage">Buscando...</h1>
  <h1 v-else-if="errorMessage">{{ errorMessage }}</h1>

  <template v-else>
    <h3>{{ pokemon.name }}</h3>
    <img :src="pokemon.sprites.front_default" :alt="pokemon.name">
    <br>
    <router-link :to="{ name: 'pokemon-search'}">Regresar</router-link>
  </template>
</template>

<script>
import { watch } from 'vue'
import { useRoute, onBeforeRouteLeave } from 'vue-router'
import usePokemon from '../composables/usePokemon'

export default {

    setup() {
        const route = useRoute()
        // No se estaría actualizando el id debido al keep-alive
        console.log(route.params.id)
        const { errorMessage, isLoading, pokemon, searchPokemon } = usePokemon(route.params.id)

        // Para solventar el problema utilizamos el watch. Así, cada vez que
        // cambiemos el id podemos provocar que se llame la función, que es
        // lo mismo que ocurriría si el componente se desmontara y montara
        watch( 
            () => route.params.id,
            () => searchPokemon(route.params.id)
        )


        // es un hook del ciclo de vido expresamente diseñado para el router
        onBeforeRouteLeave(() => {
            const answer = window.confirm('¿Está seguro que desea salir?')
            if (!answer) return false // false, bloquea la salida
        })

        return {
            errorMessage,
            isLoading,
            pokemon,
            searchPokemon
        }
    }
}
</script>

<style>

</style>