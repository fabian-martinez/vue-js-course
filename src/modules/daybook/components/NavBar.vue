 <template>
    <div>
        <nav class="navbar bg-primary">
            <a class="navbar-brand text-white">
                <img src="@/assets/logo.png"
                     alt="vue logo"
                     height="24"
                     class="d-inline-block  aling-text-top mx-2">
                     {{username}}
            </a>
            
            <div class="d-flex">
                <div @click="onLogout" class="btn btn-outline-info mx-2">
                    <i class="fa fa-sign-out-alt"></i>
                </div>
            </div>
        </nav>
    </div>
 </template>
 <script>
import useAuth from '@/modules/auth/composables/useAuth';
import { useRouter } from 'vue-router';

 export default {
     setup() {
        const router = useRouter()
        const {username, logout} = useAuth()

        return{
            username,
            onLogout: () => {
                router.push({ name:'login' })
                logout()
            }
        }
     }
 }
 </script>