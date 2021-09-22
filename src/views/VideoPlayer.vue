<template>
   <div class="hello">
   
      <router-link to='/'> Home</router-link>
      <router-link to='/videoplayer'> Videoplayer</router-link>
  
      <div id="video-container">
         <video id="camera-stream" ref="camera-stream" width="500" height="500" autoplay ></video>
      </div>
     
   </div>
   <div>
      <button v-on:click="toggleCamera">Activate Camera</button>
      <button v-on:click="deactivateCamera">Deactivate Camera</button>
   </div>
   <MusicPlayer/>
</template>
<script>
   import * as tf from '@tensorflow/tfjs'
   import * as handpose from '@tensorflow-models/handpose'
   import MusicPlayer from '@/components/MusicPlayer'
   export default {
   data(){
     return {
       localMediaStream: [],
       
     }
   },
   components: {
    MusicPlayer
  },
   setup() {
     
   },
     methods: {

          startVideoStream(){
            if (navigator.getUserMedia) {
              navigator.getUserMedia(
              {
                 video: true
               },
               function(localMediaStream) {
               var video = document.querySelector("#camera-stream");
               video.srcObject = localMediaStream;
               },
               function(err) {
                 console.log('The following error occurred when trying to use getUserMedia: ' + err);
               }
          )
          
        }
        },
        async loadModel(){
          console.log(tf)
          const model = await handpose.load();
          console.log(model)
          const predictions = await model.estimateHands(document.querySelector("#camera-stream"));
          console.log(predictions)
          this.$store.commit('updateData', predictions)
        }
      },

     mounted () {
       this.startVideoStream()
       var video = document.querySelector("#camera-stream");
        video.onloadedmetadata = () => {
          this.loadModel()
        };

      },
   }
   
</script>