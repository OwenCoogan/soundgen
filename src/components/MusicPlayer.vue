<template>
  <div>
    <button class="btn btn-success m-5" v-on:click="createSound">Create Sound</button>
    <button class="btn btn-success m-5" id="start-music" v-on:click="startSoundTrack">startSoundTrack</button>
  </div>
</template>

<script>
import * as Tone from 'tone'
export default {
  methods: {
    createC4(){
    const synth = new Tone.Synth().toDestination();
    synth.triggerAttackRelease("C4", "8n");
    },
    createB4(){
    const synth = new Tone.Synth().toDestination();
    synth.triggerAttackRelease("B4", "8n");
    },
    createA4(){
    const synth = new Tone.Synth().toDestination();
    synth.triggerAttackRelease("A4", "8n");
    },
    createD4(){
    const synth = new Tone.Synth().toDestination();
    synth.triggerAttackRelease("D4", "8n");
    },
    
    emitDrumloop(){
      document.querySelector("#start-music").click()
    },

    getUpdatedSound(){
    const innerWidthVideoWindow = 600/4
    console.log(innerWidthVideoWindow)
    const innerHeightVideoWindow = 500/2
    console.log(innerHeightVideoWindow)
    this.$store.subscribe((mutation) => {
      if(mutation.payload.bottomRight[0] > innerWidthVideoWindow && mutation.payload.bottomRight[1] < innerWidthVideoWindow*2){
        this.createC4()
      }
      if(mutation.payload.bottomRight[0] < innerWidthVideoWindow && mutation.payload.bottomRight[1] > innerWidthVideoWindow*2){
        this.createB4()
      }
      else{
        this.emitDrumloop()
      }
    })    
    
    }
    
  },
  mounted () {
    this.getUpdatedSound()
  }
}

</script>

