import * as Tone from 'tone'

export function createSynth(note){
    const synth = new Tone.Synth().toDestination();
    synth.triggerAttackRelease(note, "8n");
}

export function emitDrumloop(){
    const player = new Tone.Player("@/assets/sounds/drumloop.mp3").toDestination();
    player.loop = true
}

