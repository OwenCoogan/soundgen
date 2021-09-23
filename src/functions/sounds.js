import * as Tone from 'tone'

export function createSynth(note){
    const synth = new Tone.Synth().toDestination();
    synth.triggerAttackRelease(note, "8n");
}
export function emitDrumloop(){
    document.querySelector("#start-music").click();
}