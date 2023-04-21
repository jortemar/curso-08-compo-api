import { ref } from "vue"

// Si no se recibe valor, por defecto será 5
const useCounter = ( initValue = 5 ) => {
    const counter = ref(initValue)
    
    return {
        counter,
        
        increase: () => counter.value++,
        decrease: () => counter.value--
    }
}

export default useCounter