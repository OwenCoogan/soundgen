import { createStore } from 'vuex';

export default createStore({
    state: {
      predictions:[
        null
      ]
    },
    mutations: {
      updateData (state,payload) {
        state.predictions = payload
        console.log(state.predictions)
      }
    },
    actions: {
      updateData (payload) {
        payload.commit('updateData')
      }
    },
    modules: {},
});