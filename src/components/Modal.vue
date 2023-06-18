<template>
  <div class="modal-background fade-in"
        @click.self="$emit('on:close')">
    <!-- El @click.self nos permite centrar la acción solo en el componente en el 
    que hemos situado el evento, y no en sus hijos. De esta forma el modal solo
    se cerrará cuando se pulse fuera del mismo     -->
    <div class="modal-container">
        <!-- La etiqueta slot me permite recoger el html que se inserta desde
        el padre, en la propia llamada del componente al que queremos enviar
        la información. -->

        <!-- <slot /> -->

        <!-- En caso de que no se envíe nada, el slot también podrá
        tener su contenido, que se mostará por defecto -->

        <!-- <slot>
            <div class="center">
                Esto aparecerá si no tenemos contenido
            </div> 
        </slot> -->

        <!-- También tenemos los slots con nombre, que nos permite tener un control
        mucho mayor sobre el componente. Podemos, por ejemplo, ordenarlo a 
        nuestro gusto o insertar contenido entre ellos, como el hr -->
        <slot name="header" />
        <slot name="body" />
        <slot name="footer" />

        <slot name="exposed" :newTitle="newTitle"></slot>

        <slot name="task-list" :task="task"></slot>

    </div>
  </div>

</template>

<script>
export default {
    props: ['title'],
    emits: ['on:close'],
    setup(props, context) {
      console.log({props, context})

      return {
        newTitle: props.title?.toUpperCase(),
        task: props.title
      }
    }


}
</script>

<style scoped>
.modal-background {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;

    display: flex;
    background-color: rgba(0, 0, 0, 0.5);
    align-items: center;
    justify-content: center;
}

.modal-container {
    width: 250px;
    height: 250px;
    background-color: white;
    border-radius: 5px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
}

.center {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 250px;
    height: 250px;
    color: red;
}


.fade-in {
  animation: fadeIn ease-out 0.2s;
  -webkit-animation: fadeIn ease-out 0.2s;
  -moz-animation: fadeIn ease-out 0.2s;
  -o-animation: fadeIn ease-out 0.2s;
  -ms-animation: fadeIn ease-out 0.2s;
}

@keyframes fadeIn {
  0% {opacity:0;}
  100% {opacity:1;}
}

@-moz-keyframes fadeIn {
  0% {opacity:0;}
  100% {opacity:1;}
}

@-webkit-keyframes fadeIn {
  0% {opacity:0;}
  100% {opacity:1;}
}

@-o-keyframes fadeIn {
  0% {opacity:0;}
  100% {opacity:1;}
}

@-ms-keyframes fadeIn {
  0% {opacity:0;}
  100% {opacity:1;}
}
</style>