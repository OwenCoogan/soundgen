<template>
  <div>
    <button class="btn btn-success m-5" id="start-music" v-on:click="startTrack">startSoundTrack</button>
  </div>
</template>

<script>
import * as Tone from 'tone'
import { createSynth , emitDrumloop } from '../functions/sounds';

export default {
  
  methods: {
    async getUpdatedSound(){
    const innerWidthVideoWindow = 600/4
    const innerHeightVideoWindow = 500/2
    console.log(innerHeightVideoWindow)
    this.$store.subscribe((mutation) => {


      if(mutation.payload.bottomRight[0] > innerWidthVideoWindow && mutation.payload.bottomRight[0] < innerWidthVideoWindow*2 ){
        createSynth("C4")
      }
      else if(mutation.payload.bottomRight[0] > innerWidthVideoWindow*2 && mutation.payload.bottomRight[0] < innerWidthVideoWindow*3 ){
        createSynth("B4")
      }
      else if(mutation.payload.bottomRight[0] > innerWidthVideoWindow*3 && mutation.payload.bottomRight[0] < innerWidthVideoWindow*4){
        createSynth("A4")
      }
    })
    },
    async startTrack(){
      await Tone.start()
      emitDrumloop()
    }
    
  },
  mounted () {
    this.getUpdatedSound()
  }
}

</script>

