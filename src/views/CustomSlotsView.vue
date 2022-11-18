<template>
  <h1>Aprendiendo Slots</h1>
  <button @click="open">Abrir modal </button>
  <modal v-if="isOpen" @on:close="close" title="Este es un titulo">
    <!-- Cargar un Slot -->
    <!-- <h2>Titulo del modal</h2> -->
    <!-- <p>Elit nulla et qui anim enim irure elit.</p> -->
    <!-- <button>Salir</button> -->

    <!-- Cargar un Name slot -->
    <template v-slot:footer >
      <button @click="close">Salir</button>
    </template>
    <template v-slot:header>
      <h2>Titulo</h2>
    </template>
    <template v-slot:body>
      <p>Cupidatat exercitation magna eu amet officia anim ipsum reprehenderit cupidatat ad.</p>
    </template>
    <!-- <template v-slot:exposed="slotProps">
      <h2>{{slotProps}}</h2>
    </template>  -->
    <template v-slot:exposed="{newTitle}">
      <h2>{{newTitle}}</h2>
    </template> 
  </modal>
</template>

<script>
import Modal from '@/components/Modal.vue'
import { ref } from 'vue';
export default {
  components:{Modal},
  setup() {
    const isOpen = ref(false)
    return{
      isOpen,
      open: () => { isOpen.value = true },
      close: () => { isOpen.value = false }
    }
  }
}
</script>

<style>

</style>