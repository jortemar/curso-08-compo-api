import { useStore } from 'vuex'
import { computed, ref } from 'vue'

const useTodos = () => {

    const store = useStore()
    const currentTab = ref('all')

    return {
      currentTab,  

      pending: computed(() => store.getters['pendingTodos']),
      all: computed(() => store.getters['allTodos']),
      completed: computed(() => store.getters['completedTodos']),

      // Esta última es una función, en lugar de las anteriores que son arrays
      getTodosByTab: computed( () => store.getters['getTodosByTab'](currentTab.value)),

      // Methods
      toggleTodo: (id) => store.commit('toggleTodo', id),
      createTodo: (text) => store.commit('createTodo', text),
      clean: () => store.commit('clean')
    }
}

export default useTodos