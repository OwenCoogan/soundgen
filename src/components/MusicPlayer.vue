<template>
  <div>
    <button class="btn btn-success m-5" v-on:click="createSound">Create Sound</button>
  </div>
</template>

<script>
import * as Tone from 'tone'
export default {
  methods: {
    createSound(){
    const synth = new Tone.Synth().toDestination();
    synth.triggerAttackRelease("C4", "8n");
    }
    
  },
  mounted () {
  }
}

</script>

