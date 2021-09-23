import { createStore } from 'vuex';

export default createStore({
    state: {
      predictions:[
        null
      ],
      gesture:null
    },
    mutations: {
      updateData (state,payload) {
        state.predictions = payload
        console.log(state.predictions)
      },
      updateGesture (state,payload) {
        state.gesture = payload
      }
    },
    actions: {
      updateData (payload) {
        payload.commit('updateData')
      },
      updateGesture (payload) {
        payload.commit('updateGesture')
      }
    },
    modules: {},
});