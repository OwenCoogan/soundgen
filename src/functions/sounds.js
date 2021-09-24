import * as Tone from 'tone'

export function createSynth(note){
    const synth = new Tone.Synth().toDestination();
    synth.triggerAttackRelease(note, "8n");
}

export const loopedSound = new Tone.Player("https://tonejs.github.io/audio/casio/A1.mp3").toDestination();

export const loop = new Tone.Loop(() => {
    loopedSound.start();
}, "16n").start(0);
