<template>
<span class="login100-form-title p-b-41">
    Registrar cuenta
</span>
<form class="login100-form validate-form p-b-33 p-t-5" @submit.prevent="onSubmit">

    <div class="wrap-input100 validate-input" data-validate = "Ingrese Nombre">
        <input v-model="userForm.name" class="input100" type="text" placeholder="Nombre" required>
        <span class="focus-input100" data-placeholder="&#xe82a;"></span>
    </div>
    
    <div class="wrap-input100 validate-input" data-validate = "Ingrese Correo">
        <input v-model="userForm.email" class="input100" type="email" placeholder="Correo" required>
        <span class="focus-input100" data-placeholder="&#xe818;"></span>
    </div>

    <div class="wrap-input100 validate-input" data-validate="Enter password">
        <input v-model="userForm.password" class="input100" type="password" placeholder="Contraseña" required>
        <span class="focus-input100" data-placeholder="&#xe80f;"></span>
    </div>

    <div class="container-login100-form-btn m-t-32">
        <button type="submit" class="login100-form-btn">
            Registrar
        </button>

    </div>

    <div class="container-login100-form-btn m-t-32">
        <router-link :to="{name: 'login'}">¿Desea ingresar?</router-link>
    </div>
</form>    
</template>

<script>
import { ref } from 'vue';

import Swal from 'sweetalert2' 

import useAuth from '@/modules/auth/composables/useAuth'
import { useRouter } from 'vue-router';

export default {
 setup() {

    const router = useRouter()
    const { registerUser } = useAuth()
    
    const userForm = ref({
        name:'fabian',
        email: 'fabian@mail.com',
        password:'123456'
    })

    return {
        userForm,
        onSubmit: async() => {
            const {ok, message} = await registerUser( userForm.value )
            if(!ok) return Swal.fire('Error', message, 'error')
            router.push({name:'no-entry'})
        }
    }
 }
}
</script>
