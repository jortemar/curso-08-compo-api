<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link :to="{ name: 'counter' }">Counter</router-link> |
    <router-link :to="{ name: 'users' }">Usuarios</router-link> |
    <router-link :to="{ name: 'pokemon-search' }">Buscar</router-link> |
    <router-link :to="{ name: 'todo' }">Todo</router-link> |
    <router-link :to="{ name: 'slots' }">Slots</router-link>
  </nav>

  <!-- Con el keep-alive podemos mantener vivos los cambios mientras navegamos
  entre las vistas, aunque perdemos ciertas características del reload.
  El resultado es que no se refresca. Podemos utilizar watchers en los componentes
  para poder modificar ciertos valores y solventar el problema -->
  <router-view v-slot="{ Component, route }">
    <keep-alive>
      <component :is="Component" :key="route.name" />
    </keep-alive>
  </router-view>

</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
