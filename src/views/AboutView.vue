<template>
  <div class="about">
    <h1>{{ title }}</h1>
    <button @click="changeTitle">Cambiar título</button>
  </div>
</template>

<script>
import { ref, onMounted,
  onUpdated,
  onUnmounted,
  onBeforeMount,
  onBeforeUpdate,
  onBeforeUnmount,
  onErrorCaptured,
  onRenderTracked,
  onRenderTriggered,
  onActivated,
  onDeactivated,
  onServerPrefetch } from 'vue'

export default {
  setup() {

    const title = ref('About')

    
    console.log('Setup se llamó')

    onBeforeMount(() => {
      console.log('onBeforeMount')
    })

    onMounted(() => {
      console.log('onMounted')
    })

    onBeforeUpdate(() => {
      console.log('onBeforeUpdate')
    })

    onUpdated(() => {
      console.log('onUpdated')
    })

    onBeforeUnmount(() => {
      console.log('onBeforeUnmount')
    })

    onUnmounted(() => {
      console.log('onUnmounted')
    })

    onErrorCaptured(() => {
      console.log('onErrorCaptured')
    })

    onRenderTracked(() => {
      console.log('onRenderTracked')
    })

    onRenderTriggered(() => {
      console.log('onRenderTriggered')
    })

    onServerPrefetch(() => {
      console.log('onServerPrefetch')
    })
    
    onActivated(() => {
      console.log('onActivated')
    })

    onDeactivated(() => {
      console.log('onDeactivated')
    })

    return {
      title,
      changeTitle: () => title.value = 'New About'
    }

  },


}
</script>
