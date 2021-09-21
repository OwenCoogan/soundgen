<template>
  <div class="hello">
    <div id="video-container">
    <video id="camera-stream" ref="camera-stream" width="500" autoplay ></video>
    </div>
  </div>
  <div>
  <button v-on:click="toggleCamera">Activate Camera</button>
  <button v-on:click="deactivateCamera">Deactivate Camera</button>
  </div>
</template>

<script>
export default {
  methods: {  
          data(){
            return {
              localMediaStream: []
            }
          },
    
          startVideoStream(){
            if (navigator.getUserMedia) {
          navigator.getUserMedia(
          {
            video: true
          },
          function(localMediaStream) {
          console.log(localMediaStream)
          var video = document.querySelector("#camera-stream");
          video.srcObject = localMediaStream;  
          },
          function(err) {
            console.log('The following error occurred when trying to use getUserMedia: ' + err);
          }
        );

      }
      
    }
  },
  mounted () {
    this.startVideoStream()
  }
}

</script>

