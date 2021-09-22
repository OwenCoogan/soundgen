<template>
   <div class="block h-100 m-auto">
   
      <nav class="d-flex">
        <router-link to='/'  class="btn btn-primary m-3"> back Home</router-link>
      </nav>
  
      <div id="video-container">
        
         <video id="camera-stream" ref="camera-stream" width="500" height="500"  class="shadow-lg p-3 mb-5 bg-light rounded " autoplay ></video>
      </div>
      <div>
      <button class="btn btn-info  m-2" v-on:click="toggleCamera">Activate Camera</button>
      <button class="btn btn-danger m-2" v-on:click="deactivateCamera">Deactivate Camera</button>
   </div>
   <MusicPlayer/>
   </div>
  
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

<style scoped>
.block {
  border : 1px solid black;
  text-align: center;
   background: linear-gradient(-45deg, #ee7752, #090979, #e73c7e, #23a6d5);
    background-size: 400% 400%;
    animation: gradient 15s ease infinite
}


@keyframes gradient {
    0% {
        background-position: 0% 50%;
    }
    50% {
        background-position: 80% 50%;
    }
    100% {
        background-position: 0% 50%;}}
   
</style>