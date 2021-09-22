import { createStore } from 'vuex';

export default createStore({
    state: {
        tab: [
      {
        id: 1,
        name: "lorem", 
      },
      {
        id: 2,
        name: "lorem2",
      },],
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