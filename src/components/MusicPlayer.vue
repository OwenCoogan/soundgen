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
    getUpdatedSound(){
    this.$store.subscribe((mutation, state) => {
      console.log(mutation.payload)
      console.log(state)

      if(mutation.payload.bottomRight[0] > 500){
        alert('should emit sound')
        this.createSound()
      }

    })
    
    }
    
  },
  mounted () {
    this.getUpdatedSound()
  }
}

</script>

