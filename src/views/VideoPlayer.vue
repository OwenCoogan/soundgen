<template>
   <div class="block m-auto">
   
      <nav class="d-flex">
        <router-link to='/'  class="btn btn-primary m-3"> back Home</router-link>
      </nav>
  
      <div id="video-container">
          
         <video id="camera-stream" ref="camera-stream" width="500" height="500"  class="shadow-lg p-3 mb-5 bg-light rounded " autoplay ></video>
      </div>
      <div>
      <!--<button class="btn btn-info  m-2" v-on:click="toggleCamera">Activate Camera</button>
      <button class="btn btn-danger m-2" v-on:click="deactivateCamera">Deactivate Camera</button>-->
   </div>
   <MusicPlayer/>
   </div>
  
</template>
<script>
   import * as tf from '@tensorflow/tfjs'
   import * as handpose from '@tensorflow-models/handpose'
   //import * as fp from 'fingerpose'
   import MusicPlayer from '@/components/MusicPlayer'
   export default {
   data(){
     return {
       localMediaStream: [],
       videoToggled:true,
       handsVisible:false,
       
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
        async loadModel( ){
          console.log(tf)
          const model = await handpose.load();
          const predictions = await model.estimateHands(document.querySelector("#camera-stream"));

          if(predictions.length > 0)
          {
            this.$store.commit('updateData', predictions[0].boundingBox)
          }
          else{
            this.handsVisible === false
          }
        }
      },

     mounted () {
       if(this.videoToggled === true){
        this.startVideoStream()
        var video = document.querySelector("#camera-stream");
        video.onloadedmetadata = () => {
          this.loadModel()
        };
        window.setInterval(() => {
          this.loadModel()
        }, 1000)
       }

      },
   }
   
</script>

<style scoped>
.block {
  border : 1px solid black;
  text-align: center;
   background: linear-gradient(-45deg, #ee7752, #090979, #d61c59, #23a6d5);
    background-size: 400% 400%;
    animation: gradient 15s ease infinite;
    height:100vh;
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