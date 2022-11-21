<template>
  <div class="limiter">

		<div class="container-login100" style="background-image: url('./assets/bg-01.jpg');">
			<div class="wrap-login100 p-t-30 p-b-50">
				<router-view/>
			</div>
		</div>
	</div>
</template>

<script>
import { defineAsyncComponent } from '@vue/runtime-core'
import { mapActions, mapState } from 'vuex'
export default {
	components:{
		login: defineAsyncComponent(() => import(/* webpackChunkName: "login" */ '../views/Login.vue')),
		login: defineAsyncComponent(() => import(/* webpackChunkName: "register" */ '../views/Register.vue')),
	}
}
</script>

<style lang="scss" scoped>
    @import '../css/auth.css';
    @import '../css/util.css';
</style>