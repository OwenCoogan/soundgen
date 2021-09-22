<template>
  <div>
    <button v-on:click="createSound">Create Sound</button>
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
    emitDrumloop(){
      console.log(this.$store)
      
    },

    getUpdatedSound(){
    this.$store.subscribe((mutation) => {
      console.log(mutation.payload)
      if(mutation.payload.bottomRight[0] > 500){
        alert('should emit sound')
        this.createSound()
      }
      else{
        alert('should emit DrumLoop')
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

