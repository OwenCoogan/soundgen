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
    const notes = [
      "C4", "E4", "G4",
      "C5", "E5", "G5"
    ];
    var index=0;
    //lorem

    Tone.Transport.scheduleRepeat(time => {
      repeat(time);
    }, "8n");
    console.log(Tone.Transport.bpn.value);
  
    function repeat(time){
    let note = notes[index % notes.length];
    synth.triggerAttackRelease(note, "8n", time);
    index++;
    }
  },
  mounted () {
  }
}
}
</script>