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
      const synthesizer = new Tone.Synth().toDestination();
      const notes = [
      "C4", "E4", "G4",
      "C5", "E5", "G5"
      ];
      var index=0;
      Tone.Transport.scheduleRepeat(time => {
        repeat(time);
      }, "8n");
    
      function repeat(time){
      let note = notes[index % notes.length];
      synthesizer.triggerAttackRelease(note, "8n", time);
      index++;
      }
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

