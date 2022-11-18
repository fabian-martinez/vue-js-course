<template>
  <div class="about">
    <h1>{{ title }}</h1>
    <button @click="changeTitle">Cambiar titulo</button>
  </div>
</template>

<script>
import { 
  onMounted, onUnmounted, onBeforeMount, 
  onBeforeUpdate, onBeforeUnmount, onErrorCaptured, 
  onRenderTracked, onRenderTriggered, onActivated, 
  onDeactivated, onServerPrefetch, onUpdated, ref,  } from "vue";
export default {
  setup() {

    const title = ref('About Page')

    console.log('Setup se llama');
    onMounted(() => { console.log('Mounted se llamó');})
    onUnmounted(() => { console.log('Unmounted se llamó');})
    onBeforeMount(() => { console.log('BeforeMount se llamó');})
    onBeforeUpdate(() => { console.log('BeforeUpdate se llamó');})
    onBeforeUnmount(() => { console.log('BeforeUnmount se llamó');})
    onErrorCaptured(() => { console.log('ErrorCaptured se llamó');})
    onRenderTracked(() => { console.log('RenderTracked se llamó');})
    onRenderTriggered(() => { console.log('RenderTriggered se llamó');})
    onActivated(() => { console.log('Activated se llamó');})
    onDeactivated(() => { console.log('Deactivated se llamó');})
    onServerPrefetch(() => { console.log('ServerPrefetch se llamó');})
    onUpdated(() => { console.log('Updated se llamó');})

    return{
      title,
      changeTitle: () => {title.value='About Page ha cambiado'}
    }
  }

}
</script>
