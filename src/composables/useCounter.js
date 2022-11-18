import { ref } from "vue"

const useCounter = (initValue=10) => {

    const counter = ref(initValue) 

         return {
            //Objects
            counter,

            //Methods
            increase: () => counter.value++,
            decrease: () => counter.value-- 
        }
    }

export default useCounter