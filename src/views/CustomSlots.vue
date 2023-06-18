<template>
  <h1>Aprendiendo slots</h1>
  <button @click="openModal">Abrir Modal</button>

  <modal v-if="isOpen"
         title="Hola mundo"
         @on:close="closeModal">
    <!-- <p>Lorem ipsum dolor, sit amet consectetur adi</p>
    <button>Salir</button>
    <h2>Título del modal</h2> -->
    <template v-slot:header>
        <h2>Título del Modal</h2>
    </template>

    <template v-slot:body>
        <p>Lorem ipsum dolor, sit amet consectetur adi</p>
    </template>

    <template v-slot:footer>
        <button @click="closeModal">Salir</button>
    </template>

    <!-- el newTitle sale de la desestructuración de slotProps -->
    <template v-slot:exposed="{ newTitle }">
      <h2>{{ newTitle }}</h2>
    </template>


  </modal>
</template>

<script>
import { ref } from 'vue'
import Modal from '@/components/Modal.vue'

export default {
    components: { Modal },
    setup() {

      const isOpen = ref(false)

      return {
        isOpen, 

        openModal: () => isOpen.value = true,
        closeModal: () => isOpen.value = false
      }
    }
}
</script>

<style scoped>

</style>