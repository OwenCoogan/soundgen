<template>
  <div>
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


      if(mutation.payload.topLeft[0] > innerWidthVideoWindow && mutation.payload.topLeft[0] < innerWidthVideoWindow*2 ){
        createSynth("C4")
      }
      else if(mutation.payload.topLeft[0] > innerWidthVideoWindow*2 && mutation.payload.topLeft[0] < innerWidthVideoWindow*3 ){
        createSynth("B4")
      }
      else if(mutation.payload.topLeft[0] > innerWidthVideoWindow*3 && mutation.payload.topLeft[0] < innerWidthVideoWindow*4 && mutation.payload.topLeft[0] > innerWidthVideoWindow){
        createSynth("A4")
      }
      else{
        createSynth("E4")
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

