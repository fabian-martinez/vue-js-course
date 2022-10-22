 <template>
    <nav-bar/>
    <div class="d-flex">
      <div class="col-4">
         <entry-list/>
      </div>
      <div class="col">
         <router-view/>
      </div>
    </div>
 </template>
 <script>
import { defineAsyncComponent } from '@vue/runtime-core'

 export default {
   components: {
       NavBar: defineAsyncComponent(() => import(/* webpackChunkName: "daybook" */ '../components/NavBar')),
       EntryList: defineAsyncComponent(() => import(/* webpackChunkName: "daybook" */ '../components/EntryList.vue')),
   }
 }
 </script>