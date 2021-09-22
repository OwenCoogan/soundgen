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
    createSound(){
    const synth = new Tone.Synth().toDestination();
    synth.triggerAttackRelease("C4", "8n");
    },
    
    startSoundTrack(){
      
      Tone.start()
      console.log("Tone Started")
    },
    emitDrumloop(){
      new Tone.Loop((time) => {
        // triggered every eighth note.
        console.log(time);
      }, "8n").start(0);
      document.querySelector("#start-music").click()
    },

    getUpdatedSound(){
    this.$store.subscribe((mutation) => {
      console.log(mutation.payload)
      if(mutation.payload.bottomRight[0] > 500){

        alert('this should emit sound')
        this.createSound()
      }
      else{

        alert('this should emit drumloop')
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

