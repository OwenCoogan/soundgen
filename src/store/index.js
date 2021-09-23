import { createStore } from 'vuex';

export default createStore({
    state: {
      predictions:[
        null
      ],
      gesture:null,
      audioStarted:false,
    },
    mutations: {
      updateData (state,payload) {
        state.predictions = payload
        console.log(state.predictions)
      },
      updateGesture (state,payload) {
        state.gesture = payload
      },
      audioStart(state,payload){
        state.audioStarted = payload
      }
    },
    actions: {
      updateData (payload) {
        payload.commit('updateData')
      },
      updateGesture (payload) {
        payload.commit('updateGesture')
      },
      audioStart (payload) {
        payload.commit('audioStart')
      }
    },
    modules: {},
});